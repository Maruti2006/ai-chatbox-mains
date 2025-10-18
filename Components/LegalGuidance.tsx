export default function LegalGuidance() {
  return (
    <section id="guidance" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-indigo-400 mb-8">Legal Guidance & Rights Preview</h2>
      <div className="grid md:grid-cols-3 gap-8 text-gray-300">
        <article className="p-4 rounded bg-gray-800 shadow-lg transition hover:shadow-indigo-600">
          <h3 className="font-semibold text-lg mb-2 text-indigo-300">Consumer Rights</h3>
          <p>
            The Consumer Protection Act, 2019 empowers consumers to seek redressal for unfair trade practices, defective goods, and deficient services with provisions for consumer courts.
          </p>
        </article>
        <article className="p-4 rounded bg-gray-800 shadow-lg transition hover:shadow-indigo-600">
          <h3 className="font-semibold text-lg mb-2 text-indigo-300">Cyber Laws</h3>
          <p>
            The Information Technology Act, 2000 governs cyber offenses like hacking, identity theft, and electronic contracts, providing for penalties and lawful safeguards.
          </p>
        </article>
        <article className="p-4 rounded bg-gray-800 shadow-lg transition hover:shadow-indigo-600">
          <h3 className="font-semibold text-lg mb-2 text-indigo-300">Fundamental Rights</h3>
          <p>
            Article 14 to Article 32 of the Constitution of India guarantee fundamental rights such as equality, freedom of speech, protection of life and personal liberty, enforceable via writ petitions.
          </p>
        </article>
      </div>
    </section>
  );
}
