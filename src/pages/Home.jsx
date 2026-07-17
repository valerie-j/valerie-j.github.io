export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Master Thesis Project</h1>

      <p className="mt-5 text-lg">
        This website documents the progress, of my master thesis.
      </p>

      <a
        className="inline-block mt-8 px-5 py-3 rounded bg-black text-white"
        href="/documents/thesis_scope.pdf"
        download
      >
        Download Scope Description
      </a>
    </main>
  );
}
