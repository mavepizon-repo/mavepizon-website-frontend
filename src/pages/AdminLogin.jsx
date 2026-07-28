import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    setError("");
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user, password: pass }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("admin", "true");
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") login();
  };

  return (
    <div className="al-wrap">
      <div className="al-card">

        <div className="al-logo">⚙️</div>
        <div className="al-title">Admin Login</div>
        <div className="al-sub">Sign in to manage your blogs</div>

        {error && <div className="al-error">⚠️ {error}</div>}

        <input
          className="al-input"
          placeholder="Email address"
          type="email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Password with show/hide toggle */}
        <div style={{ position: "relative", marginBottom: 14 }}>
          <input
            className="al-input"
            placeholder="Password"
            type={showPass ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ marginBottom: 0, paddingRight: 44 }}
          />
          <span
            onClick={() => setShowPass(!showPass)}
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: 18,
              userSelect: "none",
              color: "#0ea5e9",
            }}
            title={showPass ? "Hide password" : "Show password"}
          >
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="al-btn" onClick={login}>
          Login →
        </button>

      </div>
    </div>
  );
}

export default AdminLogin;