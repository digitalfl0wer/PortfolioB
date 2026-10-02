import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-12 text-ink">
      {/* Return to the magazine cover */}
      <Link
        href="/"
        className="mb-8 inline-block py-2 text-burgundy underline underline-offset-4 hover:text-ink"
      >
        &larr; Back to the Cover
      </Link>

      {/* Projects and experiments heading */}
      <h1 className="font-serif text-5xl font-bold text-burgundy">
        The Maker's Edit
      </h1>

      {/* Expandable project entry */}
      <details className="mt-8 border-y-4 border-burgundy bg-cream px-6 py-4 text-ink">
        <summary className="cursor-pointer text-xl font-semibold text-burgundy">
          SAP SuccessFactors - AI-assisted XML Configuration
        </summary>

        <p className="mt-4 leading-7">
          A little AI, a lot of problem-solving.{" "}
          <span className="font-serif font-bold italic">Inside</span>{" "}
          my SAP SuccessFactors work at Accenture.
        </p>

        <Link
          href="/projects/sap"
          className="mt-4 inline-block py-2 font-semibold text-burgundy underline underline-offset-4 hover:text-ink"
        >
          Read the Feature &rarr;
        </Link>
      </details>
    </main>
  );
}