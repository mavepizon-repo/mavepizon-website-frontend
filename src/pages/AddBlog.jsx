import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const CATEGORIES = [
  "Placement Training",
  "One Day Workshop",
  "Two Day Workshop",
  "Three Day Workshop",
  "Seminar",
];

function AddBlog() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    eventName: "",
    date: "",
    collegeName: "",
    category: "",
    department: "",
    description: "",
    images: [],
  });

  const [preview, setPreview] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ MULTIPLE IMAGE UPLOAD (FILE + PREVIEW)
  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    setForm({ ...form, images: files });

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  // ✅ CLEAN MEMORY (important)
  useEffect(() => {
    return () => {
      preview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [preview]);

  // ✅ SUBMIT
  const handleSubmit = async () => {
    if (!form.eventName || !form.date || !form.category) {
      alert("Please fill required fields!");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("eventName", form.eventName);
      formData.append("date", form.date);
      formData.append("collegeName", form.collegeName);
      formData.append("category", form.category);
      formData.append("department", form.department);
      formData.append("description", form.description);

      form.images.forEach((file) => {
        formData.append("images", file);
      });

      const token = localStorage.getItem("adminToken");

      if (!token) {
        alert("Please login first!");
        navigate("/");
        return;
      }

      const res = await fetch("http://localhost:5000/api/blog/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      // console.log(localStorage.getItem("adminToken"));

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setSuccess(true);

        // ✅ RESET FORM (new add)
        setForm({
          eventName: "",
          date: "",
          collegeName: "",
          category: "",
          department: "",
          description: "",
          images: [],
        });
        setPreview([]);

        setTimeout(() => navigate("/admin/dashboard"), 1500);
      } else {
        alert("❌ Failed to add blog");
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
          <button className="ad-nav-btn active">➕ Add Blog</button>
          <button className="ad-nav-btn" onClick={() => navigate("/admin/update-blog")}>✏️ Update Blog</button>
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
          <h1>➕ Add New Blog</h1>
          <p>Fill details and publish</p>
        </div>

        {success && (
          <div className="ad-success">
            ✅ Blog added successfully!
          </div>
        )}

        <div className="ad-form-card">

          <div className="ad-form-grid">

            <div className="ad-fg">
              <label>Event Name *</label>
              <input name="eventName" value={form.eventName} onChange={handleChange} />
            </div>

            <div className="ad-fg">
              <label>Date *</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </div>

            <div className="ad-fg">
              <label>College Name *</label>
              <input name="collegeName" value={form.collegeName} onChange={handleChange} />
            </div>

            <div className="ad-fg">
              <label>Department</label>
              <input name="department" value={form.department} onChange={handleChange} />
            </div>

            <div className="ad-fg">
              <label>Category *</label>
              <select name="category" value={form.category} onChange={handleChange}>
                <option value="">-- Select Category --</option>
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="ad-fg">
              <label>Upload Images</label>
              <input type="file" multiple accept="image/*" onChange={handleImage} />

              {/* ✅ CLEAN CSS CLASS */}
              <div className="ad-preview">
                {preview.map((img, i) => (
                  <img key={i} src={img} alt="preview" />
                ))}
              </div>
            </div>

            <div className="ad-fg full-width">
              <label>Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="ad-form-btns">
            <button className="ad-cancel" onClick={() => navigate("/admin/dashboard")}>
              Cancel
            </button>

            <button className="ad-submit" onClick={handleSubmit}>
              Publish Blog →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddBlog;