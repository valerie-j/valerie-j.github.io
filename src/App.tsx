import { useState } from "react";
import Sidebar from "./components/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import DocumentsPage from "./pages/DocumentsPage"

function App() {
    const [page, setPage] = useState("overview");

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            <Sidebar page={page} setPage={setPage} />

            <main className="ml-72 px-12 py-16">
                {page === "overview" ? (
                    <OverviewPage />
                ) : (
                    <DocumentsPage />
                )}
            </main>

        </div>
    );
}

export default App;