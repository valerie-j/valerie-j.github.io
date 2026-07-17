import {
  FileText,
  Download,
  Home,
    GraduationCapIcon
} from "lucide-react";

const menuItems = [
  {
    label: "Overview",
    icon: Home,
    active: true,
  },
  {
    label: "Thesis Documents",
    icon: FileText,
  },
  {
    label: "Downloads",
    icon: Download,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        h-screen
        w-72
        border-r
        border-slate-800
        bg-slate-950/80
        p-8
        text-white
        backdrop-blur-xl
      "
    >
      {/* Brand */}
      <div>
        <div
          className="
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            {/*bg-gradient-to-br*/}
            {/*from-cyan-400*/}
            {/*to-blue-600*/}
            shadow-lg
            {/*shadow-cyan-500/20*/}
          "
        >
          <GraduationCapIcon size={26} />

        </div>
      </div>


      {/* Navigation */}
      <nav className="mt-10 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              className={`
                group
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all
                duration-200

                ${
                  item.active
                    ? `
                      bg-cyan-400/10
                      text-cyan-300
                      border
                      border-cyan-400/20
                    `
                    : `
                      text-slate-400
                      hover:bg-slate-800/60
                      hover:text-white
                    `
                }
              `}
            >
              <span
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  transition

                  ${
                    item.active
                      ? "bg-cyan-400/20"
                      : "bg-slate-800 group-hover:bg-slate-700"
                  }
                `}
              >
                <Icon size={18} />
              </span>

              {item.label}
            </a>
          );
        })}
      </nav>

    </aside>
  );
}