import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import {
    FaFilePdf,
    FaFileWord,
    FaFilePowerpoint,
    FaFile,
    FaEyeSlash,
} from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function Courseopen({ auth, course }) {
    const [showPdf, setShowPdf] = useState(true); // Set to true to display PDF by default
    const fileExtension = course.file.split(".").pop().toLowerCase();
    const getFileIcon = (fileName) => {
        if (!fileName) return null;

        const extension = fileName.split(".").pop().toLowerCase();

        switch (extension) {
            case "pdf":
                return <FaFilePdf className="text-red-500" />;
            case "doc":
            case "docx":
                return <FaFileWord className="text-blue-500" />;
            case "ppt":
            case "pptx":
                return <FaFilePowerpoint className="text-orange-500" />;
            default:
                return <FaFile className="text-gray-500" />;
        }
    };

    const downloadUrl = route("course.download", { id: course.id });
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-end">
                    <h1 className="mt-1 font-semibold text-xl text-gray-800 w-full leading-tight">
                        {course.judul}
                    </h1>
                    <a
                        href={downloadUrl}
                        className="px-4 inline-flex items-center py-2 text-sm font-medium text-end text-blue-700 bg-white-700 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                    >
                        Download
                    </a>
                </div>
            }
        >
            <span>Document:</span>
            <div
                className="justify-center ml-72 mr-8 flex bg-white shadow mb-2 pb-4"
            >

                {showPdf && (
                    <div className="mt-4">
                        <object
                            data={`/storage/${course.file}`}
                            type="application/pdf"
                            width="900"
                            height="600"
                            className=""
                        >
                            <p className="text-gray-700 text-sm">
                                It appears you don't have a PDF viewer for this
                                browser. No biggie... you can{" "}
                                <a
                                    href={`/storage/${course.file}`}
                                    className="text-blue-600"
                                >
                                    click here to download the PDF file.
                                </a>
                            </p>
                        </object>
                    </div>
                )}
                </div>
        </AuthenticatedLayout>
    );
}
