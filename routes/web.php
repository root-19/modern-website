<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ChatController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Chat API Routes
Route::prefix('api/chat')->group(function () {
    Route::get('/', [ChatController::class, 'index'])->name('chat.index');
    Route::post('/', [ChatController::class, 'store'])->name('chat.store');
    Route::get('/unread-count', [ChatController::class, 'unreadCount'])->name('chat.unread-count');
    Route::post('/mark-read', [ChatController::class, 'markAsRead'])->name('chat.mark-read');
});

require __DIR__.'/settings.php';
