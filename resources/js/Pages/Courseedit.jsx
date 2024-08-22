import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Courseedit({ auth, selectedCourse }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            judul: selectedCourse.judul, // Menggunakan alias course
            deskripsi: selectedCourse.deskripsi, // Menggunakan alias course
            file: null, // Menggunakan alias course
        });

    const submit = (e) => {
        e.preventDefault();

        router.post(`/courseedit/${selectedCourse.id}`, {
            _method: "patch",
            judul: data.judul,
            deskripsi: data.deskripsi,
            file: data.file,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1
                        className="font-semi
                    bold text-xl text-gray-800 leading-tight"
                    >
                        Edit Course
                    </h1>
                </div>
            }
        >
            <form
                onSubmit={submit}
                className="ml-72 mt-10 mr-8 bg-white rounded-lg shadow"
            >
                <div className="mb-6 ml-8 pt-8 mr-80">
                    <label
                        htmlFor="judul"
                        value="Judul"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Title
                    </label>
                    <input
                        id="judul"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                        autoComplete="judul"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6 ml-8 mr-80">
                    <label
                        htmlFor="description"
                        value="Deskripsi"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Description
                    </label>
                    <select 
                        id="deskripsi"
                        type="deskripsi"
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        autoComplete="deskripsi"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required>
                      <option>Materi SMA kelas X</option>
                      <option>Materi SMA kelas XI</option>
                      <option>Materi SMA kelas XII</option>
                      </select>
                </div>
                <div className="mb-6 ml-8 mr-80">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        htmlFor="file"
                    >
                        Upload
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                        aria-describedby="file_help"
                        id="file"
                        type="file"
                        name="file"
                        onChange={(e) => setData("file", e.target.files[0])}
                        accept=".pdf, .doc, .docx"
                        required
                    />
                    {selectedCourse.file && (
            <div className="mt-2 text-sm text-gray-500">
              Current File: {selectedCourse.file}
            </div>
          )}
                </div>
                <div className="ml-8 pb-8">
                    <PrimaryButton>Edit</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
