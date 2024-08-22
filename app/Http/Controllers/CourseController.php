<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $courses = Course::all(); // Assuming you have a Course model
        // dd($courses);

        if ($user->role === 'user') {

            return Inertia::render('Homepageuser', [
                'courses' => $courses
            ]);
        } else {
            return Inertia::render('Course', [
                'course' => $courses
            ]);
        }
    }

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'file' => 'required|file|mimes:pdf,doc,docx',
            'user_id' => 'required|exists:users,id',
        ]);

        $user = $request->user();

        $course = new Course();

        $course->judul = $request->input('judul');
        $course->deskripsi = $request->input('deskripsi');
        $course->user_id = $user->id;
        // Baca file sebagai biner
        $path = 'storage';
        $fileName = time() . $request->file('file')->getClientOriginalName();
        $request->file('file')->move($path, $fileName);
        $course->file = $fileName;

        $course->save();

        // Respon berhasil
        return redirect()->route('course'); // Menggunakan redirect() untuk melakukan redirect
    }

    public function edit($id)
    {
        $selectedCourse = Course::find($id);

        return Inertia::render('Courseedit', [
            'selectedCourse' => $selectedCourse
        ]);
    }
    public function update(Request $request, $id)
    {
        // Validasi input
        $course = Course::find($id);
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'file' => 'nullable|file|mimes:pdf,doc,docx',
        ]);

        $course->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
        ]);

        if ($request->hasFile('file')) {
            // Jika pengguna mengunggah file baru
            $path = 'storage';
            if ($course->file) {
                File::delete(public_path($path . $course->file));
            }
            $fileName = time() . $request->file('file')->getClientOriginalName();
            $request->file('file')->move($path, $fileName);
            $course->file = $fileName;
        }

        $course->save();

        // Respon berhasil
        return redirect()->route('course')->with('success', 'User berhasil dihapus!');
    }

    public function destroy($id)
    {
        // Hapus user berdasarkan ID
        $course = Course::findOrFail($id);
        $course->delete();
        // Redirect atau kembalikan respons sesuai kebutuhan aplikasi Anda
        return redirect()->route('course')->with('success', 'User berhasil dihapus!');
    }

    public function show($id)
{
    $course = Course::findOrFail($id);

    return Inertia::render('Courseopen', ['course' => $course]);
}

public function download($id)
{
    $course = Course::findOrFail($id);

    $filePath = storage_path("app/public/{$course->file}");

    if (file_exists($filePath)) {
        return response()->download($filePath, $course->judul . '.pdf');
    } else {
        abort(404, 'File not found');
    }
}

}
