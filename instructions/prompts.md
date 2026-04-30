To ensure high modularity and a clean separation of concerns, this series of prompts follows a **"Service-First"** architecture. This approach ensures that your API logic, UI components, and state management are decoupled, so a change to the FDA data schema won't break your entire layout.

Feed these to your AI Builder one by one:

---

### Prompt 1: Project Scaffolding & Blueprinting
> "Initialize the project using the **instructions.md** file provided. Create the `project_specs.md` blueprint. Set up a Vite + React + Tailwind CSS environment. Create a folder structure that separates components, hooks, and services (e.g., `/src/api`, `/src/components`, `/src/hooks`). Establish the global Tailwind theme using the 'Quality Alert' palette: `bg-slate-50` for background, `red-700` for Class I alerts, and `amber-500` for Class II."

### Prompt 2: API Service Layer (openFDA Integration)
> "Create a standalone API service file `src/api/fdaService.js`. Implement a function to fetch device enforcement data from the openFDA API. It must support filtering by `classification` (default to 'Class I') and a search term for `recalling_firm`. Include a utility function to normalize the raw JSON response into a clean object mapping `res_event_number` to `id`, `recalling_firm` to `manufacturer`, and `reason_for_recall` to `reason`."

### Prompt 3: Data Hook & Error Handling
> "Create a custom React hook `src/hooks/useRecalls.js` that manages the API state. It should handle loading states, error catching (specifically for API rate limits), and data storage. Ensure the hook allows for 'Indication' or 'Manufacturer' query updates without a full page reload, implementing the 'Graceful Failure' UI logic defined in the instructions."

### Prompt 4: Atomic UI Components (Cards & Badges)
> "Build a set of modular UI components in `src/components/shared`. 
> 1. A `RecallBadge` component that takes a classification and returns the themed badge (Red for Class I, Amber for Class II). 
> 2. A `RecallCard` component that displays the 'Reason for Recall', 'Product Description', and 'Manufacturer'. 
> 3. Use Lucide-React icons for visual cues. Implement 'Read More' truncation for long text blocks."

### Prompt 5: The Alert Feed & Search Interface
> "Assemble the `RecallFeed.jsx` component. It should use the `useRecalls` hook to map data into a list of `RecallCard` components. Add a search bar at the top that allows users to filter by manufacturer or device type. Implement skeleton loaders for the fetching state to maintain 'Professional Density' as per the aesthetic principles."

### Prompt 6: Analytics Dashboard (Top-Level Metrics)
> "Create an `AnalyticsSummary.jsx` component using Recharts. Display three high-level metric cards: 'Total Active Class I Recalls', 'Top 3 Impacted Manufacturers', and a 'Recall Velocity' bar chart showing volume by month. This component should sit above the feed to provide an instant 'War Room' overview for a manager."

### Prompt 7: Refinement & Polishing
> "Finalize the application styling. Apply the `bg-slate-50` background to the main layout and ensure all cards have a subtle hover-highlight. Verify that all dates are formatted to `MMM DD, YYYY`. Ensure the layout is responsive for both desktop 'War Room' viewing and mobile quick-scans."

---

### Why this works for modularity:
* **The API logic** is isolated in Prompt 2. If the FDA changes their URL, you change one file.
* **The UI components** in Prompt 4 don't care where the data comes from; they just render what they are given.
* **The Business logic** (filtering Class I only) is handled in the custom hook in Prompt 3.

Which part of the MedTech monitor should we prioritize first: the real-time alert feed or the analytics dashboard?