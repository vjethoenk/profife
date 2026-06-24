import pj1 from "./assets/cn.jpg";
import pj2 from "./assets/cn1.jpg";
import pj3 from "./assets/cn2.jpeg";
import type { Project, Experience, SkillCategory, Stat } from "./types";

export const statsData: Stat[] = [
  { value: 10, suffix: "+", label: "Dự án hoàn thành" },
  { value: 6, suffix: "+", label: "Năm học tập & phát triển" },
  { value: 15, suffix: "+", label: "Công nghệ sử dụng" },
  { value: 1000, suffix: "+", label: "Giờ lập trình thực tế" }
];

export const experienceData: Experience[] = [
  {
    company: "FPT Software (Thực tập sinh)",
    role: "Fullstack Web Developer Intern",
    period: "12/2024 - 03/2025",
    desc: "Tham gia phát triển và tối ưu hóa hệ thống quản lý nội bộ. Phối hợp với team thiết kế cơ sở dữ liệu, xây dựng REST API bằng NestJS và tích hợp giao diện người dùng bằng ReactJS. Đóng góp cải thiện hiệu năng tải trang lên đến 20%.",
    tech: ["React", "NestJS", "TypeScript", "MySQL", "Git"]
  },
  {
    company: "UTT Dev Club (Câu lạc bộ Học viện)",
    role: "Frontend Developer Leader",
    period: "09/2023 - Present",
    desc: "Dẫn dắt một nhóm gồm 5 thành viên thiết kế và xây dựng các website nội bộ cho trường, tổ chức các buổi training kỹ thuật về React và TailwindCSS cho các bạn sinh viên khóa dưới.",
    tech: ["React", "TailwindCSS", "TypeScript", "Framer Motion", "Github"]
  },
  {
    company: "Dự án Freelance & Cá nhân",
    role: "Freelance Fullstack Developer",
    period: "2023 - Present",
    desc: "Thiết kế, xây dựng và triển khai các dự án website theo yêu cầu của khách hàng như trang tin tức tổng hợp, trang Landing Page tiếp thị và các hệ thống quản lý dữ liệu nhỏ.",
    tech: ["NextJS", "NestJS", "SQL Server", "Docker", "Postman"]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "ReactJS", level: 85 },
      { name: "NextJS", level: 75 },
      { name: "TailwindCSS", level: 90 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "NodeJS", level: 80 },
      { name: "NestJS", level: 80 },
      { name: "C# / .NET", level: 65 },
      { name: "SignalR (Real-time)", level: 70 },
      { name: "JWT Auth", level: 85 }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "SQL Server", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis Caching", level: 60 }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker Containers", level: 70 },
      { name: "Postman API", level: 90 },
      { name: "Linux / VPS", level: 65 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Hệ thống học trực tuyến (E-Learning)",
    desc: "Nền tảng học trực tuyến toàn diện, hỗ trợ quản lý khóa học, bài học video, làm bài kiểm tra trắc nghiệm và hệ thống diễn đàn thảo luận real-time.",
    tech: ["React", "NestJS", "MongoDB", "TailwindCSS", "WebSockets"],
    img: pj1,
    github: "https://github.com/vjethoenk/e-learning-fe",
    demo: "https://e-learning-demo.vercel.app",
    featured: true
  },
  {
    title: "Hệ thống đặt xe trực tuyến (CarStore)",
    desc: "Ứng dụng đặt xe ô tô tự lái và có tài xế, quản lý lịch trình, lịch sử giao dịch và phân quyền người dùng (User, Driver, Admin) cực kỳ chi tiết.",
    tech: ["React", "C#", "SQL Server", "TailwindCSS", "Material UI"],
    img: pj2,
    github: "https://github.com/vjethoenk/CarStore",
    demo: "https://carstore-demo.vercel.app",
    featured: true
  },
  {
    title: "Ứng dụng quản lý công việc (ToDoList)",
    desc: "Công cụ quản lý công việc cá nhân và nhóm, tích hợp kéo thả tiện lợi, thiết lập deadline, nhắc nhở qua email và theo dõi tiến độ trực quan.",
    tech: ["React", "NestJS", "MongoDB", "TailwindCSS", "JWT Auth"],
    img: pj3,
    github: "https://github.com/vjethoenk/ToDoList-NestJs-React",
    demo: "https://todolist-nest-react.vercel.app",
    featured: true
  },
  {
    title: "Hệ thống quản lý thư viện số (LMS)",
    desc: "Giải pháp quản lý thư viện trường học hiện đại, hỗ trợ quét mã vạch mượn trả sách, tự động tính tiền phạt trễ hạn và thống kê biểu đồ động.",
    tech: ["NextJS", "NestJS", "SQL Server", "TailwindCSS", "Recharts"],
    img: pj1, // Tái sử dụng ảnh preview để giữ tính nhất quán
    github: "https://github.com/vjethoenk/library-management",
    demo: "https://lms-library-demo.vercel.app",
    featured: false
  }
];
