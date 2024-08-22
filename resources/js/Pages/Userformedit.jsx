import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Userformedit({ auth, selectedUser }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: selectedUser.name,
            email: selectedUser.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(`/userformedit/${selectedUser.id}`);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit User
                    </h1>
                </div>
            }
        >
            <form
                onSubmit={submit}
                class="ml-72 mt-10 mr-8 bg-white rounded-lg shadow"
            >
                <div class="mb-6 ml-8 pt-8 mr-80">
                    <label
                        htmlFor="name"
                        value="Name"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        isFocused
                        autoComplete="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                        required
                    />
                </div>
                <div class="mb-6 ml-8 mr-80">
                    <label
                        htmlFor="email"
                        value="Email"
                        class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        autoComplete="username"
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
