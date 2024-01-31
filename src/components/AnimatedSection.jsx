import { useInView } from 'react-intersection-observer';

// Define your component
function AnimatedSection({children}) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as per your requirement
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${inView ? 'animate' : ''}`}>
      {children}
    </div>
  );
}

export default AnimatedSection;
