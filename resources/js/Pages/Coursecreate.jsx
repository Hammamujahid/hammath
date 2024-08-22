import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Coursecreate({ auth }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        file: null,
        user_id: auth.user.id,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "file" ? files[0] : value,
        }));
    };

    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Membuat objek FormData untuk mengirim data form
        const formDataToSend = new FormData();
        formDataToSend.append("judul", formData.title);
        formDataToSend.append("deskripsi", formData.description);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("user_id", formData.user_id);

        // Mengirim data ke backend menggunakan Inertia
        Inertia.post(route("coursecreate.post"), formDataToSend, {
            onSuccess: () => {
                Inertia.visit("/course");
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create Course
                    </h1>
                </div>
            }
        >
            <form
                onSubmit={handleSubmit}
                className="ml-72 mt-10 mr-8 bg-white rounded-lg shadow"
            >
                <div className="mb-6 ml-8 pt-8 mr-80">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6 ml-8 mr-80">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Description
                    </label>
                    <select 
                        id="description"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
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
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleChange}
                        aria-describedby="file_help"
                        accept=".pdf, .doc, .docx"
                        required
                    />
                </div>
                <div className="ml-8 pb-8">
                    <PrimaryButton type="submit">Create</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
