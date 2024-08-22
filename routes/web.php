<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'role:admin'])->name('dashboard');

Route::get('/homepageuser', function () {
    return Inertia::render('Homepageuser');
})->middleware(['auth', 'role:user'])->name('homepageuser');

Route::get('/users', function () {
    return Inertia::render('Users');
})->middleware(['auth', 'role:admin'])->name('users');

Route::get('/users', [UserController::class, 'index'])
    ->middleware(['auth', 'role:admin'])
    ->name('users');

//CREATE
Route::get('/userformcreate', [UserController::class, 'create'])
    ->middleware(['auth', 'role:admin'])
    ->name('userformcreate');

Route::post('/userformcreate', [UserController::class, 'store'])
    ->middleware(['auth', 'role:admin'])
    ->name('userformcreate.post');

//EDIT
Route::get('/userformedit/{id}', [UserController::class, 'edit'])
    ->middleware(['auth', 'role:admin'])
    ->name('userformedit');

Route::patch('/userformedit/{id}', [UserController::class, 'update'])
    ->middleware(['auth', 'role:admin'])
    ->name('userformedit.update');

//DESTROY
Route::delete('/user/{id}', [UserController::class, 'destroy'])
    ->middleware(['auth', 'role:admin'])
    ->name('user.destroy');

Route::get('/course', function () {
    return Inertia::render('Course');
})->middleware(['auth', 'role:admin'])->name('course');

Route::get('/course', [CourseController::class, 'index'])
    ->middleware(['auth', 'role:admin'])
    ->name('course');

//CREATE
Route::get('/coursecreate', [CourseController::class, 'create'])
    ->middleware(['auth', 'role:admin'])
    ->name('coursecreate');

Route::post('/coursecreate ', [CourseController::class, 'store'])
    ->middleware(['auth', 'role:admin'])
    ->name('coursecreate.post');

//EDIT
Route::get('/courseedit/{id}', [CourseController::class, 'edit'])
    ->middleware(['auth', 'role:admin'])
    ->name('courseedit');

Route::patch('/courseedit/{id}', [CourseController::class, 'update'])
    ->middleware(['auth', 'role:admin'])
    ->name('courseedit.update');

//DESTROY
Route::delete('/course/{id}', [CourseController::class, 'destroy'])
    ->middleware(['auth', 'role:admin'])
    ->name('course.destroy');

Route::get('/task', function () {
    return Inertia::render('Task');
})->middleware(['auth', 'role:admin'])->name('task');

//CREATE
Route::get('/taskcreate', [TaskController::class, 'create'])
    ->middleware(['auth', 'role:admin'])
    ->name('taskcreate');

Route::post('/taskcreate', [TaskController::class, 'store'])
    ->middleware(['auth', 'role:admin'])
    ->name('taskcreate.post');

//UPDATE
Route::get('/taskedit/{id}', [TaskController::class, 'edit'])
    ->middleware(['auth', 'role:admin'])
    ->name('taskedit');

Route::patch('/taskedit/{id}', [TaskController::class, 'update'])
    ->middleware(['auth', 'role:admin'])
    ->name('taskedit.update');

Route::get('/userformcreate', function () {
    return Inertia::render('Userformcreate');
})->middleware(['auth', 'role:admin'])->name('userformcreate');

Route::get('/userformedit', function () {
    return Inertia::render('Userformedit');
})->middleware(['auth', 'role:admin'])->name('userformedit');

Route::get('/coursecreate', function () {
    return Inertia::render('Coursecreate');
})->middleware(['auth', 'role:admin'])->name('coursecreate');

Route::get('/courseedit', function () {
    return Inertia::render('Courseedit');
})->middleware(['auth', 'role:admin'])->name('courseedit');

// Route::get('/taskcreate', function () {
//     return Inertia::render('Taskcreate');
// })->middleware(['auth', 'role:admin'])->name('taskcreate');

Route::get('/taskedit', function () {
    return Inertia::render('Taskedit');
})->middleware(['auth', 'role:admin'])->name('taskedit');

Route::get('/courseopen', function () {
    return Inertia::render('Courseopen');
})->middleware(['auth', 'role:user'])->name('courseopen');

Route::get('/homepageuser', [CourseController::class, 'index'])
    ->middleware(['auth', 'role:user'])
    ->name('homepageuser');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/courseopen/{id}', [CourseController::class, 'show'])
->middleware(['auth', 'role:user'])
->name('courseopen');

Route::get('/course/download/{id}', [CourseController::class, 'download'])->name('course.download');

Route::post('/taskcreate', [TaskController::class, 'store'])
    ->middleware(['auth', 'role:admin'])
    ->name('taskcreate.post');


require __DIR__ . '/auth.php';
