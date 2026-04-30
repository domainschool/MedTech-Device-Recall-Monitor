import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  BookOpen, 
  Briefcase, 
  AlertOctagon, 
  AlertTriangle, 
  Info,
  ArrowRight,
  Stethoscope,
  Factory,
  ClipboardCheck,
  Zap
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-red-50 text-recall-critical px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
          <ShieldCheck className="w-4 h-4" />
          Mission Critical Intelligence
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Bridging the Gap Between <br />
          <span className="text-recall-critical">Quality & Patient Safety</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The MedTech Recall Monitor transforms raw regulatory data into actionable intelligence 
          for hospital supply chains and quality management systems.
        </p>
      </section>

      {/* 1. The Business Problem */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex p-3 bg-white shadow-sm border border-slate-200 rounded-xl">
            <Target className="w-6 h-6 text-slate-900" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">The "Post-Market" Blind Spot</h2>
          <p className="text-slate-600 leading-relaxed">
            In the Medical Device industry, the journey doesn't end at the point of sale. 
            Companies are legally required to perform Post-Market Surveillance (PMS), 
            yet the industry faces critical hurdles:
          </p>
          <ul className="space-y-4">
            {[
              { title: "Data Fragmentation", desc: "FDA data resides in complex, raw databases that are difficult for managers to scan quickly." },
              { title: "Latency in Action", desc: "Every hour a Class I device remains in a hospital cabinet, patient risk increases." },
              { title: "Information Overload", desc: "Teams are overwhelmed by low-risk notices, often missing the 'Class I' signals that matter." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{item.title}</span>
                  <span className="text-sm text-slate-500">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap className="w-32 h-32" />
          </div>
          <blockquote className="text-xl italic leading-relaxed relative z-10">
            "In MedTech, data is not just bits and bytes—it is patient safety. This app is a digital layer of protection between a faulty device and a patient."
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-recall-critical flex items-center justify-center font-bold">
              RA
            </div>
            <div>
              <p className="text-sm font-bold">Regulatory Affairs Insight</p>
              <p className="text-xs text-slate-400">Industry Standard Principle</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stakeholder Value Proposition */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stakeholder Value Proposition</h2>
          <p className="text-slate-600">How we empower the ecosystem through actionable intelligence.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: "Quality Managers", icon: Stethoscope, help: "Identifies if current inventory matches active Class I recalls." },
            { role: "Supply Chain Leads", icon: Factory, help: "Evaluates manufacturer reliability before signing new contracts." },
            { role: "RA Officers", icon: ClipboardCheck, help: "Monitors competitors' safety issues to benchmark internal QMS." },
            { role: "Biomed Engineers", icon: Zap, help: "Identifies lot numbers requiring immediate safety notices or patches." }
          ].map((item) => (
            <div key={item.role} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <item.icon className="w-8 h-8 text-slate-400 mb-4 group-hover:text-recall-critical transition-colors" />
              <h3 className="font-bold text-slate-900 mb-2">{item.role}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.help}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Domain Knowledge Primer */}
      <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-8 md:p-12 space-y-12">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
            <BookOpen className="w-6 h-6 text-recall-critical" />
            <h2 className="text-2xl font-bold text-slate-900">Domain Knowledge: A Primer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hierarchy of Risk */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-recall-critical" />
                Hierarchy of Risk
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                  <span className="text-[10px] font-bold text-recall-critical uppercase tracking-widest block mb-1">Class I (Critical)</span>
                  <p className="text-xs text-red-900 leading-relaxed">Serious adverse health consequences or death.</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-[10px] font-bold text-recall-warning uppercase tracking-widest block mb-1">Class II (Moderate)</span>
                  <p className="text-xs text-amber-900 leading-relaxed">Temporary or reversible health problems.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Class III (Low)</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Use is not likely to cause adverse consequences.</p>
                </div>
              </div>
            </div>

            {/* QMS & ISO 13485 */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-900" />
                QMS & ISO 13485
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Companies operate under ISO 13485 standards. A key part is **CAPA** (Corrective and Preventive Action). 
                A recall is often the result of an internal CAPA process failing to catch a defect.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Quality Loop</p>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                  <span>DESIGN</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>MFG</span>
                  <ArrowRight className="w-3 h-3" />
                  <span className="text-recall-critical">MARKET</span>
                </div>
              </div>
            </div>

            {/* Recall Lifecycle */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-slate-900" />
                The Lifecycle
              </h3>
              <div className="relative pl-4 space-y-4 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {[
                  { t: "Initiation", d: "Firm discovers defect or FDA alerts them." },
                  { t: "Notification", d: "Field Safety Notices (FSN) sent to hospitals." },
                  { t: "Enforcement", d: "FDA monitors retrieval or repair progress." },
                  { t: "Termination", d: "FDA satisfied that risk is removed." }
                ].map((step) => (
                  <div key={step.t} className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-900"></div>
                    <p className="text-xs font-bold text-slate-900">{step.t}</p>
                    <p className="text-[10px] text-slate-500">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Career Impact */}
      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-recall-warning bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            Career Force Multiplier
          </div>
          <h2 className="text-3xl font-bold">Why This Matters for Your Career</h2>
          <p className="text-slate-400 leading-relaxed">
            Technical skills are common, but **Domain Knowledge** is the separator. 
            Moving from execution to strategy requires understanding the "Why" behind the "How."
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Technical Execution</p>
              <p className="text-sm font-medium">"I can call an API and display a list."</p>
            </div>
            <div className="space-y-2 border-l border-slate-800 pl-6">
              <p className="text-xs font-bold text-recall-warning uppercase tracking-widest">Business Execution</p>
              <p className="text-sm font-medium">"I am building a risk-mitigation tool that reduces hospital liability."</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 opacity-5">
          <ShieldCheck className="w-96 h-96" />
        </div>
      </section>

      <footer className="text-center pt-8 border-t border-slate-200">
        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          MedTech Device Recall Monitor &copy; 2026 | Built for Patient Safety
        </p>
      </footer>
    </div>
  );
};

// Simple Refresh icon replacement for local use in this file
const RefreshCw = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default AboutPage;
