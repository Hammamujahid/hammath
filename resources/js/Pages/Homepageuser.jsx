import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/inertia-react";

export default function Homepageuser({ auth, courses }) {
    // console.log(courses);
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="ml-72 p-4 grid grid-cols-3">
                {courses.map((course) => (
                    <div 
                    key={course.id}
                    className="mt-6 w-72 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                                {course.judul}
                            </h5>
                            <p className="mb-8 font-normal text-gray-700 light:text-gray-400">
                                {course.deskripsi}
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href={`/courseopen/${course.id}`}
                                className="px-4 inline-flex items-center py-2 text-sm font-medium text-center text-blue-700 bg-white-700 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            >
                                Access
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
