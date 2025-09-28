// src/data/passions.js
export const passions = [
    {
      id: "fightstick",
      title: "Custom Fighting Game Controller",
      emoji: "🎮",
      blurb: "Designed and wired a low-latency hitbox-style controller; QMK keymap, 3D-printed case, Sanwa buttons.",
      image: "/images/passions/placeholder-fightstick.jpg", // optional; can be null
      links: [{ label: "Build log", href: "#" }],
      tags: ["QMK", "3D Print", "USB-C"]
    },
    {
      id: "kinematics-toy",
      title: "Kinematics Toy Robot",
      emoji: "🤖",
      blurb: "Weekend desk bot exploring planar linkages & inverse kinematics—Arduino + laser-cut acrylic.",
      image: "/images/passions/placeholder-kinematics.jpg",
      links: [{ label: "Video", href: "#" }],
      tags: ["Arduino", "Laser-cut", "IK"]
    },
    {
      id: "soundscape",
      title: "Generative Soundscapes",
      emoji: "🎧",
      blurb: "Ambient loops with procedural synth patches; tiny web app for layering textures.",
      image: "/images/passions/placeholder-sound.jpg",
      links: [{ label: "Try it", href: "#" }, { label: "GitHub", href: "#" }],
      tags: ["WebAudio", "Synthesis"]
    },
  ];
  