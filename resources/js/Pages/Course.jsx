import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

export default function Course({ auth, course }) {
    const ID = course.id;
    const handleDeleteClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/course/${id}`, { method: "delete" });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };
    console.log(course);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Course Management Control
                    </h1>
                </div>
            }
        >
            <div className="mt-8 ml-72 mr-8 overflow-x-auto flex whitespace-nowrap">
                {course.map((course) => (
                    <div 
                    key={course.id}
                    className="mx-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                            {course.judul}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 light:text-gray-400">
                            {course.deskripsi}
                        </p>

                        <a
                            href={`/courseedit/${course.id}`}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Edit
                        </a>
                        <button
                            onClick={() =>
                                handleDeleteClick(course.id)
                            }
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="mt-6 absolute right-16 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => {
                    window.location.href = route("coursecreate");
                }}
            >
                Create
            </button>
        </AuthenticatedLayout>
    );
}
