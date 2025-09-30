// src/data/projects.js
export const projects = [
  {
    id: "nacho",
    title: "Meet Nacho!",
    year: "2025",
    role: "Robotics Project",
    summary:
      "Nacho is a mobile robot built on a Raspberry Pi 4 with infrared and ultrasonic sensing. He builds a node-based map in real time, prioritizing accuracy and safety. Nacho avoids collisions, replans around obstacles, and demonstrates multi-robot exploration and mapping.",
    tags: ["Python", "Mapping", "Path Planning", "Multi-threading", "ROS"],
    image: "/images/nacho.jpg",
    video: { type: "mp4", src: "/videos/nacho.MOV" },
    bullets: [
      "Programmed mobile robot behaviors in Python for exploration, mapping, navigation, and reactive obstacle avoidance.",
      "Implemented motor control with continuous sensor feedback loops (IR, ultrasound), combining polling and interrupt-driven I/O.",
      "Designed multi-threaded architectures for real-time sensing, planning, and actuation.",
      "Developed planning and exploration algorithms via graph data structures; showcased in a multi-robot autonomous challenge demo.",
    ],
  },
];
  