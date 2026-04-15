import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const courseList = [
  { id: 1, icon: "💻", cat: "Full Stack", name: "Full Stack Development", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "120 Hrs", topics: ["HTML, CSS, JavaScript", "React.js Frontend", "Node.js & Express", "MongoDB / MySQL"] },
  { id: 2, icon: "🖥️", cat: "Frontend", name: "Frontend Development", off: "₹12,500", on: "₹11,500", emi: "₹3,000 / month (4 months)", hrs: "80 Hrs", topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js & Redux", "Responsive Design"] },
  { id: 3, icon: "⚙️", cat: "Backend", name: "Backend Development", off: "₹12,500", on: "₹11,500", emi: "₹3,000 / month (4 months)", hrs: "80 Hrs", topics: ["Node.js & Express", "REST & GraphQL", "MongoDB & PostgreSQL", "JWT & Microservices"] },
  { id: 4, icon: "📱", cat: "Mobile Dev", name: "Flutter Mobile App", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "100 Hrs", topics: ["Dart Language", "Flutter Widgets", "BLoC State Mgmt", "Firebase & REST"] },
  { id: 5, icon: "🤖", cat: "AI & ML", name: "AI & Machine Learning", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "120 Hrs", topics: ["Python for ML", "ML Algorithms", "Deep Learning TF", "NLP & Generative AI"] },
  { id: 6, icon: "📊", cat: "Analytics", name: "Data Analytics", off: "₹10,000", on: "₹9,000", emi: "₹3,000 / month (3 months)", hrs: "40 Hrs", topics: ["Excel & SQL", "Python Analytics", "Power BI & Tableau", "Google Analytics"] },
  { id: 7, icon: "⛓️", cat: "Blockchain", name: "Blockchain Development", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "100 Hrs", topics: ["Ethereum & Solidity", "Smart Contracts", "Web3.js & DeFi", "NFT Development"] },
  { id: 8, icon: "🚀", cat: "Programming", name: "Python Programming", off: "₹7,000", on: "₹6,000", emi: "₹2,000 / month (3 months)", hrs: "60 Hrs", topics: ["Basics to Advanced", "OOP Concepts", "Django Intro", "Mini Projects"] },
  { id: 9, icon: "☕", cat: "Programming", name: "Java Programming", off: "₹8,500", on: "₹7,500", emi: "₹2,500 / month (3 months)", hrs: "60 Hrs", topics: ["Core Java & OOP", "Spring Framework", "MySQL Integration", "All Subjects: ₹25K"] },
  { id: 10, icon: "🎨", cat: "Design", name: "UI/UX Design Mastery", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "80 Hrs", topics: ["Design Thinking", "Figma & Prototyping", "Design Systems", "Portfolio Building"] },
  { id: 11, icon: "🧠", cat: "Data Science", name: "Data Science & AI", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "120 Hrs", topics: ["Python & Pandas", "ML Algorithms", "Deep Learning", "Power BI & Tableau"] },
  { id: 12, icon: "🔐", cat: "Security", name: "Cybersecurity & Ethical Hacking", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "100 Hrs", topics: ["Network Security", "Kali Linux", "Pen Testing & OWASP", "CEH Prep"] },
  { id: 13, icon: "🏢", cat: "Enterprise", name: "SAP Development", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "120 Hrs", topics: ["SAP Basics & Navigation", "ABAP Programming", "SAP Modules Overview", "Real-time Project"] },
  { id: 14, icon: "☁️", cat: "Cloud", name: "AWS Cloud Computing", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "120 Hrs", topics: ["AWS Fundamentals", "EC2, S3, RDS", "IAM & Security", "Deploy Real-time Apps"] },
  { id: 15, icon: "✨", cat: "AI", name: "Generative AI", off: "₹25,000", on: "₹24,000", emi: "₹4,000 / month (6 months)", hrs: "120 Hrs", topics: ["Intro to Gen AI", "ChatGPT & Prompt Engg", "LangChain & APIs", "Build AI Projects"] },
];

const services = [
  { id: 1, title: "AI", icon: "🤖", description: "Smart AI systems with machine learning to automate and predict results." },
  { id: 2, title: "Mobile App Development", icon: "📱", description: "Cross-platform apps for Android and iOS using modern tech stacks." },
  { id: 3, title: "Web Development", icon: "🌐", description: "Responsive web apps with React, MERN, Django, and more." },
  { id: 4, title: "Desktop Application", icon: "💻", description: "Robust desktop apps using Electron and cutting-edge frameworks." },
  { id: 5, title: "3D Modeling", icon: "📦", description: "High-quality 3D interior, exterior and floor plan designs." },
];

const SYSTEM_PROMPT = `You are a helpful, friendly AI assistant for a tech training institute. You help students find courses, understand pricing, and learn about services. 

Available Courses:
${courseList.map(c => `- ${c.icon} ${c.name} (${c.cat}): Offline ${c.off}, Online ${c.on}, EMI: ${c.emi}, Duration: ${c.hrs}. Topics: ${c.topics.join(", ")}`).join("\n")}

Available Services:
${services.map(s => `- ${s.icon} ${s.title}: ${s.description}`).join("\n")}

Guidelines:
- Be concise and friendly
- When mentioning prices, always show both offline and online prices
- Suggest EMI options when prices seem high
- For enrollment, direct users to: https://forms.gle/UdLnunkbyizwoYGNA
- Respond in the same language the user writes (Tamil or English)
- Keep responses short (2-4 sentences max unless listing multiple courses)
- Use emojis naturally to keep it engaging`;

const QUICK_SUGGESTIONS = [
  "Show all courses 📚",
  "Cheapest course?",
  "AI & ML details 🤖",
  "Our services 🛠️",
  "How to enroll? 📝",
];

function TypingDots() {
  return (
    <div className="cb-typing">
      <span></span><span></span><span></span>
    </div>
  );
}

function MessageBubble({ msg }) {
  return (
    <div className={`cb-msg ${msg.role === "user" ? "cb-msg--user" : "cb-msg--bot"}`}>
      {msg.role === "assistant" && (
        <div className="cb-avatar">
          <span>AI</span>
        </div>
      )}
      <div className="cb-bubble">
        <p>{msg.content}</p>
        <span className="cb-time">{msg.time}</span>
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! 👋 I'm your course assistant. Ask me about our courses, services, pricing, or how to enroll!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNewMsg, setHasNewMsg] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setHasNewMsg(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMessages = [...messages, { role: "user", content: userText, time }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "sk-ant-api03-ABCdef123456789xyz",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages
            .filter((m) => m.role !== "system")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data?.content?.[0]?.text || "Sorry, I couldn't understand that. Please try again!";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      if (!isOpen) setHasNewMsg(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Connection error. Please check your internet and try again.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`cb-fab ${isOpen ? "cb-fab--open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        {hasNewMsg && !isOpen && <span className="cb-fab-badge"></span>}
      </button>

      {/* Chat Window */}
      <div className={`cb-window ${isOpen ? "cb-window--open" : ""}`}>
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-avatar">
            <span>AI</span>
            <span className="cb-online-dot"></span>
          </div>
          <div className="cb-header-info">
            <h3>Course Assistant</h3>
            <span>Always online ✦</span>
          </div>
          <button className="cb-close-btn" onClick={() => setIsOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="cb-messages">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {loading && (
            <div className="cb-msg cb-msg--bot">
              <div className="cb-avatar"><span>AI</span></div>
              <div className="cb-bubble"><TypingDots /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="cb-suggestions">
          {QUICK_SUGGESTIONS.map((s, i) => (
            <button key={i} className="cb-chip" onClick={() => sendMessage(s)}>
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="cb-input-row">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about courses, pricing..."
            disabled={loading}
            className="cb-input"
          />
          <button
            className={`cb-send ${input.trim() ? "cb-send--active" : ""}`}
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}