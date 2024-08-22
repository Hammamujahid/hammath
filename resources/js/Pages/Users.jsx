import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Users({ auth, users }) {
    const ID = users.id;
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
                Inertia.delete(`/user/${id}`, { method: "delete" });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };
    console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        User Management Control
                    </h1>
                </div>
            }
        >
            <div class="ml-72 mt-8 mr-8 mb-6 relative overflow-x-auto shadow-md sm:rounded-lg h-[50vh]">
                <table class="w-full text-sm text-left text-gray-500 light:text-gray-400">
                    <thead class="sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.created_at}</td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <a
                                        href={`/userformedit/${user.id}`}
                                        className="font-medium text-blue-600 light:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <button
                                        onClick={() =>
                                            handleDeleteClick(user.id)
                                        } // Menggunakan user.id sebagai parameter
                                        className="font-medium text-red-600 light:text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button
                type="button"
                class="absolute right-24 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => {
                    window.location.href = route("userformcreate");
                }}
            >
                Create
            </button>
        </AuthenticatedLayout>
    );
}
