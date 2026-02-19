# Pet Health Detector — Strategy: Augment

## Why Augment?

The Pet Health Detector is a product where the hardest problem is not technical — it's epistemic. How do you build something genuinely useful for pet owners without practicing veterinary medicine? How do you draw the line between "reassure" and "escalate"? These are questions that require deep, structured thinking — and Claude as a thinking partner is the right mode for getting them right before a single line of code is written.

Getting this wrong is a liability. Getting it right is the defensible moat.

---

## The Core Problem: Useful Without Being Wrong

A symptom checker that over-reassures a pet owner whose animal needs emergency care is dangerous. One that sends every user to the emergency vet is useless. The product's value is entirely in the quality of its triage logic and the clarity of its output language — both of which require serious augmentation work upfront.

---

## Augmentation Strategies

### 1. Build the Triage Logic Framework
Use Claude to think through the decision tree before writing any code:
- What are the high-risk symptom combinations that always warrant emergency escalation? (e.g., difficulty breathing, collapse, suspected toxin ingestion)
- What are the moderate-risk scenarios that warrant "schedule a vet within 24–48 hours"?
- What are the low-risk scenarios where "monitor at home for 48 hours" is genuinely appropriate?
- How does this change by species (dog vs. cat vs. rabbit), age (puppy vs. senior), and pre-existing conditions?

Claude can generate a structured symptom-severity matrix across all these dimensions — work that would take weeks of veterinary literature review.

### 2. Draft Responsible Output Language
The exact wording of your triage outputs is a product and legal decision, not just a UX decision. Use Claude to:
- Draft output templates for all three triage levels that are clear, non-alarming, and non-diagnostic
- Write language that conveys urgency without causing panic
- Include explicit "this is not a substitute for veterinary advice" framing that is honest — not boilerplate — and appears in context where it matters
- Test edge case phrasings: "your pet may be experiencing..." vs. "your pet has..." — the second is a diagnosis, the first is not

### 3. Build a Responsible Disclosure & Liability Framework
Use Claude to draft:
- Terms of service that accurately describe what the product does and doesn't do
- A "known limitations" section: what symptom types are outside the model's reliable range?
- A data retention and privacy policy for health data (pets, but still sensitive)
- An escalation protocol: what happens when a user reports that a low-risk triage was wrong?

### 4. Stress-Test the Model's Edge Cases
Prompt Claude with adversarial scenarios:
- "A user reports their cat hasn't eaten in 3 days but otherwise seems normal — what's the right triage, and why is this tricky?"
- "A dog ate a grape. The user describes it as 'just one small grape.' What do you say?"
- "A user says their pet 'seems off' but can't describe specific symptoms. How do you triage nothing?"

These are the scenarios where the product either earns trust or destroys it. Work through them in augmentation before they appear in production.

### 5. Vet Partner Positioning
Use Claude to draft the pitch to veterinary partners:
- What data can you share with vet practices that makes them want to be listed in your referral network?
- How do you frame the product to vets as a triage filter that reduces unnecessary visits (good for them) while catching genuine emergencies earlier (good for pets)?
- Draft a one-page partner brief

---

## Why This Mode Wins for This Project

| Challenge | Without Augmentation | With Augmentation |
|-----------|---------------------|------------------|
| Triage logic | Guessed or too generic | Species/age/symptom-specific, literature-backed |
| Output language | Potentially alarming or dismissive | Calibrated, legally defensible |
| Liability exposure | Discovered after launch | Addressed in design |
| Vet partner credibility | "We built an app" | "Here's our clinical framework and disclosure policy" |
| Edge case handling | Found in production | Stress-tested before launch |

---

## Key Insight

The triage model is the product. The code is almost secondary — a well-designed triage decision tree with carefully crafted output language, running on Claude, is a genuinely useful and defensible tool. The augmentation work IS the product design work.

> The defensible thing is knowing exactly where the line is between "reassure" and "escalate." Claude helps you find that line before your users find it for you.
