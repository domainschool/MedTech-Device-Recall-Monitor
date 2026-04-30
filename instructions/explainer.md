# MedTech Device Recall Monitor: Technical Explainer

This document provides a high-level overview of the application's architecture, data flow, and module responsibilities for developers and quality managers.

---

## 🏗️ Architecture: "Service-First" Design
The application is built using a **decoupled architecture**. This means the logic for talking to the FDA is separate from the logic for managing state, which is separate from the UI components. 

**Why this matters:** If the FDA changes their data format tomorrow, we only update one file (`fdaService.js`), and the rest of the application continues to function perfectly.

---

## 📁 Directory Structure
```text
src/
├── api/          # External Data Integration
├── components/   # UI Views & Layouts
│   └── shared/   # Atomic UI Elements (Badges, Cards)
├── hooks/        # Reactive State Management
├── utils/        # Shared Helper Functions
├── App.jsx       # Main Entry & Routing
└── index.css     # Design System & Tailwind Directives
```

---

## 🧩 Module Breakdown

### 1. API Layer (`src/api/fdaService.js`)
*   **Role:** The "Translator."
*   **Function:** Communicates with the `openFDA` servers. It fetches raw JSON data and **normalizes** it.
*   **Key Logic:** It maps confusing FDA keys (like `res_event_number`) to friendly names (like `id`) so the rest of the app is easy to read.

### 2. Custom Hooks (`src/hooks/useRecalls.js`)
*   **Role:** The "Brain."
*   **Function:** Manages the lifecycle of the data. It tracks whether the app is `loading`, if an `error` occurred, and stores the `recalls` list.
*   **Key Logic:** Implements **Graceful Failure**. If the API goes offline, this hook ensures the app shows the "Last Successful Sync" time instead of just crashing.

### 3. Components (`src/components/`)
*   **RecallFeed.jsx:** The "Assembly Line." It takes the data from the hook and maps it into individual cards. It also handles the search and filtering logic.
*   **AnalyticsSummary.jsx:** The "Dashboard." It performs real-time math on the recalls (e.g., counting Class I alerts) and renders the trend charts.
*   **AboutPage.jsx:** The "Knowledge Base." A dedicated view for domain education and stakeholder value.

### 4. Shared Components (`src/components/shared/`)
*   **RecallCard.jsx:** The "Information Unit." Displays specific details for one recall. Includes "Read More" logic for long clinical descriptions.
*   **RecallBadge.jsx:** The "Visual Cue." A tiny component that purely handles the Red/Amber/Slate color logic for risk levels.

---

## 🌊 Data Flow: How it Works
1.  **Trigger:** A user types "Medtronic" in the search bar.
2.  **Hook:** `useRecalls` detects the filter change and calls the `fdaService`.
3.  **Fetch:** `fdaService` builds a URL and requests data from the FDA.
4.  **Normalize:** `fdaService` cleans the data and sends it back to the hook.
5.  **Render:** The hook updates the state, causing the `RecallFeed` and `AnalyticsSummary` to re-render with the new "Medtronic" data.

---

## 🎨 Design System: "Quality Alert"
The app uses a strict color palette defined in `tailwind.config.js`:
*   **Critical Red (`#b91c1c`):** Reserved for Class I (Life-threatening) events.
*   **Warning Amber (`#f59e0b`):** Used for Class II (Moderate) alerts.
*   **Slate Background (`#f8fafc`):** Provides a clean, clinical "War Room" aesthetic.

---

## 🛠️ Tech Stack
*   **Vite + React:** For ultra-fast development and performance.
*   **Tailwind CSS:** For custom, utility-first styling.
*   **Lucide-React:** For medical and regulatory iconography.
*   **Recharts:** For data visualization and recall velocity trends.
