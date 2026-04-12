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
    id: "stackbot",
    title: "StackBot",
    year: "2026",
    role: "ME/CS/EE 134 Team Project",
    summary:
      "StackBot is a 5-DOF robotic arm that autonomously builds a cup pyramid relative to human-placed ArUco markers and then collapses it back into a single stack. The system combines overhead RealSense sensing, ArUco-based workspace calibration, HSV color filtering, multi-depth-layer cup detection, internal pyramid-state modeling, and ROS-based planning to support dynamic replanning and recovery during manipulation.",
    tags: [
      "Robotic Manipulation",
      "ROS 2",
      "Computer Vision",
      "ArUco",
      "RealSense",
      "Kinematics",
      "Motion Planning",
    ],
    image: "/images/cupstacker.jpg",
    video: { type: "mp4", src: "/videos/faststackbotgood.mp4" },
    bullets: [
      "Built a 5-DOF autonomous manipulation system that detects user-defined pyramid placement from ArUco markers and executes build and downstack behaviors for cup pyramids.",
      "Integrated overhead depth sensing, color and shape filtering, and multi-layer cup detection to localize cups at different heights while compensating for calibration and perspective effects.",
      "Developed ROS-based mapping, planning, and motor-control nodes with internal pyramid-state modeling, gripper-feedback-based grasp recovery, and replanning when cups or markers moved during execution.",
      "Two Recovery Modes includes: Knowing when it has not successfully picked up a cup and realizing when a collsion has been detected."
    ],
  },
  {
    id: "telepresence-robot",
    title: "Smartphone Telepresence Robot",
    year: "2026",
    role: "Personal Project",
    summary:
      "A remotely controlled telepresence robot that lets you drive, see, hear, and speak from anywhere in the world. Built on a SMARS-inspired chassis, an ESP32 handles motor control over MQTT, while an Android phone mounted on the robot streams live video and two-way audio via WebRTC. Everything is controlled through a custom web dashboard with no app install required.",
    tags: [
      "ESP32",
      "MQTT",
      "WebRTC",
      "IoT",
      "C++",
      "JavaScript",
      "PlatformIO",
      "Embedded Systems",
    ],
    image: "/images/smars.jpg",
    video: { type: "mp4", src: "/videos/smars.mp4" },
    bullets: [
      "Programmed an ESP32 microcontroller in C++ to receive WASD motor commands over MQTT via HiveMQ Cloud, enabling worldwide control over any internet connection.",
      "Built a WebRTC peer-to-peer video and two-way audio pipeline using an Android phone as the robot's camera and microphone, with HiveMQ handling signaling and Metered TURN server enabling cross-network relay.",
      "Developed a plain HTML/CSS/JS web dashboard with keyboard motor control, live video display, mic toggle, and a real-time robot status feed — no framework or app install required.",
      "Debugged and resolved MQTT buffer overflow, ICE candidate race conditions, WebRTC autoplay restrictions, and motor driver current issues through iterative hardware and software testing.",
    ],
    links: [
      { label: "Hackaday Post", href: "https://hackaday.io/project/204974-smars-telepresence-bot" },
    ],
  },
  {
    id: "robopaws",
    title: "RoboPaws",
    year: "2025",
    role: "ME 133a Team Project",
    summary:
      "RoboPaws is a quadruped locomotion project where I helped simulate a Unitree Go2 performing a range of gaits and tricks—including walking, oblique walking, galloping, and jumping in place primarily using RVIZ. I focused on building a whole-body inverse kinematics pipeline that maps a 12D foot task space to an 18DOF joint space, using secondary-task posture control and weighted Jacobians to reduce base wobble and produce stable, dog-like motion.",
    tags: [
      "Quadruped Locomotion",
      "Inverse Kinematics",
      "Weighted Jacobian",
      "ROS 2",
      "RVIZ",
      "Ubuntu",
      "Trajectory Generation",
    ],
    image: "/images/go2.png",
    video: { type: "mp4", src: "/videos/RoboPaws_ME133a_FinalProjectVideo.mp4" },
    bullets: [
      "Ported an open-source Unitree Go2 URDF from ROS 1 to ROS 2 and extended the model with a world-to-body joint, enabling full base motion relative to the environment.",
      "Designed gait trajectories using a phase-based formulation, combining sinusoidal foot lift in the vertical direction with stride progression in the horizontal plane and per-leg phase offsets.",
      "Implemented whole-body inverse kinematics using a 12x18 combined Jacobian, solved via pseudoinverse and weighted inverse formulations.",
      "Introduced a secondary task objective to maintain neutral leg posture, prevent drift, and avoid singular configurations during extended or aggressive motions.",
      "Applied and tuned weighted Jacobians to bias motion between body stability and joint actuation, significantly reducing base wobble across different gaits such as walking, galloping, and jumping.",
    ],
  },
  {
    id: "mcl-localization",
    title: "Monte Carlo Localization Simulation",
    year: "2026",
    role: "ME/CS/EE 133b Team Project",
    summary:
      "This project explored Monte Carlo Localization as a particle-filter-based solution for robot pose estimation in ambiguous environments. We built a full localization pipeline using probabilistic motion updates, simulated 2D LiDAR ray casting, Gaussian weighting, adaptive resampling, and robustness strategies like particle injection and jitter, then studied how tuning key parameters affected accuracy and convergence across several map types.",
    tags: [
      "Monte Carlo Localization",
      "Particle Filter",
      "LiDAR",
      "Probabilistic Robotics",
      "Python",
      "Simulation",
      "Data Analysis",
    ],
    image: "/images/mcl.png",
    video: { type: "mp4", src: "/videos/ME_CS_EE 133b Final Project Video.mp4" },
    bullets: [
      "Implemented a particle-filter-based localization pipeline that estimated robot pose with weighted particles, probabilistic motion updates, simulated LiDAR measurements, and circular-mean heading estimation.",
      "Evaluated performance across asymmetric and highly symmetric maps by varying particle count, LiDAR ray count, measurement noise, and motion noise to study localization under ambiguity.",
      "Analyzed tradeoffs between accuracy, convergence, and effective sample size, showing how parameter tuning and environment structure strongly affect robustness.",
    ],
  },
  {
    id: "crt",
    title: "Caltech Robotics Team",
    year: "2025",
    role: "Treasurer & Business / Software Team Lead",
    status: "Ongoing",
    summary:
      "As Treasurer and Business/Software Team Lead for the Caltech Robotics Team, I manage finances, sponsorships, and software direction across multiple student-led robotics projects. I oversee workflows spanning open-source quadrupeds, combat robots, RoboSub, and the team website—while building sustainable funding pipelines and onboarding new members into modern robotics software practices.",
    image: "/images/crt-logo.png",
    detailImage: "/images/team-picture.jpg",
    tags: ["Leadership", "Robotics", "Software", "Management", "Web Development"],
    bullets: [
      "Managed finances for multi-project robotics initiatives, raising over $15K in my first term toward a $50K annual funding goal.",
      "Led software development across projects including an open-source quadruped, combat robots, RoboSub, and the team website, enforcing consistent Git-based workflows and modern CI/CD practices.",
      "Onboarded and mentored new members, helping them ramp up quickly on robotics software stacks, ROS pipelines, and collaborative development workflows.",
      "Coordinated outreach efforts such as cross-university combat robotics competitions, lab tours, and STEM outreach events.",
      "Established and maintained sponsorship relationships by drafting proposal documents and collaborating with companies to secure equipment and funding.",
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
    status: "Ongoing",
    summary:
      "Taking inspiration from Cornells's and Waterloo's autonomous combat robots, I am leading and creating CRT's first every autonmous robot designed for combat robotics!",
    tags: ["Autonomy", "Perception", "Tracking", "Embedded", "Controls"],
    image: "",
    // video: 
    bullets: [
      "This is an ungoing process and will be updated as time goes!"
    ],
    links: [
    ],
  }
  
];
  