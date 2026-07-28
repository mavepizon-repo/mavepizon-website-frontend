import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function DeleteBlog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blog/all`);
      const data = await res.json();
      setBlogs(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error(err);
      setBlogs([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("Please login first!");
        navigate("/");
        return;
      }

      const res = await fetch(
       `${process.env.REACT_APP_BACKEND_URL}/api/blog/delete/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
        setConfirmId(null);
        setToast(true);
        setTimeout(() => setToast(false), 2500);
      } else {
        alert(data.message || "❌ Delete failed");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error");
    }
  };

  return (
    <div className="ad-wrap">

      {/* ── Sidebar ── */}
      <div className="ad-sidebar">
        <div className="ad-brand">
          <div className="ad-brand-icon">⚙️</div>
          <span>Admin</span>
        </div>

        <nav className="ad-nav">
          <button className="ad-nav-btn" onClick={() => navigate("/admin/dashboard")}>
            🏠 Dashboard
          </button>
          <button className="ad-nav-btn" onClick={() => navigate("/admin/add-blog")}>
            ➕ Add Blog
          </button>
          <button className="ad-nav-btn" onClick={() => navigate("/admin/update-blog")}>
            ✏️ Update Blog
          </button>
          <button className="ad-nav-btn active">
            🗑️ Delete Blog
          </button>
        </nav>

        <button
          className="ad-logout"
          onClick={() => {
            localStorage.removeItem("admin");
            localStorage.removeItem("adminToken");
            navigate("/");
          }}
        >
          🚪 Logout
        </button>
      </div>

      {/* ── Main ── */}
      <div className="ad-main">

        <div className="ad-header">
          <h1>🗑️ Delete Blog</h1>
          <p>Select a blog to remove it permanently</p>
        </div>

        {toast && (
          <div className="ad-success">✅ Blog deleted successfully!</div>
        )}

        <div className="del-list">
          {blogs.length === 0 ? (
            <p className="ad-empty">📭 No blogs available</p>
          ) : (
            blogs.map((b) => (
              <div className="del-item" key={b._id}>

                <div className="del-info">
                  <div className="del-icon">📝</div>
                  <div>
                    <h4>{b.eventName}</h4>
                    <p>{b.category || "Blog"} • {b.date ? b.date.substring(0, 10) : ""}</p>
                  </div>
                </div>

                {confirmId === b._id ? (
                  <div className="del-confirm">
                    <span>⚠️ Sure?</span>
                    <button className="del-yes" onClick={() => handleDelete(b._id)}>
                      Yes, Delete
                    </button>
                    <button className="del-no" onClick={() => setConfirmId(null)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button className="del-btn" onClick={() => setConfirmId(b._id)}>
                    🗑️ Delete
                  </button>
                )}

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default DeleteBlog;