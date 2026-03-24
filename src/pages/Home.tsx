import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, TrendingUp, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark-green">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Home"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-green via-brand-dark-green/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-sm font-bold mb-6">
              <ShieldCheck size={16} />
              <span>FCDA Approved Locations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Sustainable Communities. <br />
              <span className="text-brand-amber">Strategic Locations.</span> <br />
              Homes That Last.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              At Genade Homes, we create residential communities across Abuja’s growth corridors — places where people don’t just buy property, but truly belong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/primesgate"
                className="bg-brand-amber text-brand-dark-green px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-amber/20"
              >
                Explore Properties <ArrowRight size={20} />
              </Link>
              <a
                href="http://wa.me/+2348143999430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Book Inspection
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, label: 'Verified Docs' },
                { icon: MapPin, label: 'Strategic Zones' },
                { icon: TrendingUp, label: 'Growth Corridors' },
                { icon: HomeIcon, label: 'Livable Design' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400">
                  <item.icon size={18} className="text-brand-amber" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Communities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-brand-amber uppercase tracking-widest mb-3">Our Communities</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark-green leading-tight">
                Explore Genade Homes Estates
              </h3>
              <p className="mt-4 text-lg text-brand-slate">
                Every Genade Homes project is positioned within Abuja’s real expansion direction — not guesswork, not speculation. Just smart, future-ready locations.
              </p>
            </div>
            <Link to="/primesgate" className="text-brand-amber font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Estates <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map((property) => (
              <motion.div
                key={property.id}
                whileHover={{ y: -10 }}
                className="group bg-brand-smoke rounded-3xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-dark-green px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-brand-dark-green text-white px-3 py-1 rounded-full text-xs font-bold">
                      {property.title}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 text-brand-slate text-sm mb-2">
                    <MapPin size={14} />
                    <span>{property.location}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-brand-dark-green mb-3">{property.name}</h4>
                  <p className="text-brand-ink text-sm mb-6 line-clamp-2">
                    {property.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <span className="text-xs text-brand-slate block uppercase font-bold tracking-wider">Starting from</span>
                      <span className="text-xl font-bold text-brand-dark-green">{property.price}</span>
                    </div>
                    <Link
                      to={property.id === 'primesgate' ? '/primesgate' : '#'}
                      className="w-12 h-12 rounded-full bg-brand-dark-green text-white flex items-center justify-center group-hover:bg-brand-amber group-hover:text-brand-dark-green transition-colors"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Genade Homes */}
      <section className="py-24 bg-brand-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-brand-dark-green mb-6">Built for Real Living</h2>
            <p className="text-lg text-brand-slate">
              We don’t create speculative layouts or random land divisions. We plan communities people can actually live in — comfortably, securely, and confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Strategic Locations', desc: 'Every project sits within Abuja’s genuine growth direction.' },
              { title: 'Secure Documentation', desc: 'FCDA approvals, C of O, or R of O verified.' },
              { title: 'Livable Design', desc: 'Communities planned around residential use.' },
              { title: 'Long-Term Value', desc: 'We focus on future desirability, not quick sales.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-brand-smoke text-brand-dark-green rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold text-brand-dark-green mb-4">{feature.title}</h4>
                <p className="text-brand-slate leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-brand-dark-green text-center mb-16">What Buyers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Choosing Genade Homes was the best decision I’ve made as a property owner. From the first site visit to the day I got my keys, everything was seamless and transparent. The team genuinely cares about quality and customer satisfaction.",
                author: "Mrs. Chioma Adewale",
                role: "Homeowner, Abuja"
              },
              {
                quote: "Moving to Abuja was a big step for us, but Genade Homes made it feel like home from day one. The location works perfectly for my work, the airport is close, and the construction quality is excellent.",
                author: "Sandra Nwachukwu",
                role: "Homeowner, Kabusa"
              }
            ].map((t, i) => (
              <div key={i} className="bg-brand-smoke p-12 rounded-[2rem] border border-slate-100 relative">
                <div className="text-brand-amber text-6xl font-serif absolute top-8 left-8 opacity-20">“</div>
                <p className="text-lg text-brand-ink italic mb-8 relative z-10 leading-relaxed">
                  {t.quote}
                </p>
                <div>
                  <h5 className="font-bold text-brand-dark-green">{t.author}</h5>
                  <p className="text-sm text-brand-slate">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-24 bg-brand-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Securing a Genade Homes Property Is Straightforward</h2>
              <div className="space-y-6">
                {[
                  'Request brochure or availability',
                  'Schedule inspection',
                  'Choose plot or home',
                  'Select payment plan',
                  'Receive allocation & documentation'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-amber">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium">{step}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-brand-amber font-medium text-xl italic">
                Clear. Structured. Secure.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-12 text-brand-dark-green shadow-2xl">
              <h3 className="text-3xl font-display font-bold mb-6">Start Your Journey</h3>
              <p className="text-brand-slate mb-8">Whether you’re buying land, investing, or purchasing a home, our team will guide you from inquiry to ownership.</p>
              <div className="space-y-4">
                <a
                  href="http://wa.me/+2348143999430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-amber text-brand-dark-green py-4 rounded-2xl font-bold hover:bg-amber-400 transition-colors flex items-center justify-center"
                >
                  Speak With Advisor
                </a>
                <a
                  href="http://wa.me/+2348143999430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-smoke text-brand-dark-green py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center"
                >
                  Book Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
