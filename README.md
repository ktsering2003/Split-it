# SplitIt

## The Core Idea

**SplitIt is building the calm layer for shared money.**

Not a bill-splitting app.  
Not a finance tool.  
Not a calculator.

A calm layer.

---

## The Real Problem

Most people think the problem is:

> "Splitting money is annoying."

That's not it.

The real problem is this:

**Money creates tension when it's shared — not because of numbers, but because of people.**

What actually hurts:

- Reminding friends to pay
- Correcting unfair splits
- Feeling taken advantage of
- Worrying about sounding rude
- Holding silent resentment

Everyone has felt this.  
Almost no tool is designed around it.

**SplitIt exists to remove that tension.**

---

## Why Existing Solutions Fail

**Option 1: Manual tools** (Venmo notes, calculators, group chats)
- Too much thinking
- Too much back-and-forth
- Too much awkwardness
- Easy to mess up

**Option 2: Heavy finance apps**
- Overkill for simple moments
- Cold and impersonal
- Designed for budgets, not relationships

**The gap that SplitIt fills:**

People don't want spreadsheets, dashboards, or long setup.

They want:
- **Fairness** (the math is right)
- **Clarity** (everyone knows what they owe)
- **Peace of mind** (it doesn't become a thing)

Just like Furnished Finder lives between Airbnb and Zillow, SplitIt lives in that gap.

---

## What SplitIt Is Really About

SplitIt is not about money.

**It's about protecting relationships.**

You're building a product that says:

> "This moment doesn't need to be awkward."  
> "This doesn't need to be stressful."  
> "This doesn't need to turn into a problem."

That's why people will use it.

---

## What SplitIt Is Today

SplitIt helps people split shared expenses clearly and fairly, without stress.

**Today, SplitIt:**

- Add people and items
- Assign items visually
- Calculate exact totals (including tax and tip)
- Generate clean payment requests
- Show who's paid and who hasn't

That's it.

And that's intentional.

**Because trust comes from doing one thing extremely well.**

---

## The Long-Term Vision (3 Phases)

### Phase 1: Calm Splitting (Now)

Where you start:
- Meals
- Trips
- Shared purchases

**Success metric:** Users feel the math is fair and the moment stays calm.

### Phase 2: Calm Follow-ups (Next)

Where you add behavior:
- Smart nudges (gentle, not annoying)
- Timing-aware reminders
- Knowing when NOT to remind
- Organizer peace of mind

**Success metric:** People don't have to think about reminding. SplitIt handles it.

This is where SplitIt becomes sticky.

### Phase 3: The Shared Money Layer (Long-term)

Where you own a category:
- Roommates
- Families
- Events
- Small teams
- Recurring group spending

At that point, SplitIt isn't an app you "try once."

**It's something you rely on.**

---

## Why This Is a Real Startup (Not a Side Project)

SplitIt has:

✅ **A clear wedge** — group spending (meals, trips)  
✅ **A huge repeat market** — happens constantly  
✅ **Natural viral loop** — every split brings new users via share links  
✅ **Behavioral data layer** — who pays, when, patterns  
✅ **Multiple acquisition paths** — payments, fintech, CRM, travel, events  

This is how real companies start:

1. Small surface area (does one thing well)
2. Deep understanding (owns the moment)
3. Expanding outward (to adjacent moments)

---

## Why You're Building This (The Authentic Angle)

> "I noticed that when someone fronts money in a group, the stress doesn't come from paying — it comes from everything that happens after. I wanted to build something that removes that tension and keeps things fair without forcing uncomfortable conversations."

That's honest.  
That's relatable.  
That's enough.

---

## Your One-Liners (Pick by Audience)

Depending on who you're talking to, use the right framing:

**Ultra-simple** (anyone)  
"SplitIt helps people handle shared money without stress."

**Product-level** (users, investors)  
"SplitIt is the calm layer for shared money."

**Founder-level** (investors, founders, operators)  
"We're building infrastructure for moments where money involves more than one person."

**Interview-level** (recruiting, partnerships)  
"I started with expense splitting as a wedge, but the long-term goal is to reduce friction and awkwardness in shared financial moments."

---

## How to Talk About Next Steps

When someone asks:

> "What are you working toward?"

You say:

> "Right now, I'm focused on making the core experience incredibly reliable and calm. The next step is adding smart follow-ups so people don't have to think about reminding others. Long term, I want SplitIt to be the default way people handle shared money."

That answer shows:
- **Focus** (you know what matters now)
- **Restraint** (you're not building everything at once)
- **Ambition** (you have a real vision)
- **Maturity** (you're thinking like a founder)

---

## The Decision Framework for Building

Every feature decision should answer one question:

> **Does this reduce tension, or add it?**

If it adds tension — don't build it yet.

That's how you keep SplitIt honest and useful.

---

## Why This Is Acquirable

SplitIt becomes valuable because it:

✅ **Owns the moment of shared spending**  
✅ **Builds behavioral data** (know how people handle money together)  
✅ **Integrates naturally with payments** (Venmo, Stripe, etc.)  
✅ **Expands into a category** (roommates, teams, families)  

**Potential acquirers:**
- Payment apps (Venmo, PayPal, Square)
- Fintech platforms
- Travel & event platforms
- CRM companies wanting consumer behavior data

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, TailwindCSS
- **Backend:** Node.js, Prisma ORM
- **Database:** Postgres (Supabase)
- **Auth:** Clerk (organizers)
- **AI:** Google Gemini API (receipt OCR)
- **Deployment:** Vercel

---

## 🏃 Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

---

## 📋 Core Features (MVP)

- **📸 Receipt Scanning** — Upload receipt, AI extracts items automatically
- **👥 Smart Assignment** — Click to assign items to people visually
- **💰 Accurate Math** — Handles tax, tip, partial shares, and shared items
- **🔗 Share Links** — Organizer can edit, participants view + mark paid (no login)
- **📱 Mobile-Friendly** — Optimized for the moment (phones in restaurants)
- **✅ Payment Tracking** — See who's paid, who hasn't, pending status

---

## The Build Checklist

Use these Cursor prompts step by step:

1. **Scaffold:** "Create a Next.js 14 (App Router) + TypeScript project with TailwindCSS, Prisma, and Postgres (Supabase). Production-ready structure."

2. **Schema:** "Prisma schema for SplitIt: User, Group, SplitSession, Person, ReceiptItem, Assignment, PaymentStatus. Use UUIDs. Store money as integers (cents)."

3. **Engine:** "Implement computeSplit(session, items, assignments, taxCents, tipCents) → per-person totals in cents. Deterministic rounding. Unit tests."

4. **UI Flow:** "Build: CreateSession → AddPeople → AddItems → AssignItems → Totals. Minimal, calm design. Empty states that guide."

5. **Share Links:** "Unguessable tokens for share access. Organizer: edit. Participant: view + mark paid (no account)."

6. **Payments:** "Generate Venmo links + copyable messages per person. Include merchant, amount, memo."

7. **Event Tracking:** "Log: link_opened, reminder_sent, payment_marked. Simple rules engine for nudge recommendations."

8. **Security:** "Zod validation, rate limiting, no client secrets, input sanitation."

9. **Deploy:** "Vercel + Supabase with CI/CD."

---

## The Honest Assessment

You didn't need a new product.

You needed:
- A clearer story
- A believable trajectory
- A founder-level narrative

Now you have all three.

This is no longer:

> "An app I'm building"

This is:

> **"A company I'm starting."**

---

## 🏆 Built At

Klaviyo Winter 2026 Hackathon Challenge

---

**You're not selling code.  
You're selling the vision that shared money doesn't have to be awkward.**

## 📄 License

MIT License - feel free to use this for your own projects!

---

**Made with ❤️ by the SplitIt team**