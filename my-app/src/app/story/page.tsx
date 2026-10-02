import Link from "next/link";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-12 text-ink">
      {/* Return to the magazine cover */}
      <Link
        href="/"
        className="mb-8 inline-block py-2 text-burgundy underline underline-offset-4 hover:text-ink"
      >
        &larr; Back to the Cover
      </Link>

      {/* Personal story heading */}
      <h1 className="font-serif text-5xl font-bold text-burgundy">
        My Story
      </h1>
    </main>
  );
}