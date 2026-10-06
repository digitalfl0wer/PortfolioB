import Link from "next/link";

export default function SuccessFactorsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-cream px-6 py-12 text-ink sm:px-12">
      {/* Return to projects and experiments */}
      <Link
        href="/projects"
        className="mb-8 inline-block py-2 text-burgundy underline underline-offset-4 hover:text-ink"
      >
        &larr; Back to The Maker’s Edit
      </Link>

      {/* Feature headline and byline */}
      <header>
        <p className="mb-4 inline-block bg-ochre px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
          The Feature Spread
        </p>

        <h1 className="font-serif text-5xl font-bold leading-tight text-burgundy">
          A Little AI, A Lot of Problem Solving
        </h1>

        <p className="mt-6 text-sm">
          By Brie Spann &middot; Inside my Accenture internship
        </p>

        <p className="mt-8 text-xl leading-8">
          Two AI agents, hundreds of possible rules, and configuration
          work that could take weeks manually—generated within an hour.
        </p>

        <p className="mt-4 text-sm leading-6">
          An interview-style account adapted from my experience.
        </p>
      </header>

      <hr className="mt-10 border-t-2 border-burgundy" />

      {/* Short exchanges keep the feature conversational */}
      <article
        className="mt-10 space-y-10 text-lg leading-8"
        aria-label="A conversation about my Accenture projects"
      >
        <section aria-labelledby="before-agents">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="before-agents"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            What were consultants doing before your agents?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              Starting with an Excel sheet. Sometimes hundreds of rules.
            </p>
            <p>
              Then they had to compare the client’s requirements with
              the metadata, get the names and naming conventions right,
              and write the Groovy scripts.
            </p>
            <p>And some of them didn’t code at all.</p>
          </div>
        </section>

        <section aria-labelledby="what-built">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="what-built"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            So what exactly did you build?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              Two agents in Microsoft Copilot Agent Builder to support
              SAP SuccessFactors workflows.
            </p>
            <p>
              The first supported Clone Cloud, which involved scrambling
              personal data.
            </p>
            <p>
              The second supported HR Data Loader, which handled mass
              employee actions—things like changes to pay, hiring, and
              terminations.
            </p>
            <p>
              They could take the requirements from an Excel sheet,
              use the metadata, and generate XML configurations with
              Groovy scripts inside them.
            </p>
          </div>
        </section>

        <section aria-labelledby="other-capabilities">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="other-capabilities"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            Was generating XML the only thing they could do?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>No. They could work backward, too.</p>
            <p>
              A consultant could give an agent an existing XML document
              and ask it to explain the requirements that configuration
              represented.
            </p>
            <p>
              Or give it the XML and say, “I need this part edited.”
            </p>
            <p>
              They could also answer questions using the reference
              material I prepared. So there were different ways to work
              with them, depending on what the consultant needed.
            </p>
          </div>
        </section>

        <section aria-labelledby="impact">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="impact"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            What difference did it make?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              The configuration work could take weeks to complete
              manually. The agent could generate the XML, including
              the Groovy scripts, within an hour.
            </p>
            <p>
              Consultants had a generated configuration to review
              instead of having to write the entire thing themselves.
            </p>
            <p>
              That also gave consultants who didn’t code a way to turn
              the client’s requirements into something they could
              inspect and work with.
            </p>
          </div>
        </section>

        <section aria-labelledby="human-review">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="human-review"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            Did that hour include review and testing?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>No—that part stayed with us.</p>
            <p>
              The hour describes the agent’s generation work.
              Consultants still needed to review the document, test it
              in the system, and verify the result.
            </p>
          </div>
        </section>

        {/* Editorial pull quote repeats a line from the conversation */}
        <aside
          className="border-l-4 border-burgundy bg-ochre px-6 py-6"
          aria-label="Highlighted excerpt"
        >
          <p className="text-ink font-serif text-3xl font-bold leading-snug">
            “The agent could generate the XML, including the Groovy
            scripts, within an hour.”
          </p>
        </aside>

        <section aria-labelledby="knowledge-design">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="knowledge-design"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            What did you have to build around the agent?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>A lot of documentation. A lot.</p>
            <p>
              I created templates and parsed and organized the existing
              documents so the agents had a source of truth.
            </p>
            <p>
              That included system documentation and previously
              generated XML that had been accepted.
            </p>
            <p>
              Then I created additional documents explaining how the
              agents needed to operate in specific situations. There
              were a lot of conditionals: if the request involves this,
              handle it this way; if it involves something else, follow
              that process.
            </p>
            <p>
              Generating a configuration, editing one, and explaining
              its requirements were different tasks. The instructions
              needed to account for that.
            </p>
          </div>
        </section>

        <section aria-labelledby="judgment">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="judgment"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            What kind of behavior were you aiming for?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              I wanted the agents to use good judgment based on the
              documents, what the consultant was asking, and the
              client’s requirements.
            </p>
            <p>
              That meant giving them specific rules and reference
              material to guide how they handled each request.
            </p>
            <p>
              The documentation was a huge part of making that behavior
              possible.
            </p>
          </div>
        </section>

        <section aria-labelledby="metadata">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="metadata"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            Where did the metadata fit in?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              The requirements described what the client wanted to
              happen. The metadata supplied the names and structure
              the configuration needed to use.
            </p>
            <p>The agent had to connect those two things.</p>
            <p>
              It couldn’t just take the wording from the Excel sheet
              and assume that wording belonged in the script. It had
              to compare it with the metadata and use the correct
              naming conventions.
            </p>
            <p>
              Then it had to express the requested behavior using
              supported Groovy syntax inside the XML.
            </p>
          </div>
        </section>

        <section aria-labelledby="groovy-failure">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="groovy-failure"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            What was one of the biggest technical problems?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>The agent wasn’t writing the Groovy scripts correctly.</p>
            <p>
              These tools supported certain Groovy syntax. So the agent
              needed to write for that specific environment.
            </p>
            <p>
              I went back to scripts that were already correct and
              accepted by the system. I parsed through them and broke
              down what the different parts were doing.
            </p>
            <p>
              Then I created a document explaining those patterns for
              the agent to ingest and added more system documentation.
            </p>
            <p>
              After that, it started generating the Groovy scripts for
              the XML documents correctly.
            </p>
          </div>
        </section>

        <section aria-labelledby="resources">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="resources"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            Could it go online and figure things out?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              No. It worked from the resources I supplied. It couldn’t
              go out and research.
            </p>
            <p>
              I had to give it the supported patterns, working examples,
              and instructions for applying them.
            </p>
            <p>
              That’s why breaking down the accepted scripts mattered.
              The reference material needed to explain what worked in
              this particular system.
            </p>
          </div>
        </section>

        <section aria-labelledby="validation">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="validation"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            How did you check that it actually worked?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>Testing was a huge part of my work.</p>
            <p>
              The consultants and I combed through the generated
              documents together to check whether they matched the
              requirements and looked correct.
            </p>
            <p>
              Then we tested the upload. Would the system accept the
              XML?
            </p>
            <p>
              But an accepted upload wasn’t the end. I also checked the
              employee records we were trying to change. Did the
              information actually reflect the requested action?
            </p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>Did the document match the requirements?</li>
              <li>Did the system accept it?</li>
              <li>Did the intended change happen?</li>
            </ol>

            <p>
              If it generated a document that couldn’t be uploaded, we
              still had a problem. If it uploaded but didn’t produce
              the right result, we still had a problem.
            </p>
            <p>The output had to work beyond the chat.</p>
          </div>
        </section>

        <aside
          className="border-l-4 border-burgundy bg-ochre py-2 pl-6"
          aria-label="Highlighted excerpt"
        >
          <p className="font-serif text-3xl font-bold leading-snug text-ink">
            “The output had to work beyond the chat.”
          </p>
        </aside>

        <section aria-labelledby="collaboration">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="collaboration"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            Who worked with you through that process?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>The consultants worked with me hand in hand.</p>
            <p>
              They helped review the generated documents and check the
              results. Their knowledge of the workflows was part of the
              testing process.
            </p>
            <p>
              I also had weekly meetings and demonstrated the work to
              different teams. Clone Cloud was demoed multiple times,
              including to my direct team, the offshore team, and the
              production team.
            </p>
          </div>
        </section>

        <section aria-labelledby="timeline">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="timeline"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            How much time did you have?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              About two months for Clone Cloud and roughly three weeks
              for HR Data Loader.
            </p>
            <p>
              The second agent didn’t get the same amount of development
              and demonstration time.
            </p>
            <p>
              I created handoff documentation for both so the team had
              the material to continue working with them.
            </p>
          </div>
        </section>

        <section aria-labelledby="handoff">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="handoff"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            Where did things stand at the handoff?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              Clone Cloud went to the production team after the
              demonstrations. The goal was to put both agents into
              production, and as far as I know, both were being used
              by the team.
            </p>
            <p>
              I can speak to what I built, tested, demonstrated, and
              handed off. I can’t confirm a completed production rollout
              or a client-facing launch.
            </p>
            <p>
              Consultant use was the immediate objective. Client
              self-service was the longer-term direction.
            </p>
          </div>
        </section>

        <section aria-labelledby="contribution">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-burgundy">
            Editor
          </p>
          <h2
            id="contribution"
            className="font-serif text-2xl font-bold text-burgundy"
          >
            What should someone understand about your contribution?
          </h2>

          <div className="mt-5 space-y-4 border-l-4 border-ochre pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">
              Brie
            </p>
            <p>
              I built the agents and the supporting material that helped
              them handle these workflows.
            </p>
            <p>
              That meant organizing documentation, creating templates,
              matching requirements to metadata, writing conditional
              instructions, investigating scripting failures, and
              testing the output with consultants.
            </p>
            <p>
              The agents could generate configurations, interpret
              existing XML, make requested edits, and answer questions
              from the supplied resources.
            </p>
            <p>
              A little AI, a lot of problem solving. The title fits.
            </p>
          </div>
        </section>

        {/* Technical summary for readers looking for implementation details */}
        <section
          className="border-t-2 border-burgundy pt-8"
          aria-labelledby="behind-build"
        >
          <h2
            id="behind-build"
            className="font-serif text-3xl font-bold text-burgundy"
          >
            Behind the Build
          </h2>

          <dl className="mt-6 space-y-5 text-base leading-7">
            <div>
              <dt className="font-semibold text-burgundy">Built with</dt>
              <dd>Microsoft Copilot Agent Builder</dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">
                Project context
              </dt>
              <dd>
                SAP SuccessFactors workflows for Clone Cloud and
                HR Data Loader
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">Inputs</dt>
              <dd>
                Excel requirements, metadata, and existing XML
                configurations
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">
                Source material
              </dt>
              <dd>
                System documentation, templates, accepted XML and Groovy
                examples, and custom operating instructions
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">Capabilities</dt>
              <dd>
                XML generation, interpretation of existing configurations,
                targeted edits, and workflow questions
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">
                Technical constraints
              </dt>
              <dd>
                Metadata naming conventions, tool-supported Groovy
                syntax, and required XML structure
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">Validation</dt>
              <dd>
                Consultant review, upload acceptance, and verification
                of resulting employee-record changes
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-burgundy">Delivery</dt>
              <dd>
                Demonstrations and handoff documentation for both agents;
                Clone Cloud presented to the production team
              </dd>
            </div>
          </dl>
        </section>

        {/* Context for the experience and generation-time claim */}
        <footer className="border-t border-burgundy pt-6 text-sm leading-6">
          <p>
            This feature describes my contribution during my Accenture
            internship. Internal code, screenshots, and client data
            are not included.
          </p>
          <p className="mt-3">
            Generation time refers to the agent’s work. Human review
            and system testing remained separate steps.
          </p>
        </footer>
      </article>
    </main>
  );
}