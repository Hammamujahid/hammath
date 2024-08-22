import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                        <span className="mt-1 ml-2 text-sm text-gray-600">
                            Admin
                        </span>
                    </h1>
                </div>
            }
        >
            <div class="ml-80 flex mt-8">
                <div class="text-center w-64 max-w-md bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
                    <svg
                        class="mt-5 mx-auto w-16 h-16 text-blue-700 light:text-blue-700 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 19"
                    >
                        <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                        <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                    </svg>
                    <p class="mb-3 mt-6 font-normal text-blue-700 dark:text-blue-700">
                        7
                    </p>
                    <a
                        href="users"
                        class=" rounded-b-lg w-full inline-flex justify-center px-3 py-2 font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Users
                    </a>
                </div>
                <div class="ml-16 text-center w-64 max-w-md bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
                    <svg
                        class="mt-5 mx-auto w-16 h-16 text-green-700 light:text-green-700"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                    >
                        <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                        <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
                    </svg>
                    <p class="mb-3 mt-6 font-normal text-green-700 dark:text-green-700">
                        7
                    </p>
                    <a
                        href="course"
                        class=" rounded-b-lg w-full inline-flex justify-center px-3 py-2 font-medium text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Courses
                    </a>
                </div>
                <div class="ml-16 text-center w-64 max-w-md bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
                    <svg
                        class="mt-5 mx-auto w-16 h-16 text-red-700 light:text-red-700"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                        <path d="M6 5H5v1h1V5Z" />
                    </svg>
                    <p class="mb-3 mt-6 font-normal text-red-700 dark:text-red-700">
                        7
                    </p>
                    <a
                        href="task"
                        class=" rounded-b-lg w-full inline-flex justify-center px-3 py-2 font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        Tasks
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
