# Project Blueprint: MedTech Device Recall Monitor

## Project Overview
The **MedTech Device Recall Monitor** is a high-stakes, regulatory-compliant dashboard designed for hospital supply chain and quality managers. It provides real-time visibility into medical device recalls using the openFDA API, with a focus on Class I (life-threatening) alerts.

## Technology Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React
- **Charts:** Recharts
- **Data Source:** [openFDA Device Enforcement API](https://open.fda.gov/apis/device/enforcement/)

## Core Features
1. **Live Alert Feed:** Real-time fetching and display of medical device recalls, prioritized by Class I classification.
2. **Detailed Recall Cards:** High-visibility cards showcasing the manufacturer, device name, reason for recall (failure mode), and risk level.
3. **Keyword Filtering:** Search and filter recalls by manufacturer (e.g., Medtronic, Philips) or product category.
4. **QMS Analytics:**
   - Distribution patterns visualization.
   - Recall status tracking (Ongoing vs. Completed).
   - "Recall Velocity" trend chart (last 90 days).
5. **Urgency-Driven UI:** Visual indicators for risk levels (Urgent Red for Class I, Alert Amber for Class II).

## Data Mapping (openFDA JSON)
- `res_event_number` → Event ID
- `recalling_firm` → Manufacturer
- `product_description` → Device Name
- `reason_for_recall` → Failure Mode
- `classification` → Risk Level (Class I, II, or III)
- `distribution_pattern` → Geographic/Usage Scope
- `recall_initiation_date` → Initiation Date

## Design Aesthetics
- **Theme:** Professional "Quality & Safety" (Enterprise War Room)
- **Palette:**
  - Background: `bg-slate-50`
  - Class I (Urgent): `bg-red-700` / `text-white`
  - Class II (Alert): `bg-amber-500` / `text-black`
  - Typography: Mono fonts for technical IDs (Event ID, Lot Numbers).
- **Interactions:** Pulse animations for new alerts, expandable details, and truncated "Read More" logic for clinical context.

## Definition of Done
- Functional dashboard fetching real-time Class I recalls from openFDA.
- Searchable feed with manufacturer filtering.
- Visual trend chart for recall patterns.
- Responsive, premium design adhering to the "Quality Alert" palette.
- Proper error handling for API outages.
