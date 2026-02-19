# City Guide for Foreigners — Strategy: Automate

## Why Automate?

A city guide lives or dies on curation — and curation at scale, personalized to dozens of different user personas, is impossible to do manually. The Automation mode turns a static guide into a living, learning product: one that gets better with every user interaction, proactively surfaces new recommendations, and handles the "find me something like that but cheaper" request without a human curator in the loop.

---

## The Core Problem: One City, Infinite Personas

"Foreigner in a new city" is not one persona. It's a Japanese engineer on a 1-year contract, a Brazilian student for a semester, a French retiree moving permanently, a Korean family relocating for a parent's job. Each needs completely different information, at different depths, on different timelines. Automation is the only way to serve all of them from one product.

---

## Automated Workflows to Build

### 1. Personalized Onboarding Pipeline
- User completes an intake quiz: home country, budget tier, reason for visit (work / study / family / retirement), interests (food, nightlife, outdoors, culture, community), time horizon (weeks / months / years), neighborhood preference if any
- Claude processes the intake and generates a fully personalized city guide:
  - Top 10 neighborhoods with a "why this fits you" explanation for each
  - Curated lists for: food, transport, services (banking, healthcare, phone), social/community
  - A "first 72 hours" checklist specific to their situation
- Output delivered as a clean, shareable document within seconds of intake completion

### 2. Preference Learning Loop
- Every time a user saves, rates, or dismisses a recommendation, Claude updates their preference model:
  - Saved + visited + positive review → reinforce similar recommendations
  - Dismissed → flag the category/price range/neighborhood for exclusion
  - "Find me something like this but cheaper" → Claude parses the saved item's attributes and filters by budget
- No manual curation needed — the guide improves with usage

### 3. Proactive Recommendation Push
- Weekly: Claude scans the user's saved places and preference model, surfaces 3–5 new recommendations they haven't seen yet with a "based on what you've liked" explanation
- Seasonal: Claude flags time-sensitive recommendations (festivals, outdoor markets, seasonal restaurant menus) relevant to the user's interest profile
- Milestone-based: at 30 days, 90 days, 6 months — Claude generates a new "what to explore next" guide appropriate to that stage of settling in

### 4. Community Knowledge Aggregation
- Claude continuously synthesizes new inputs from expat forums, subreddits, and local community sources
- Flags when a previously recommended place closes, changes significantly, or gets a wave of negative feedback
- Surfaces emerging spots — new restaurants, new neighborhoods gentrifying — before they appear in mainstream guides
- Output: a "What's Changed" digest pushed to users monthly

### 5. Multi-Language Output
- All generated content is available in the user's native language, not just English
- Claude handles the translation natively — no separate localization pipeline needed
- Culturally calibrates the framing: what a Japanese user considers "expensive" differs from a Brazilian student's threshold; Claude adjusts its language accordingly

---

## Why This Mode Wins for This Project

| Challenge | Static Guide / Manual Curation | Automated Approach |
|-----------|-------------------------------|-------------------|
| Serving multiple personas | One generic guide | Personalized from intake, adapted over time |
| Keeping content fresh | Periodic manual updates | Continuous synthesis of new sources |
| Scaling to new cities | Months of research per city | Claude synthesizes local sources in hours |
| Handling "find me something like X" | Not possible | Preference model + real-time Claude query |
| Language access | English-only or expensive localization | Claude outputs in user's native language natively |

---

## Why Automation Beats a Static App Here

The city guide category is saturated with static lists (Lonely Planet, Time Out, Tripadvisor). The defensible position is not more listings — it's a guide that knows you. Automation is what makes that possible at scale. A human curator can serve 10 personas with deep personalization. Claude running automated workflows can serve 10,000.

---

## Key Insight

"Foreigner in a new city" is not one persona — it's a Japanese engineer on a 1-year contract, a Brazilian student for a semester, a French retiree moving permanently. Claude lets you serve all of them with one product because the automation layer handles the personalization that would otherwise require a team of local experts.

> The edge is the local knowledge layer, delivered with the personalization of advice from a friend who actually lives there. Automation makes that scalable.
