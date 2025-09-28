// src/data/projects.js
export const projects = [
  {
    id: "nacho",
    title: "Autonomous Navigation Stack",
    year: "2025",
    role: "",
    summary: "Real-time SLAM + path planning on Jetson for indoor robots.",
    tags: ["C++", "ROS2", "Nav2", "CUDA"],
    image: "/images/nacho.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/yourname/autonav" },
      { label: "Demo", href: "https://youtu.be/demo1" },
    ],
    bullets: [
      "Integrated Cartographer SLAM with Nav2 and a custom local planner.",
      "Latency-optimized perception pipeline (TensorRT on Jetson).",
      "Achieved <50ms control loop at 20Hz with obstacle avoidance.",
    ],
  },
];
  