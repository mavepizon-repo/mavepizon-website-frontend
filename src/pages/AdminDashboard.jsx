import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  const navigate = useNavigate();

  // ✅ Login check
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin");
    }
  }, [navigate]);

  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

  return (
    <div className="ad-wrap">

      {/* 🔹 Sidebar */}
      <div className="ad-sidebar">
        <div className="ad-brand">
          <span>⚙️</span>
          <span>Admin</span>
        </div>

        <nav className="ad-nav">
          <button className="ad-nav-btn active">
            🏠 Dashboard
          </button>

          <button
            className="ad-nav-btn"
            onClick={() => navigate("/admin/add-blog")}
          >
            ➕ Add Blog
          </button>

          <button
            className="ad-nav-btn"
            onClick={() => navigate("/admin/update-blog")}
          >
            ✏️ Update Blog
          </button>

          <button
            className="ad-nav-btn"
            onClick={() => navigate("/admin/delete-blog")}
          >
            🗑️ Delete Blog
          </button>
        </nav>

        <button
          className="ad-logout"
          onClick={() => {
            localStorage.removeItem("admin");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      {/* 🔹 Main Content */}
      <div className="ad-main">

        <div className="ad-header">
          <h1>Welcome, Admin 🚀</h1>
          <p>Manage your blogs easily</p>
        </div>

        {/* 🔥 SIMPLE 3 BUTTON CARDS */}
        <div className="ad-stats">

          <div
            className="ad-stat-card"
            onClick={() => navigate("/admin/add-blog")}
          >
            <span className="ad-stat-icon">➕</span>
            <span className="ad-stat-lbl">Add Blog</span>
          </div>

          <div
            className="ad-stat-card"
            onClick={() => navigate("/admin/update-blog")}
          >
            <span className="ad-stat-icon">✏️</span>
            <span className="ad-stat-lbl">Update Blog</span>
          </div>

          <div
            className="ad-stat-card"
            onClick={() => navigate("/admin/delete-blog")}
          >
            <span className="ad-stat-icon">🗑️</span>
            <span className="ad-stat-lbl">Delete Blog</span>
          </div>

        </div>

        {/* 🔥 BLOG COUNT மட்டும் */}
        <div className="ad-table-wrap">
          <h3>Total Blogs: {blogs.length}</h3>

          {blogs.length === 0 && (
            <p className="ad-empty">No blogs added yet</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;