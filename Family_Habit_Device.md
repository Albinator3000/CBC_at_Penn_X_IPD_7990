# Family Habit Device — Strategy: Automate

## Why Automate?

The Family Habit Device faces the universal challenge of habit products: engagement decay. Week 1 is exciting. Week 2 is routine. Week 3 is when it gets deleted. The only way to survive week 3 is to make the product feel like it knows your family — not a generic app. Automation is the mode that makes personalization at the family level scalable: weekly reports that feel written for you, encouragement messages that fit each child's personality, early warning before a habit dies.

---

## The Core Problem: Week 3

Habit products live and die on week 3, not week 1. Novelty drives week 1 adoption. Routine drives week 2 retention. But week 3 is when the habit itself becomes the obstacle — kids forget, parents stop reminding, streaks break. The automated loop is what intervenes before the app gets uninstalled.

---

## Automated Workflows to Build

### 1. Weekly Family Report Card
Every Sunday evening, Claude auto-generates a personalized family report:
- Each family member's habit completion rate for the week
- Streaks: current streak, longest streak, streaks at risk of breaking
- Highlight: one moment of genuine progress to celebrate (Claude finds it in the data)
- Gentle flag for habits showing decline
- Tone calibrated to the family's engagement history — celebratory if it was a strong week, encouraging if it was a rough one

The report is delivered in-app and optionally via email. It takes zero effort from parents to produce.

### 2. Child-Specific Encouragement Messages
- Each child has a profile: age, habits, streak history, reward preferences, personality tags set by parents (competitive / needs encouragement / responds to humor)
- Claude generates daily or milestone-triggered messages tailored to each child:
  - "You've brushed your teeth 14 days in a row — that's two full weeks! What's your goal for next week?"
  - "Tough week — streaks break sometimes. You've done this habit 47 times total. That's the number that matters."
- Messages are never generic. Claude uses the child's actual data and the parent's personality tags.

### 3. Habit Abandonment Early Warning
- Claude monitors completion rates at the habit level
- If a habit drops below 50% completion for 5 consecutive days, trigger:
  - A parent alert: "Teeth brushing is being skipped — here are 3 adjustments that might help"
  - An optional in-app prompt to the child: "This habit has been harder lately. Want to adjust the goal or the reward?"
- Early intervention before the streak is fully broken is dramatically more effective than re-engagement after

### 4. New Habit Suggestions
- After 4 weeks, Claude analyzes which habits are thriving and which are dying
- Generates personalized suggestions for new habits based on what's working:
  - If the child is crushing physical habits (exercise, outdoor time), suggest a new physical challenge
  - If academic habits are lagging, suggest a lower-stakes version (10 min reading vs. 30)
- Presents suggestions to parents with reasoning: "Based on [child]'s pattern, we think this habit would fit well"

### 5. Family Archetype Calibration
- Families configure their "style" during onboarding: competitive household / relaxed / achievement-focused / just trying to build basics
- All automated outputs — report cards, encouragement messages, suggestions — are toned to match the family archetype
- Claude adjusts language: a competitive family gets leaderboard framing ("You're 3 habits ahead of last week!"), a relaxed household gets gentler language ("You're building something that lasts")

---

## Why This Mode Wins for This Project

| Engagement Challenge | Without Automation | With Automation |
|---------------------|-------------------|----------------|
| Week 3 dropout | App goes silent, family forgets | Weekly report card re-engages the family |
| Generic encouragement | Same message for every child | Tailored to age, personality, and actual streak data |
| Habit abandonment | Noticed after deletion | Flagged at day 5 of decline, intervention triggered |
| New habit discovery | Static library | Personalized suggestions based on what's working |
| Parent effort | High (must check app, manually motivate) | Low (Claude does the prompting, parent approves) |

---

## The Retention Math

A habit app with no automated re-engagement has a typical 30-day retention rate of 10–15%. An app that sends a personalized weekly report, catches habit abandonment early, and delivers encouragement that feels written for your specific child can realistically double that. Week 3 retention is the product.

---

## Key Insight

Habit products live and die on week 3, not week 1. Design for the moment when it stops being fun — that's where you earn your place in the family routine or get deleted. Automation is what makes "the app still feels like it knows us" possible at month 3, not just day 3.

> The automated loop — weekly report card, early warning, personalized encouragement — is not a feature. It's the product's survival mechanism.
