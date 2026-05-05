export default function Page() {
  const features = [
    "Auto-connect to Zoom & Microsoft Teams",
    "AI extracts action items from transcripts",
    "Assign owners to every action item",
    "Automated email follow-up reminders",
    "Dashboard to track completion status",
    "Slack notifications for overdue tasks"
  ];

  const faqs = [
    {
      q: "Which meeting platforms are supported?",
      a: "Meeting Action Tracker integrates with Zoom and Microsoft Teams out of the box. Google Meet support is on the roadmap."
    },
    {
      q: "How accurate is the AI extraction?",
      a: "Powered by OpenAI GPT-4, the extraction achieves over 95% accuracy on clear transcripts and learns from your corrections over time."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no hidden fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Team Coordination
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Extract and track action items<br className="hidden sm:block" /> across all your meetings
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Meeting Action Tracker connects to Zoom &amp; Teams, uses AI to pull out every action item, assigns ownership, and sends automated follow-ups so nothing falls through the cracks.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $16 / mo
        </a>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#8b949e]">
              <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-2 mb-8">
            {["Unlimited meetings", "Up to 25 team members", "Email &amp; Slack reminders", "Priority support"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Meeting Action Tracker. All rights reserved.
      </footer>
    </main>
  );
}
