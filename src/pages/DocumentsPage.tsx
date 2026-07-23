import { Download, FileText } from "lucide-react";

export default function DocumentsPage() {
    const scopeDescriptions = [
          // {
        //     title: "Scope description version 2",
        //     description: "",
        //     file: "/scopeDescriptionv2.pdf",
        // },
        {
            title: "Scope description version 1",
            description: "",
            file: "/scopeDescriptionv1.pdf",
        },

    ];

    return (
        <>
            <h1 className="text-4xl font-bold text-white">
                Thesis Documents
            </h1>

            <p className="mt-3 text-slate-400">
                Here you can download the available thesis documents.
            </p>


            {/* Scope Description Card */}
            <section
                className="
                    mt-10
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900/60
                    p-8
                    backdrop-blur-xl
                "
            >
                {/* Card Header */}
                <div className="mb-8 flex items-center gap-4">
                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-cyan-400/10
                            text-cyan-300
                        "
                    >
                        <FileText size={28} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white">
                            Scope Descriptions
                        </h2>

                        <p className="text-slate-400">
                            Different versions of the thesis scope description.
                        </p>
                    </div>
                </div>


                {/* Documents */}
                <div className="space-y-4">
                    {scopeDescriptions.map((doc) => (
                        <div
                            key={doc.title}
                            className="
                                flex
                                items-center
                                justify-between
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-950/50
                                p-5
                                transition
                                hover:border-cyan-400/40
                            "
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {doc.title}
                                </h3>

                                <p className="text-sm text-slate-400">
                                    {doc.description}
                                </p>
                            </div>


                            <a
                                href={doc.file}
                                download
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-cyan-500
                                    px-5
                                    py-3
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-cyan-400
                                "
                            >
                                <Download size={18} />
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}