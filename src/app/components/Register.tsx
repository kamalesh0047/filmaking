import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import { Film, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";

type RegistrationFormData = {
  fullName: string;
  email: string;
  phone: string;
  experienceLevel: string;
  whyJoin: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<RegistrationFormData>();

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: RegistrationFormData) => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzf1Q9fT4V7MITVv0rsT2UKAa0VcwrSZmTbT6HvTyWIGgOvod8Ttzltk6JAr8fEif8c/exec";

    try {
     await fetch(scriptURL, {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  },
  body: JSON.stringify({
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    why: data.whyJoin
  })
});
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex-1 w-full bg-black flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900 border border-white/10 p-12 rounded-3xl max-w-lg w-full mx-4 text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-black uppercase text-white mb-4">You're In!</h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Your spot for the 7 Days Online Film-Making Programme is reserved. We'll send you the details via email shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl uppercase tracking-wider transition-colors border border-white/10"
          >
            Submit Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full bg-black">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl relative z-10"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 tracking-tight">
              Secure Your <span className="text-orange-500">Spot</span>
            </h1>
            <p className="text-lg text-neutral-400">
              Join the next batch of the 7 Days Online Masterclass.
            </p>
          </div>

          <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-orange-500/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: "Name is required" })}
                  className="w-full p-4 bg-black border border-white/10 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-4 bg-black border border-white/10 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full p-4 bg-black border border-white/10 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Why Join
                </label>
                <textarea
                  {...register("whyJoin", { required: "Required" })}
                  className="w-full p-4 bg-black border border-white/10 rounded-xl text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-black font-bold py-4 rounded-xl"
              >
                {isSubmitting ? "Processing..." : "Enroll Now"}
              </button>

            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}