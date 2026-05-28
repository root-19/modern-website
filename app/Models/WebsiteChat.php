<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WebsiteChat extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'email',
        'message',
        'type',
        'file_path',
        'file_name',
        'file_type',
        'file_size',
        'ip_address',
        'user_agent',
        'is_read',
        'read_at',
    ];

    protected $casts = [
        'is_read' => 'boolean',
        'file_size' => 'integer',
        'read_at' => 'datetime',
    ];

    /**
     * Get the file URL for the uploaded file.
     */
    public function getFileUrlAttribute(): ?string
    {
        return $this->file_path ? asset('storage/' . $this->file_path) : null;
    }

    /**
     * Get the file extension.
     */
    public function getFileExtensionAttribute(): ?string
    {
        return $this->file_name ? pathinfo($this->file_name, PATHINFO_EXTENSION) : null;
    }

    /**
     * Check if the message has a file attachment.
     */
    public function hasFile(): bool
    {
        return !empty($this->file_path);
    }

    /**
     * Check if the file is an image.
     */
    public function isImage(): bool
    {
        if (!$this->file_type) return false;
        
        $imageMimeTypes = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'image/svg+xml',
            'image/bmp',
            'image/tiff',
        ];

        return in_array($this->file_type, $imageMimeTypes);
    }

    /**
     * Get formatted file size.
     */
    public function getFormattedFileSizeAttribute(): string
    {
        if (!$this->file_size) return '0 B';

        $bytes = $this->file_size;
        $units = ['B', 'KB', 'MB', 'GB'];

        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }

        return round($bytes, 2) . ' ' . $units[$i];
    }
}
