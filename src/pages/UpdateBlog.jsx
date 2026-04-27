import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const CATEGORIES = [
  "Placement",
  "Training",
  "One Day Workshop",
  "Two Day Workshop",
  "Three Day Workshop",
  "Seminar",
];

function UpdateBlog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState(null);
  const [preview, setPreview] = useState([]);
  const [success, setSuccess] = useState(false);

  // ✅ FETCH FROM BACKEND (FIXED)
  useEffect(() => {
    fetch("http://localhost:5000/api/blog/all")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.error(err));
  }, []);

  // SELECT BLOG
  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);

    const blog = blogs.find((b) => String(b._id) === id);

    if (blog) {
      setForm({ ...blog });

      // show existing images
      if (blog.images) {
        setPreview(blog.images);
      }
    }
  };

  // TEXT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // IMAGE CHANGE
  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    setForm({ ...form, images: files });

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  // CLEAN MEMORY
  useEffect(() => {
    return () => {
      preview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [preview]);

  // UPDATE BLOG
  const handleSave = async () => {
  try {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Please login first!");
      navigate("/");
      return;
    }

    const formData = new FormData();

    formData.append("eventName", form.eventName);
    formData.append("date", form.date);
    formData.append("collegeName", form.collegeName);
    formData.append("category", form.category);
    formData.append("department", form.department);
    formData.append("description", form.description);

    if (form.images && form.images.length > 0) {
      form.images.forEach((file) => {
        formData.append("images", file);
      });
    }

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/blog/update/${selectedId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ FIX
        },
        body: formData,
      }
    );

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => navigate("/admin/dashboard"), 1500);
    } else {
      alert(data.message || "❌ Update failed");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Server error");
  }
};

  return (
    <div className="ad-wrap">

      {/* Sidebar */}
      <div className="ad-sidebar">
        <div className="ad-brand"><span>⚙️</span><span>Admin</span></div>

        <nav className="ad-nav">
          <button className="ad-nav-btn" onClick={() => navigate("/admin/dashboard")}>🏠 Dashboard</button>
          <button className="ad-nav-btn" onClick={() => navigate("/admin/add-blog")}>➕ Add Blog</button>
          <button className="ad-nav-btn active">✏️ Update Blog</button>
          <button className="ad-nav-btn" onClick={() => navigate("/admin/delete-blog")}>🗑️ Delete Blog</button>
        </nav>

        <button
          className="ad-logout"
          onClick={() => {
            localStorage.removeItem("adminToken");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="ad-main">

        <div className="ad-header">
          <h1>✏️ Update Blog</h1>
          <p>Select and edit blog</p>
        </div>

        {success && (
          <div className="ad-success">
            ✅ Blog updated successfully!
          </div>
        )}

        <div className="ad-form-card">

          {/* SELECT BLOG */}
          <div className="ad-fg">
            <label>Select Blog</label>
            <select value={selectedId} onChange={handleSelect}>
              <option value="">-- Select Blog --</option>
              {blogs.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.eventName}
                </option>
              ))}
            </select>
          </div>

          {/* FORM */}
          {form && (
            <>
              <div className="ad-form-grid" style={{ marginTop: 20 }}>

                <div className="ad-fg">
                  <label>Event Name</label>
                  <input
                    name="eventName"
                    value={form.eventName}
                    onChange={handleChange}
                  />
                </div>

                <div className="ad-fg">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date ? form.date.substring(0, 10) : ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="ad-fg">
                  <label>College Name</label>
                  <input
                    name="collegeName"
                    value={form.collegeName}
                    onChange={handleChange}
                  />
                </div>

                <div className="ad-fg">
                  <label>Department</label>
                  <input
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                  />
                </div>

                <div className="ad-fg">
                  <label>Category</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="ad-fg">
                  <label>Update Images</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImage}
                  />

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                    {preview.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="preview"
                        style={{
                          width: 100,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 8
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="ad-fg full-width">
                  <label>Description</label>
                  <textarea
                    name="description"
                    rows={5}
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="ad-form-btns">
                <button
                  className="ad-cancel"
                  onClick={() => navigate("/admin/dashboard")}
                >
                  Cancel
                </button>

                <button className="ad-submit" onClick={handleSave}>
                  Save Changes →
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default UpdateBlog;