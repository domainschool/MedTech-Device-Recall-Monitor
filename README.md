# 🩺 MedTech Device Recall Monitor

### **Mission-critical intelligence bridging the gap between quality management and patient safety.**

[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind-blue)](https://github.com/domainschool/MedTech-Device-Recall-Monitor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/domainschool/MedTech-Device-Recall-Monitor/pulls)
[![OpenFDA API](https://img.shields.io/badge/Data-OpenFDA-red)](https://open.fda.gov/)

---

## 🚀 Live Demo
**[View Live Application](https://domainschool.github.io/MedTech-Device-Recall-Monitor/)**

---

## 🏗️ The Business Problem: The "Post-Market" Blind Spot

In the Medical Device industry, patient safety doesn't end at the point of sale. Companies are legally required to perform **Post-Market Surveillance (PMS)**. However, healthcare providers and quality managers face three critical hurdles:

1.  **Data Fragmentation:** FDA data resides in complex, raw databases that are difficult for supply chain managers to scan quickly.
2.  **Latency in Action:** Every hour a Class I (life-threatening) device remains in a hospital cabinet, patient risk increases.
3.  **Information Overload:** Teams are often overwhelmed by low-risk notices, potentially missing the "Class I" signals that require immediate intervention.

The **MedTech Device Recall Monitor** transforms raw regulatory data into actionable intelligence for hospital supply chains and quality management systems (QMS).

---

## 🧠 Core Features & Domain Logic

### Key Features
- **Real-Time FDA Integration:** Direct sync with `openFDA` Enforcement API for up-to-the-minute recall data.
- **Quality Alert Dashboard:** A "War Room" aesthetic prioritizing Class I critical alerts.
- **Risk-Level Analytics:** Visual trend analysis and "Recall Velocity" metrics using Recharts.
- **Advanced Filtering:** Segment recalls by manufacturer (e.g., Medtronic, Philips) and risk classification.

### ⚖️ Domain Logic: The Hierarchy of Risk
This application is built around the **FDA 21 CFR Part 7** regulatory framework, which classifies recalls based on health risk:

-   **Class I (Critical):** Reasonable probability that the use of the product will cause serious adverse health consequences or death.
-   **Class II (Moderate):** Use of the product may cause temporary or medically reversible health problems.
-   **Class III (Low):** Use of the product is not likely to cause adverse health consequences.

The system applies a **Risk-First Normalization** algorithm that maps raw FDA response keys (e.g., `res_event_number`) to a clinical-first data model, ensuring that stakeholders see **Manufacturer**, **Product Name**, and **Risk Level** as the primary identifiers.

---

## 💻 Tech Stack & Architecture

### The Stack
- **Frontend:** React 18 + Vite (for sub-second HMR)
- **Styling:** Tailwind CSS (custom "Quality Alert" design system)
- **Icons:** Lucide-React (medical and regulatory iconography)
- **Charts:** Recharts (for data visualization)
- **API:** Fetch API with a normalized service layer

### How It Works: Service-First Design
The application utilizes a **decoupled architecture** to ensure reliability and maintainability:
1.  **API Layer (`fdaService.js`):** Acts as the "Translator," fetching and normalizing raw JSON from `openFDA`.
2.  **Hook Layer (`useRecalls.js`):** Acts as the "Brain," managing state lifecycle and implementing **Graceful Failure** (showing last successful sync if the API is throttled).
3.  **UI Layer:** Functional components like `RecallFeed` and `AnalyticsSummary` consume cleaned data to render high-fidelity views.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS)
- [pnpm](https://pnpm.io/) (Recommended)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/domainschool/MedTech-Device-Recall-Monitor.git
    cd MedTech-Device-Recall-Monitor
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables:**
    ```bash
    cp .env.example .env
    ```
    *(Optional: Add your `VITE_FDA_API_KEY` for higher rate limits).*

4.  **Launch the development server:**
    ```bash
    pnpm run dev
    ```

---

## 🗺️ Future Roadmap
- [ ] **Inventory Matching:** Integration with hospital ERPs to auto-match recalls with active inventory lot numbers.
- [ ] **AI-Forecasting:** Predictive modeling to identify manufacturers with rising failure trends before a recall is issued.
- [ ] **Sentiment Analysis:** AI-powered summarization of "Reason for Recall" text to provide 2-sentence executive summaries.

---

## 🎓 Built with the Domain School Framework

**This project was developed as part of a mission to bridge the gap between technical execution and industry domain knowledge. We build software that solves real-world business problems.**

Traditional coding tutorials focus on *how* to build. We focus on *why* it matters.

🔗 **Follow [Domain School](https://github.com/domainschool) for more industry-aligned, high-fidelity projects.**
