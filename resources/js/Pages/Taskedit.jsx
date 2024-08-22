import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit Task
                    </h1>
                </div>
            }
        >
            <form class="ml-72 mt-10 mr-8 bg-white rounded-lg shadow">
                <div class="mb-6 ml-8 pt-8 mr-80">
                    <label
                        for="title"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Title
                    </label>
                    <input
                        type="title"
                        id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                        for="user_avatar"
                    >
                        Upload
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
                        for="jawaban2"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Pilihan jawaban A
                    </label>
                    <input
                        type="description"
                        id="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        for="jawaban3"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Pilihan jawaban B
                    </label>
                    <input
                        type="description"
                        id="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        for="jawaban4"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Pilihan jawaban C
                    </label>
                    <input
                        type="description"
                        id="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        for="jawaban_benar"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Jawaban yang benar
                    </label>
                    <input
                        type="description"
                        id="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="ml-8 pb-8">
                    <PrimaryButton>Edit</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
