import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Task({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Task Management Control
                    </h1>
                </div>
            }
        >
            <div class="pb-3 mt-8 ml-72 space-y-12 mr-8 bg-grey overflow-x-auto max-h-[300px]">
                <div class="bg-white border flex grid grid-cols-2 rounded-full shadow-lg shadow-dark-200 border-dark border-t-2 border-l-2 hover:bg-gray-100">
                    <div class="col-span-5 flex justify-center items-center">
                        <button
                            class="mr-8"
                            title="Edit"
                            onClick={() => {
                                window.location.href = route("taskedit");
                            }}
                        >
                            <svg
                                class="w-6 h-6 text-blue-800 light:text-blue"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                            </svg>
                        </button>
                            <h3 class="text-center text-grey py-5 pr-72 pl-72 col-end-4 pl-2">
                                Soal Integral
                            </h3>
                        <button
                            class="ml-8"
                            title="Remove"
                            onClick={() => {
                                window.location.href = route("#");
                            }}
                        >
                            <svg
                                class="w-6 h-6 text-red-800 light:text-red"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            <button
                    type="button"
                    class="mt-6 absolute right-64 mr-56 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                        window.location.href = route("taskcreate");
                    }}
                >
                    Create
                </button>
        </AuthenticatedLayout>
    );
}
