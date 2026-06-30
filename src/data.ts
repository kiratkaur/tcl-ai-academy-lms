import { TrackInfo, QuizQuestion } from './types';
import { MODULES } from './courseContent';

export { MODULES };

export const TRACKS: TrackInfo[] = [
  { id: 'T1', name: 'Leadership & Strategy', description: 'Extract core strategic insights.', icon: 'Briefcase', color: 'bg-indigo-500' },
  { id: 'T2', name: 'Finance & Accounting', description: 'Automate and professionalize communications.', icon: 'Calculator', color: 'bg-emerald-500' },
  { id: 'T3', name: 'Sales & Commercial', description: 'Rapid wholesale account briefings.', icon: 'TrendingUp', color: 'bg-blue-500' },
  { id: 'T4', name: 'Marketing & CRM', description: 'Bypass creative block with high-volume hooks.', icon: 'MessageCircle', color: 'bg-rose-500' },
  { id: 'T5', name: 'Retail & Merchandising', description: 'Translate complex directives into store briefs.', icon: 'ShoppingBag', color: 'bg-amber-500' },
  { id: 'T6', name: 'Supply Chain', description: 'Extract critical shipping constraints from emails.', icon: 'Truck', color: 'bg-orange-500' },
  { id: 'T7', name: 'HR, Legal & Training', description: 'Modernize outdated job descriptions safely.', icon: 'Users', color: 'bg-purple-500' },
  { id: 'T8', name: 'IT & Digital (Builders)', description: 'Leverage text classification for support queues.', icon: 'Terminal', color: 'bg-cyan-500' },
];

