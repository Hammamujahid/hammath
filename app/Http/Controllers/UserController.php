<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('role', 'user')->get();

        return Inertia::render('Users', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('Userformcreate');
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari form
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        // Simpan data ke dalam database
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 'user',
        ]);

        // Redirect atau kembalikan respons sesuai kebutuhan aplikasi Anda
        return redirect()->route('users');
    }

    public function edit($id)
    {
        $selectedUser = User::find($id);
        return Inertia::render('Userformedit', ['selectedUser' => $selectedUser]);
    }

    public function update(Request $request, $id)
    {
        // Validasi data yang diterima dari form
        $user = User::find($id);
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);

        // Update data pengguna
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            // Sesuaikan dengan kolom lain yang ingin diupdate
        ]);

        return redirect()->route('users')->with('success', 'User berhasil diperbarui!');
    }

    public function destroy($id)
    {
        // Hapus user berdasarkan ID
        $user = User::findOrFail($id);
        $user->delete();
        // Redirect atau kembalikan respons sesuai kebutuhan aplikasi Anda
        return redirect()->route('users')->with('success', 'User berhasil dihapus!');
    }
}
