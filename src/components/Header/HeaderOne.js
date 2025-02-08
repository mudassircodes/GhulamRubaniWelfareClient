import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import logo from "@/images/resources/logo.png";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const HeaderOne = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header
      className="main-header clearfix"
      style={{
        height: "210px", // Set a fixed navbar height (adjust as needed)
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10 20px",
        overflow: "hidden", // Prevents extra space
      }}
    >
      <div className="main-header__logo">
        <Link href="/">
          <a>
            <Image
              src={logo.src}
              alt=""
              style={{
                height: "100%", // Ensures it takes the full height of the navbar
                maxHeight: "200px", // Adjust this based on your navbar size
                width: "auto", // Maintains aspect ratio
                objectFit: "contain", // Ensures it scales properly
              }}
            />
          </a>
        </Link>
      </div>
      <div className="main-menu-wrapper">
        <div className="main-menu-wrapper__top">
          <div className="main-menu-wrapper__top-inner">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__left-content">
                <div className="main-menu-wrapper__left-text">
                  <p>Ghulam Rabbani Qureshi Welfare Foundation</p>
                </div>
                <div className="main-menu-wrapper__left-email-box">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="email">
                    <a href="mailto:help@ghulamrabbaniqureshiwelfarefoundation.com">
                      help@ghulamrabbaniqureshiwelfarefoundation.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__right-social">
                {social.map(({ icon, link }, index) => (
                  <a href={link} key={index}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-wrapper__bottom">
          <nav
            className={
              scrollTop
                ? "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated"
                : "main-menu slideIn animated"
            }
          >
            <div
              className={
                scrollTop
                  ? "sticky-header__content main-menu__inner"
                  : "main-menu__inner"
              }
            >
              <span
                onClick={() => toggleMenu()}
                className="mobile-nav__toggler"
              >
                <i className="fa fa-bars"></i>
              </span>
              <ul
                className="main-menu__list"
                style={{
                  marginTop: "10px",
                }}
              >
                {navItems.map((navItem) => (
                  <NavItem key={navItem.id} navItem={navItem} />
                ))}
              </ul>
              <div
                className="main-menu__right"
                style={{
                  marginTop: "20px",
                }}
              >
                <div className="main-menu__phone-contact">
                  <div className="main-menu__phone-icon">
                    <span className="icon-chat"></span>
                  </div>
                  <div className="main-menu__phone-number">
                    <p>Call Anytime</p>
                    <a href="tel:92 666 888 0000">+92 300 5018029</a>
                  </div>
                </div>
                <Link href="/donation">
                  <a className="main-menu__donate-btn">
                    <i className="fa fa-heart"></i>Donate
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
