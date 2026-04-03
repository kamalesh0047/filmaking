import { motion } from "motion/react";
import { PlayCircle, CheckCircle2, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router";
import { Testimonials } from "./Testimonials";

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
      description: "Upload on YouTube/Instagram + poster, caption, hashtag strategy along with QnA session.",
      icon: "🚀",
    },
  ];

  const whoIsItFor = [
    "Loves filmmaking",
    "Wants to make short films",
    "Wants to learn direction on a beginner-friendly level",
    "Wants to start a filmmaking journey step-by-step",
  ];

  return (
    <div className="flex flex-col flex-1 w-full relative z-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1691511669382-1522f6cadcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBiYWNrZ3JvdW5kJTIwZGFyayUyMG1vdmllfGVufDF8fHx8MTc3NTIyNjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-20 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold tracking-wider text-sm mb-8 uppercase">
              <PlayCircle className="w-5 h-5" />
              Online Masterclass
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-orange-200 uppercase tracking-tight leading-[1.1] mb-8">
              7 Days Online Film-Making Programme
            </h1>

            <p className="text-lg md:text-2xl text-neutral-300 font-light mb-12 max-w-3xl leading-relaxed">
              If you love cinema, want to make a short film, always imagine stories
              in your head... <span className="text-orange-400 font-medium">then this class is for you.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
              <Link
                to="/register"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-200 bg-orange-500 rounded-full hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-black uppercase tracking-wider text-sm"
              >
                Enroll Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 focus:outline-none uppercase tracking-wider text-sm"
              >
                Meet the Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-neutral-950 py-24 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-6">
                Who is this <span className="text-orange-500">class for?</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Whether you're holding a camera for the first time or want to structure your scattered ideas into a proper screenplay.
              </p>
              
              <ul className="space-y-6">
                {whoIsItFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 bg-orange-500/20 p-1.5 rounded-full text-orange-500">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <span className="text-xl text-neutral-200 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl rounded-full"></div>
              <div className="relative bg-black border border-white/10 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="text-white font-bold uppercase text-lg mb-2">No Need For Big Camera!</h3>
                    <p className="text-neutral-500 text-sm">Your mobile is enough.</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-white font-bold uppercase text-lg mb-2">No Experience Needed!</h3>
                    <p className="text-neutral-500 text-sm">Beginner friendly.</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-4">🎬</div>
                    <h3 className="text-white font-bold uppercase text-lg mb-2">Step by Step</h3>
                    <p className="text-neutral-500 text-sm">Guided journey.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7-Day Schedule Section */}
      <section className="bg-black py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 tracking-tight">
              The 7-Day <span className="text-orange-500">Breakdown</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A comprehensive daily guide from your first thought to your final exported film.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-neutral-900 border border-white/5 p-8 rounded-2xl hover:border-orange-500/50 hover:bg-neutral-800/80 transition-all duration-300 ${
                  index === 6 ? "md:col-span-2 lg:col-span-3 lg:max-w-3xl lg:mx-auto" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full rounded-tr-2xl transition-all duration-500 group-hover:bg-orange-500/10"></div>
                <div className="relative z-10">
                  <span className="inline-block text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                    {item.day}
                  </span>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl bg-black p-3 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-white uppercase leading-tight mt-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-lg leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-8 tracking-tight">
            Ready to make your <span className="text-orange-500">first short film?</span>
          </h2>
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-200 bg-orange-500 rounded-full hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-black uppercase tracking-widest text-lg shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)]"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
