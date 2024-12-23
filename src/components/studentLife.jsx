"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WordPullUp from "../components/ui/word-pull-up";
import {
  Trophy,
  Music,
  Book,
  FlaskRoundIcon as Flask,
  Users,
  Palette,
} from "lucide-react";

const activities = [
  {
    id: "sports",
    title: "Sports Excellence",
    description:
      "State-of-the-art sports facilities including football, cricket, basketball, and athletics tracks.",
    icon: <Trophy className="h-10 w-10" />,
    color: "bg-gradient-to-br from-[#1a237e] to-[#283593]", // Navy blue gradient
    stats: "15+ Sports Activities",
  },
  {
    id: "arts",
    title: "Arts",
    description:
      "Dedicated spaces for music, dance, and theater to nurture artistic talents.",
    icon: <Music className="h-10 w-10" />,
    color: "bg-gradient-to-br from-[#2e7d32] to-[#388e3c]", // Green gradient
    stats: "10+ Cultural Events",
  },

  {
    id: "science",
    title: "Science Labs",
    description:
      "Well-equipped laboratories for practical learning in physics, chemistry, and biology.",
    icon: <Flask className="h-10 w-10" />,
    color: "bg-gradient-to-br from-[#0277bd] to-[#0288d1]", // Teal gradient
    stats: "6 Advanced Labs",
  },
  {
    id: "math",
    title: "Maths",
    description:
      "Modern library with vast collection of books, journals, and digital resources.",
    icon: <Book className="h-10 w-10" />,
    color: "bg-gradient-to-br from-[#00695c] to-[#00796b]", // Blue gradient
    stats: "20,000+ Books",
  },
  {
    id: "robotics",
    title: "Robotics",
    description:
      "Various clubs for robotics, coding, debate, environmental awareness, and more.",
    icon: <Users className="h-10 w-10" />,
    color: "bg-gradient-to-br from-[#4a148c] to-[#6a1b9a]", // Purple gradient
    stats: "12+ Active Clubs",
  },
  {
    id: "language",
    title: "Language Studies",
    description:
      "Spaces for painting, sculpture, and other visual arts to foster creativity.",
    icon: <Palette className="h-10 w-10" />,
    color: "bg-gradient-to-br from-[#e65100] to-[#f57c00]", // Orange gradient
    stats: "8+ Art Forms",
  },
];

export default function CampusLife() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-6">
        {/* Animated heading */}
        <WordPullUp
          words="Campus Life"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a237e] text-center mb-4"
        />

        {/* Animated subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gray-600 text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12"
        >
          Experience a vibrant campus life at Brookfield International School
          where learning goes beyond classrooms.
        </motion.p>

        {/* Cards with animations and hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className={`relative overflow-hidden rounded-xl shadow-lg ${
                activity.color
              } transform transition-transform duration-300 cursor-pointer ${
                hoveredId === activity.id ? "scale-105 shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredId(activity.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => navigate(`/programs#${activity.id}`)} // Use hash for scrolling to the section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="p-6 h-full flex flex-col items-center text-center text-white space-y-4">
                <motion.div
                  className="p-3 rounded-full bg-white bg-opacity-20 transition-transform duration-300"
                  animate={{
                    scale: hoveredId === activity.id ? 1.2 : 1,
                  }}
                >
                  {activity.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold">{activity.title}</h3>
                <span className="text-sm font-medium bg-white bg-opacity-20 px-4 py-1 rounded-full">
                  {activity.stats}
                </span>
                <p className="text-white text-sm opacity-90">
                  {activity.description}
                </p>
              </div>
              {/* Hover overlay effect */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-10 transition-all duration-500 ${
                  hoveredId === activity.id ? "opacity-30" : "opacity-0"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
