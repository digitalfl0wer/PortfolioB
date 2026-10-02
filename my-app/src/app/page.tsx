import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-cream font-sans text-ink">
      <main className="w-full max-w-6xl px-6 py-12 sm:px-12">
        {/* Magazine cover introduction */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="bg-ochre px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
            Issue 01 — Code, Culture &amp; Curiosity
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight tracking-tight text-burgundy sm:text-7xl">
            Brie: She Builds What’s Next
          </h1>

          <p className="max-w-md text-lg leading-8 text-ink">
            Software, AI, and the stories behind what I build.
          </p>
        </div>

        <hr className="mt-10 border-t-2 border-burgundy" />

        {/* Magazine contents: entry points into my work and personal world */}
        <section className="mt-10" aria-labelledby="contents-heading">
          <h2
            id="contents-heading"
            className="font-serif text-3xl font-bold text-burgundy"
          >
            Inside This Issue
          </h2>

          <nav className="mt-6" aria-labelledby="contents-heading">
            {/* Personal story */}
            <Link
              href="/story"
              className="block py-2 text-lg font-semibold text-burgundy underline underline-offset-4 hover:text-ink"
            >
              01 — My Story
            </Link>

            {/* Projects and experiments */}
            <Link
              href="/projects"
              className="block py-2 text-lg font-semibold text-burgundy underline underline-offset-4 hover:text-ink"
            >
              02 — The Maker’s Edit
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
