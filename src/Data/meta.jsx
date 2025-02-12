import { BiHappyAlt } from "react-icons/bi";
import { FaAward, FaFlask, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";
import { FaBrain, FaShieldAlt, FaMobileAlt, FaHeartbeat } from "react-icons/fa";
import { FaMapLocationDot, FaEye } from "react-icons/fa6";
import { BiAccessibility, BiChip } from "react-icons/bi";
import {
  BiSolidBrain,
  BiCategoryAlt,
  BiShapePolygon,
  BiChalkboard,
  BiSolidUserAccount,
  BiSolidHandUp,
} from "react-icons/bi";

// Papers
import PaperOne from "../assets/research-papers/ResearchPaper1.pdf";
import PaperTwo from "../assets/research-papers/ResearchPaper2.pdf";
import RefPaper1 from "../assets/research-papers/ReferancePaper1.pdf";
import RefPaper2 from "../assets/research-papers/ReferancePaper2.pdf";
import RefPaper3 from "../assets/research-papers/ReferancePaper3.pdf";

// images
import Reserch1 from "../assets/Events/Research1.jpg";
import Reserch2 from "../assets/Events/Research2.jpg";
import Reserch3 from "../assets/Events/Research3.jpg";
import Guide1 from "../assets/Events/Guidence1.jpeg";
import Guide2 from "../assets/Events/Guidence1.jpeg";
import GovGuest1 from "../assets/Events/GovernmentGuest1.jpg";
import GovGuest2 from "../assets/Events/GovernmentGuest2.jpg";
import GovGuest3 from "../assets/Events/GovernmentGuest3.jpg";
import Achive1 from "../assets/Events/Achivements1.jpg";
import Achive2 from "../assets/Events/Achivements2.jpg";
import Achive3 from "../assets/Events/Achivements3.jpg";
import Achive4 from "../assets/Events/Achivements4.jpg";
import Effort from "../assets/Events/Effort1.jpg";

//  Testimonials
import testnomi1 from "../assets/Team/testnomi1.jpg";
import testnomi2 from "../assets/Team/testnomi2.jpg";
import testnomi3 from "../assets/Team/testnomi3.jpg";
import testnomi4 from "../assets/Team/testnomi4.jpg";

const meta = {
  siteTitle: "Smruti-Pankha",
  siteDescription: "An AI-powered wearable solution for Alzheimer's patients",
  navigation: [
    {
      icons: <BiSolidBrain className="mx-2" />,
      name: "Dashboard",
      href: "#dashboard",
    },
    {
      icons: <BiCategoryAlt className="mx-2" />,
      name: "Features",
      href: "#features",
    },
    {
      icons: <BiShapePolygon className="mx-2" />,
      name: "Milestones",
      href: "#milestones",
    },
    {
      icons: <BiChalkboard className="mx-2" />,
      name: "About Us",
      href: "#about-us",
    },
    {
      icons: <BiSolidUserAccount className="mx-2" />,
      name: "Contact Us",
      href: "#contact-us",
    },
  ],
  heroSection: {
    heading: "Smruti-Pankha: An Automated Alzheimer Assistence",
    subheading: "Your Companion in Memory Care",
    buttonText: "Let's Get-started ✨",
  },
  // Featues Section
  Features: [
    {
      icon: <FaBrain size={40} />,
      title: "AI-Powered Assistance",
      description: "Continuous tracking of patient activities and health data.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Medication Reminders",
      description:
        "Stay connected via mobile app for real-time updates.Ensuring the",
    },
    {
      icon: <FaMapLocationDot size={40} />,
      title: "GeoFencing",
      description:
        "Track vital health parameters efficiently with smart sensors.",
    },
    {
      icon: <FaEye size={40} />,
      title: "Computer Vision",
      description:
        "Track vital health parameters efficiently with smart sensors.",
    },
    {
      icon: <BiAccessibility size={40} />,
      title: "CareGiver Support",
      description:
        "Track vital health parameters efficiently with smart sensors.",
    },
    {
      icon: <BiChip size={40} />,
      title: "Natural Event Understanding",
      description: "Secure and encrypted data processing ensures user privacy.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Health Monitoring",
      description: "Secure and encrypted data processing ensures user privacy.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Enhanced Security",
      description: "Secure and encrypted data processing ensures user privacy.",
    },
  ],
  // ResearchPaper Section
  ResearchPapers: [PaperOne, PaperTwo, RefPaper1, RefPaper2, RefPaper3],
  // Mile Stones Section
  MilestonesData: [
    {
      icon: <FaCogs size={30} />,
      title: "An Inspiring Visit",
      description:
        "We were privileged to welcome Dr. Vinod Mohitkar, Director of Technical Education, Maharashtra State, to our stall at PIWOT 2025. His appreciation for our innovative solutions and insightful feedback reinforced our commitment to advancing Smruti Pankha – An Automated Alzheimer Assistive Device. His visit was a proud moment for our team and the Government College of Engineering, Amravati.",
      Images: [GovGuest2, GovGuest3, GovGuest1],
    },
    {
      icon: <FaAward size={30} />,
      title: "Attended PIWOT 2025",
      description:
        "We proudly represented Government College of Engineering, Amravati at PIWOT 2025, showcasing our innovation, Smruti Pankha – An Automated Alzheimer Assistive Device. Engaging with visitors, exchanging ideas, and receiving insightful feedback made this experience truly enriching. It was inspiring to see the impact of our work on real-world challenges!",
      Images: [Achive1, Achive2, Achive3, Achive4],
    },
    {
      icon: <FaFlask size={30} />,
      title: "Published Research at an International Conference",
      description:
        "We are proud to have our research published at the International Conference on Application of Engineering for Sustainable Development. Two of our papers, authored by Borakhade et al. and Patil et al., are now live on [www.isteonline.in]. This milestone marks a significant step in our commitment to engineering innovation for a sustainable future!",
      Images: [Reserch1, Reserch2, Reserch3],
    },
    {
      icon: <FaCogs size={30} />,
      title: "Guidance from Our Mentor & HOD",
      description:
        "A motivating session with our Head of Department i.e. Dr. A. W Bhade and mentor  (Prof. S. Lohi )fueled our passion for innovation. Their invaluable insights and encouragement reinforced our commitment to making Smruti Pankha – An Automated Alzheimer Assistive Device a groundbreaking solution. Their support continues to inspire us to push boundaries and create real-world impact!",
      Images: [Guide1, Guide2],
    },
    {
      icon: <BiHappyAlt size={30} />,
      title: "Turning Vision into Reality",
      description:
        "Our relentless efforts and dedication have transformed Smruti Pankha - An Automated Alzheimer Assistive Device from an idea into reality. This journey of innovation, hard work, and perseverance has been truly rewarding, bringing us one step closer to making a meaningful impact in the lives of those in need.",
      Images: [Effort],
    },
  ],
  Testimonials: [
    {
      name: "Shivendoo Deshmukh",
      feedback:
        "This product has truly transformed my workflow! Highly recommend.",
      avatar: testnomi1,
    },
    {
      name: "Pranay Chandrikapure",
      feedback:
        "Incredible experience! The AI-powered features are a game changer.",
      avatar: testnomi4,
    },
    {
      name: "Durgesh Firake",
      feedback: "A must-have for anyone looking for efficiency and accuracy.",
      avatar: testnomi2,
    },
    {
      name: "Prem Satpaise",
      feedback: "A must-have for anyone looking for efficiency and accuracy.",
      avatar: testnomi3,
    },
  ],
};

export default meta;
