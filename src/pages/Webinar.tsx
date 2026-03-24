import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, Clock, Users, ShieldCheck, ArrowRight, PlayCircle } from 'lucide-react';

export default function WebinarPage() {
  return (
    <div className="pt-20 bg-brand-smoke min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-smoke text-brand-dark-green text-sm font-bold uppercase tracking-wider">
              <Clock size={16} />
              <span>Free Live Webinar Training</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark-green leading-[1.15]">
              How Smart 9–5 Professionals Are Quietly Building a <span className="text-brand-amber">Second Income Stream</span> From Real Estate — Without Quitting Their Jobs
            </h1>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
              Discover how to turn your network into a consistent income machine using a proven real estate system (even if you’ve never sold anything before)
            </p>
            <div className="space-y-4">
              <a
                href="http://wa.me/+2348143999430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-amber text-brand-dark-green px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-400 transition-all shadow-xl shadow-brand-amber/20"
              >
                👉 JOIN FREE LIVE WEBINAR NOW
              </a>
              <p className="text-sm text-brand-slate font-medium">
                Limited slots available — secure your spot instantly
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relatable Problem */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-dark-green rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/10 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-white">You’ve done everything right…</h2>
              <div className="space-y-6 mb-12">
                {[
                  'You got a good job',
                  'You earn a steady salary',
                  'You try to manage your money well'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl">
                    <CheckCircle2 className="text-brand-amber shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-medium text-brand-amber mb-6 italic">
                “Salary alone won’t give me the life I want.”
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                And the truth is… Most professionals don’t lack opportunity — They lack a clear, structured system that actually works in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What They Will Learn */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-dark-green">💡 What You’ll Discover Inside This FREE Webinar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'The “Hidden Asset” You Already Have', desc: 'Turn your workplace, contacts, and everyday interactions into income — without being pushy' },
              { title: 'The Exact System We Use', desc: 'How regular professionals are closing real estate deals without prior experience' },
              { title: 'How to Start Without Capital', desc: 'No buying land. No huge investment. Just leverage' },
              { title: 'The Biggest Mistakes 9–5ers Make', desc: 'Why most side hustles fail — and how to avoid it' },
              { title: 'How to Build a Second Income Stream', desc: 'Without quitting your job or disrupting your lifestyle' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-smoke border border-slate-100 hover:border-brand-amber transition-colors">
                <div className="w-12 h-12 bg-white text-brand-amber rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark-green mb-4">{item.title}</h3>
                <p className="text-brand-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Is For / Not For */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-display font-bold text-brand-dark-green mb-8 flex items-center gap-3">
                👀 Perfect For You If:
              </h2>
              <ul className="space-y-4">
                {[
                  'You are a working professional',
                  'You want a legitimate second income',
                  'You’re tired of scams and want something real',
                  'You have contacts but don’t know how to monetize them',
                  'You want to start without risking your savings'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-ink font-medium">
                    <CheckCircle2 className="text-brand-green shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-smoke p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-display font-bold text-brand-dark-green mb-8 flex items-center gap-3">
                🚫 NOT For You If:
              </h2>
              <ul className="space-y-4">
                {[
                  'You’re looking for get-rich-quick schemes',
                  'You’re not willing to learn or take action',
                  'You’re not serious about increasing your income'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-ink font-medium">
                    <span className="text-red-500 font-bold">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Positioning */}
      <section className="py-24 bg-brand-dark-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-white">This is not just another webinar.</h2>
          <p className="text-xl text-slate-300 mb-12">This is a practical, Nigeria-tested system that shows you:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              'How to position yourself in real estate',
              'How to plug into an existing structure',
              'How to earn from deals you didn’t even own'
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="font-bold text-brand-amber">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl font-display font-bold text-brand-amber">This is not theory. This is what is working right now.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-brand-dark-green text-center mb-16 flex items-center justify-center gap-3">
            <MessageSquare className="text-brand-amber" />
            What Others Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "I never saw myself as a ‘sales person’, but this system made it simple. I closed my first deal through my office contact.", author: "Chinedu", role: "Civil Servant" },
              { text: "What shocked me is that I didn’t need to quit my job. I just started using what I already had — my network.", author: "Amina", role: "Banker" },
              { text: "I’ve tried other side hustles before, but this is the first one that actually made sense in Nigeria.", author: "Tunde", role: "Engineer" },
            ].map((t, i) => (
              <div key={i} className="bg-brand-smoke p-10 rounded-3xl border border-slate-100">
                <p className="text-brand-ink italic mb-6 leading-relaxed">“{t.text}”</p>
                <h5 className="font-bold text-brand-dark-green">— {t.author}, <span className="text-brand-slate font-normal">{t.role}</span></h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-amber text-brand-dark-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-brand-dark-green">You have absolutely nothing to lose.</h2>
          <p className="text-xl mb-12 text-brand-dark-green/80">Just show up, learn, and decide if it’s for you.</p>
          <div className="space-y-6">
            <a
              href="http://wa.me/+2348143999430"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-dark-green text-white px-10 py-5 rounded-full font-bold text-2xl hover:bg-brand-dark-green/90 transition-all shadow-2xl"
            >
              👉 CLICK HERE TO JOIN THE WHATSAPP GROUP NOW
            </a>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-brand-dark-green/60 pt-8">
              <span className="flex items-center gap-2"><ShieldCheck size={18} /> 100% Free Access</span>
              <span className="flex items-center gap-2"><Users size={18} /> Online Training</span>
              <span className="flex items-center gap-2"><Clock size={18} /> Limited Seats Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-brand-dark-green text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl text-slate-400 mb-4">At the end of 2026…</h3>
          <p className="text-3xl font-display font-bold text-white mb-8">
            You’ll either still depend on your salary — <br />
            <span className="text-brand-amber text-4xl">Or you’ll be glad you took this step.</span>
          </p>
          <p className="text-xl text-slate-500">The difference? One decision.</p>
        </div>
      </section>
    </div>
  );
}