export const TRACK_LAB_DATA: Record<string, Record<string, any>> = {
  'T1': {
    module1: {
      objective: "High-Volume Synthesis & Strategic Extraction",
      sourceData: "TCL GREATER CHINA DISTRIBUTION EXPANSION REVIEW (2025)\nCONFIDENTIAL OPERATIONAL BRIEFING\n\nEXECUTIVE SUMMARY:\nThe Q3 rollout across the Eastern China maritime corridor achieved an initial footprint expansion, yet encountered systemic frictional bottlenecks. Total regional overhead expanded by 18%, driven by logistics infrastructure delays and warehousing lease re-negotiations within the Shanghai free-trade perimeter. \n\nFINANCIAL BOTTLENECKS:\n1. Warehouse Lease Spikes: Shanghai storage costs rose by 22% year-on-year, creating an immediate cash flow drag of $1.2M HKD.\n2. Distributor Credit Constraints: Tier-2 distributors in Jiangsu are showing extended collection cycles, averaging 74 days outstanding, which stalls capital reallocation to regional marketing assets.\n3. Currency Fluctuation Adjustments: Inconsistent cross-border clearing timelines between onshore entities and offshore accounts resulted in a net operational friction loss of 2.4% on initial margin tallies.\n\nCOMPETITOR MOVEMENTS:\nDirect Competitor X has deployed an aggressive infrastructure plays in Zhejiang province, expanding their physical boutique footprint by 8.4%. Internal intelligence indicates Competitor X captured approximately 3.2% market share in the premium skincare category by offering lower wholesale minimum order thresholds to sub-distributors. Competitor Y is maintaining static positioning but has increased localized marketing spending across digital commerce channels by 15%.\n\nLOGISTICS INPUTS:\nRollout timelines were extended by an average of 22 days due to custom clearance documentation mismatches at regional hubs. Fleet utilization remains sub-optimal at 64% capacity due to routing inefficiencies between the Kunshan distribution center and final retail endpoints. Immediate adjustment of the tier-1 distribution hierarchy is recommended to protect downstream retail margins.",
      promptTemplate: "Act as a corporate strategy director. Analyze this expansion review and extract: 1) The top 3 financial bottlenecks, 2) Competitor movements in Eastern China, and 3) A scannable bulleted list of immediate decision points for the COO. Omit conversational preamble.",
      followUpPrompt: "Expand on point #2. What specific market share percentages are quoted for our direct competitors?",
      expectedOutput: "The output must be a clean list without introductory pleasantries, clearly breaking down the three financial bottlenecks (Lease spikes, Credit constraints, Currency friction), identifying Competitor X's 8.4% footprint expansion / 3.2% market share capture, and presenting clear, actionable steps for the COO regarding distributor restructuring."
    }
  },
  'T2': {
    module1: {
      objective: "Cross-Border Delinquency Communications & Cultural Tone Adaptation",
      sourceData: "TCL REGIONAL OUTSTANDING ACCOUNT PROFILE\nINTERNAL FINANCE USE ONLY\n\nACCOUNT IDENTIFIER: East Retail Group Holdings (HK Division)\nINVOICE REFERENCE: #INV-2026-089A\nORIGINAL ISSUANCE DATE: April 30, 2026\nCURRENT DATE CONTEXT: June 30, 2026\nAGING STATUS: 60 Days Delinquent\nTOTAL LIQUID OUTSTANDING BALANCES: $45,000.00 HKD\nDISPUTE HISTORY: None logged. Client acknowledged receipt of goods (Premium Cosmetics Lot #992) on May 3, 2026. Internal logs indicate multiple automated follow-ups sent via ERP routing but no formal response received to date. Account status flagged for manual collector intervention.",
      promptTemplate: "Act as a corporate collections manager at TCL. Draft three distinct email templates for a retail client who is 60 days overdue on an invoice of $45,000 HKD. Tone 1: Polite reminder. Tone 2: Firm operational request. Tone 3: Formal escalation notice. Ensure placeholders like [Client Name] are clearly marked.",
      followUpPrompt: "Rewrite Tone 2 to match the business etiquette of a traditional enterprise client based in Shanghai, using professional Simplified Chinese phrasing.",
      expectedOutput: "The output must display three distinct, professional templates with clear formatting brackets (e.g., [Client Contact Name]). Tone 1 should focus on a friendly reminder; Tone 2 should focus on a firm, operational next step; Tone 3 must state the legal and formal escalation risks clearly. The Simplified Chinese variant must use formal business vocabulary (e.g., 贵司, 抱歉打扰, 恳请协助) suitable for corporate communications."
    }
  },
  'T3': {
    module1: {
      objective: "Interaction Log Analysis & Tactical Negotiation Pre-Briefings",
      sourceData: "SALES REPRESENTATIVE ACCOUNT INTERACTION LOGS\nACCOUNT: METRO COSMETICS REGIONAL DEALERS\n\nJANUARY 14, 2026 - REP MEMO:\nMet with purchase manager at Metro Cosmetics. They expressed significant frustration over the holiday delivery cycle. Claimed the shipment of premium anti-aging serums arrived 5 days late, causing stockouts across three of their primary Hong Kong storefronts.\n\nMARCH 03, 2026 - EMAIL FOLLOW-UP SUMMARY:\nMetro Cosmetics requested updated wholesale pricing catalogs for our new organic botanical skincare line. They think their premium loyalty tier demographic would buy the organic day creams quickly if they can secure an exclusive regional window.\n\nMAY 12, 2026 - PHONE LOG:\nCall from Metro account team. Discussion regarding minimum order volumes (MOV). They are pushing back against the new corporate MOV limits, stating that shipping delays make them hesitant to commit to larger upfront capital allocations. However, they explicitly noted that if TCL can guarantee a fixed 48-hour delivery SLA window, they would be willing to expand their baseline order values by up to 20% across all product lines.",
      promptTemplate: "Analyze this client communication history. Provide a scannable summary covering: 1) The client's primary recurring complaints regarding delivery lead times, 2) The specific product lines they expressed interest in expanding, and 3) Three tailored recommendations for our sales rep to open the negotiation with.",
      expectedOutput: "The AI must produce a summary highlighting: 1) The late holiday delivery window causing retail stockouts, 2) The explicit interest in expanding the organic botanical skincare catalog, and 3) Practical negotiation tactics (e.g., using the requested 48-hour SLA window as leverage to secure an increased commitment on order values)."
    }
  },
  'T4': {
    module1: {
      objective: "High-Volume Copy Variation & Brand Alignment",
      sourceData: "TECHNICAL INGREDIENT & POSITIONING PROFILE\nTCL BEAUTY LABS — BRAND PARTNER ROLLOUT\n\nPRODUCT CODE: GLOW-SERUM-2026\nFORMULATION PARAMETERS:\n- 2.5% Stabilized Hyaluronic Acid Matrix for deep cellular moisture retention.\n- Micro-encapsulated Marine Collagen Peptides sourced from certified European marine reserves.\n- Zero parabens, zero synthetic fragrance elements, 100% hypoallergenic base.\nCLINICAL TRIAL DATA SUMMARY:\n- 84% of test cohort demonstrated visible improvement in skin elasticity within 14 days of consecutive topical application.\n- 92% reported structural moisture stabilization across variable environmental changes (arid air conditioning to high humidity).\nTARGET DEMOGRAPHIC: High-net-worth consumers, beauty professionals, CRM loyalty tier members.",
      promptTemplate: "Act as a senior creative copywriter. Review these product specifications. Generate 10 distinct marketing headlines targeting luxury consumers in Hong Kong. 3 must focus on scientific efficacy, 3 on lifestyle prestige, and 4 must be short hooks optimized for mobile social media channels.",
      followUpPrompt: "For the chosen two headlines, write a 150-word body copy variant for an email newsletter targeting our top-tier CRM loyalty members.",
      expectedOutput: "The output must contain exactly 10 distinct headlines properly divided into the three requested categories (Scientific, Lifestyle, Mobile). The follow-up email variant must maintain an upscale, inviting tone suited for high-tier loyalty members, weaving the technical specifications (2.5% Hyaluronic Acid, Marine Collagen) into a polished, luxury marketing message."
    }
  },
  'T5': {
    module1: {
      objective: "Policy Deconstruction & Floor Staff Operationalization",
      sourceData: "TCL RETAIL OPERATIONS DIRECTIVE — MEMO #OPER-883-2026\nFROM: VISUAL MERCHANDISING HQ — HONG KONG\nTO: ALL TIER-1 REGIONAL STORE MANAGER PARKS\n\nSUBJECT: REGIONAL ADJUSTMENTS TO END-CAP SHELVING LAYOUTS AND RE-PRICING MATRIX\n\nEffective upon close of operational hours tonight (June 30, 2026, at 22:00), all retail teams must execute a comprehensive structural realignment of the primary skincare end-cap display bay (Zone Alpha). The top two product shelves must be stripped of legacy inventory and transitioned to feature the HydraGlow Premium Serum line exclusively. Display alignment must maintain a clear three-facing product array configuration.\n\nConcurrently, regional pricing modifications take effect immediately at store opening tomorrow morning. The legacy price tags ($520 HKD) must be removed and replaced with the updated seasonal standard tags ($580 HKD). Floor team leaders must manually scan every updated display tag using the handheld ERP terminal to verify that the digital point-of-sale system registers the updated value prior to opening doors.\n\nIn anticipation of consumer queries regarding the $60 HKD price adjustment, floor staff must be briefed to present an active value message. Staff are instructed to explain that the price adjustment reflects the addition of the new micro-encapsulated marine peptide matrix, which delivers double the active clinical efficacy compared to last season's formula base. Avoid defensive language; transition directly to discussing formula benefits.",
      promptTemplate: "Act as a retail store operations manager. Translate this corporate directive into a clear, bulleted announcement for floor staff to read during morning huddles. It must strictly outline: 1) What changes on the shelves tonight, 2) How the new price tags must be verified, and 3) What to say if a customer asks about the price adjustment. Keep the language simple, direct, and action-oriented.",
      expectedOutput: "The AI must transform the wordy memo into a scannable morning huddle guide. It should feature action points with clear bullet markings: what must be changed on the shelves at 22:00 tonight, how to scan price tags to verify the $580 HKD pricing before opening doors, and a direct response script for handling customer pricing questions politely and effectively."
    }
  },
  'T6': {
    module1: {
      objective: "Unstructured Log Parsing & Incident Remediation Tables",
      sourceData: "EMAIL THREAD LOG — SHIPMENT TRACKING NUMBER #TCL-MUM-99281\nCONFIDENTIAL — SUPPLY CHAIN INTRA-NET\n\nFROM: Rajesh Kumar (Mumbai Broker Operations)\nTO: Sarah Jenkins (TCL Global Shipping Coordinator)\nSENT: June 28, 2026, 09:14 IST\nSarah, update from the customs floor here at Mumbai Port. Container #TCL-99281 containing our regional raw botanical shipments is currently held at Terminal 3 holding yard. The customs inspector flagged a structural mismatch in the Certificate of Origin documentation supplied by the European processing node. The paperwork shows a mismatch in chemical variant categorization tags. We are waiting on corrected documents. Estimated clearance window is currently July 4, assuming papers are uploaded today.\n\nFROM: Sarah Jenkins (TCL Global Shipping Coordinator)\nTO: Dev Patel (Mumbai Warehouse Manager)\nSENT: June 28, 2026, 11:30 IST\nDev, see the note below from Rajesh. The container is stuck at Mumbai Port Terminal 3 as of June 28 due to documentation clearance issues. We need to hold space in the climate-controlled warehouse zone to receive these botanicals as soon as they clear on July 4. Please adjust the incoming receiving dock schedules to prevent carrier bottlenecking.",
      promptTemplate: "Act as a logistics director. Parse this email thread and create a structured update table with the following columns: Incident Date, Current Location of Goods, Document Root Cause of Delay, and Estimated Clear Date. Below the table, list the next 2 logical steps our warehouse manager needs to take to prepare for arrival.",
      expectedOutput: "The output must feature a clean markdown table matching the requested columns exactly. Below the table, it must list two clear warehouse action items: holding space in the climate-controlled zone and adjusting incoming dock schedules to prevent bottlenecks."
    }
  },
  'T7': {
    module1: {
      objective: "Job Description Modernization & Compliance Preservation",
      sourceData: "TCL HUMAN RESOURCES — ARCHIVAL ROLES DESCRIPTION (2018)\nPOSITION: REGIONAL SUPPLY CHAIN CLERK — LEVEL 2\n\nROLE OVERVIEW:\nThe candidate will be responsible for managing regional freight files across local office teams. Primary day-to-day duties involve receiving hard-copy freight documentation, organizing physical filing cabinets, entering data manually into standard local spreadsheets, and answering incoming vendor routing telephone calls.\n\nCOMPLIANCE & LEGAL EQUALITY CLAUSE (DO NOT EDIT):\nTCL Corporation provides equal employment opportunities to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, disability, genetics, or partner brand affiliations. TCL strictly complies with all regional labor laws, workplace safety acts, and corporate non-discrimination frameworks across all operational territories.",
      promptTemplate: "Review this 2018 job description. Rewrite it to update the responsibilities for a modern, digital-first workplace. Inject specific competencies regarding digital tool literacy, data-driven file management, and familiarity with collaborative software environments. Maintain all original corporate clauses relating to equal opportunity and workplace compliance verbatim.",
      expectedOutput: "The output must present a modernized job description that replaces outdated tasks (like physical filing and manual data entry) with modern requirements, such as digital file management, collaborative software proficiency, and data accuracy tracking. The compliance and legal equality clause must be preserved word-for-word in its own section at the bottom."
    }
  },
  'T8': {
    module1: {
      objective: "Ticket Stream Categorization & Incident Prioritization Matrix",
      sourceData: "TCL IT SUPPORT SERVICE QUEUE LOGS — UNCLASSIFIED DUMP\nTIMESTAMP RUN: JUNE 30, 2026\n\nTICKET_ID #001: The primary network printer on Floor 4 is jamming continuously and won't process incoming print queues for the finance team.\nTICKET_ID #002: I forgot my access password for the main ERP system and cannot bill regional clients this morning.\nTICKET_ID #003: I received an unexpected email asking me to click an external link to verify my corporate credentials immediately.\nTICKET_ID #004: The local spellcheck tool inside my corporate word processor is not responding after the recent update.\nTICKET_ID #005: Warehouse terminal 3 crashed with a blue screen error, blocking the local shipping team from printing outbound product labels.",
      promptTemplate: "Act as a first-line IT triage system. Review these 30 unclassified user requests. Classify each ticket into one of four strict categories: [Hardware], [ERP Access], [Network Security], or [General Software]. Output the result as a markdown table sorted by category, with an added column for Priority (High/Medium/Low) based on whether the issue blocks a whole team or an individual user.",
      expectedOutput: "The output must be structured as a clean markdown table sorted by category group, indicating priority properly (e.g. #003 is Network Security/High, #001 is Hardware/Medium-High, #004 is General Software/Low)."
    }
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    text: "A team leader wants to write a recap of a sensitive client dispute regarding a broken wholesale shipment contract. The document contains direct client names and specific invoice totals. Under the TCL Data Classification Shield, what action must be taken before processing this text?",
    options: [
      "A) It can be pasted directly into any public model since it's an internal email summary.",
      "B) The user must manually mask all client names and invoice totals using standardized tokens, and process it *only* within an approved Enterprise Sandbox environment.",
      "C) The document must be deleted completely and cannot be processed by any digital system.",
      "D) It should be emailed directly to a public AI service provider for immediate support."
    ],
    correctAnswerIndex: 1,
    explanation: "Correct! The TCL Data Classification Shield requires masking PII and using approved Enterprise Sandboxes for restricted/confidential data."
  },
  {
    id: 'q2',
    text: "During a data analysis session, an AI assistant provides a specific financial calculation breakdown but outputs a variance metric that looks incorrect. What core principle from Module 1 applies here?",
    options: [
      "A) LLMs are perfect mathematical calculators; the underlying corporate file must be incorrect.",
      "B) The AI is showing symptoms of a server timeout and should be restarted.",
      "C) AI is a first-draft generator and statistical prediction engine; humans are always the final validators.",
      "D) The model is accessing real-time local bank data to overwrite the ledger."
    ],
    correctAnswerIndex: 2,
    explanation: "Correct! AI is a statistical prediction engine and a first-draft generator. Humans are the final validators."
  },
  {
    id: 'q3',
    text: "Which of the following prompt strings correctly utilizes the explicit components of the TCL Prompting Framework?",
    options: [
      "A) \"Fix this ledger snippet file for me quickly please.\"",
      "B) \"Act as a corporate forensic auditor. Review this Q2 ledger snippet. Locate lines where the clearing amount varies from the baseline. Output a markdown table showing [Invoice ID] and [Variance Log]. Constraint: Do not include client personal data.\"",
      "C) \"Can you look at these logistics reports and give me your general thoughts?\"",
      "D) \"Write an email to a client about an invoice.\""
    ],
    correctAnswerIndex: 1,
    explanation: "Correct! Option B clearly defines Role, Context, Task, Format, and Constraints."
  },
  {
    id: 'q4',
    text: "Under China's PIPL and Interim Generative AI Measures, what is a critical constraint regarding customer personal data and system deployment?",
    options: [
      "A) Personal consumer data can be uploaded to public web models if processed after midnight.",
      "B) Consumer data must not cross international borders without proper clearance, and teams must utilize approved domestic instances like Aliyun Qwen.",
      "C) Data privacy rules do not apply to marketing copy or product specifications.",
      "D) Every employee must register their personal social accounts with the regional IT bureau."
    ],
    correctAnswerIndex: 1,
    explanation: "Correct! Cross-border data transfer requires clearance and domestic instances must be used for personal consumer data in China."
  },
  {
    id: 'q5',
    text: "What is the primary purpose of adding a \"Chain-of-Thought\" directive like 'Think step-by-step through the calculation logic before outputting the final digits' to a prompt?",
    options: [
      "A) It forces the AI to slow down its processing speed to save server bandwidth.",
      "B) It instructs the model to layout its intermediate reasoning blocks, significantly reducing mathematical and structural errors.",
      "C) It automatically translates the final output into multiple regional dialects.",
      "D) It bypasses the enterprise single sign-on security system."
    ],
    correctAnswerIndex: 1,
    explanation: "Correct! Chain-of-Thought forces the model to explain its reasoning, reducing hallucinations and errors."
  }
];

