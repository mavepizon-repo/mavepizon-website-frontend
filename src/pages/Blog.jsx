import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Blog.css";

function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [activeSlides, setActiveSlides] = useState({}); // ✅ slider state

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blog/all");
      const data = await res.json();

      if (res.ok) {
        setBlogs(data.data);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides((prev) => {
        const updated = { ...prev };

        blogs.forEach((blog) => {
          const length = blog.images?.length || 1;
          updated[blog._id] = ((prev[blog._id] || 0) + 1) % length;
        });

        return updated;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [blogs]);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <span className="blog-eyebrow">Latest Updates</span>
        <h1 className="blog-title">Our Blogs</h1>
        <p className="blog-subtitle">
          Explore workshops, seminars & training programs
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((item, index) => (
          <div
            key={item._id}
            className="blog-card"
            style={{ "--delay": `${index * 0.1}s` }}
            onClick={() => navigate(`/blog/${item._id}`)}
          >
            {/* ===== IMAGE SLIDER ===== */}
            <div className="card-image-wrap">
              {item.images?.length > 0 ? (
                item.images.map((img, i) => (
                  <img
                    key={i}
                    src={
                      img.startsWith("http")
                        ? img
                        : `http://localhost:5000/${img}`
                    }
                    className={`card-image ${
                      i === (activeSlides[item._id] || 0)
                        ? "active"
                        : ""
                    }`}
                    alt="blog"
                  />
                ))
              ) : (
                <img
                  src="/fallback.jpg"
                  className="card-image active"
                  alt="blog"
                />
              )}

              <div className="card-overlay"></div>

              <span className="card-tag">
                {item.category}
              </span>
            </div>

            {/* ===== BODY ===== */}
            <div className="card-body">
              {/* ✅ ONLY EVENT NAME + COLLEGE NAME */}
              <h3 className="card-title">{item.eventName}</h3>

              <p className="card-desc">
                {item.collegeName}
              </p>

              <div className="card-footer">
                <span className="read-more">Read More</span>
                <span className="arrow-icon">→</span>
              </div>
            </div>

            <div className="card-shine"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;