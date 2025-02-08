import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/logo.png";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Devrolin",
  copyrightYear: new Date().getFullYear(),
  about:
    " Empowering lives through healthcare, education, and community-driven welfare initiatives.",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "#",
      icon: "fa-twitter",
    },
    {
      id: 2,
      href: "https://www.facebook.com/profile.php?id=61572852609323",
      icon: "fa-facebook-square",
    },
    {
      id: 3,
      href: "#",
      icon: "fa-dribbble",
    },
    {
      id: 4,
      href: "https://www.instagram.com/grqwelfarefoundation/",
      icon: "fa-instagram",
    },
  ],
  exploreList: [
    {
      id: 1,
      href: "/donation",
      title: "Donate",
    },
    {
      id: 2,
      href: "/causes",
      title: "Causes",
    },
    {
      id: 3,
      href: "/about",
      title: "About",
    },
    {
      id: 4,
      href: "/free-dialysis",
      title: "Free Dialysis",
    },
    {
      id: 5,
      href: "/gallery",
      title: "Gallery",
    },
  ],
};

export default footerData;
