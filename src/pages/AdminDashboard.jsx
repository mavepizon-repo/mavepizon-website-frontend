import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const admin = localStorage.getItem("adminToken");

    if (!admin) {
      navigate("/admin");
      return;
    }

    fetchBlogs();
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/blog/all`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await res.json();

      setBlogs(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error("Fetch Blogs Error:", err);
      setBlogs([]);
    }
  };

  return (
    <div className="ad-wrap">

      {/* Sidebar */}
      <div className="ad-sidebar">

        <div className="ad-brand">
          <div className="ad-brand-icon">⚙️</div>
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
            localStorage.removeItem("adminToken");
            navigate("/admin");
          }}
        >
          🚪 Logout
        </button>

      </div>

      {/* Main */}
      <div className="ad-main">

        <div className="ad-header">
          <h1>Welcome, Admin 👋</h1>
          <p>Manage your blogs from here</p>
        </div>

        {/* Stat Cards */}
        <div className="ad-stats">

          <div
            className="ad-stat-card"
            onClick={() => navigate("/admin/add-blog")}
          >
            <div className="ad-stat-icon-wrap">➕</div>

            <div className="ad-stat-info">
              <h3>Add Blog</h3>
              <p>Create new post</p>
            </div>
          </div>

          <div
            className="ad-stat-card"
            onClick={() => navigate("/admin/update-blog")}
          >
            <div className="ad-stat-icon-wrap">✏️</div>

            <div className="ad-stat-info">
              <h3>Update Blog</h3>
              <p>Edit existing post</p>
            </div>
          </div>

          <div
            className="ad-stat-card"
            onClick={() => navigate("/admin/delete-blog")}
          >
            <div className="ad-stat-icon-wrap red">🗑️</div>

            <div className="ad-stat-info">
              <h3>Delete Blog</h3>
              <p>Remove a post</p>
            </div>
          </div>

        </div>

        {/* Blog Table */}
        <div className="ad-table-wrap">

          <h3>
            📋 All Blogs ({blogs.length})
          </h3>

          {blogs.length === 0 ? (
            <p className="ad-empty">
              📭 No blogs added yet
            </p>
          ) : (
            <table className="ad-table">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Event Name</th>
                  <th>College</th>
                  <th>Category</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((b, i) => (
                  <tr key={b._id}>

                    <td>{i + 1}</td>

                    <td>{b.eventName}</td>

                    <td>{b.collegeName || "-"}</td>

                    <td>
                      <span className="ad-tag">
                        {b.category || "-"}
                      </span>
                    </td>

                    <td>
                      {b.date
                        ? b.date.substring(0, 10)
                        : "-"}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          )}

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;