import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

type RegistrationFormData = {
  fullName: string;
  email: string;
  phone: string;
  district: string;
  whyJoin: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<RegistrationFormData>();

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      console.log("Sending:", data);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwOD_-NnpNfaad2vYx6MIL-GoiehH0XyHl96bKkjA8LlGy7rUTWCrR6PHDpkJ7wu299/exec",
        {
          method: "POST",
          mode: "no-cors", // required for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  // ✅ Success Screen
  if (isSuccess) {
    return (
      <div className="flex-1 w-full bg-black flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900 border border-white/10 p-12 rounded-3xl max-w-lg w-full mx-4 text-center"
        >
          <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">You're In!</h2>
          <p className="text-neutral-400 mb-6">
            Registration successful.
          </p>
          
        </motion.div>
      </div>
    );
  }

  // ✅ Form UI
  return (
    <div className="flex-1 w-full bg-black">
      <section className="py-24 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Register Now
          </h1>

          <div className="bg-neutral-900 p-8 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: true })}
                className="w-full p-4 bg-black text-white rounded-xl"
              />

              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full p-4 bg-black text-white rounded-xl"
              />

              <input
                type="tel"
                placeholder="Phone"
                {...register("phone", { required: true })}
                className="w-full p-4 bg-black text-white rounded-xl"
              />

              <input
                type="text"
                placeholder="District"
                {...register("district", { required: true })}
                className="w-full p-4 bg-black text-white rounded-xl"
              />

              <textarea
                placeholder="Why do you want to join?"
                {...register("whyJoin", { required: true })}
                className="w-full p-4 bg-black text-white rounded-xl"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-black font-bold py-4 rounded-xl"
              >
                {isSubmitting ? "Processing..." : "Enroll Now"}
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}