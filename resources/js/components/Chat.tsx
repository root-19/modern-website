import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Download, Send, AlertCircle } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface ChatMessage {
    type: 'user' | 'bot';
    text?: string;
    file?: File | undefined;
    file_url?: string;
    file_name?: string;
    file_type?: string;
    file_size?: string;
    created_at?: string;
}

interface ChatProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Chat({ isOpen, onClose }: ChatProps) {
    const { auth } = usePage<SharedData>().props;
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [showAuthAlert, setShowAuthAlert] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
        { 
            type: 'bot', 
            text: auth?.user 
                ? 'Welcome to BIZ! How can I help you today?' 
                : 'Welcome to BIZ! To get a free quote and message our admin, please create an account first. Type any message to get started!' 
        }
    ]);

    // Load chat history when chat opens for authenticated users
    useEffect(() => {
        if (isOpen && auth?.user) {
            loadChatHistory();
        }
    }, [isOpen, auth?.user]);

    const loadChatHistory = async () => {
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            const response = await fetch('/api/chat', {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success && result.data.length > 0) {
                    const historyMessages = result.data.map((msg: any) => ({
                        type: msg.type,
                        text: msg.message,
                        created_at: msg.created_at,
                        file_url: msg.file_url,
                        file_name: msg.file_name,
                        file_type: msg.file_type,
                        file_size: msg.file_size
                    }));
                    setChatMessages(historyMessages);
                }
            }
        } catch (error) {
            console.error('Error loading chat history:', error);
        }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Check file size (10MB max)
            if (file.size > 10 * 1024 * 1024) {
                alert('File size must be less than 10MB');
                return;
            }
            setSelectedFile(file);
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSendMessage = async () => {
        // Check if user is authenticated
        if (!auth?.user) {
            setShowAuthAlert(true);
            return;
        }
        
        if (message.trim() || selectedFile) {
            const newMessage: ChatMessage = { 
                type: 'user', 
                text: message, 
                file: selectedFile || undefined,
                created_at: new Date().toISOString()
            };
            
            // Always add user message first
            setChatMessages(prev => [...prev, newMessage]);
            
            // Add saving indicator
            setChatMessages(prev => [...prev, { 
                type: 'bot', 
                text: 'Saving message...',
                created_at: new Date().toISOString()
            }]);
            
            const formData = new FormData();
            formData.append('message', message);
            if (selectedFile) {
                formData.append('file', selectedFile);
                console.log('File details:', {
                    name: selectedFile.name,
                    size: selectedFile.size,
                    type: selectedFile.type
                });
            }
            if (auth?.user) {
                formData.append('name', auth.user.name);
                formData.append('email', auth.user.email);
            }
            
            // Debug: Log FormData contents
            console.log('FormData contents:');
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            setIsUploading(true);

            try {
                const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
                console.log('CSRF Token:', csrfToken ? 'Found' : 'Not found');
                console.log('Sending message:', message);
                console.log('File attached:', selectedFile ? selectedFile.name : 'No file');

                const response = await fetch('/api/chat', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-CSRF-TOKEN': csrfToken || '',
                        'Accept': 'application/json',
                    },
                });

                console.log('Response status:', response.status);
                const result = await response.json();
                console.log('Response data:', result);
                
                if (result.success) {
                    // Replace saving indicator with bot response
                    setChatMessages(prev => {
                        const newPrev = [...prev];
                        // Remove the "Saving..." message
                        newPrev.pop();
                        // Add actual bot response
                        newPrev.push({ 
                            type: 'bot', 
                            text: result.data.bot_response,
                            created_at: new Date().toISOString()
                        });
                        return newPrev;
                    });
                    console.log('Message saved to database successfully');
                } else {
                    console.error('Server error:', result);
                    console.error('Validation errors:', result.errors);
                    console.error('All validation errors:', JSON.stringify(result.errors, null, 2));
                    // Show specific error message
                    const errorMessage = result.errors?.message?.[0] || 
                                       result.errors?.file?.[0] || 
                                       result.errors?.mimes?.[0] ||
                                       'Sorry, there was an error sending your message. Please try again.';
                    
                    // Replace saving indicator with error message
                    setChatMessages(prev => {
                        const newPrev = [...prev];
                        // Remove the "Saving..." message
                        newPrev.pop();
                        // Add error message
                        newPrev.push({ 
                            type: 'bot', 
                            text: errorMessage,
                            created_at: new Date().toISOString()
                        });
                        return newPrev;
                    });
                }
            } catch (error) {
                console.error('Network error:', error);
                // Fallback to simulated response
                setTimeout(() => {
                    setChatMessages(prev => {
                        const newPrev = [...prev];
                        // Remove the "Saving..." message if it exists
                        if (newPrev[newPrev.length - 1]?.text === 'Saving message...') {
                            newPrev.pop();
                        }
                        // Add fallback response
                        newPrev.push({ 
                            type: 'bot', 
                            text: 'Thank you for your message! Our team will get back to you shortly.' 
                        });
                        return newPrev;
                    });
                }, 1000);
            } finally {
                setIsUploading(false);
            }

            setMessage('');
            setSelectedFile(null);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Chat Backdrop */}
            <div 
                className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Chat Box */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none transition-all duration-300">
                <div 
                    className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl flex flex-col h-[600px] max-h-[85vh] transform transition-all duration-300 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle className="h-4 w-4" />
                            </div>
                            <div>
                                <h3 className="font-semibold">BIZ Support</h3>
                                <p className="text-xs text-blue-100">We typically reply within minutes</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {chatMessages.map((msg: ChatMessage, index: number) => (
                            <div
                                key={index}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                style={{
                                    animation: 'fadeIn 0.3s ease-out',
                                    opacity: 0,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-xl ${
                                        msg.type === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-900'
                                    }`}
                                >
                                    {msg.text && <p className="text-sm">{msg.text}</p>}
                                    {(msg.file || msg.file_url) && (
                                        <div className="mt-2">
                                            {msg.file ? (
                                                // Local file (newly uploaded)
                                                msg.file.type.startsWith('image/') ? (
                                                    <img 
                                                        src={URL.createObjectURL(msg.file)} 
                                                        alt={msg.file.name}
                                                        className="max-w-full h-32 object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                                        <Download className="h-4 w-4 text-gray-600" />
                                                        <span className="text-xs text-gray-600 truncate">{msg.file.name}</span>
                                                        <span className="text-xs text-gray-400">
                                                            {(msg.file.size / 1024).toFixed(1)} KB
                                                        </span>
                                                    </div>
                                                )
                                            ) : (
                                                // Server file (from chat history)
                                                msg.file_type?.startsWith('image/') ? (
                                                    <img 
                                                        src={msg.file_url} 
                                                        alt={msg.file_name}
                                                        className="max-w-full h-32 object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    <a 
                                                        href={msg.file_url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Download className="h-4 w-4 text-gray-600" />
                                                        <span className="text-xs text-gray-600 truncate">{msg.file_name}</span>
                                                        <span className="text-xs text-gray-400">
                                                            {msg.file_size}
                                                        </span>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="border-t border-gray-200 p-3">
    
                        
                        {/* File Upload */}
                        {selectedFile && (
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg mb-2">
                                <div className="flex items-center gap-2 truncate">
                                    <Download className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                    <span className="text-xs text-gray-600 truncate">{selectedFile.name}</span>
                                    <span className="text-xs text-gray-400 flex-shrink-0">
                                        {(selectedFile.size / 1024).toFixed(1)} KB
                                    </span>
                                </div>
                                <button
                                    onClick={removeFile}
                                    className="text-red-500 hover:text-red-600 text-xs font-semibold"
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                        
                        {/* Message Input */}
                        <div 
                            className="flex gap-2"
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-black text-bold Sfocus:outline-none focus:border-blue-500"
                                disabled={isUploading}
                                autoFocus
                                onClick={(e) => e.stopPropagation()}
                                onMouseDown={(e) => e.stopPropagation()}
                            />
                            <input
                                ref={fileInputRef}
                                type="file"
                                onChange={handleFileSelect}
                                className="hidden"
                                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,.pdf,.doc,.docx,.txt"
                            />
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    fileInputRef.current?.click();
                                }}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors"
                                title="Attach file"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h6" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSendMessage();
                                }}
                                disabled={isUploading || (!message.trim() && !selectedFile)}
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
                            >
                                {isUploading ? (
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                ) : (
                                    <Send className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Authentication Alert Modal */}
            {showAuthAlert && (
                <>
                    {/* Alert Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                        onClick={() => setShowAuthAlert(false)}
                    />

                    {/* Alert Modal */}
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[60] pointer-events-none">
                        <div 
                            className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md transform transition-all duration-300 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Alert Header */}
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <AlertCircle className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Create Account Required</h3>
                                        <p className="text-xs text-orange-100">To message the admin</p>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Content */}
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <AlertCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Create an Account to Get Your Free Quote
                                    </h4>
                                    <p className="text-gray-600">
                                        To send messages and get free quotes from our admin, please create an account first. It's quick and easy!
                                    </p>
                                </div>

                                {/* Alert Actions */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShowAuthAlert(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <a
                                        href="/register"
                                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-center font-semibold"
                                        onClick={() => setShowAuthAlert(false)}
                                    >
                                        Create Account
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
