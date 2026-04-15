import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // ✅ FORMAT DATE (remove time)
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB"); // 21/03/2026 format
  };

  const images =
    blog?.images?.map((img) =>
      img.startsWith("http")
        ? img
        : `http://localhost:5000/${img}`
    ) || [];

  useEffect(() => {
    if (!images.length) return;

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [images]);

  if (!blog) {
    return <p style={{ padding: "50px" }}>Loading...</p>;
  }

  return (
    <div className="detail-page">

      {/* BACK */}
      <button className="back-btn" onClick={() => navigate("/blog")}>
        ← Back
      </button>

      {/* SLIDER */}
      {images.length > 0 && (
        <div className="slider-wrap">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={i === activeSlide ? "active" : ""}
              alt="blog"
            />
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="detail-content" data-category={blog.category}>

        {/* META */}
        <div className="meta-row">
          <div className="meta-item">📅 {formatDate(blog.date)}</div>
          <div className="meta-item">🏷️ {blog.category}</div>
          <div className="meta-item">🏫 {blog.collegeName}</div>
        </div>

        {/* TITLE */}
        <div className="highlight-box">
          <p>{blog.eventName || blog.title}</p>
        </div>

        <hr />

        {/* DESCRIPTION */}
        <div className="full-text">
          <p>{blog.description}</p>
        </div>

      </div>
    </div>
  );
}

export default BlogDetail;