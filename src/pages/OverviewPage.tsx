import { FileText, GoalIcon } from "lucide-react";

export default function OverviewPage() {
  return (
    <>
      {/* Hero */}
      <section>
        <h1
          className="
            mt-2
            mr-2
	    ml-2
            text-5xl
            font-extrabold
            text-white/90
            bg-clip-text
	    text-center
          "
        >
         Agentic Test Generation for BOLA/IDOR Detection in REST APIs 
        </h1>

        <div className="mt-10 flex gap-4">
          {/* Future buttons e.g. github */}
        </div>
      </section>

      {/* Cards */}
      <section
        className="
          mt-16
          mr-4
          ml-4
          grid
          grid-cols-2
          gap-6
        "
      >
        <Card
          title="Research Area"
          icon={<FileText />}
          text="AI Agents · Security · API Testing"
        />

        <Card
          title="Main Goal"
          icon={<GoalIcon />}
          text="Automatically discover vulnerabilities through intelligent test generation."
        />
      </section>
    </>
  );
}

type CardProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

function Card({ title, text, icon }: CardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/50
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      <div
        className="
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-cyan-400/10
          text-white
          transition
          group-hover:bg-cyan-400/20
        "
      >
        {icon}
      </div>

      <h2 className="text-xl font-semibold text-white">{title}</h2>

      <p className="mt-3 leading-relaxed text-slate-400">{text}</p>
    </div>
  );
}
