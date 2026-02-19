# Language Learning for Intermediates — Strategy: Agentic (Claude Code)

## Why Agentic?

The intermediate language plateau — the B1/B2 grind — exists precisely because learners need something that generic apps cannot provide: a patient, adaptive, conversational partner who responds to what you actually say, not what a lesson plan expects you to say. Claude Code lets you build this product from scratch in hours, not months. The core experience IS a live Claude conversation, and Claude Code is the right tool to wire it together, track progress, and make it smarter over time.

---

## The Core Problem: Flashcards Don't Fix the Plateau

Duolingo, Babbel, and every flashcard app optimizes for beginner acquisition. At the intermediate level, the blocker is production — forming real sentences, handling unexpected responses, navigating ambiguity. That requires a sparring partner, not a quiz. Claude Code lets you build the sparring partner.

---

## What to Build with Claude Code

### 1. Conversational Practice Interface
- User selects: target language, topic (ordering food, job interview, discussing current events, small talk), and difficulty level
- Claude conducts a natural conversation in the target language — responding, asking follow-up questions, and gently redirecting when the user gets stuck
- The interface is minimal: a clean chat window with input in the target language, subtle UI cues for when corrections occur

### 2. Passive Error Tracking Layer
- Claude runs two processes simultaneously during conversation:
  1. The visible conversation in the target language
  2. A background log of: vocabulary the user avoided (circumlocuted around), grammatical structures that were incorrect, words that were mispelled or misused
- This tracking is invisible to the user during the session — it should feel like conversation, not a test

### 3. End-of-Session Debrief
After each session, Claude generates a structured debrief:
- **Vocabulary gaps:** 5–10 words/phrases the user didn't use or used incorrectly, with examples of correct usage
- **Grammar patterns to review:** specific structures that appeared in errors (e.g., "subjunctive after expressions of doubt — you used indicative 3 times")
- **What you did well:** genuine strengths from the session to reinforce confidence
- **Suggested focus for next session:** one specific skill or topic to target

### 4. Persistent Difficulty Profile
- Each session's debrief data is stored in a simple local or cloud database
- Claude reads the profile at the start of each new session and adjusts:
  - Introduces vocabulary from the user's known gap list
  - Steers conversation toward structures the user struggles with
  - Tracks improvement over time (word appears in gap list → later used correctly → removed from list)

### 5. Topic & Scenario Library
- Build a library of conversation scenarios with increasing complexity:
  - Beginner scenarios: buying something, asking for directions
  - Intermediate scenarios: explaining a problem, giving an opinion, describing a past event
  - Advanced scenarios: debating a position, navigating ambiguity, professional contexts
- Claude selects scenarios based on the user's difficulty profile, not just their self-reported level

---

## Build Sequence with Claude Code

1. **Session 1 (2–3 hours):** Basic chat interface + language selection + one working conversation topic
2. **Session 2:** Add error tracking and end-of-session debrief
3. **Session 3:** Add persistent difficulty profile + adaptive conversation seeding
4. **Session 4:** Build topic library + polish UI + add session history view

A working, differentiated MVP in 4 focused work sessions.

---

## Why This Mode Wins for This Project

| Capability | Duolingo / Babbel | Your Claude-Powered Product |
|------------|------------------|----------------------------|
| Conversation | Scripted dialogues | Fully adaptive, responds to what you actually say |
| Error feedback | Immediate, binary (right/wrong) | Contextual, end-of-session, pattern-based |
| Personalization | Level-based | Individual difficulty profile, updated each session |
| Topics | Fixed curriculum | User-selected + Claude-adaptive |
| The plateau problem | Not addressed | This IS the solution |

---

## Key Insight

The intermediate plateau exists because learners need a patient, adaptive sparring partner — not more flashcards. That's the moat. No incumbent is building this because it requires a model capable of genuine open-ended conversation and meta-level error analysis at the same time. Claude does both.

> Build the thing that fixes the plateau. It doesn't exist yet. Claude Code lets you ship it this semester.
