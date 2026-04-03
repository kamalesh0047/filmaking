import { motion } from "motion/react";
import { MessageCircleHeart } from "lucide-react";

export function Testimonials() {
  const feedbacks = [
    {
      text: "I really learn the screenplay writing this class was easy to learn before the class I will just write the screenplay but after the class I really property writing the screenplay I got a confirmation to screenplay writing the 2nd day class it was very useful and really nice 💯",
    },
    {
      text: "இன்றைய திரைக்கதை வகுப்பில் எந்தெந்தக் கதையை எந்தத் திரைக்கதையில் புகுத்தி எப்படி ஒரு நல்லத் திரைப்படத்தை உருவாக்கலாம் என்று எனது ஆசிரியர் மிகவும் எளிமையாகவும் பொறுமையாகவும் மற்றும் திரைக்கதை எழுவதில் எனக்கு உள்ள தனிப்பட்ட சிரமத்தையும் போக்கும் அளவிற்கு சிறப்பாக வகுப்பு எடுத்தார் என்பதற்க்காக எனது நன்றிகளைத் தெரிவித்துக் கொள்கிறேன். 😍😍",
    },
    {
      text: "Innikku Class DAY 3 PRE-PRODUCTION Pathi Sir Romba Super ra Sollikkuthiga Sir 😍 enga Ellarum Innimaiya understand Pannura Mathiri Sollikuthiga Sir 😇appuram Camera📷 Short Sizes and Storyboard Basics Irrunthu Nalla Puriramathiri Solli thanthiga Sir Innikku Class DAY 3 Romba Parmatham Sir 😍Thank you so much❤Sir😇",
    },
    {
      text: "Today is 3rd class its very interesting and more than camera shorts sizes and Storyboard and I can understanding with a PRE-PRODUCTION 💯💥 and I should be a same about the questions it's very useful thanks bro the class was easy to learn and simple ahh iruku like simple ah puriuthu I like the today class",
    },
    {
      text: "Day 3 - Class was very interesting, shots & location details explained very well... It's a perfect shot brother😄🥳 Thank you...",
    },
    {
      text: "சினிமாட்டோகிராபி பத்தின கிளாஸ் ரொம்ப பிரமாதமா இருந்தது. நுணுக்கமான விஷயங்களை ரொம்ப எளிமையா சொல்லித் கொடுத்ததற்கு நன்றி. இப்போ சினிமா பார்க்கும்போது, அந்த அழகியல் அம்சங்களை இன்னும் நல்லா புரிஞ்சுக்க முடியுது.மிக்க நன்றி🙏💕",
    },
    {
      text: "Today is 4rth day I learn a cinematography Cinema Autography Apacher and ISO shutter speed and the brother was day by day new massage give to mee add also all and I was Improve in cinima stage I will hope for this class I could feel myself and thank you bro",
    },
    {
      text: "When I first came to the class, I had no idea what to expect however, during this seven-day course, I learned a great deal.You have explained things to the exact extent necessary for someone to understand no more, no less. You taught with exceptional clarity Thank you Sir.🥰",
    },
    {
      text: "Thank you for wonderful opportunity bro definitely we all achiever owr goal in future very useful and interesting class day by day i hope definitely make a film in my future ( with actor Kavin ) once again romba romba thanks we you miss and we will meet soon .......❤️‍🔥😩📈",
    },
    {
      text: "Sir, thank you so much for everything. Today’s last class was very emotional and very special for me. Learning the secrets of screenplay writing from you is something I will always remember. I’m truly grateful for your guidance, patience, and support throughout this journey. You didn’t just teach filmmaking, you gave me confidence and direction in life.❤️",
    },
    {
      text: "Very happy to join this film making course...really a convenient class...satisfied and felt very happy...yes finally I got an idea...tq so much sir",
    },
    {
      text: "Unmaile class romba useful 💯sir enga ellaroda life laa periya dream sir director inrathu ungalaa la antha dream ahh archive panna porom nanga sir neega teach panrathu romba easy yaa puriyuthu sir life laa neega romba periya director ahh aganum neega sir illa enga ellarum oru anney maari sir romba tq sir❤️‍🩹✨",
    },
    {
      text: "Ipo oru kathai eluthi padam yadukura alavoku ennku en Mela nammbikai vanthuruku thanks brother romba romba romba நன்றி 🫰👍👍👍👍👍",
    },
    {
      text: "Now litterly I can make short flim but know I'll be become a best flim maker it's all by you bro thanks 🫡👍",
    },
    {
      text: "These 7 days of the direction course were really inspiring for me. I learned many new things about filmmaking and it motivated me a lot to work harder. I hope in the future I will direct movies and create short films that win awards. This course gave me confidence to follow my dream.🤍",
    },
    {
      text: "I really enjoyed the entire learning experience. The classes were very engaging, interactive, and easy to understand. I learned many valuable aspects of filmmaking including story development, screenplay writing, cinematography, direction, and editing. Overall, I liked the course very much and learned a lot from it. I’m excited and eagerly waiting to present my upcoming works using the knowledge and inspiration gained from this program.",
    },
    {
      text: "Before joining this course I really don't know about the process of film making. In this 7 days i learned many things related to film making process like how to write a scene properly, shot types,camera angles,basics of cinematography,lightning basics, basics of editing now I have a proper basic knowledge to make a short films. Thank you sir",
    },
  ];

  return (
    <section className="bg-neutral-950 py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold tracking-wider text-sm mb-6 uppercase">
            <MessageCircleHeart className="w-5 h-5" />
            Student Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6 tracking-tight">
            What Our <span className="text-orange-500">Students Say</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Real feedback from aspiring filmmakers who transformed their ideas into reality.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {feedbacks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid bg-black border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-orange-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 leading-relaxed text-[15px] italic">
                "{item.text}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-sm">
                  S
                </div>
                <div className="text-sm font-medium text-white">Student</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
