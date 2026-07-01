import instructor1 from "../assets/RahulSharma.jpg";
import instructor2 from "../assets/PriyaVerma.jpg";
import instructor3 from "../assets/AmitKumar.jpg";
import instructor4 from "../assets/liveInstructor.jpg";

function Instructors() {
  const instructors = [
    {
      id: 1,
      image: instructor1,
      title: "Founder & Design Director",
      name: "Rahul Sharma",
      description: "Obsessed with high-converting course design, intuitive learning flows, and polished student experiences.",
      variant: "image-card",
    },
    {
      id: 2,
      title: "Technical Lead",
      name: "Priyanka Arora",
      description: "The wizard who turns wild design concepts into clean, bug-free code and expert-led training programs.",
      variant: "text-card",
    },
    {
      id: 3,
      image: instructor2,
      title: "Brand & Copy",
      name: "Shreya Loya",
      description: "Writes the words that turn visitors into paying learners through clear messaging and trust-building storytelling.",
      variant: "image-card",
    },
    {
      id: 4,
      title: "Head of Operations",
      name: "Sarah Miller",
      description: "The reason your LearnHub project actually launches on time. She never misses a deadline.",
      variant: "text-card",
    },
    {
      id: 5,
      image: instructor3,
      title: "Data Mentor",
      name: "Amit Kumar",
      description: "Helps students become confident analysts who can create dashboards and insights that matter.",
      variant: "image-card",
    },
    {
      id: 6,
      title: "Course Strategist",
      name: "Priya Verma",
      description: "Builds course roadmaps that balance fast learning with real career-ready practice.",
      variant: "text-card",
    },
  ];

  return (
    <div className="container instructors-page team-page">
      <div className="page-header team-header">
        <div>
          <p className="eyebrow">Meet the team</p>
          <h1>Meet the minds behind LearnHub.</h1>
          <p className="intro-text">
            A small team of obsessive instructors, mentors, and support leaders who build courses with care and help learners grow.
          </p>
        </div>
      </div>

      <div className="team-grid">
        {instructors.map((instructor) => (
          <article
            key={instructor.id}
            className={`team-card ${instructor.variant}`}
          >
            {instructor.image ? (
              <img src={instructor.image} alt={instructor.name} />
            ) : null}
            <div className="team-card-copy">
              <span className="team-card-label">[{instructor.title}]</span>
              <h3>{instructor.name}</h3>
              <p>{instructor.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
