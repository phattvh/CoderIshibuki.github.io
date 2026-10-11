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
      title: "Member - Open Source Software Category",
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
      title: "Member - Technical Department",
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
      badge: "50th Anniversary & UP2026",
      affiliation: "Youth Union & Student Association - Faculty of IT (HCMUE)",
      role: "Core Technical Team",
      shortDescription:
        "Official digital passport web application celebrating HCMUE's 50th Anniversary (1976-2026) and UP2026 Freshmen Orientation, featuring high-concurrency QR quests and dynamic campus map unlocking.",
      description:
        "Official web application for the HCMUE Digital Passport, built to celebrate the 50th Anniversary of Ho Chi Minh City University of Education (1976-2026) and the UP2026 Freshmen Orientation Event on October 27, 2026. Proposed and engineered by a 4-member technical team from the Youth Union & Student Association of the Faculty of Information Technology, the system delivers an interactive digital passport running directly on mobile browsers (Chrome, Safari, and Zalo in-app browser), backed by a dedicated Nginx VPS with caching and rate limiting to withstand high-concurrency check-in traffic.",
      workflow: [
        {
          step: "01",
          title: "Check-in & Account Activation",
          desc: "Students register with their Student ID (MSSV), Full Name, and PIN (opened early on the evening of Oct 26 to eliminate check-in bottlenecks). The system issues a personal QR credential and displays a campus map of 280 An Duong Vuong with uncompleted buildings initially in grayscale.",
        },
        {
          step: "02",
          title: "Station Quests & Map Progression",
          desc: "Students scan station QR codes to open randomized quiz challenges from a 30-question bank across 3 topics. Upon completion, Station Leads scan the student's personal QR code using mobile cameras to verify and issue digital badges with timestamps, dynamically illuminating the building on the student's map.",
        },
        {
          step: "03",
          title: "Gift Redemption & Anti-Fraud Verification",
          desc: "When students accumulate sufficient badges, redemption staff scan their personal QR code to check eligibility and mark gifts as claimed to prevent duplicate redemption, cross-checking physical student ID cards. The Organizing Committee monitors real-time completion leaderboards with Excel export.",
        },
      ],
      highlights: [
        {
          title: "High-Concurrency VPS & Nginx Caching",
          description:
            "Dedicated server running custom Nginx reverse proxy with caching and rate limiting to handle hundreds of concurrent student interactions with <2s response times and hourly automated database backups.",
        },
        {
          title: "Dynamic Campus Map Illumination",
          description:
            "Interactive campus map (280 An Duong Vuong) that dynamically transitions building illustrations from grayscale to illuminated colors in real-time as stations are validated.",
        },
        {
          title: "Two-Way QR Ecosystem & Anti-Fraud",
          description:
            "Dual QR workflow combining station standee QR codes for task access and student personal QR codes for Station Lead verification and gift claiming, preventing duplicate redemption.",
        },
        {
          title: "Admin CMS & Data Privacy Compliance",
          description:
            "Centralized dashboard to reconfigure stations, buildings, quiz banks, and rules on-the-fly without code redeployment, fully compliant with Vietnam's Personal Data Protection Law (91/2025/QH15) with post-event data wipe.",
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
