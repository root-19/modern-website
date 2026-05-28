<?php

namespace App\Http\Controllers;

use App\Models\WebsiteChat;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    /**
     * Store a new chat message.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'message' => 'required_without:file|string|max:1000',
            'file' => 'nullable|file|max:10240|mimes:jpeg,jpg,png,gif,webp,pdf,doc,docx,txt', // 10MB max, specific file types
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $chatData = [
            'user_id' => Auth::id(), // Add user_id if user is authenticated
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
            'type' => 'user',
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ];

        // Handle file upload
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            
            // Debug file information
            \Log::info('File upload details:', [
                'original_name' => $file->getClientOriginalName(),
                'mime_type' => $file->getMimeType(),
                'size' => $file->getSize(),
                'extension' => $file->getClientOriginalExtension(),
            ]);
            
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->store('chat_files', 'public');
            
            if (!$filePath) {
                return response()->json([
                    'success' => false,
                    'errors' => ['file' => ['Failed to store file. Please try again.']]
                ], 422);
            }
            
            $chatData['file_path'] = $filePath;
            $chatData['file_name'] = $file->getClientOriginalName();
            $chatData['file_type'] = $file->getMimeType();
            $chatData['file_size'] = $file->getSize();
        }

        $chat = WebsiteChat::create($chatData);

        // Simulate bot response (in real app, this would be AI-powered)
        $botResponse = $this->generateBotResponse($request->message);
        
        WebsiteChat::create([
            'user_id' => Auth::id(), // Add user_id for bot responses too
            'message' => $botResponse,
            'type' => 'bot',
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully',
            'data' => [
                'user_message' => $chat,
                'bot_response' => $botResponse
            ]
        ]);
    }

    /**
     * Get chat history for authenticated user.
     */
    public function index(Request $request): JsonResponse
    {
        $query = WebsiteChat::orderBy('created_at', 'asc');
        
        // If user is authenticated, get only their chats
        if (Auth::check()) {
            $query->where('user_id', Auth::id());
        }
        
        $chats = $query->limit(50)
            ->get()
            ->map(function ($chat) {
                return [
                    'id' => $chat->id,
                    'message' => $chat->message,
                    'type' => $chat->type,
                    'file_url' => $chat->file_url,
                    'file_name' => $chat->file_name,
                    'file_type' => $chat->file_type,
                    'file_size' => $chat->formatted_file_size,
                    'is_image' => $chat->isImage(),
                    'created_at' => $chat->created_at->toISOString(),
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $chats
        ]);
    }

    /**
     * Get unread messages count for admin.
     */
    public function unreadCount(): JsonResponse
    {
        $count = WebsiteChat::where('type', 'user')
            ->where('is_read', false)
            ->count();

        return response()->json([
            'success' => true,
            'count' => $count
        ]);
    }

    /**
     * Mark messages as read.
     */
    public function markAsRead(Request $request): JsonResponse
    {
        WebsiteChat::where('type', 'user')
            ->where('is_read', false)
            ->update([
                'is_read' => true,
                'read_at' => now()
            ]);

        return response()->json([
            'success' => true,
            'message' => 'Messages marked as read'
        ]);
    }

    /**
     * Generate bot response.
     */
    private function generateBotResponse(string $userMessage): string
    {
        $responses = [
            "Thank you for your message! Our team will get back to you shortly.",
            "We've received your message and will respond as soon as possible.",
            "Thank you for reaching out! Someone from our team will contact you soon.",
            "Your message has been received. We'll get back to you within 24 hours.",
            "We appreciate your inquiry! Our team is reviewing your message and will respond promptly."
        ];

        // Simple keyword-based responses
        $message = strtolower($userMessage);
        
        if (strpos($message, 'price') !== false || strpos($message, 'cost') !== false) {
            return "For pricing information, please call us at 0949-3333-861 or email bizsupplyenterprises@gmail.com. Our team will provide you with a detailed quote.";
        }
        
        if (strpos($message, 'aluminum') !== false) {
            return "We offer premium aluminum products including windows, doors, and frames. For specific requirements, please contact our sales team.";
        }
        
        if (strpos($message, 'glass') !== false) {
            return "We provide various glass solutions including tempered glass, laminated glass, and custom glass fabrication. Let us know your specific needs!";
        }
        
        if (strpos($message, 'project') !== false) {
            return "We'd be happy to discuss your project! Please share more details about what you need, and our team will provide expert guidance.";
        }

        return $responses[array_rand($responses)];
    }
}
