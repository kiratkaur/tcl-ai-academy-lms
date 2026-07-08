import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 'm1',
    title: 'Module 1: AI Foundations',
    duration: '4 Hours',
    objective: 'Establish the baseline "Reads, Writes, Decides, Predicts" framework and secure an early personal productivity win.',
    lessons: [
      {
        title: 'Lesson 1.1: The Plenary Spine',
        duration: '60 Mins',
        type: 'reading',
        content: `### Welcome & The Digital Mandate\n\n### Demystifying the Term: What is Artificial Intelligence (AI)?\n\n### How AI Helps Us: The Shift from Administrative to Strategic\n\n### Why TCL Must Leverage AI: The Macro-Business Case\n\n### The Regulatory, Safety & Brand Landscape\n\n### Demystifying the Black Box: What an LLM Actually Is\n\n### The Core Framework: Reads, Writes, Decides, Predicts\n\n### Live Instructor Demonstration — The Illusion of Truth`,
        slides: [
            {
                title: 'Welcome & The Digital Mandate',
                type: 'concept',
                body: '![The Digital Mandate](/assets/images/digital_mandate_1782793666666.png)\n\n* **The Shift:** Moving from manual, rigid administrative execution to fluid, AI-assisted workflows.\n* **The Individual Goal:** 100% core competency across all organizational units.\n* **The Certification Runway:** Turning the Month 1 personal productivity challenge into a verified Bronze Badge.\n\n> **Instructor Notes:**\n> "Welcome to the TCL AI Academy. Today marks the official launch of Horizon 1. We are not here to discuss abstract tech trends, science fiction, or distant futures. This academy exists to build an immediate, practical capability across our teams. Over the next four hours, we are going to shift from passive observers to active, confident executors. By the time you complete this session today, you will have executed your first verified personal productivity win inside an enterprise-tier AI workspace. Let’s look at the foundational landscape of the tool you are about to master."'
            },
            {
                title: 'Demystifying the Term: What is Artificial Intelligence (AI)?',
                type: 'concept',
                body: '* **Core Definition:** Software systems designed to mimic human cognitive functions—such as learning, reasoning, problem-solving, and parsing natural language.\n* **The Shift:** Traditional software only follows strict, rigid commands. AI recognizes underlying patterns within complex, unstructured data.\n* **Generative AI:** A specialized branch that doesn\'t just analyze data, but generates entirely new, contextual text, code, or data structures based on your specific prompts.\n\n> **Instructor Notes:**\n> "Let’s start with the absolute basics: What actually is Artificial Intelligence? At its simplest, AI refers to software systems that mimic human cognitive functions—things like understanding natural human language, recognizing visual patterns, and solving complex problems. For decades, software was rigid. If a programmer didn\'t write an exact, specific line of code for a scenario, the software broke. AI is fundamentally different. Instead of following rigid, hardcoded rules, it analyzes massive amounts of data to learn patterns. Within this academy, we will focus heavily on **Generative AI**—the branch of AI capable of creating entirely new, contextually accurate text, summaries, and structural insights based on plain-language instructions. It’s like having an incredibly fast, infinitely patient executive assistant sitting next to you."'
            },
            {
                title: 'How AI Helps Us: The Shift from Administrative to Strategic',
                type: 'highlight',
                body: '* **Eliminating the Cognitive Tax:** Automating time-consuming administrative tasks like searching documents, parsing data errors, or writing initial email drafts.\n* **Augmentation, Not Replacement:** The AI handles the "heavy lifting" of the first draft so you can focus on final validation, strategy, and creative execution.\n* **Speed to Insight:** Turning hours of manual data review or contract reading into less than 5 minutes of targeted conversational synthesis.\n\n> **Instructor Notes:**\n> "How does this actually help you on a Tuesday morning? Think about your typical week. A significant portion of your time is spent paying a \'cognitive tax\'—searching through messy, multi-page PDFs, reformatting spreadsheets, or drafting repetitive, formal emails. AI changes this by changing your role from a **builder of raw first drafts** to a **strategic editor**. The AI can read a long, multi-page contract and extract the key terms in three seconds. It can generate ten distinct marketing hooks in a click. It does not replace your expertise; it frees you from administrative friction so you can focus entirely on high-value human decisions."'
            },
            {
                title: 'Why TCL Must Leverage AI: The Macro-Business Case',
                type: 'interactive',
                body: '| OPERATIONAL VELOCITY | CUSTOMER EXPERIENCE |\n| :--- | :--- |\n| 10x faster response on logistics, inventory triage, and accounting error detection. | Hyper-personalized loyalty communications and instantaneous operational huddle preparation. |\n\n**THE COMPETITIVE MOAT:** Using secure, proprietary enterprise data sandboxes to protect market share while competitors rely on slow, manual legacy habits.\n\n> **Instructor Notes:**\n> "Let’s look at this from a macro-level: why is TCL making this investment? In modern global commerce, companies that operate manually are simply too slow to survive. First, **Operational Velocity**: A competitor using AI can triage an entire internal supply chain crisis or draft cross-border invoicing updates in minutes, while a manual company takes days. Second, **Customer Experience**: Our retail partners and B2B clients demand immediate, tailored interactions. Third, **The Competitive Moat**: By mastering secure AI workflows, TCL builds an agile organization that can move fast, cut waste, and respond to volatile market shifts instantly. This isn\'t about chasing a tech trend; it is about building a durable competitive advantage."'
            },
            {
                title: 'The Regulatory, Safety & Brand Landscape',
                type: 'highlight',
                body: '![The Regulatory Shield](/assets/images/regulatory_shield_1782793676278.png)\n\n* **EU AI Act Article 4:** Legal mandate requiring corporate workforces to maintain structural AI literacy.\n* **Data Sovereignty:** Adhering strictly to regional data rules (HK PDPO, China PIPL, India DPDP).\n* **Brand Integrity:** Aligning perfectly with the strict safety criteria of our premium global partners like L\'Oréal.\n\n> **Instructor Notes:**\n> "Because AI is so incredibly powerful, it must be governed with total discipline. Under the EU AI Act\'s Article 4, international organizations are legally required to ensure their workforces maintain formal AI literacy. Furthermore, operating across Hong Kong, China, and India means we navigate complex data environments every single day. Whether it is keeping customer data localized under China\'s PIPL, managing retail POS identities via the Hong Kong PDPO, or maintaining the strict compliance trust expected of global luxury partners like L\'Oréal, responsible AI use is a core requirement. Every prompt you write today must respect these boundaries."'
            },
            {
                title: 'Demystifying the Black Box: What an LLM Actually Is',
                type: 'concept',
                body: '![Demystifying the Black Box](/assets/images/demystify_black_box_1782793684619.png)\n\n* **The Illusion:** It looks like a conscious mind that reads, writes, and understands context.\n* **The Reality:** A Large Language Model (LLM) is an advanced statistical next-word prediction engine.\n* **Mechanics:** It breaks text down into tokens (word fragments) and mathematically calculates the most logical next token based on its massive training data patterns.\n\n> **Instructor Notes:**\n> "To use this tool safely, we must shatter the biggest myth out there. Large Language Models do not \'think.\' They do not possess a conscious mind, nor do they understand the real-world weight of the text they generate. When you write a prompt, the AI does not look up an answer in a library. Instead, it looks at your text, breaks it down into small fragments called tokens, and mathematically calculates what word should come next based on historical patterns. If you treat it like an Oracle, it will eventually mislead you. If you treat it for what it is—a highly advanced statistical pattern solver—you can leverage it with total confidence."'
            },
            {
                title: 'The Core Framework: Reads, Writes, Decides, Predicts',
                type: 'interactive',
                body: '| READS | WRITES |\n| :--- | :--- |\n| Document synthesis, long contract interrogation, and parameter extraction. | Content drafting, tone adjustments, translation, and copy variation. |\n| **DECIDES** | **PREDICTS** |\n| Automated ticket routing, customer feedback categorization, and compliance tagging. | Identifying structural anomalies, pattern deviations, and trends within raw inputs. |\n\n> **Instructor Notes:**\n> "To structure your daily work at TCL, we use a simple four-part operational framework: Reads, Writes, Decides, Predicts. First, **Reads**: The ability to absorb massive blocks of text—like a 30-page market report—and extract exact details instantly. Second, **Writes**: Taking raw data points and instantly turning them into a polished client email, or translating a notice into perfect business Simplified Chinese. Third, **Decides**: Evaluating an incoming IT support ticket or customer email and auto-categorizing it by priority. Fourth, **Predicts**: Finding hidden operational trends or pricing anomalies inside messy freight spreadsheets. Every single track lab exercise we run today maps directly to these four actions."'
            },
            {
                title: 'Instructor Live Demo — The Illusion of Truth',
                type: 'demo',
                body: ''
            }
        ]
      },
      {
        title: 'Lesson 1.2: Role-Track Labs',
        duration: '105 Mins',
        type: 'lab',
        content: 'Select your track to view specific instructions and datasets.',
        slides: [
            {
                title: 'Track Custom Lab Exercise',
                type: 'exercise',
                body: '**Format:** Simultaneous sandbox environments. The LMS provides the raw text blocks and step-by-step evaluation checkpoints below based on your selected track.\n\n**Instructions:**\n1. Open your enterprise-tier AI workspace (Copilot or Qwen instance).\n2. Copy the raw text from your specific Data Pack.\n3. Apply the strategic baseline prompt.\n4. Review the generated points and follow the checkpoint instructions.'
            }
        ]
      },
      {
        title: 'Lesson 1.3: Review, Share-Back & Challenge Launch',
        duration: '60 Mins',
        type: 'challenge',
        content: `### The Cross-Pollination Market\n\n### Launching the 30-Day Productivity Challenge\n\n### The Path to Horizon 2 & 3`,
        slides: [
            {
                title: 'The Cross-Pollination Market',
                type: 'concept',
                body: '![The Cross-Pollination Market](/assets/images/cross_pollination_1782793703256.png)\n\n* **The Underlying Mechanic:** The identical text engine powers every department\'s success.\n* **Finance Integration:** Cleaning unstructured accounts data.\n* **Logistics Integration:** Structuring unstructured email logs.\n* **The Takeaway:** AI literacy is a portable skill that scales across all roles.\n\n> **Instructor Notes:**\n> Let’s look at what we achieved across our breakout labs. While Track T2 was busy resolving retail account issues in Hong Kong, Track T6 was using the exact same prompt structure to organize unstructured shipping emails from the port of Mumbai.\n> Notice the shared pattern: both teams took messy text, defined a role, and forced the system into a structured markdown table. The skills you are building are highly portable. A prompt technique that cleans a logistics email chain can be applied tomorrow to audit an internal policy file or structure a marketing brief.'
            },
            {
                title: 'Launching the 30-Day Productivity Challenge',
                type: 'highlight',
                body: '![30-Day Productivity Challenge](/assets/images/thirty_day_challenge_1782793712835.png)\n\n* **The Assignment:** Identify one text-heavy task that takes over 30 minutes every week.\n* **The Tooling:** Use your secure enterprise workspace to assist you with this task over the next 4 weeks.\n* **The Submission:** Upload your prompt structure and outputs to the LMS dashboard.\n* **The Goal:** Secure your individual productivity win.\n\n> **Instructor Notes:**\n> Now it is time to turn this training into practice. We are officially launching the 30-Day Productivity Challenge. Your assignment before next month is simple: look at your daily schedule and pick one recurring, text-heavy task that takes you at least 30 minutes a week—whether that is writing status updates, summarizing long email threads, or drafting internal memos.\n> Use your enterprise workspace to assist you with this task over the next 4 weeks. Save your prompt strings and outputs, and upload them directly to the LMS portal. This submission is required to unlock your Bronze Certification.'
            },
            {
                title: 'The Path to Horizon 2 & 3',
                type: 'concept',
                body: '![The Path to Horizon 2 & 3](/assets/images/horizon_roadmap_1782793722257.png)\n\n* **Month 1–3 (Crawl):** Building personal productivity habits and solid data classification routines.\n* **Month 4 (Capstone Launch):** Transitioning to collaborative, multi-department team challenges.\n* **Horizon 3 Future:** Custom prompt strings form the foundation for automated workflows.\n\n> **Instructor Notes:**\n> As we wrap up today\'s session, remember that the individual prompts you wrote today are the raw building blocks for our future automation work. In Horizon 2 and 3, we will connect these prompt formats directly to automated pipelines and custom database tools.\n> Master these foundational text habits now, keep your workflows clean of unmasked sensitive data, and validate your outputs manually. Log into your LMS dashboard, download your lab data packs, and begin your 30-day challenge. I look forward to reviewing your submissions. See you in Module 2.'
            }
        ]
      }
    ]
  },
  {
    id: 'm2',
    title: 'Module 2: Prompting Like a Pro',
    duration: '4 Hours',
    objective: 'Replace casual chatting with structured prompt engineering using the TCL Prompting Framework.',
    lessons: [
      {
        title: 'Lesson 2.1: The Plenary Spine',
        duration: '60 Mins',
        type: 'reading',
        content: `### Welcome & The Month 1 Productivity Audit\n\n### Foundational Macro Concepts: What Actually Is Prompt Engineering?\n\n### How Structured Prompting Helps Us: Elevating Employee Impact\n\n### Why TCL Needs a Standardized Prompting Framework\n\n### The TCL Prompting Equation\n\n### Advanced Mechanics: Few-Shot Prompting & Chain-of-Thought`,
        slides: [
            {
                title: 'Welcome & The Month 1 Productivity Audit',
                type: 'highlight',
                body: '* **The Milestones:** Over 85% enrollment across regional tracks; first personal productivity wins logged.\n* **The Baseline Trap:** Reviewing why raw copy-pasting and single-sentence commands cause operational variances.\n* **The Goal today:** Transition from casual conversational text inputs to structured, deterministic Prompt Engineering.\n\n> **Instructor Notes:**\n> "Welcome back to the TCL AI Academy. We are officially kicking off Module 2: Prompting Like a Pro. Over the last 30 days, teams across Hong Kong, China, and India have begun logging their first automation wins. However, our compliance and IT triage audits revealed a common trap: many of us are still treating enterprise assistants like a casual search engine or chat room. If you input vague, unstructured prompts, you will receive vague, unreliable answers. Today, we replace casual chatting with engineering. We are going to learn how to construct precise, rigorous prompt architectures that produce predictable, audit-ready data assets every single time."'
            },
            {
                title: 'Foundational Macro Concepts: What Actually Is Prompt Engineering?',
                type: 'concept',
                body: '* **The Definition:** Prompt Engineering is the practice of structuring text inputs precisely so that an AI model produces predictable, accurate, and repeatable outputs.\n* **Deterministic Mindset:** Designing instructions that minimize variation and eliminate logic errors.\n* **Contextual Control:** Guiding the AI\'s internal token prediction engine by defining its exact operational boundaries.\n\n> **Instructor Notes:**\n> "Before we look at the formula, let\'s establish what Prompt Engineering actually is. It is the technical practice of structuring text inputs so that an AI system generates predictable, accurate, and repeatable outputs. Remember Module 1: an LLM doesn\'t understand intent; it predicts the next most probable words. If your prompt is loose, the model\'s statistical options are incredibly wide, which is how hallucinations happen. By engineering your prompt, you lock the model down to a specific persona, a targeted dataset, and rigid output rules. You narrow its predictive path so it has no choice but to provide the exact structural asset you require."'
            },
            {
                title: 'How Structured Prompting Helps Us: Elevating Employee Impact',
                type: 'interactive',
                body: '| VAGUE PROMPT | ENGINEERED PROMPT |\n| :--- | :--- |\n| Inaccurate Output & Manual Redrafting | 95% Perfect First Draft & Fast Validation |\n\n* **Goodbye to Guesswork:** Stop writing a prompt, realizing it missed the mark, and trying again from scratch four times.\n* **Repeatable Assets:** Once you build an engineered prompt string, it can be saved, shared, and re-used by your entire department every week.\n* **True Co-Piloting:** Elevating your role from an administrative typist to an active quality controller and strategic sign-off authority.\n\n> **Instructor Notes:**\n> "How does this change your workday? Simple: it eliminates the frustration of guesswork. Think about how much time is lost running a prompt, realizing the tone is wrong, running it again, noticing it forgot a paragraph, and manually fixing the mess. Structured prompting ensures that your very first output is 95% ready for production. Furthermore, these prompts become reusable corporate assets. Once you engineer a prompt that perfectly structures a messy supplier log, you can save it to your team\'s shared repository. You stop re-inventing the wheel every morning and start scaling your operational impact."'
            },
            {
                title: 'Why TCL Needs a Standardized Prompting Framework',
                type: 'highlight',
                body: '* **Organizational Alignment:** To scale efficiency across 25 R&D centers and 21 manufacturing bases worldwide, we must speak a common operational language.\n* **The Quality Standard:** Ensuring that an invoice reminder drafted in Hong Kong matches the professional corporate voice of an operational brief issued in Shanghai.\n* **Audit Compliance:** Creating a transparent trail of prompt structures that can be reviewed for data safety and brand guidelines.\n\n> **Instructor Notes:**\n> "Why is TCL establishing a single, uniform prompting framework across all global divisions? Because to achieve our corporate vision to \'Inspire Greatness,\' our operational workflows must be unified and scalable. We operate a vertical supply chain across multiple borders. If every employee prompts differently, our data output quality becomes chaotic. By establishing a standardized framework, a finance team member in Mumbai can hand a prompt directly to a logistics analyst in Hong Kong, and it will execute flawlessly. This framework guarantees that our automated text processes remain consistent, professional, and fully audit-compliant."'
            },
            {
                title: 'The TCL Prompting Equation',
                type: 'concept',
                body: '`Output = f(Role, Context, Task, Format, Constraints)`\n\n* **Role:** Setting the expertise level (e.g., "Senior Corporate Forensic Auditor").\n* **Context:** Establishing background boundaries (e.g., "Reviewing a monthly ledger export").\n* **Task:** Clear, action-oriented directives using imperative verbs (e.g., "Locate variations").\n* **Format:** Explicit layout parameters (e.g., "Markdown table showing [Invoice ID]").\n* **Constraints:** Defining strict boundaries (e.g., "Exclude customer personal data").\n\n> **Instructor Notes:**\n> "Here is the core mechanism for today’s session. This is the TCL Prompting Equation. From this moment on, every complex prompt you build must follow this structural function. Do not just type a question. Instead, systematically define the Role to give the system an expert perspective. Provide the Context so it knows the operational scope. Issue an imperative Task verb. Dictate the exact visual Format you want to receive. Finally, enforce strict Constraints to protect data privacy and establish guardrails. Let’s break down how this prevents calculation and reasoning errors entirely."'
            },
            {
                title: 'Advanced Mechanics: Few-Shot Prompting & Chain-of-Thought',
                type: 'concept',
                body: '* **Zero-Shot vs. Few-Shot:** Providing zero examples vs. embedding 1–2 structural examples of ideal outputs to ensure perfect format matching.\n* **Chain-of-Thought (CoY):** Forcing the model to lay out its reasoning blocks sequentially (e.g. "Think step-by-step through the calculation logic before outputting final digits").\n* **The Impact:** Drastically reduces mathematical hallucinations and logic skips in financial and technical workflows.\n\n> **Instructor Notes:**\n> "To maximize the power of the prompting equation, we use two advanced engineering mechanics. The first is Few-Shot Prompting. If you want an AI to output data in a very specific corporate style, don\'t just describe the style—paste 1 or 2 examples of previous correct entries directly into your prompt context. The second is Chain-of-Thought prompting. When processing data or logic, always insert the instruction: \'Think step-by-step through the calculation logic before outputting the final digits.\' This simple rule forces the engine to calculate intermediate logic segments openly, preventing it from jumping to a hallucinated conclusion. It is how we ensure total data integrity."'
            }
        ]
      },
      {
        title: 'Lesson 2.2: Active-Learning Role-Track Labs',
        duration: '105 Mins',
        type: 'lab',
        content: 'Select your track to view specific instructions and datasets.',
        slides: [
            {
                title: 'Track Custom Lab Exercise',
                type: 'exercise',
                body: '**Format:** Simultaneous sandbox environments. The LMS provides the raw text blocks and step-by-step evaluation checkpoints below based on your selected track.\n\n**Instructions:**\n1. Open your enterprise-tier AI workspace (Copilot, Qwen, or Claude secure sandbox instance).\n2. Write a structured prompt containing all 5 mathematical variables of the TCL Prompting Equation using the raw text from your Data Pack.\n3. Run your attempt and evaluate against the TCL Master Template Architecture.'
            }
        ]
      },
      {
        title: 'Lesson 2.3: Review, Share-Back & Challenge Launch',
        duration: '75 Mins',
        type: 'challenge',
        content: `### The Prompt Optimization Audit\n\n### Launching the Module 2 Challenge\n\n### Connecting to Horizon 2 & 3`,
        slides: [
             {
                title: 'The Prompt Optimization Audit',
                type: 'interactive',
                body: '| THE FLAW | THE FIX |\n| :--- | :--- |\n| "Summarize this logistics data please." | Injecting explicit role definitions, markdown format requests, and string boundaries. |\n\n* **The Result:** Moving from unverified AI guesses to structural business intelligence.\n\n> **Instructor Notes:**\n> "Let’s gather back in the main room for our prompt optimization audit. Look at the left side of this slide. This is a common prompt style we see daily: \'Summarize this data for me.\' The output you get from that will be a massive text block that you have to spend ten minutes reading anyway. Now look at the right side. By applying our prompting equation, we force the model to behave like a data analyst, order the findings into a clear table, and omit fluff. You don\'t have to change the AI model to get better results; you simply have to change the precision of your input."'
             },
             {
                title: 'Launching the Module 2 Challenge',
                type: 'highlight',
                body: '* **The Challenge:** Construct a localized team Prompt Library containing at least 3 distinct templates.\n* **The Formula Rule:** Every template must follow the complete structural equation.\n* **The Hub:** Save and validate these prompts within your shared departmental folders on the corporate intranet.\n* **The Window:** Complete verification uploads within the next 30 days via the LMS portal.\n\n> **Instructor Notes:**\n> "We are officially launching the Module 2 Challenge. Over the next 30 days, every participant is required to build a shared Prompt Library for their functional team. Your library must contain at least 3 distinct prompt templates that automate common recurring tasks in your department. Every single template must follow the exact formula we practiced today. Test them against your real workflows, validate the data outputs, and save them into your team\'s intranet repository. This collaborative step is what builds our operational scale."'
             },
             {
                title: 'Connecting to Horizon 2 & 3',
                type: 'concept',
                body: '* **The Building Blocks:** Today\'s prompt skeletons are the foundational programming scripts of the future.\n* **Horizon 2:** Connecting prompt frameworks directly to live software APIs.\n* **Horizon 3:** Using validated prompt parameters to manage autonomous agent networks.\n\n> **Instructor Notes:**\n> "As we close Module 2, let\'s look forward to why this discipline matters. These prompt strings you are writing are not just text queries—they are the underlying instructions for future software automation. When we move to Horizon 2 and Horizon 3, we will lock these precise prompt templates into software pipelines that run automatically behind the scenes. If your prompt structure is weak today, your automated workflows will fail tomorrow. Master these formulas, store your templates safely, and I will see you in Module 3 where we explore how to interact directly with large datasets."'
             }
        ]
      }
    ]
  },
  {
    id: 'm3',
    title: 'Module 3: AI for Everyday Documents & Data',
    duration: '4 Hours',
    objective: 'Use enterprise AI environments as secure, conversational data sandboxes to clean, interrogate, and audit files.',
    lessons: [
       {
        title: 'Lesson 3.1: The Conversational Data Sandbox',
        duration: '60 Mins',
        type: 'reading',
        content: `### Advanced Data Analysis Environments`,
        slides: [
            {
                title: 'Advanced Data Analysis Environments',
                type: 'concept',
                body: 'Moving from basic chat interfaces to secure sandbox spaces. In these environments, the LLM runs secure sandboxed code scripts in the background to handle heavy file operations, run calculations, and parse data, returning verified outputs.'
            },
            {
                title: 'Document Injection Safety Protocol',
                type: 'highlight',
                body: 'This is a vital security check. **Before** uploading any spreadsheet, PDF, or document into an AI environment, you must:\n1. Scrub hidden metadata.\n2. Remove internal structural passwords.\n3. Mask or remove consumer-identifying fields.\n\nFailure to do so can result in unauthorized data exposure.'
            }
        ]
       },
       {
        title: 'Lesson 3.2: Document Interrogation Lab',
        duration: '105 Mins',
        type: 'lab',
        content: 'Select your track to view specific instructions and datasets.',
        slides: [
            {
                title: 'Document Interrogation Lab',
                type: 'exercise',
                body: 'Use your enterprise AI environment to interrogate track-specific documents.'
            }
        ]
       },
       {
        title: 'Lesson 3.3: Challenge Launch',
        duration: '15 Mins',
        type: 'challenge',
        content: `### The Secure Sandbox Challenge`,
        slides: [
            {
                title: 'The Secure Sandbox Challenge',
                type: 'concept',
                body: '**Your Mission:**\nIdentify one monthly report or tracking spreadsheet you process regularly.\n\n1.  **Clean & Parse:** Clean, parse, or audit this document inside your secure enterprise data sandbox.\n2.  **Verify:** Manually verify the outputs for accuracy.\n3.  **Submit:** Upload your prompt workflow and analysis summary to the LMS portal.'
            }
        ]
       }
    ]
  },
  {
    id: 'm4',
    title: 'Module 4: Responsible AI, Privacy & Security',
    duration: '4 Hours',
    objective: 'Enforce data classification compliance, navigate regional laws, and secure the Bronze Certification.',
    lessons: [
       {
        title: 'Lesson 4.1: The Data Classification Shield',
        duration: '60 Mins',
        type: 'reading',
        content: `### The Threat of Shadow AI`,
        slides: [
             {
                title: 'The Threat of Shadow AI',
                type: 'concept',
                body: 'Passing sensitive information into unapproved public models poses an immediate risk to corporate intellectual property and client privacy.'
             },
             {
                title: 'The Four Tiers of Data Safety',
                type: 'interactive',
                body: '| Data Security Class | Definition & Examples | Approved Workspace | Action Boundary |\n| :--- | :--- | :--- | :--- |\n| **Class 1: Public** | Marketing copy, press releases, public specs. | Any Standard Tool | Free use without text masking. |\n| **Class 2: Internal** | SOP manuals, standard corporate emails, frameworks. | Secure Enterprise Tier Only | No public web models permitted. |\n| **Class 3: Restricted** | Financial ledgers, carrier contracts, performance targets. | Secure Enterprise Sandbox | Complete metadata and identity scrub required. |\n| **Class 4: Confidential / PII** | Customer phone numbers, credit cards, salary sheets. | Local Closed Systems Only | **FORBIDDEN** to upload to cloud AI. |'
             },
             {
                title: 'Navigating the Regional Regulatory Map',
                type: 'concept',
                body: '*   **Hong Kong PDPO:** Protect consumer identity data at the retail point of sale.\n*   **China PIPL:** Keep personal consumer data within domestic digital boundaries; utilize verified local nodes.\n*   **India DPDP Act 2023:** Establish clean verification audit trails for consumer consent.'
             }
        ]
       },
       {
        title: 'Lesson 4.2: Data Masking Lab',
        duration: '105 Mins',
        type: 'lab',
        content: `**Data Used (Data Pack 04 - Functional_Compliance.txt):**`,
        slides: [
             {
                title: 'Data Masking Lab',
                type: 'exercise',
                body: '**Data Used (Data Pack 04 - Functional_Compliance.txt):** A mock operational document intentionally containing raw customer names, phone numbers, and unmasked regional margin targets.\n\n**Exercise 1 (The PII Scrub):** You must manually rewrite the document within the LMS workspace using standardized tokens: replace names with `[EMPLOYEE_ID_A]`, customer phones with `[CUSTOMER_PHONE_MASKED]`, and raw pricing targets with percentage metrics.\n\n**Exercise 2 (The Prompt-Risk Audit):** Input the cleaned text into the enterprise workspace sandbox and run the audit prompt:\n\n> Act as a corporate compliance auditor. Audit this text block for any lingering data privacy issues, exposure of internal system settings, or potential regional compliance violations under local laws (PDPO/PIPL/DPDP). List any detected vulnerabilities in a markdown warning table.'
             }
        ]
       }
    ]
  }
];
