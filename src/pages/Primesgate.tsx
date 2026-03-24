import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Mountain, Wind, ShieldCheck, ArrowRight, Calendar, CreditCard, Users, Tent, Waves, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PrimesgatePage() {
  return (
    <div className="pt-20 bg-brand-smoke">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-dark-green">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Mountain Landscape"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green via-brand-dark-green/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-sm font-bold uppercase tracking-widest mb-6">
              <Mountain size={16} />
              <span>Primesgate Estate</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Own a Mountain-Surrounded Plot From <span className="text-brand-amber">₦6.48M</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Strategically located along Abuja Airport Road. Only 46 plots remaining. Allocation ongoing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="http://wa.me/+2348143999430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-amber text-brand-dark-green px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
              >
                👉 Book a FREE Inspection
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, label: 'Verified R of O Title' },
                { icon: MapPin, label: 'Airport Road Corridor' },
                { icon: Mountain, label: 'Mountain Landscape' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white font-medium">
                  <item.icon size={20} className="text-brand-amber" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Buyers Move Early */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-brand-dark-green mb-8">Why Smart Buyers Are Securing Primesgate Now</h2>
              <p className="text-lg text-brand-slate mb-8 leading-relaxed">
                Most land in Abuja is just flat earth divided into plots. Primesgate is different. It sits within a rare mountain-surrounded terrain along the rapidly expanding Airport Road corridor.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Verified R of O title',
                  'Airport Road growth corridor',
                  'Mountain-surrounded landscape',
                  'Planned residential layout',
                  'Flexible payment options'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-ink font-semibold">
                    <CheckCircle2 className="text-brand-green" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="http://wa.me/+2348143999430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-dark-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark-green/90 transition-all inline-block"
              >
                Book a FREE Inspection
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000"
                alt="Estate Terrain"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-green text-white p-10 rounded-[2.5rem] shadow-xl max-w-xs">
                <p className="text-3xl font-display font-bold mb-2">46</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-80">Plots Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Terrain Advantage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-brand-dark-green mb-6">A Natural Terrain You Cannot Recreate Later</h2>
            <p className="text-lg text-brand-slate">
              Most estates flatten land. Primesgate preserves terrain. The estate is surrounded by natural mountain formations that create a distinctive natural setting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Mountain, label: 'Scenic Elevation' },
              { icon: Wind, label: 'Fresh Air Flow' },
              { icon: ShieldCheck, label: 'Visual Privacy' },
              { icon: Tent, label: 'Recreation Potential' },
              { icon: Trophy, label: 'Landscape Identity' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-smoke p-8 rounded-3xl text-center shadow-sm border border-slate-100">
                <item.icon size={32} className="text-brand-green mx-auto mb-4" />
                <span className="font-bold text-brand-dark-green">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark-green rounded-[4rem] p-12 md:p-24 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-8">Community Built Around Nature</h2>
                <p className="text-xl text-slate-300 mb-12">Primesgate is conceived as a terrain-integrated lifestyle community with planned features you won't find anywhere else.</p>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-amber/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Tent className="text-brand-amber" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Curated Hiking Trails</h4>
                      <p className="text-slate-300">The surrounding mountains will be developed into safe hiking paths for residents — free access.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-amber/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Waves className="text-brand-amber" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Artificial Beach Zone</h4>
                      <p className="text-slate-300">A dedicated relaxation zone designed to complement the natural terrain.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-brand-amber/20 rounded-3xl border border-brand-amber/30 flex items-center justify-center p-6 text-center">
                    <span className="font-bold">Cable Car Mobility</span>
                  </div>
                  <div className="h-64 bg-brand-dark-green/20 rounded-3xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-64 bg-brand-dark-green/20 rounded-3xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600607687940-c52af096999c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-48 bg-brand-amber/20 rounded-3xl border border-brand-amber/30 flex items-center justify-center p-6 text-center">
                    <span className="font-bold">Eco-Friendly Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Sizes & Pricing */}
      <section className="py-24 bg-brand-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-dark-green">Available Plot Sizes & Pricing</h2>
            <p className="mt-4 text-brand-slate">Choose your position within the planned residential layout.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { size: '300sqm', price: '₦6,480,000', features: ['Residential Plot', 'Mountain View', 'Allocation Ongoing'] },
              { size: '500sqm', price: '₦10,800,000', features: ['Standard Plot', 'Prime Location', 'Flexible Payment'], featured: true },
              { size: '1000sqm', price: '₦21,600,000', features: ['Estate Plot', 'Maximum Space', 'Premium Allocation'] },
            ].map((plan, i) => (
              <div
                key={i}
                className={cn(
                  "p-10 rounded-[2.5rem] border transition-all",
                  plan.featured
                    ? "bg-brand-dark-green text-white border-brand-dark-green/50 shadow-2xl shadow-brand-dark-green/30 scale-105 z-10"
                    : "bg-white text-brand-dark-green border-slate-200"
                )}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.size}</h3>
                <p className={cn("text-3xl font-display font-bold mb-8", plan.featured ? "text-white" : "text-brand-amber")}>
                  {plan.price}
                </p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 size={18} className={plan.featured ? "text-brand-amber" : "text-brand-green"} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="http://wa.me/+2348143999430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold transition-colors flex items-center justify-center",
                    plan.featured ? "bg-white text-brand-dark-green hover:bg-brand-smoke" : "bg-brand-dark-green text-white hover:bg-brand-dark-green/90"
                  )}
                >
                  Reserve Plot
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-brand-dark-green mb-8">Flexible Payment Options</h2>
              <div className="space-y-6">
                {[
                  { title: 'Outright Payment', desc: 'Secure your plot instantly with a single payment.' },
                  { title: '3-Month Plan', desc: 'Spread your payment over 3 months with NO interest.' },
                  { title: '6-Month Plan', desc: 'Extended payment plan (interest applies).' },
                ].map((opt, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-brand-smoke border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <CreditCard className="text-brand-amber" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-dark-green mb-1">{opt.title}</h4>
                      <p className="text-brand-slate">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-smoke p-12 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-display font-bold text-brand-dark-green mb-6">Title Security</h3>
              <p className="text-brand-slate mb-8 leading-relaxed">
                One of the biggest Abuja land risks is documentation. Primesgate operates with verified R of O and structured allocation.
              </p>
              <div className="space-y-4">
                {['Allocation documentation', 'Ownership records', 'Transparent purchase process'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-dark-green font-bold">
                    <ShieldCheck className="text-brand-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-white rounded-2xl border border-brand-amber/20">
                <p className="text-brand-amber font-bold italic">"Your ownership is secure."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-24 bg-brand-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-brand-dark-green mb-2">Airport Proximity</h4>
                  <p className="text-sm text-brand-slate">Minutes away from the Nnamdi Azikiwe International Airport.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-brand-dark-green mb-2">Centenary City</h4>
                  <p className="text-sm text-brand-slate">Positioned within the expansion corridor of Centenary City.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-brand-dark-green mb-2">Infrastructure</h4>
                  <p className="text-sm text-brand-slate">Direct access to the rapidly developing Airport Road infrastructure.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-brand-dark-green mb-2">Urban Spread</h4>
                  <p className="text-sm text-brand-slate">Securing position before the inevitable urban spread pressure.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-brand-dark-green mb-6">Location — Airport Road Expansion Corridor</h2>
              <p className="text-lg text-brand-slate mb-6">
                Abuja grows in corridors. Areas like Lokogoma and Lugbe were once distant. Today they are prime residential zones. Airport Road is following the same trajectory.
              </p>
              <p className="text-lg text-brand-slate font-medium text-brand-amber">
                Primesgate sits directly within this growth direction. So you are securing position before maturity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Genade Homes & Decision Frame */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-brand-smoke p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-brand-dark-green mb-6">About Genade Homes</h3>
              <p className="text-brand-slate mb-6 leading-relaxed">
                Genade Homes develops structured residential communities within Abuja’s expansion corridors. Our approach combines responsible development, natural environment preservation, and secure documentation.
              </p>
              <p className="text-brand-dark-green font-bold">We design estates intended for real living — not speculative layouts.</p>
            </div>
            <div className="bg-brand-dark-green p-12 rounded-[3rem] text-white">
              <h3 className="text-2xl font-display font-bold mb-6">Should You Secure Now?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                If you need immediate housing — buy completed property. If your goal is location positioning in a distinctive environment — secure land early.
              </p>
              <p className="text-xl font-bold text-brand-amber mb-8">
                Primesgate is designed for the second case. And availability is narrowing.
              </p>
              <a
                href="http://wa.me/+2348143999430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-dark-green px-8 py-4 rounded-full font-bold hover:bg-brand-smoke transition-colors inline-block"
              >
                👉 Book a FREE Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-dark-green text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-6">Reserve Your Primesgate Plot</h2>
          <p className="text-xl text-slate-300 mb-12">Only 46 plots remain. Availability is entering final allocation stage. Early buyers typically benefit most before this phase closes.</p>
          <a
            href="http://wa.me/+2348143999430"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-amber text-brand-dark-green px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-400 transition-all shadow-xl shadow-brand-amber/20 inline-block"
          >
            👉 Book a FREE Inspection Now
          </a>
        </div>
      </section>
    </div>
  );
}
