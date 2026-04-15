import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user,
        password: pass,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      // ✅ STORE TOKEN (IMPORTANT)
      localStorage.setItem("adminToken", data.token);

      alert("Login successful");
      navigate("/admin/dashboard");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Admin Login</h2>

        <input
          className="admin-input"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          className="admin-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="admin-btn" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;