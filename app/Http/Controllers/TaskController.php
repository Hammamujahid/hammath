<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Course;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $task = Task::all();
        return Inertia::render('Taskcreate', [
            'task' => $task
        ]);
    }

    public function create()
    {
        $courses = Course::all();
        // dd($courses);
        return Inertia::render('Taskcreate', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request)
    {
        // Validasi data formulir jika diperlukan
        $request->validate([
            'description' => 'required',
            'soal' => 'required',
            'jawaban1' => 'required',
            'jawaban2' => 'required',
            'jawaban3' => 'required',
            'jawaban_benar' => 'required',
            // Tambahkan validasi sesuai kebutuhan
        ]);

        // Simpan data ke database
        Task::create([
            'course_id' => $request->input('description'),
            'soal' => $request->input('soal'),
            'jawaban1' => $request->input('jawaban1'),
            'jawaban2' => $request->input('jawaban2'),
            'jawaban3' => $request->input('jawaban3'),
            'jawaban_benar' => $request->input('jawaban_benar'),
            // Tambahkan kolom lain sesuai kebutuhan
        ]);

        // Redirect atau kirim respon JSON sesuai kebutuhan
        return redirect()->route('taskcreate')->with('success', 'Task created successfully');
    }

    public function edit($id)
    {
        // Mengambil data Task berdasarkan ID
        $task = Task::findOrFail($id);

        // Mengirim data ke tampilan React (TaskEdit.jsx)
        return Inertia::render('TaskEdit', [
            'task' => $task,
        ]);
    }

    public function update(Request $request, $id)
    {
        // Validasi data yang diterima dari formulir jika diperlukan

        // Mengambil data Task berdasarkan ID
        $task = Task::findOrFail($id);

        // Memperbarui data Task
        $task->update([
            'title' => $request->input('title'),
            'soal' => $request->input('soal'),
            'jawaban_benar' => $request->input('jawaban_benar'),
            'jawaban2' => $request->input('jawaban2'),
            'jawaban3' => $request->input('jawaban3'),
            'jawaban4' => $request->input('jawaban4'),
            // Tambahkan kolom lain sesuai kebutuhan
        ]);

        // Redirect atau kirim respon JSON sesuai kebutuhan
        return redirect()->route('task');
    }

    public function destroy($id)
    {
        // Hapus user berdasarkan ID
        $task = Task::findOrFail($id);
        $task->delete();
        // Redirect atau kembalikan respons sesuai kebutuhan aplikasi Anda
        return redirect()->route('task')->with('success', 'User berhasil dihapus!');
    }
}
