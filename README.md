# SplitIt - Smart Receipt Bill Splitter

A hackathon project by **Kunsang, Jordan, Ruhan & Andrew** that makes splitting bills effortless!

## 💡 Inspiration

We wanted to solve a real problem, one that everyone faces every day: financial clarity. In a world full of subscriptions, impulse purchases, and hidden fees, managing your wallet shouldn't feel like a puzzle. Our idea was simple: **Clarity before you act**. We wanted to build something that helps people understand their spending before they swipe, not after.

## 🎯 What It Does

Split helps you manage your wallet smarter. It analyzes your transactions, gives real-time spending insights, and provides personalized advice to help you make better financial decisions. Whether you're debating that next purchase or tracking your weekly budget, SplitIt acts like a calm, data-driven advisor, helping you take control of your money, not the other way around.

## 🚀 Features

- **📸 AI Receipt Scanning**: Upload any receipt photo and let AI extract all items automatically
- **👥 Smart Bill Splitting**: Assign items to specific people for fair, precise splits
- **💰 Proportional Tax Distribution**: Tax is automatically distributed based on each person's share
- **🎯 Real-time Calculations**: See exactly how much each person owes instantly
- **📱 Mobile-Friendly**: Works perfectly on phones for on-the-go splitting

## 🛠️ How We Built It

We built SplitIt using:

- **Next.js + TypeScript** for the frontend
- **TailwindCSS** for a sleek, minimal UI
- **Google Gemini API** for AI-driven receipt analysis and spending categorization
- **Node.js backend** with real-time data processing
- **Vercel** for seamless deployment

Our workflow was fully collaborative; design, logic, and testing moved together in sync.

## ⚠️ Challenges We Ran Into

We faced challenges balancing AI complexity with simplicity. Our goal wasn't just to build a dashboard, it was to build something that feels alive, something that understands the user without overwhelming them. Integrating the Gemini API with personalized data while maintaining privacy and performance was also tricky. We had to fine-tune prompts, smooth out API latency, and handle dataset variations in real time.

## 🏆 Accomplishments We're Proud Of

- ✅ Built an AI-driven wallet assistant that gives real, actionable insights, not just charts
- ✅ Designed a product that's simple, human, and visually calming in a stressful financial space
- ✅ Achieved full-stack integration with live dataset analysis, AI prompts, and instant feedback
- ✅ Worked seamlessly as a four-person team, combining design, product, and engineering like a startup
- ✅ Created something that feels bigger than a hackathon, a product we'd use ourselves

## 📚 What We Learned

We learned that **simplicity is power**. The hardest part of building isn't coding; it's creating something people actually understand and trust. We learned how to use AI responsibly, to assist, not replace human judgment. We also learned that clarity, in design, communication, and product direction, is what turns a project into something meaningful.

## 🚀 What's Next for SplitIt

We're just getting started. Next, we're integrating:

- 🎯 Smart saving goals based on user patterns
- 💡 Micro-recommendations for small daily actions that improve financial wellness
- 💳 Multi-account support to unify all wallets and cards in one view
- 📈 Personalized advice feed powered by Gemini's contextual understanding

Our goal is to make SplitIt more than a product—we want it to become a movement for financial clarity. We believe the future belongs to products that help people live intentionally, and we're building that future, one decision at a time.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **AI**: Google Gemini API for receipt OCR and financial insights
- **Icons**: Lucide React
- **Deployment Ready**: Vercel-optimized

## 🏃‍♂️ Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up AI (Optional)**:
   - Get a [Google Gemini API key](https://makersuite.google.com/app/apikey)
   - Add to `.env.local`:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```
   - *Note: App works with mock data if no API key is provided*

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How It Works

### 1. Upload Receipt
- Take a photo or upload an image of any receipt
- Supports PNG, JPG formats
- Works with restaurant bills, grocery receipts, etc.

### 2. AI Extraction
- Advanced AI reads and extracts all items, prices, quantities
- Automatically calculates subtotal, tax, and total
- Handles various receipt formats and layouts

### 3. Add People
- Add everyone who needs to pay
- Simple name entry with visual tags
- Easy to remove people if needed

### 4. Assign Items
- Click to assign each item to one or more people
- Share items between multiple people (e.g., shared appetizers)
- Visual feedback shows who's assigned to what

### 5. Calculate & Split
- Automatic fair splitting based on assignments
- Tax distributed proportionally
- Clear breakdown of who owes what

## 💡 Perfect For

- 🍽️ **Restaurant Dinners** - No more "let's just split it evenly"
- 🛒 **Groceries** - Roommate shopping made fair
- 🚗 **Road Trips** - Gas, food, and lodging splits
- 🎉 **Group Events** - Party supplies and venue costs
- 🏠 **Roommate Bills** - Utilities and shared expenses
- 🍕 **Office Lunches** - Team meal coordination

## 🔮 Future Enhancements

- **💳 Payment Integration**: Direct Venmo/Zelle request sending
- **📊 Group Tracking**: "Who owes what over time" dashboard
- **💾 Receipt History**: Save and revisit past splits
- **🔗 Share Links**: Send split results via text/email
- **📱 Mobile App**: Native iOS/Android versions

## 🤝 Contributing

Built for a hackathon but ready for the real world! Feel free to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📄 License

MIT License - feel free to use this for your own projects!

---

**Made with ❤️ by the SplitIt team**