import {
  FileText,
  Home,
  GraduationCapIcon,
} from "lucide-react";

const menuItems = [
  {
    label: "Overview",
    icon: Home,
    page: "overview",
  },
  {
    label: "Thesis Documents",
    icon: FileText,
    page: "documents",
  },
];

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-800 bg-slate-950/80 p-8 text-white backdrop-blur-xl">

      <div className="mb-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg">
          <GraduationCapIcon size={26} />
        </div>
      </div>


      {/* Navigation */}
      <nav className="mt-10 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = page === item.page;

          return (
            <button
              key={item.label}
              onClick={() => setPage(item.page)}
              className={`
                w-full
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all

                ${
                  active
                    ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active
                    ? "bg-cyan-400/20"
                    : "bg-slate-800"
                }`}
              >
                <Icon size={18} />
              </span>

              {item.label}
            </button>
          );
        })}
      </nav>

    </aside>
  );
}