import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  BookOpen, 
  User, 
  DollarSign, 
  Briefcase, 
  Terminal, 
  PlusCircle, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  AlertTriangle, 
  AlertOctagon,
  Layers, 
  Code, 
  Sparkles, 
  Database, 
  Info,
  Activity,
  FileText,
  HelpCircle
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  
  // Tab 1: Term Dictionary State
  const [activeTermIndex, setActiveTermIndex] = useState(0);

  // Tab 3: Persona State
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);

  // Tab 4: Budget Calculator State
  const [deploymentTier, setDeploymentTier] = useState('enterprise'); // mvp, enterprise, validated

  // Tab 6: Prompt Accordion State
  const [expandedPromptIndex, setExpandedPromptIndex] = useState(0);

  // Clipboard copy handler
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // 8 Tabs definition
  const tabs = [
    { id: 0, label: '1. Problem & Core Concept', icon: Target },
    { id: 1, label: '2. Required Domain Knowledge', icon: BookOpen },
    { id: 2, label: '3. Data Pipeline & Architecture', icon: Layers },
    { id: 3, label: '4. Stakeholders & Personas', icon: User },
    { id: 4, label: '5. Commercial Valuations', icon: DollarSign },
    { id: 5, label: '6. College & Resume Strategy', icon: Briefcase },
    { id: 6, label: '7. AI Vibe-Coding Prompts', icon: Terminal },
    { id: 7, label: '8. Further Enhancements', icon: PlusCircle },
  ];

  // Domain terms data
  const domainTerms = [
    {
      term: 'Class I Recall',
      badge: 'Critical Red',
      badgeColor: 'bg-red-100 text-red-700 border-red-200',
      definition: 'A situation in which there is a reasonable probability that the use of or exposure to a violative product will cause serious adverse health consequences or death.',
      impact: 'Immediate physical retrieval of devices from hospital stock; notification to patients with implanted devices. Examples include software failures shutting down ventilators or pacemakers with premature battery depletion.',
    },
    {
      term: 'Class II Recall',
      badge: 'Warning Amber',
      badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
      definition: 'A situation in which use of or exposure to a violative product may cause temporary or medically reversible adverse health consequences, or where the probability of serious consequences is remote.',
      impact: 'Field repairs, software updates, or cosmetic hardware checks. Examples include a syringe pump mislabeling flow rate increments slightly, or failure of an internal self-test alarm.',
    },
    {
      term: 'Class III Recall',
      badge: 'Minor Slate',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      definition: 'A situation in which use of or exposure to a violative product is not likely to cause adverse health consequences.',
      impact: 'Usually procedural or administrative. Examples include packaging that has minor label misspellings of non-critical items, or a cosmetic scratch on a surgical cart frame.',
    },
    {
      term: '510(k) Clearance',
      badge: 'Regulatory Approval',
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
      definition: 'A premarket submission made to FDA to demonstrate that a device is "substantially equivalent" to a legally marketed predicate device.',
      impact: 'The fastest, lowest-cost route for Class II moderate-risk devices. It does not usually require clinical trials, relying instead on lab/bench tests showing equivalency to older devices.',
    },
    {
      term: 'PMA (Premarket Approval)',
      badge: 'Strict Scientific Review',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      definition: 'The strictest type of FDA device marketing application. It requires independent scientific proof of safety and effectiveness.',
      impact: 'Required for Class III high-risk or life-sustaining devices (e.g. artificial hearts, neural implants). Always requires clinical trials, taking years and costing millions.',
    },
    {
      term: 'CAPA (Corrective Action)',
      badge: 'QMS Standard',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      definition: 'Corrective and Preventive Action is a regulatory system designed to investigate root causes of defects and prevent recurrences.',
      impact: 'If a device recall occurs, regulatory compliance auditors will inspect the company\'s CAPA files to ensure a proper root-cause analysis is being documented.',
    }
  ];

  // Stakeholder Personas data
  const personas = [
    {
      role: 'Hospital Quality Manager',
      name: 'Sarah Chen, MSN, CPHQ',
      avatarText: 'SC',
      frustration: 'Spends hours manually parsing PDF recall alerts and scouring cabinet logs. Terrified that a recalled stent remains in a cardiac drawer.',
      need: 'A real-time "War Room" dashboard showing critical Class I alerts instantly, letting her trigger prompt inventory quarantines.',
      howAppHelps: 'The Live Alert Feed with clean "Reason for Recall" and filterable fields lets Sarah check their inventory against live alerts in seconds.',
      metric: 'Recall Action Latency (Average days to isolate defective stock).'
    },
    {
      role: 'Supply Chain & Procurement Lead',
      name: 'Marcus Vance, MBA',
      avatarText: 'MV',
      frustration: 'Lacks data-driven insights into manufacturer safety trends when signing long-term equipment contracts. Often blindsided by sudden supply shortages.',
      need: 'A high-level analytics overview showing manufacturer recall frequency and distribution trends over time.',
      howAppHelps: 'The Analytics summary and charts allow Marcus to audit manufacturer track records before committing millions to new supply chains.',
      metric: 'Vendor Risk Factor (Recalls per manufacturer annually).'
    },
    {
      role: 'Regulatory Affairs (RA) Officer',
      name: 'Elena Rostova, JD',
      avatarText: 'ER',
      frustration: 'Gathering historical recall metrics for FDA quality system audits takes weeks. Needs clear data formatting.',
      need: 'Standardized logs of safety notices, days since initiation, and recall failure categories to support internal CAPA documentation.',
      howAppHelps: 'Provides direct access to normalized openFDA data schemas, with clean Event IDs, initiation dates, and structured reasons.',
      metric: 'Audit Readiness & QMS Integrity.'
    },
    {
      role: 'Clinical Biomedical Engineer',
      name: 'David Miller, CBET',
      avatarText: 'DM',
      frustration: 'Locating exact device serial ranges or specific defect descriptions during recall pull-sheets is tedious.',
      need: 'A fast search bar to look up specific manufacturers or categories and get the exact technical failure modes.',
      howAppHelps: 'The search filters locate specific manufacturers (e.g. Medtronic) and expose clinical texts explaining what exactly went wrong.',
      metric: 'Recall Repair Turnaround Time.'
    }
  ];

  // Cost estimates by Tier
  const pricingTiers = {
    mvp: {
      name: 'Minimum Viable Product (MVP)',
      cost: '$35,000 - $45,000',
      description: 'Basic React client fetching live openFDA data, filterable by text, with basic styling and single-user access.',
      breakdown: [
        { phase: 'Discovery & API Mapping', cost: '$8,000' },
        { phase: 'Frontend & API Service Integration', cost: '$18,000' },
        { phase: 'Basic Charts & Stats Dashboard', cost: '$9,000' },
        { phase: 'Deployment (GitHub Pages/Vercel)', cost: '$3,000' }
      ]
    },
    enterprise: {
      name: 'Enterprise Dashboard & Analytics',
      cost: '$85,000 - $115,000',
      description: 'Decoupled "Service-First" architecture, advanced charting (Recharts), database storage for custom alerts, search debouncing, and rate-limit guardrails.',
      breakdown: [
        { phase: 'Product Discovery & System Blueprinting', cost: '$15,000' },
        { phase: 'Frontend Engineering & Custom Hook Logic', cost: '$42,000' },
        { phase: 'QMS Analytics & Charting Modules', cost: '$25,000' },
        { phase: 'Hosting Infrastructure & Deployment Config', cost: '$13,000' }
      ]
    },
    validated: {
      name: 'FDA-Validated Production System',
      cost: '$180,000 - $250,000',
      description: 'Fully FDA 21 CFR Part 11 and HIPAA compliant system. Includes complete QA software validation documentation, secure logins, automated audit trails, and 24/7 support SLAs.',
      breakdown: [
        { phase: 'Regulatory Compliance Audit & Architecture', cost: '$30,000' },
        { phase: 'Decoupled Front-End & Secure Back-End Dev', cost: '$80,000' },
        { phase: 'QMS Software Validation & IQ/OQ Protocols', cost: '$55,000' },
        { phase: 'HIPAA Shielding, DevSecOps, & GAMP-5 Audits', cost: '$35,000' }
      ]
    }
  };

  // Resume bullets
  const resumeBullets = [
    {
      category: 'Software Engineering Focus',
      bullets: [
        'Developed a decoupled "Service-First" React dashboard mapping critical Class I medical device safety recalls in real-time by integrating the openFDA API.',
        'Authored custom React hooks managing data lifecycles, integrating search debouncing and automatic rate-limit backoffs to guarantee 100% UI uptime.',
        'Created a normalized API interface layer to resolve database schema changes dynamically, ensuring clean data consumption across visual charting panels.'
      ]
    },
    {
      category: 'Biomedical Engineering & Health Informatics',
      bullets: [
        'Built a post-market surveillance tool matching Class I (life-threatening) and Class II FDA device recall notices, enabling rapid clinical inventory auditing.',
        'Translated complex regulatory safety data (openFDA API) into hospital supply chain dashboards, reducing response times for critical equipment quarantines.',
        'Synthesized ISO 13485 QMS concepts like CAPA (Corrective Action) and Risk Classifications to model hardware defect trends for biomedical technicians.'
      ]
    }
  ];

  // Prompts from prompts.md
  const promptsData = [
    {
      step: 'Prompt 1',
      title: 'Project Scaffolding & Blueprinting',
      text: 'Initialize the project using the instructions.md file provided. Create the project_specs.md blueprint. Set up a Vite + React + Tailwind CSS environment. Create a folder structure that separates components, hooks, and services (e.g., /src/api, /src/components, /src/hooks). Establish the global Tailwind theme using the \'Quality Alert\' palette: bg-slate-50 for background, red-700 for Class I alerts, and amber-500 for Class II.'
    },
    {
      step: 'Prompt 2',
      title: 'API Service Layer (openFDA Integration)',
      text: 'Create a standalone API service file src/api/fdaService.js. Implement a function to fetch device enforcement data from the openFDA API. It must support filtering by classification (default to \'Class I\') and a search term for recalling_firm. Include a utility function to normalize the raw JSON response into a clean object mapping res_event_number to id, recalling_firm to manufacturer, and reason_for_recall to reason.'
    },
    {
      step: 'Prompt 3',
      title: 'Data Hook & Error Handling',
      text: 'Create a custom React hook src/hooks/useRecalls.js that manages the API state. It should handle loading states, error catching (specifically for API rate limits), and data storage. Ensure the hook allows for \'Indication\' or \'Manufacturer\' query updates without a full page reload, implementing the \'Graceful Failure\' UI logic defined in the instructions.'
    },
    {
      step: 'Prompt 4',
      title: 'Atomic UI Components (Cards & Badges)',
      text: 'Build a set of modular UI components in src/components/shared. 1. A RecallBadge component that takes a classification and returns the themed badge (Red for Class I, Amber for Class II). 2. A RecallCard component that displays the \'Reason for Recall\', \'Product Description\', and \'Manufacturer\'. 3. Use Lucide-React icons for visual cues. Implement \'Read More\' truncation for long text blocks.'
    },
    {
      step: 'Prompt 5',
      title: 'The Alert Feed & Search Interface',
      text: 'Assemble the RecallFeed.jsx component. It should use the useRecalls hook to map data into a list of RecallCard components. Add a search bar at the top that allows users to filter by manufacturer or device type. Implement skeleton loaders for the fetching state to maintain \'Professional Density\' as per the aesthetic principles.'
    },
    {
      step: 'Prompt 6',
      title: 'Analytics Dashboard (Top-Level Metrics)',
      text: 'Create an AnalyticsSummary.jsx component using Recharts. Display three high-level metric cards: \'Total Active Class I Recalls\', \'Top 3 Impacted Manufacturers\', and a \'Recall Velocity\' bar chart showing volume by month. This component should sit above the feed to provide an instant \'War Room\' overview for a manager.'
    },
    {
      step: 'Prompt 7',
      title: 'Refinement & Polishing',
      text: 'Finalize the application styling. Apply the bg-slate-50 background to the main layout and ensure all cards have a subtle hover-highlight. Verify that all dates are formatted to MMM DD, YYYY. Ensure the layout is responsive for both desktop \'War Room\' viewing and mobile quick-scans.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-4 animate-fade-in">
      {/* Learning Deck Main Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[620px]">
        
        {/* Left Navigation Sidebar */}
        <div className="w-full md:w-80 bg-slate-50 border-r border-slate-200 p-4 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 px-2 py-3 border-b border-slate-200">
              <Activity className="w-6 h-6 text-recall-critical" />
              <div>
                <h3 className="font-bold text-slate-800 text-sm tracking-tight">MedTech Monitor</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Learning & Architecture Deck</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-xs font-bold transition-all border ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 border-slate-200 shadow-sm border-l-4 border-l-recall-critical'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800 border-transparent'
                  }`}
                >
                  <tab.icon className={`w-4 h-4 flex-shrink-0 ${activeTab === tab.id ? 'text-recall-critical' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 px-2">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-recall-critical" />
              <span>REGULATORY STACK V1.0</span>
            </div>
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          
          {/* Tab 0: Problem & Core Concept */}
          {activeTab === 0 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-recall-critical uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded border border-red-100">
                  Concept Deck Module 1
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">The Post-Market Blind Spot</h2>
                <p className="text-sm text-slate-500">How recall latency endangers patient lives and hospital operations.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-sm">The Medical Device Challenge</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under FDA rules, medical device manufacturers must run **Post-Market Surveillance (PMS)**. 
                    If a design defect, device failure, or software bug is found that could harm a patient, a **recall** is declared. 
                    However, tracking these notices is plagued by data hurdles.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-recall-critical flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                      <p className="text-xs text-slate-600"><strong className="text-slate-800">Information Latency:</strong> Traditional paper FDA recalls can take days to reach hospital supply chains.</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-recall-critical flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                      <p className="text-xs text-slate-600"><strong className="text-slate-800">Data Fragmentation:</strong> Raw data is locked in deep, complex government schemas that are tough to scan.</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-recall-critical flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                      <p className="text-xs text-slate-600"><strong className="text-slate-800">High Stakes:</strong> A Class I device (e.g. failing pacemaker) left active in stock poses direct life-threatening risks.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-recall-critical" />
                    <span>Post-Market Safety Lifecycle</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    This application automates the bridge between the government FDA database and hospital inventory. 
                    It updates safety managers instantly, moving risk mitigation from **reactive** (waiting for audit reports) to **proactive** (real-time alerts).
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-[9px] font-bold text-slate-400 block mb-2 uppercase">Risk Minimization Rate</span>
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-700">
                      <span>Traditional: ~14 Days</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span className="text-recall-critical">Monitor: &lt; 5 Minutes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem vs Solution Flow Diagrams */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">System Flow Comparisons</h4>
                
                {/* Problem Flow */}
                <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-800">
                    <AlertOctagon className="w-4 h-4 text-recall-critical" />
                    <span>The Vulnerability Flow (Without Recall Monitor)</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-center">
                    <div className="bg-white p-2.5 rounded-lg border border-red-100 text-[10px]">
                      <span className="font-bold text-red-700 block uppercase">1. MFG Defect</span>
                      <span className="text-slate-500">Hardware anomaly goes unnoticed</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-red-100 text-[10px]">
                      <span className="font-bold text-red-700 block uppercase">2. Delay</span>
                      <span className="text-slate-500">Official mail notification pending</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-red-100 text-[10px]">
                      <span className="font-bold text-red-700 block uppercase">3. Blind Spot</span>
                      <span className="text-slate-500">Device stays in clinical stock</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-red-100 text-[10px]">
                      <span className="font-bold text-red-700 block uppercase">4. Event</span>
                      <span className="text-slate-500">Patient safety incident occurs</span>
                    </div>
                  </div>
                </div>

                {/* Solution Flow */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>The Shield Flow (With Recall Monitor)</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-center">
                    <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-[10px]">
                      <span className="font-bold text-emerald-700 block uppercase">1. openFDA Query</span>
                      <span className="text-slate-500">Live API polling for Class I logs</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-[10px]">
                      <span className="font-bold text-emerald-700 block uppercase">2. Normalize</span>
                      <span className="text-slate-500">Raw JSON cleaned automatically</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-[10px]">
                      <span className="font-bold text-emerald-700 block uppercase">3. Alert Feed</span>
                      <span className="text-slate-500">Dashboard highlights failure mode</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-[10px]">
                      <span className="font-bold text-emerald-700 block uppercase">4. Quarantine</span>
                      <span className="text-slate-500">BioMed isolates devices instantly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 1: Required Domain Knowledge */}
          {activeTab === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-recall-warning uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded border border-amber-100">
                  Concept Deck Module 2
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">Domain Knowledge Dictionary</h2>
                <p className="text-sm text-slate-500">Key medical regulatory concepts and vocabulary required to master post-market compliance.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Term List Panel */}
                <div className="md:col-span-1 border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                  {domainTerms.map((t, idx) => (
                    <button
                      key={t.term}
                      onClick={() => setActiveTermIndex(idx)}
                      className={`w-full p-3 text-left transition-all block ${
                        activeTermIndex === idx 
                          ? 'bg-slate-100 font-bold text-slate-900 border-l-4 border-l-recall-warning' 
                          : 'hover:bg-slate-50 text-slate-600 text-xs'
                      }`}
                    >
                      <span className="text-xs block">{t.term}</span>
                    </button>
                  ))}
                </div>

                {/* Term Definition Detail Panel */}
                <div className="md:col-span-2 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-slate-900 text-base">{domainTerms[activeTermIndex].term}</h4>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${domainTerms[activeTermIndex].badgeColor}`}>
                        {domainTerms[activeTermIndex].badge}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Official Definition</p>
                      <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        {domainTerms[activeTermIndex].definition}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Clinical & Legal Impact</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {domainTerms[activeTermIndex].impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-amber-50 text-amber-800 p-2.5 rounded-lg border border-amber-100 text-[10px]">
                    <Info className="w-4 h-4 text-recall-warning flex-shrink-0" />
                    <span>Understanding this helps align engineering design with FDA Code of Federal Regulations (21 CFR).</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Data Pipeline & Architecture */}
          {activeTab === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Concept Deck Module 3
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">System Architecture & Data Flow</h2>
                <p className="text-sm text-slate-500">Deconstructing the "Service-First" engineering layout.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">Decoupled Architecture Diagram</h4>
                <p className="text-xs text-slate-600">
                  The application divides responsibilities strictly. If the FDA database schema shifts keys (e.g. from `recalling_firm` to a different field), 
                  only one file needs updates.
                </p>

                {/* Pipeline visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch pt-2">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
                    <div className="space-y-2">
                      <Database className="w-5 h-5 text-blue-600" />
                      <p className="text-xs font-bold text-slate-800">1. openFDA Database</p>
                      <p className="text-[10px] text-slate-500 leading-snug">Public API endpoint offering raw JSON device enforcement logs.</p>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-4 block">open.fda.gov</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
                    <div className="space-y-2">
                      <Code className="w-5 h-5 text-purple-600" />
                      <p className="text-xs font-bold text-slate-800">2. Translation Layer</p>
                      <p className="text-[10px] text-slate-500 leading-snug">`fdaService.js` fetches raw endpoints and normalizes messy JSON attributes into clear keys.</p>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-4 block">src/api/fdaService.js</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
                    <div className="space-y-2">
                      <Settings className="w-5 h-5 text-amber-600" />
                      <p className="text-xs font-bold text-slate-800">3. Custom Hook Layer</p>
                      <p className="text-[10px] text-slate-500 leading-snug">`useRecalls.js` manages loading, error caching, search states, and error mitigations.</p>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-4 block">src/hooks/useRecalls.js</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
                    <div className="space-y-2">
                      <Layers className="w-5 h-5 text-red-600" />
                      <p className="text-xs font-bold text-slate-800">4. Interactive Views</p>
                      <p className="text-[10px] text-slate-500 leading-snug">React elements render lists and charts dynamically from hooks.</p>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-4 block">src/components/*</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-xs">
                  <span className="font-bold text-red-800 block mb-1">QMS Graceful Failure Mechanism</span>
                  <p className="text-[11px] text-slate-600">
                    If the openFDA rate limit is exceeded (HTTP 429) or servers crash, the Hook blocks a system crash by serving the last cached successful query and showing a visual warning notice.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-xs">
                  <span className="font-bold text-blue-800 block mb-1">State Triggers & Reactivity</span>
                  <p className="text-[11px] text-slate-600">
                    Typing in the search input updates the hook's parameters, instantly triggering a network fetch, transforming data, and updating both charts and feeds reactive-style.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Stakeholders & Personas */}
          {activeTab === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Concept Deck Module 4
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">Stakeholders & Personas</h2>
                <p className="text-sm text-slate-500">Understanding how different roles leverage the Recall Monitor.</p>
              </div>

              {/* Persona Selectors */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {personas.map((persona, idx) => (
                  <button
                    key={persona.role}
                    onClick={() => setActivePersonaIndex(idx)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                      activePersonaIndex === idx
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      activePersonaIndex === idx ? 'bg-recall-critical text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {persona.avatarText}
                    </div>
                    <span className="text-[10px] font-bold block leading-tight">{persona.role}</span>
                  </button>
                ))}
              </div>

              {/* Selected Persona Detail */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-recall-critical text-white flex items-center justify-center font-bold text-sm shadow">
                    {personas[activePersonaIndex].avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{personas[activePersonaIndex].name}</h4>
                    <span className="text-[10px] font-medium text-slate-500">{personas[activePersonaIndex].role}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                    <span className="text-[9px] font-bold text-red-700 uppercase tracking-widest block">Daily Pain & Frustration</span>
                    <p className="text-slate-600">{personas[activePersonaIndex].frustration}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                    <span className="text-[9px] font-bold text-blue-700 uppercase tracking-widest block">Core Dashboard Solution</span>
                    <p className="text-slate-600">{personas[activePersonaIndex].howAppHelps}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-medium text-slate-500">Key Performance Metric monitored:</span>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-[10px]">
                    {personas[activePersonaIndex].metric}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Commercial Valuations */}
          {activeTab === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Concept Deck Module 5
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">Commercial Consulting Valuation</h2>
                <p className="text-sm text-slate-500">Estimating development costs if this application was contracted out to an agency.</p>
              </div>

              {/* Selector for Tiers */}
              <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                {Object.keys(pricingTiers).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setDeploymentTier(tier)}
                    className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                      deploymentTier === tier
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tier === 'mvp' ? 'Basic MVP' : tier === 'enterprise' ? 'Enterprise' : 'FDA-Validated'}
                  </button>
                ))}
              </div>

              {/* Active Tier Info Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="font-black text-slate-800 text-sm">{pricingTiers[deploymentTier].name}</h3>
                    <p className="text-[11px] text-slate-500 mt-1 max-w-md leading-relaxed">{pricingTiers[deploymentTier].description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block uppercase font-bold font-mono">Estimated Cost</span>
                    <span className="text-lg font-black text-recall-critical">{pricingTiers[deploymentTier].cost}</span>
                  </div>
                </div>

                {/* Phase Breakdown List */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-700">Scope of Work & Phase Estimations:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {pricingTiers[deploymentTier].breakdown.map((phase, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 flex justify-between items-center text-xs">
                        <div className="space-y-0.5">
                          <span className="text-[9px] text-slate-400 uppercase font-mono font-bold">Phase {i+1}</span>
                          <p className="font-medium text-slate-700">{phase.phase}</p>
                        </div>
                        <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-[10px]">{phase.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Value Callout */}
                <div className="bg-red-50 text-red-900 p-3 rounded-lg border border-red-100 text-[10px] leading-relaxed">
                  <strong>Why this costing matters:</strong> Building this project teaches students how to structure API connectors, normalize messy database payloads, and handle caching. In professional settings, this level of architecture and styling directly commands agency fees.
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: College & Resume Strategy */}
          {activeTab === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Concept Deck Module 6
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">College & Resume Builder</h2>
                <p className="text-sm text-slate-500">Translate this application into high-impact descriptions for resumes and university application essays.</p>
              </div>

              <div className="grid gap-6">
                {resumeBullets.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                      <Briefcase className="w-4 h-4 text-recall-critical" />
                      <h4 className="font-bold text-slate-800 text-xs">{cat.category}</h4>
                    </div>

                    <div className="space-y-3">
                      {cat.bullets.map((bullet, bIdx) => {
                        const copyKey = `bullet-${idx}-${bIdx}`;
                        return (
                          <div key={bIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex justify-between items-start gap-4 transition-all hover:bg-slate-100/50 group">
                            <p className="text-xs text-slate-600 leading-relaxed font-sans">{bullet}</p>
                            <button
                              onClick={() => handleCopy(copyKey, bullet)}
                              className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer flex-shrink-0"
                              title="Copy to clipboard"
                            >
                              {copiedId === copyKey ? (
                                <Check className="w-3.5 h-3.5 text-green-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 text-blue-900 p-4 rounded-xl border border-blue-100 text-xs space-y-2 leading-relaxed">
                <span className="font-bold block">Admissions Strategy Advice:</span>
                <p className="text-[11px] text-slate-700">
                  When writing essays or describing this in interviews, do not focus simply on the language syntax. 
                  Instead, frame it as **solving a post-market healthcare compliance bottleneck** by utilizing live federal open data feeds to improve medical safety assurance.
                </p>
              </div>
            </div>
          )}

          {/* Tab 6: AI Vibe-Coding Prompts */}
          {activeTab === 6 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Concept Deck Module 7
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">AI Vibe-Coding Prompt Runway</h2>
                <p className="text-sm text-slate-500">Copy the precise prompts used to build this dashboard. Run them sequentially in any code assistant model.</p>
              </div>

              {/* Prompts Accordion List */}
              <div className="space-y-3">
                {promptsData.map((prompt, idx) => {
                  const isExpanded = expandedPromptIndex === idx;
                  const copyKey = `prompt-${idx}`;
                  
                  return (
                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
                      {/* Header Toggle */}
                      <div 
                        onClick={() => setExpandedPromptIndex(isExpanded ? null : idx)}
                        className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                            {prompt.step}
                          </span>
                          <span className="font-bold text-slate-800 text-xs">{prompt.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(copyKey, prompt.text);
                            }}
                            className="p-1 rounded border border-slate-200 bg-white hover:bg-slate-100 transition-all cursor-pointer mr-2 shadow-xs"
                            title="Copy Prompt"
                          >
                            {copiedId === copyKey ? (
                              <Check className="w-3.5 h-3.5 text-green-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </button>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </div>

                      {/* Expanded Content Panel */}
                      {isExpanded && (
                        <div className="p-4 border-t border-slate-200 bg-slate-900">
                          <pre className="font-mono text-[10px] leading-relaxed text-slate-300 whitespace-pre-wrap select-all">
                            {prompt.text}
                          </pre>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 7: Further Enhancements */}
          {activeTab === 7 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Concept Deck Module 8
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">Future Enhancements Roadmap</h2>
                <p className="text-sm text-slate-500">How to scale this monitoring app into a fully-fledged clinical SaaS enterprise.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Sparkles className="w-4 h-4 text-recall-critical" />
                    <span>AI Failure Mode Categorization</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    By piping raw text from `reason_for_recall` fields into an LLM (like Gemini), we can automatically classify failures into categories 
                    such as **Software Bug**, **Material Corrosion**, **Calibration Error**, or **Sterility Fault**. 
                    This bypasses tedious clinical reviews.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Activity className="w-4 h-4 text-orange-600" />
                    <span>Real-Time Alert SMS/Email Piping</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Integrating Twilio or SendGrid APIs allows users to subscribe to manufacturer watch-lists. 
                    If a critical Class I notice drops for a monitored brand (e.g. Medtronic), safety managers receive push alerts 
                    on their mobile device within seconds.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span>Hospital ERP Inventory Matcher</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Connecting the database directly to hospital ERP repositories (like Epic Systems or SAP Supply Chain) 
                    would auto-crosscheck lot numbers. It automatically flags items in storage cabinet inventories, 
                    creating red alert markers on matching purchases.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Validated Quarantine Logging</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Enable secure logins (auth) for biomedical engineers to sign off when a physical device is found and locked. 
                    This creates digital compliance PDF certificates, helping hospitals clear FDA safety audits with automated 
                    logs of their recall responses.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-1.5 leading-relaxed text-slate-600">
                <span className="font-bold text-slate-800 block">Adding these options makes a great capstone project!</span>
                <p className="text-[11px]">
                  Students looking to expand their portfolio can implement any of these phases. 
                  They demonstrate enterprise design capabilities beyond normal full-stack portfolios.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      <footer className="text-center pt-8">
        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          MedTech Device Recall Monitor &copy; 2026 | Built for Patient Safety & Domain Education
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
