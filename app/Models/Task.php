<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'task';

    protected $fillable = [
        'course_id',
        'soal',
        'jawaban_benar',
        'jawaban2',
        'jawaban3',
        'jawaban4',
        'user_id',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
