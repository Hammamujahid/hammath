<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Course extends Model
{
    use HasFactory;

    protected $table = 'course';

    protected $fillable = [
        'judul',
        'deskripsi',
        'file', 
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
