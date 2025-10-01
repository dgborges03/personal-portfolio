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
  {
    id: "crt",
    title: "Caltech Robotics Team",
    year: "2025",
    role: "Treasurer & Software Team Lead",
    summary:
      "As Treasurer and Software Team Lead, I managed resources across multidisciplinary projects while guiding software direction. From quadrupeds to combat robotics, I help create autonomous systems. Along with this, I built the team's official website.",
    image: "/images/crt-logo.png",        // project card image
    detailImage: "/images/team-picture.jpg", // detail page hero image
    tags: ["Leadership", "Robotics", "Software", "Management", "Web Development"],
    bullets: [
      "Managed finances and resources for multi-project initiatives spanning ME, EE, and CS subteams.",
      "Guided software direction across diverse efforts: open-source quadruped (CCBR), combat robots, RoboSub.",
      "Drove scoping, timelines, and documentation for consistent student-led progress on autonomous systems.",
      "Designed and built the Caltech Robotics Team website to showcase projects, sponsors, and members.",
    ],
    links: [
      { label: "Team Website", href: "https://crt.caltech.edu" },
      { label: "Instagram", href: "https://www.instagram.com/caltechrobotics/" },
      { label: "YouTube", href: "https://www.youtube.com/@CaltechRoboticsTeam" },
    ],
  },
  {
    id: "autonomous-battlebot",
    title: "Autonomous Combat Robot",
    year: "2025",
    role: "Perception & Autonomy (Ongoing)",
    status: "ongoing",
    summary:
      "Taking inspiration from Cornells's and Waterloo's autonomous combat robots, I am leading and creating CRT's first every autonmous robot designed for combat robotics!",
    tags: ["Robotics", "Autonomy", "Perception", "Tracking", "Embedded", "Controls"],
    image: "",
    // video: 
    bullets: [
      "This is an ungoing process and will be updated as time goes!"
    ],
    links: [
    ],
  }
  
];
  