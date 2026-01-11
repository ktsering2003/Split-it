# SplitIt

## The Hook

**Money doesn't ruin moments because of math — it ruins moments because of awkwardness.**

## The Promise

**SplitIt keeps things fair, clear, and calm when people spend together.**

---

## Why Now

We split payments constantly:

- 🍽️ Group dinners
- ✈️ Trips
- 🏠 Roommates
- 🎉 Events
- 📱 Shared subscriptions

But the tools are either:

- **Too manual** — Venmo notes + calculators = messy, error-prone, awkward
- **Too heavy** — Finance apps, spreadsheets = overkill for a simple moment

**SplitIt lives in between.**

---

## The Product Vision

### Phase 1: "Calm Split" (MVP)

The core flow that solves the problem:

- Create a split session
- Add items (manually or via receipt upload)
- Assign people to items visually
- Automatic, accurate calculation
- Payment request link
- Paid/pending tracker

Everything built for trust through precision.

### Phase 2: "Smart Follow-up" (Real Product)

Gentle, personalized reminders based on behavior — not spam.

- "Nudge without awkwardness"
- Track: link opened, payment marked paid, reminders sent
- Smart recommendation engine for when to follow up

### Phase 3: "Trust + History" (Moat)

Build repeat use and retention:

- People profiles: "This is how we usually split"
- Trip/dinner history
- Repeat groups (roommates, friend circles, teams)
- Behavioral data that makes you indispensable

**This is how SplitIt becomes a real company.**

---

## Why SplitIt Is Acquirable

SplitIt becomes valuable because it:

✅ **Owns the moment of shared spending** — highest intent, highest friction point  
✅ **Builds trust + history + intent data** — unique behavioral layer  
✅ **Integrates with payments** — Venmo, Stripe, payment processors  
✅ **Integrates with platforms** — travel apps, event platforms, CRM tools  

**Potential acquirers:**

- Payment apps (Venmo, PayPal)
- Expense/finance platforms
- Travel & event platforms
- Consumer fintech companies

---

## The Best Wedge to Get Real Users

**Start with group dining + trips.**

Why? It's:
- Frequent (weekly or more)
- Emotionally painful (money + friendship = awkward)
- Viral by nature (every split creates new users)

Then expand into:
- Roommates
- Clubs & student orgs
- Small teams
- Creators & event organizers

---

## How to Build It (Step by Step)

### Step 1: Core Stack (Startup-Grade)

- **Next.js 14** + TypeScript (App Router)
- **Postgres** (Supabase free tier) or SQLite locally
- **Prisma** ORM
- **Clerk** (auth for organizers, optional initially)
- **Vercel** for deployment

**Recommendation:** Start with Supabase + Vercel for real users.

### Step 2: Data Model (Foundation)

Entities:
- `User` — organizers
- `Group` — recurring split group
- `SplitSession` — individual split
- `Person` — participant in a session
- `ReceiptItem` — line item
- `Assignment` — which person owes for which item
- `PaymentStatus` — tracking who paid

**Key principle:** Store money as integers (cents), use UUIDs for all IDs.

### Step 3: The Split Engine (Your Secret Sauce)

This is what builds trust.

Rules:
- Cents only (no floating point)
- Assigned items charged to assigned people
- Shared items split evenly
- Tax/tip distributed proportionally by subtotal
- **Totals always reconcile to the penny** ← this is the differentiator

### Step 4: Core UI Flow

```
CreateSession 
  → AddPeople 
    → AddItems 
      → AssignItems 
        → Totals & PaymentRequest
```

Design principles:
- Minimal, calm aesthetic
- Visual feedback (who owes whom)
- Empty states that guide users
- Mobile-first

### Step 5: Share Links (The Growth Mechanic)

No login required for participants. Unguessable tokens.

Generate two links:
- **Organizer link** — edit, manage, track payments
- **Participant link** — view your share, mark paid, no account needed

This is how it spreads virally.

### Step 6: Payments Without Being a Bank

You don't need to process payments. You need to make paying easy.

Generate per-person:
- Venmo payment link + memo
- Zelle message text
- Copy button

Later phase: Stripe for direct transfers.

### Step 7: Smart Follow-ups (The Differentiator)

Track events:
- `link_opened`
- `payment_marked_paid`
- `reminder_sent`
- `reminder_clicked`

Simple rules engine recommends:
- "Send gentle reminder" 
- "Wait 24h"
- "Escalate to organizer"

This is where you look like a real company, not a hackathon project.

### Step 8: Production Security (Minimum Viable Trust)

- Server-side validation with **Zod**
- No secrets exposed to client
- Rate limiting on public endpoints
- Input sanitation
- Clear security documentation

### Step 9: Deploy & Get Real Users

Launch:
1. Deploy on Vercel
2. Post in friend group chats
3. Recruit from:
   - College orgs
   - Professional networks (ColorStack, ALPFA)
   - Reddit / Product Hunt
4. Ask: *"Did this feel calmer than Venmo notes?"*

**Growth loop:** Every split creates multiple share links → new users discover it naturally.

---

## 🚀 Features (MVP)

- **📸 Receipt Scanning** — Upload receipt, AI extracts items
- **👥 Smart Assignment** — Click to assign items to people
- **💰 Accurate Math** — Handles tax, tip, and partial shares perfectly
- **🔗 Share Links** — Organizer can edit, participants view their share
- **📱 Mobile-Friendly** — Works great on phones
- **✅ Payment Tracking** — See who paid, who hasn't

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, TailwindCSS
- **Backend:** Node.js, Prisma ORM
- **Database:** Postgres (Supabase)
- **Auth:** Clerk (optional initially)
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

## 📋 Cursor Command Checklist

Copy/paste these into Cursor to build step by step:

1. **Scaffold:** "Create a Next.js 14 (App Router) + TypeScript project with TailwindCSS, Prisma, and Postgres (Supabase)."

2. **Schema:** "Design a Prisma schema for SplitIt with: User, Group, SplitSession, Person, ReceiptItem, Assignment, PaymentStatus. Use UUIDs. Store money in cents."

3. **Engine:** "Implement computeSplit(session, items, assignments, taxCents, tipCents) that returns per-person totals in cents. Handle rounding deterministically. Add unit tests."

4. **UI:** "Build the flow: CreateSession → AddPeople → AddItems → AssignItems → Totals. Minimal, calm design."

5. **Sharing:** "Implement unguessable share tokens. Organizer can edit, participants view + mark paid."

6. **Payments:** "Generate per-person Venmo links + copyable messages with merchant name and amount."

7. **Tracking:** "Add event logging: link_opened, reminder_sent, payment_marked. Create simple rule engine for nudge recommendations."

8. **Security:** "Add Zod validation, rate limiting, no client secrets, input sanitation."

9. **Deploy:** "Deploy to Vercel with Supabase."

---

## 🏆 Built At

Klaviyo Winter 2026 Hackathon Challenge

---

**You're not selling code. You're selling outcomes.**

## 📄 License

MIT License - feel free to use this for your own projects!

---

**Made with ❤️ by the SplitIt team**