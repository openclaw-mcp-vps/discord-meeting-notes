export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          For Discord Communities &amp; Remote Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate meeting notes<br />
          <span className="text-[#58a6ff]">from Discord voice</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Discord server, monitor voice channels, and get structured meeting notes with action items — automatically, after every call.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎙️</div>
            <h3 className="font-semibold text-white mb-1">Voice Transcription</h3>
            <p className="text-sm text-[#8b949e]">Automatically transcribes every participant in your Discord voice channels in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Summaries</h3>
            <p className="text-sm text-[#8b949e]">AI distills conversations into structured notes with key decisions and next steps.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-semibold text-white mb-1">Action Items</h3>
            <p className="text-sm text-[#8b949e]">Extracts assigned tasks and deadlines so nothing falls through the cracks.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited voice channel monitoring</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI-generated meeting summaries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Action item extraction</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Discord bot included</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export to Markdown &amp; Notion</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to Discord?</h3>
            <p className="text-sm text-[#8b949e]">You invite our Discord bot to your server and authorize it to join voice channels. No manual setup required beyond a one-click OAuth flow.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my audio stored permanently?</h3>
            <p className="text-sm text-[#8b949e]">Raw audio is deleted immediately after transcription. Only the text transcript and generated notes are retained, and you can delete them anytime.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your dashboard at any time — no questions asked. Your subscription stays active until the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Discord Meeting Notes. All rights reserved.
      </footer>
    </main>
  );
}
