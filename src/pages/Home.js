import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-6"
        >
          Automate & Verify{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Policies</span>{" "}
          with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          InsurAI helps you manage corporate policies with real-time automation,
          expert validation, and AI-powered verification.
        </motion.p>

        <div className="flex justify-center gap-4">
          <motion.a
            href="/register"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-600 shadow hover:opacity-90 transition"
          >
            Get Started
          </motion.a>
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 shadow hover:opacity-90 transition"
          >
            Login
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Why Choose InsurAI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Automation",
              desc: "AI-driven workflows that reduce manual effort and errors.",
            },
            {
              title: "Expert Validation",
              desc: "Policies cross-checked against best industry practices.",
            },
            {
              title: "Secure Verification",
              desc: "Reliable verification with advanced fraud detection.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-center transition-colors duration-500">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Ready to Simplify Your Policy Management?
        </h2>
        <motion.a
          href="/register"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-600 text-white rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Start Free Today
        </motion.a>
      </section>
    </div>
  );
}

export default Home;
