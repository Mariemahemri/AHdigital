// components/ServiceCard.tsx
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-6 shadow-xl"
    >
      <div className="text-green-400 text-4xl">{icon}</div>
      <h3 className="text-white text-2xl font-bold mt-4">{title}</h3>
      <p className="text-gray-400 text-sm mt-3 leading-relaxed">{description}</p>
    </motion.div>
  );
}
