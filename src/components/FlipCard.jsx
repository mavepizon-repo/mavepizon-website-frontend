const FlipCard = ({ course, onNavigate }) => {
  return (
    <div className="flip-card">
      <div className="flip-inner">
        {/* FRONT */}
        <div className="flip-front">
          <div
            className="crs-thumb"
            style={{
              background: `linear-gradient(135deg,${course.bg[0]},${course.bg[1]})`,
            }}
          >
            <div className="crs-thumb-icon">{course.icon}</div>
          </div>
          <div className="cb">
            <div className="c-cat">{course.cat}</div>
            <h3>{course.name}</h3>
            {course.hrs && (
  <div className="c-hrs">⏱ {course.hrs}</div>
)}
           <div className="prow">
  <span className="p-off">{course.off}</span>

  <span className="p-on">
    Online: <b>{course.on}</b>
  </span>

  {course.emi && (
    <div className="p-emi">EMI: {course.emi}</div>
  )}

  {course.badge && <span className="p-bdg">{course.badge}</span>}
</div>
          </div>
        </div>
        {/* BACK */}
        <div
          className="flip-back"
          style={{
            background: `linear-gradient(135deg,${course.bg[0]},${course.bg[1]})`,
          }}
        >
          <h3>
            {course.icon} {course.name}
          </h3>
          <p className="bk-hrs">⏱ Duration: {course.hrs}</p>
          <ul className="bk-list">
            {course.topics.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          <div className="bk-pr">
            <div className="pr">
              <span>Offline</span>
              <span>{course.off}</span>
            </div>
            <div className="pr">
              <span>Online</span>
              <span>{course.on}</span>
            </div><br></br>
             {course.emi && (
    <div className="pr">
      <span>EMI</span>
      <span>{course.emi}</span>
    </div>
  )}
          </div>
          {/* <button
            className="btn-en"
            style={{ color: course.bg[1] }}
            onClick={() => onNavigate('contact')}
          >
            Enroll Now →
          </button> */}
          <button
  className="btn-en"
  style={{ color: course.bg[1] }}
  onClick={() => window.open('https://forms.gle/UdLnunkbyizwoYGNA', '_blank')}
>
  Enroll Now →
</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
