// src/data/projects.js
export const projects = [
  {
    id: "autonav",
    title: "Autonomous Navigation Stack",
    year: "2025",
    role: "Lead Engineer",
    summary: "Real-time SLAM + path planning on Jetson for indoor robots.",
    tags: ["C++", "ROS2", "Nav2", "CUDA"],
    image: "/images/placeholder1.jpg", // placeholder, add real image later
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
  {
    id: "manip",
    title: "Robotic Manipulation Learning",
    year: "2024",
    role: "Research",
    summary: "Behavior cloning + diffusion policy for pick-and-place tasks.",
    tags: ["Python", "PyTorch", "Diffusion", "RL"],
    image: "/images/placeholder2.jpg",
    links: [{ label: "Paper", href: "#" }],
    bullets: [
      "Collected teleop dataset with wrist-mounted RGB-D.",
      "Trained visuomotor policy achieving 86% success on novel objects.",
    ],
  },
  {
    id: "cv-pipeline",
    title: "Vision Pipeline for Inspection",
    year: "2023",
    role: "Engineer",
    summary: "Edge computer vision system for defect detection.",
    tags: ["OpenCV", "ONNX", "Edge"],
    image: "/images/placeholder3.jpg",
    links: [],
    bullets: [
      "Hybrid classical + DNN reduced false positives by 31%.",
      "Deployed to ARM SBC with hardware acceleration.",
    ],
  },
];
  