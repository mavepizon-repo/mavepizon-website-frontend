import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function DeleteBlog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/blog/all`);
      const data = await res.json();

      const safeData = Array.isArray(data.data) ? data.data : [];
      setBlogs(safeData);
    } catch (err) {
      console.error(err);
      setBlogs([]);
    }
  };

  // DELETE BLOG
  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Please login first!");
      navigate("/");
      return;
    }

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/blog/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      setConfirmId(null);
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
      <div className="ad-main">

        <h1>Delete Blog</h1>

        {!Array.isArray(blogs) || blogs.length === 0 ? (
          <p>No blogs</p>
        ) : (
          blogs.map((b) => (
            <div key={b._id}>

              <p>{b.eventName}</p>

              {confirmId === b._id ? (
                <>
                  <button onClick={() => handleDelete(b._id)}>
                    Confirm
                  </button>
                  <button onClick={() => setConfirmId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button onClick={() => setConfirmId(b._id)}>
                  Delete
                </button>
              )}

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default DeleteBlog;