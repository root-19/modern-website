<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('website_chats', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(); // For guest users
            $table->string('email')->nullable(); // For guest users
            $table->text('message'); // Text message content
            $table->enum('type', ['user', 'bot', 'admin'])->default('user'); // Message type
            $table->string('file_path')->nullable(); // Path to uploaded file
            $table->string('file_name')->nullable(); // Original file name
            $table->string('file_type')->nullable(); // MIME type
            $table->unsignedBigInteger('file_size')->nullable(); // File size in bytes
            $table->string('ip_address')->nullable(); // User IP address
            $table->string('user_agent')->nullable(); // Browser info
            $table->boolean('is_read')->default(false); // For admin messages
            $table->timestamp('read_at')->nullable(); // When message was read
            $table->timestamps();
            
            $table->index(['type', 'created_at']);
            $table->index(['email']);
            $table->index(['is_read']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('website_chats');
    }
};
