import { useState, useEffect, useRef } from 'react';
import './Projects.css';

export default function Projects({ img, title, description, id }) {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(projectRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`container col-xxl-8 px-4 py-3 projectsContainer ${isVisible ? 'animate' : ''}`}
      id={id}
      ref={projectRef}
    >
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6 titleContainer">
          <h1 className={`display-5 fw-bold lh-1 mb-3 projectsTitle ${isVisible ? 'fade-in-top' : ''}`}>
            {title}
          </h1>
          <p className={`lead ${isVisible ? 'fade-in-top' : ''}`}>{description}</p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6 imgContainer">
          <a href="https://github.com/CalvinSoares/word-search-game" target="_blank" rel="noopener noreferrer">
            <img
              src={img}
              className={`d-block mx-lg-auto img-fluid projectsImg ${isVisible ? 'fade-in-bottom' : ''}`}
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}