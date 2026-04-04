import { motion } from "framer-motion"
import { PlayCircle, ChevronRight, Check } from "lucide-react"
import { Link } from "react-router"
import { Testimonials } from "./Testimonials"
import bg from "../../assets/mentor.jpeg"


export function Home() {
  const schedule = [
    {
      day: "DAY 1",
      title: "Story & Idea Development",
      description: "Turn a simple thought into a powerful cinematic idea.",
      icon: "💡",
    },
    {
      day: "DAY 2",
      title: "Script & Screenplay Writing",
      description: "Write scenes, dialogues and structure your own screenplay.",
      icon: "📝",
    },
    {
      day: "DAY 3",
      title: "Pre-Production",
      description: "Plan a shoot like a real filmmaker — storyboard, shot list, casting, schedule.",
      icon: "📋",
    },
    {
      day: "DAY 4",
      title: "Cinematography & Lighting",
      description: "Learn camera basics, shot types and lighting — even with mobile.",
      icon: "🎥",
    },
    {
      day: "DAY 5",
      title: "Direction & Sound",
      description: "Pull natural acting from actors + record clear audio.",
      icon: "🎙️",
    },
    {
      day: "DAY 6",
      title: "Editing",
      description: "Cut, add music, colour correct and export your film.",
      icon: "✂️",
    },
    {
      day: "DAY 7",
      title: "Release & Promotion",
      description: "Upload on YouTube/Instagram + strategy.",
      icon: "🚀",
    },
  ]

  const whoIsItFor = [
    "Loves filmmaking",
    "Wants to make short films",
    "Beginner-friendly learning",
    "Step-by-step journey",
  ]

  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 text-orange-400 flex justify-center items-center gap-2 uppercase text-sm">
              <PlayCircle /> Online Masterclass
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              7 Days Online </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" >Film-Making Programme
            </h2>

            <p className="text-gray-300 mb-10 text-lg">
              If you love cinema, want to make a short film...{" "}
              <span className="text-orange-400">this is for you.</span>
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/register"
                className="bg-orange-500 px-6 py-3 rounded-full font-bold text-black"
              >
                Enroll Now
              </Link>

              <Link
                to="/about"
                className="border border-white px-6 py-3 rounded-full text-white"
              >
                Meet the Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO SECTION */}
      <section className="relative py-20 text-white overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-black to-black"></div>

  {/* Glow effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(215, 89, 6, 0.94),transparent_50%)]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-10 text-center">
      Who is this class for?
    </h2>

    <ul className="space-y-4">
      {whoIsItFor.map((item, i) => (
        <li key={i} className="flex gap-3 items-center">
          <Check className="text-white" />
          {item}
        </li>
      ))}
    </ul>
  </div>

</section>

      {/* SCHEDULE */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {schedule.map((item, i) => (
            <div key={i} className="bg-black p-6 rounded-xl">
              <h3 className="text-orange-500">{item.day}</h3>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="bg-black py-20 text-center">
        <h2 className="text-3xl text-white mb-6">
          Ready to start filmmaking?
        </h2>

        <Link
          to="/register"
          className="bg-orange-500 px-8 py-4 rounded-full text-black font-bold"
        >
          Enroll Now
        </Link>
      </section>

    </div>
  )
}