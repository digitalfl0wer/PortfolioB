import Link from "next/link"

export default function SuccessFactorsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-cream px-6 py-12 text-ink sm:px-12">        {/* return to projects  */}
      <Link href="/projects" className="mb-8 inline-block py-2 text-burgundy underline underline-offset-4 hover:text-ink">
      &larr; Back to The Maker's Edit
      </Link>
            {/* Accenture internship feature story */}
        <p className="mb-4 block bg-ochre px-3 py-1 text-xl font-semibold uppercase tracking-widest text-ink">
            The Feature Spread
        </p>
        <h1 className="mt-6 text-sm text-ink">
            by Brie &middot; Inside my Accenture Internship
        </h1>
      <h1 className="font-serif text-5xl px-2 py-4 font-bold text-burgundy">
       <span className="font-bold italic font-serif" >A Litte AI,</span> {" "} A Lot of Problem Solving
      </h1>
    </main>
  );
}