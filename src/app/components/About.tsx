import { motion } from "framer-motion"
import { Film, Award, Youtube, Instagram, Star } from "lucide-react"
import mentor from "../../assets/mentor.jpeg"
export function About() {
  return (
    <div className="flex-1 w-full bg-black">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 tracking-tight">
              About The <span className="text-orange-500">Mentor</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Learn from industry experience and turn your passion for cinema into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mentor Content */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold tracking-wider text-sm uppercase">
                <Star className="w-5 h-5 fill-current" />
                Your Guide
              </div>

              <div className="text-lg text-neutral-300 leading-relaxed space-y-2">
  <p>Filmmaker | Creator | Storytelling Coach 📽</p>
  <p>5+ yrs in narration | Film educator 🎥</p>
  <p className="text-orange-400 font-semibold">
    Follow to master cinematic storytelling & direction 📹
  </p>
</div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-black border border-white/10 p-6 rounded-2xl">
                  <Film className="w-8 h-8 text-orange-500 mb-4" />
                  <h4 className="text-white font-bold uppercase mb-2">Practical Focus</h4>
                  <p className="text-sm text-neutral-500">Focus on story, not gear.</p>
                </div>

                <div className="bg-black border border-white/10 p-6 rounded-2xl">
                  <Award className="w-8 h-8 text-orange-500 mb-4" />
                  <h4 className="text-white font-bold uppercase mb-2">Proven Method</h4>
                  <p className="text-sm text-neutral-500">Step-by-step 7-day system.</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
  href="https://youtube.com/@aqnizar?si=6X7OBNj2QdzdoGHO" 
  target="_blank" 
  rel="noopener noreferrer"
  className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-orange-500 hover:text-black transition-all"
>
  <Youtube className="w-6 h-6" />
                </a>
                <a 
  href="https://www.instagram.com/director.aqnizar?igsh=MWh2dzM1ZGp1bWlkZA==" 
  target="_blank" 
  rel="noopener noreferrer"
  className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-orange-500 hover:text-black transition-all"
>
  <Instagram className="w-6 h-6" />
</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl rounded-full"></div>

              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg bg-black">
                <img
                  src={mentor}
                  alt="Mentor"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Film className="w-16 h-16 text-orange-500 mx-auto mb-8 opacity-50" />
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 leading-tight">
            "If you love cinema and want to make films, <span className="text-orange-500">this class is for you.</span>"
          </h3>
          <p className="text-xl text-neutral-400 font-medium">
            — Al Qayum Nizar
          </p>
        </div>
      </section>

    </div>
  )
}