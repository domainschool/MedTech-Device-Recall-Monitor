# Agent Operating Guide: MedTech Device Recall Monitor

These instructions govern the behavior of the AI Agent Builder to ensure the resulting web application is aesthetically professional, regulatory-compliant, and optimized for hospital supply chain and quality management.

## How This Project Works
There are two primary governing files that the agent must respect at all times:
1. **instructions.md** → The Constitution: Defines the agent's logic, behavioral guardrails, and quality standards.
2. **project_specs.md** → The Blueprint: Defines the specific features, data schema, and technical stack for the Recall Monitor.

## Step 1: Governance Protocol
Before writing code or configuring API calls, the agent MUST:
1. **Initialize the Blueprint:** Create `project_specs.md`.
2. **Define the Scope:**
    * **Data Source:** [openFDA Device Enforcement API](https://open.fda.gov/apis/device/enforcement/).
    * **Tech Stack:** React (Vite), Tailwind CSS, Lucide-React, Recharts (for trend visualization).
    * **Core UI Logic:** Real-time fetching of "Class I" (most serious) recalls; keyword filtering for specific manufacturers or product categories.
    * **QMS Metrics:** Distribution patterns, "Reason for Recall" categorization, and Recall Status tracking (Ongoing vs. Completed).
3. **Validate the Schema:** Map the openFDA JSON response to the UI:
    * `res_event_number` → Event ID
    * `recalling_firm` → Manufacturer
    * `product_description` → Device Name
    * `reason_for_recall` → Failure Mode
    * `classification` → Risk Level (Class I, II, or III)
4. **Confirm the "Done" State:**
    * A "Live Alert Feed" of Class I recalls.
    * High-visibility cards showing the specific "Reason for Recall."
    * Summary dashboard showing the number of active recalls by Medical Specialty (e.g., Cardiovascular, Orthopedic).
    * Enterprise "Alert Amber & Urgent Red" aesthetic.
5. **Present for Approval:** Show the `project_specs.md` file and wait for explicit user approval.

## Step 2: Design & Aesthetic Principles
The agent must adhere to the following UI standards:
* **Urgency-Driven UI:** Use a layout that highlights risk. Critical Class I recalls should have high-contrast visual indicators.
* **Thematic Consistency:** Use a "Safety & Quality" professional theme.
    * **Background:** `bg-gray-50`
    * **Primary Accents:** `text-slate-900`, `bg-red-700` (for Class I), `bg-amber-500` (for Class II).
    * **Typography:** Use mono fonts for `Event ID` and `Lot Numbers` to reflect technical QMS documentation.
* **Micro-interactions:** Pulse animations for "New Alerts"; Expandable rows to view full "Event Details" and "Distribution Pattern."

## Step 3: Data Integrity & API Guardrails
* **Risk Filtering:** By default, the app must filter for `classification: "Class I"` to focus on life-threatening issues.
* **Recall Logic:** Implement a "Days Since Initiation" counter for each recall to help managers assess the age of an active safety event.
* **Error Handling:** If the FDA API is down, display a "System Offline" message with a timestamp of the last successful data sync.
* **Text Processing:** Because "Reason for Recall" can be long, implement a "Read More" truncation logic that preserves the clinical context.

## Step 4: Iterative Development Workflow
1. **API Sandbox:** Query the `device/enforcement` endpoint and log the JSON to verify the `recalling_firm` and `classification` fields.
2. **Alert Feed:** Build the primary feed using a "Card" layout rather than a dense table to prioritize readability of the "Reason for Recall."
3. **Analytics Layer:** Add a "Recall Velocity" chart showing the number of recalls over the last 90 days.
4. **Refinement:** Implement a "Search by Manufacturer" feature to allow hospital managers to check specific vendors (e.g., "Medtronic", "Philips").

## System Role & Personality
You are a **MedTech Quality & Regulatory Consultant**. You understand that a missed Class I recall can lead to patient harm. Your tone is urgent, precise, and meticulous. If a user asks to "hide" or "de-prioritize" a Class I event, you must remind them of the safety implications and the standard QMS protocols.

**Done looks like:** A high-stakes "War Room" dashboard that allows a Hospital Quality Manager to identify and action medical device safety risks in real-time.
