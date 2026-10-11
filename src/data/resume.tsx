import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Tran Vu Hoa Phat",
  initials: "TV",
  url: "https://phattvh.github.io",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/Ho+Chi+Minh+City",
  description:
    "Full name is Tran Vu Hoa Phat, I am focused on Full-Stack Development, AI Engineering & Research.",
  summary:
    "Experienced in building web applications, handling responsibilities from requirements analysis and architectural design to deployment and product operations support. Looking to further develop expertise in system architecture and infrastructure operations.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", icon: "cpp" },
        { name: "C#", icon: "cs" },
        { name: "Python", icon: "py" },
        { name: "TypeScript", icon: "ts" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "react" },
        { name: "Vite", icon: "vite" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "FastAPI", icon: "fastapi" },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "postgres" },
        { name: "MongoDB", icon: "mongo" },
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Linux", icon: "linux" },
        { name: "Docker", icon: "docker" },
        { name: "Nginx", icon: "nginx" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Postman", icon: "postman" },
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "tranvuhoaphat@gmail.com",
    tel: "+84338295267",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phattvh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:tranvuhoaphat@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      phone: {
        name: "Call Phone",
        url: "tel:0338295267",
        icon: Icons.phone,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HCMUE Olympic Informatics Team",
      href: "https://olp.hcmue.edu.vn/",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Member — Open Source Software Category",
      logoUrl: "/hcmue-logo.png",
      start: "May 2026",
      end: "Present",
      description: "Member of the open source software category for the Olympic Informatics Team.",
    },
    {
      company: "HCMUE Informatics Club",
      href: "https://www.facebook.com/CLBTinHocHCMUE",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Member — Technical Department",
      logoUrl: "/clb-tinhoc.png",
      start: "Oct 2025",
      end: "Present",
      description: "Member of the Technical Department at HCMUE Informatics Club.",
    }
  ],
  education: [
    {
      school: "Ho Chi Minh City University of Education",
      href: "https://hcmue.edu.vn/",
      degree: "Bachelor of Information Technology",
      gpa: "3.2/4.0",
      logoUrl: "/hcmue-logo.png",
      start: "2025",
      end: "2029",
    }
  ],
  projects: [
    {
      title: "HCMUE Digital Passport",
      category: "Web & Systems",
      href: "",
      dates: "Oct 2026",
      active: true,
      featured: true,
      badge: "UP2026 Freshmen Orientation",
      affiliation: "Faculty of IT • Đoàn - Hội",
      role: "Full-Stack & Infrastructure — Technical Team",
      teamSize: "Team of 4",
      shortDescription:
        "Event web application featuring high-concurrency QR check-ins, dynamic campus map unlocking, and gamified trivia quests.",
      description:
        "Official web application for the HCMUE Digital Passport (UP2026 Freshmen Orientation Event), engineered by a core 4-member technical team from the Faculty of Information Technology's Youth Union & Student Association. Built to handle high-concurrency traffic during campus-wide check-in hours, providing an interactive, gamified digital passport journey for thousands of incoming freshmen.",
      workflow: [
        {
          step: "01",
          title: "Check-in & Personal QR Issuance",
          desc: "Freshmen scan the station QR at Station 1 to register with their Student ID & PIN, generating a personal QR credential with an initially grayscale campus map.",
        },
        {
          step: "02",
          title: "Multi-Station Quests & Dynamic Map",
          desc: "At each station, students scan the station QR to unlock trivia questions (30 questions across 3 themes). Station Leads scan the student's QR to verify completion, awarding digital badges and dynamically illuminating campus buildings in color.",
        },
        {
          step: "03",
          title: "Gift Redemption & Anti-Fraud Verification",
          desc: "Upon collecting sufficient badges, students redeem gifts at the counter. Coordinators verify credentials via QR scan with student ID cross-checks to eliminate duplicate claims, while the Organizing Committee monitors real-time completion leaderboards.",
        },
      ],
      highlights: [
        {
          title: "High-Concurrency Architecture",
          description:
            "Engineered to withstand heavy concurrent traffic spikes during peak check-in and quiz-taking hours across campus.",
        },
        {
          title: "Dynamic Campus Map",
          description:
            "Visual exploration map where grayscale building illustrations dynamically illuminate in color as stations are completed.",
        },
        {
          title: "Dual QR Code Verification",
          description:
            "Personal student QR combined with Station Lead scanning for challenge verification and gift redemption without duplicate claims.",
        },
        {
          title: "Admin Control & Real-time Ranking",
          description:
            "Live completion leaderboard and a flexible admin dashboard to reconfigure stations, quiz banks, and rules on-the-fly without code redeployment.",
        },
      ],
      technologies: [],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as any[],
};