export interface HallucinationData {
  documentTitle: string;
  documentSnippet: string;
  simulatedPrompt: string;
  hallucinatedOutput: string;
  hallucinatedSnippet: string;
  realityCheck: string;
}

export const TRACK_HALLUCINATION_DATA: Record<string, HallucinationData> = {
  'T1': {
    documentTitle: "Regional Distribution Agreement v4.2",
    documentSnippet: "...the following clauses outline the responsibilities of the Distributor. \n7.1 Compliance with all regulatory bodies and licensing is mandatory.\n7.2 Confidential Information must not be disclosed.\n7.3 The Distributor shall ensure that all shipping schedules comply with local transit laws.\n8.1 Non-disclosure. The Distributor agrees not to reveal pricing structures.",
    simulatedPrompt: "Extract the specific financial penalties for shipping delays from this document.",
    hallucinatedOutput: "Based on the provided text, the specific financial penalties are:\n- A $5,000 HKD penalty applies for any shipping delays exceeding 48 hours.",
    hallucinatedSnippet: "A $5,000 HKD penalty applies",
    realityCheck: "The AI invented a $5,000 HKD penalty. If you look at the source text, Section 7 discusses shipping, but it never mentions any financial penalties or the 48-hour timeframe. It hallucinated this based on typical distribution contracts."
  },
  'T2': {
    documentTitle: "Enterprise Client Invoice History - Q1",
    documentSnippet: "CLIENT: Shanghai Metro Retail\nACCOUNT STATUS: Active\nINVOICE #4492: Paid - 14 Days Late.\nINVOICE #4493: Paid - On Time.\nINVOICE #4494: Outstanding - 12 Days.\nNOTES: Client requested a temporary extension on #4494 due to local holiday closures.",
    simulatedPrompt: "Summarize the payment history for Shanghai Metro Retail and list any formal default notices issued.",
    hallucinatedOutput: "Summary:\n- Shanghai Metro Retail has a mixed payment history.\n- They were issued a formal Default Notice on Invoice #4492 after being 14 days late.",
    hallucinatedSnippet: "issued a formal Default Notice",
    realityCheck: "The AI hallucinated the 'formal Default Notice'. The source text only says the invoice was paid 14 days late, but never mentions any formal legal action or notices being issued."
  },
  'T3': {
    documentTitle: "Q2 Retail Partner Negotiation Logs",
    documentSnippet: "May 14 Call - Vendor A: Discussed the new premium serum line. Vendor A is interested but wants a 10% volume discount.\nMay 16 Email - Vendor A: Confirmed they will increase shelf space if we provide marketing standees. No agreement reached on the volume discount yet.",
    simulatedPrompt: "What was the final agreement reached with Vendor A regarding the premium serum line?",
    hallucinatedOutput: "Vendor A agreed to increase shelf space for the premium serum line in exchange for a 10% volume discount and marketing standees.",
    hallucinatedSnippet: "in exchange for a 10% volume discount",
    realityCheck: "The AI hallucinated the conclusion of the negotiation. The email explicitly states 'No agreement reached on the volume discount yet', but the AI confidently asserted it was granted."
  },
  'T4': {
    documentTitle: "HydraGlow Serum Formulation Specs",
    documentSnippet: "PRODUCT: HydraGlow Night Serum\nACTIVE INGREDIENTS: \n- 1.5% Hyaluronic Acid\n- Niacinamide (Vitamin B3)\n- Green Tea Extract\nNOTES: Formulated for dry to combination skin. Dermatologist tested.",
    simulatedPrompt: "Write a short Instagram caption highlighting the clinical trial results for the HydraGlow Night Serum.",
    hallucinatedOutput: "Wake up to glowing skin! ✨ Our new HydraGlow Night Serum with Hyaluronic Acid is clinically proven to reduce wrinkles by 45% in just two weeks! #TCLBeauty #Skincare",
    hallucinatedSnippet: "clinically proven to reduce wrinkles by 45%",
    realityCheck: "The AI completely fabricated the '45% wrinkle reduction' claim. The source specs only mention ingredients and that it was dermatologist tested. Making false clinical claims is a massive brand safety risk."
  },
  'T5': {
    documentTitle: "Store Operations Memo - May 2026",
    documentSnippet: "To: All Store Managers\nSubject: Summer Inventory Shift\nPlease ensure all winter clearance items are moved to the back stockroom by Friday at 5 PM. The new summer display materials will arrive on Monday morning. Ensure at least two staff members are available for unloading.",
    simulatedPrompt: "What is the penalty for managers who do not move the winter inventory by Friday?",
    hallucinatedOutput: "Managers who fail to move the winter clearance items to the back stockroom by Friday at 5 PM will be subject to a formal written warning and a deduction from their monthly performance bonus.",
    hallucinatedSnippet: "deduction from their monthly performance bonus",
    realityCheck: "The AI hallucinated severe HR penalties. The memo is a standard operational directive and mentions absolutely no disciplinary actions or bonus deductions."
  },
  'T6': {
    documentTitle: "Freight Forwarding Transit Logs",
    documentSnippet: "SHIPMENT #8821 - ORIGIN: Shenzen - DEST: Dubai\nSTATUS: In Transit (Ocean Freight)\nUPDATE: Vessel delayed at Port of Singapore due to heavy congestion. ETA to Dubai pushed back by 4 days.\nCARRIER: OceanLink Logistics",
    simulatedPrompt: "Why is shipment #8821 delayed and what compensation is the carrier offering?",
    hallucinatedOutput: "Shipment #8821 is delayed by 4 days due to heavy congestion at the Port of Singapore. OceanLink Logistics has offered a 15% refund on the freight charges to compensate for the delay.",
    hallucinatedSnippet: "offered a 15% refund on the freight charges",
    realityCheck: "The AI invented the 15% refund. The log only mentions the reason for the delay, not any financial compensation from the carrier."
  },
  'T7': {
    documentTitle: "Q2 Hiring Requisition Approvals",
    documentSnippet: "ROLE: Junior Data Analyst\nDEPARTMENT: Regional Marketing\nBUDGET: Approved ($45,000 - $55,000 base)\nREQUIREMENTS: 1-2 years experience, proficient in Excel and Tableau. SQL is a plus but not strictly required.",
    simulatedPrompt: "List the mandatory technical skills required for the Junior Data Analyst role.",
    hallucinatedOutput: "Mandatory Technical Skills:\n- Microsoft Excel\n- Tableau\n- Advanced SQL querying",
    hallucinatedSnippet: "Advanced SQL querying",
    realityCheck: "The AI escalated a 'nice-to-have' skill into a mandatory requirement, and added the word 'Advanced'. The source text explicitly says SQL is 'a plus but not strictly required'."
  },
  'T8': {
    documentTitle: "Server Outage Incident Report",
    documentSnippet: "INCIDENT: 2026-05-12 Database Timeout\nSEVERITY: Tier 2\nIMPACT: Primary CRM dashboard was inaccessible for 22 minutes.\nROOT CAUSE: A scheduled backup script locked the primary tables longer than expected. Automatic failover did not trigger properly.",
    simulatedPrompt: "Summarize the root cause of the CRM outage and the data loss reported.",
    hallucinatedOutput: "The CRM outage was caused by a backup script locking the primary tables, preventing the automatic failover. During the 22-minute downtime, approximately 450 customer records were corrupted and lost.",
    hallucinatedSnippet: "approximately 450 customer records were corrupted and lost",
    realityCheck: "The AI hallucinated a catastrophic data loss event. The incident report only states that the dashboard was inaccessible; it says nothing about data corruption or record loss."
  }
};
