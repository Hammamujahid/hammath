import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Taskcreate({ auth, courses }) {
    const { data, setData, post } = useForm({
        description: "",
        soal: "",
        jawaban1: "",
        jawaban2: "",
        jawaban3: "",
        jawaban_benar: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/taskcreate", data);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create Task
                    </h1>
                </div>
            }
        >
           <form
                className="ml-72 mt-10 mr-8 bg-white rounded-lg shadow"
                onSubmit={handleSubmit}
                method="post"
                action="/taskcreate"
            >
                <div class="mb-6 ml-8 pt-8 mr-80">
                    <label
                        for="title"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Title
                    </label>
                    <select
                        id="description"
                        name="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    >
                        
                        {courses.map((item) => (
                            <option>{item.judul}</option>
                        ))}
                    </select>
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        for="user_avatar"
                    >
                        Soal
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        for="user_avatar"
                    >
                        Jawaban 1
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        for="user_avatar"
                    >
                        Jawaban 2
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        for="user_avatar"
                    >
                        Jawaban 3
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        for="user_avatar"
                    >
                        Jawaban Benar
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                    />
                </div>
                <div className="ml-8 pb-8">
                    <PrimaryButton>Create</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
