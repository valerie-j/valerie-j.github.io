import Sidebar from "./components/Sidebar";
import {
    FileText, GoalIcon,
} from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 ">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <Sidebar />

      <main className="ml-72 px-12 py-16">
        {/* Hero */}
        <section className="">
          {/* title */}
          <h1
            className="
              mt-2
              mr-2
              text-5xl
              font-extrabold


              {/*from-cyan-500*/}
              {/*via-blue-400*/}
              {/*to-indigo-500*/}
              text-white/90
              {/*bg-gradient-to-r*/}
              bg-clip-text
              {/*text-transparent*/}
            "
          >
            Agentic LLM-Based Vulnerability-Oriented Test Generation
                <span className="block text-center">
                    Test Generation for REST APIs
                </span>
          </h1>

          {/* potential about section */}
          {/*<p*/}
          {/*  className="*/}
          {/*    mt-8*/}
          {/*    max-w-3xl*/}
          {/*    text-lg*/}
          {/*    leading-relaxed*/}
          {/*    text-slate-300*/}
          {/*    md:text-xl*/}
          {/*  "*/}
          {/*>*/}
          {/*</p>*/}


          <div className="mt-10 flex gap-4">
            {/*<button*/}
            {/*  className="*/}
            {/*    rounded-xl*/}
            {/*    border*/}
            {/*    border-slate-700*/}
            {/*    bg-slate-900/50*/}
            {/*    px-6*/}
            {/*    py-3*/}
            {/*    font-semibold*/}
            {/*    text-white*/}
            {/*    transition*/}
            {/*    hover:border-cyan-400*/}
            {/*    hover:bg-slate-800*/}
            {/*  "*/}
            {/*>*/}
            {/*  Github page*/}
            {/*</button>*/}
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
            {/*max-w-8xl*/}
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
            text="Automatically discover vulnerabilities through intelligent test generation"
          />
        </section>



      </main>
    </div>
  );
}


function Card({ title, text, icon }) {
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
          text-2xl
          transition
          group-hover:bg-cyan-400/20
          text-white
        "
      >
        {icon}
      </div>

      <h2
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          leading-relaxed
          text-slate-400
        "
      >
        {text}
      </p>
    </div>
  );
}

export default App;