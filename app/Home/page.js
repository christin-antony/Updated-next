"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Pagination } from "swiper/modules";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  { name: "Collections", Link: "/#" },
  { name: "Residences", Link: "/#" },
  { name: "Boutiques", Link: "/#" },
];

const data1 = [
  { name: "Home", Link: "/#" },
  { name: "About Us", Link: "/#" },
  { name: "Investor Relations", Link: "/#" },
  { name: "Support", Link: "/#" },
  { name: "Careers", Link: "/#" },
  { name: "Request an Invoice", Link: "/#" },
  { name: "News & Event", Link: "/#" },
  { name: "Contact", Link: "/#" },
];

const sampleSlides = [
  {
    imageSrc: "/images/slid-img4-1.png",
    imageAlt: "Bohemian Room",
    title: "BOHEMIAN ROOM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonX: "Read more",
  },
  {
    imageSrc: "/images/2x.jpg",
    imageAlt: "Bohemian Room",
    title: "BOHEMIAN ROOM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonX: "Read more",
  },
  {
    imageSrc: "/images/7x.jpg",
    imageAlt: "Bohemian Room",
    title: "BOHEMIAN ROOM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonX: "Read more",
  },
  {
    imageSrc: "/images/10x.jpg",
    imageAlt: "Bohemian Room",
    title: "BOHEMIAN ROOM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonX: "Read more",
  },
];

const slidesData = [
  {
    imgSrc: "/images/slid-image-1.png",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/1x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/2x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/3x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/4x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/5x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/6x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/7x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/8x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/9x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
  {
    imgSrc: "/images/10x.jpg",
    p1: "Hometel RESIDENCE",
    h1: "BOHEMIAN ROOM",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed rutrum accumsan diam a ornare.",
  },
];

const slides = [
  { imageSrc: "/images/slid-img2-1.png", title: "Collections" },
  { imageSrc: "/images/11x.jpg", title: "Residences" },
  { imageSrc: "/images/12x.jpg", title: "Boutiques" },
  { imageSrc: "/images/13x.jpg", title: "Collections" },
  { imageSrc: "/images/14x.jpg", title: "Residences" },
  { imageSrc: "/images/3x.jpg", title: "Boutiques" },
];

const lastSlid = [
  { imageSrc: "/images/1x.jpg", desc: "" },
  { imageSrc: "/images/3x.jpg", desc: "" },
  { imageSrc: "/images/6x.jpg", desc: "@hometel_sa" },
  { imageSrc: "/images/9x.jpg", desc: "" },
  { imageSrc: "/images/10x.jpg", desc: "" },
  { imageSrc: "/images/5x.jpg", desc: "" },
];

const defaultSlide = [
  {
    imageSrc: "/images/slid-img3-1.png",
    title: "BOHEMIAN ROOM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum accumsan diam a ornare.",
  },
  {
    imageSrc: "/images/14x.jpg",
    title: "BOHEMIAN ROOM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum accumsan diam a ornare.",
  },
  {
    imageSrc: "/images/12x.jpg",
    title: "BOHEMIAN ROOM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum accumsan diam a ornare.",
  },
  {
    imageSrc: "/images/8x.jpg",
    title: "BOHEMIAN ROOM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum accumsan diam a ornare.",
  },
  {
    imageSrc: "/images/4x.jpg",
    title: "BOHEMIAN ROOM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum accumsan diam a ornare.",
  },
];

const Home = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* header */}
      <header className={` ${scroll ? "scroll-background" : ""}`}>
        <div className="container-1">
          <div className="flex-container">
            <div className="column-1">
              <div className="icon_container">
                <div className={` ${scroll ? "icon-1-X" : "icon-1"}`}>
                  <PersonIcon
                    className={` ${scroll ? "div1Icon_X" : "div1Icon"}`}
                  />
                </div>
                <select className={` ${scroll ? "drop_1-X" : "drop_1"}`}>
                  <option value="EN">EN</option>
                  <option value="ML">ML</option>
                </select>
              </div>
            </div>
            <div className="column-2">
              <img
                src={scroll ? "/images/Nlogo.png" : "/images/logo.png"}
                alt="logoX"
                className="imgX"
              />
            </div>
            <div className="column-3">
              <nav className={` ${scroll ? "nav-right-X" : "nav-right"}`}>
                <ul>
                  <li>
                    <a href="/#">Collections</a>
                  </li>
                  <li>
                    <a href="/#">Residences</a>
                  </li>
                  <li>
                    <a href="/#">Boutiques</a>
                  </li>
                </ul>
              </nav>
              <div className="hamburgerIcon" onClick={() => setActive(!active)}>
                <div
                  className={`${scroll ? "hamburger" : "hamburgerX"} ${
                    active ? "activeHamburger" : ""
                  }`}
                ></div>
              </div>
              <div className={`sidenav ${active ? "activeSidenav" : ""}`}>
                <div className="icon-1-Y">
                  <PersonIcon className="div1Icon_Y" />
                </div>

                <div className="side-container">
                  <ul className="ulX">
                    {data.map((item, i) => (
                      <li key={i} className="ax-div-1">
                        <a href={item.Link} className="aX">
                          {item.name}
                        </a>
                      </li>
                    ))}
                    {data1.map((item, i) => (
                      <li key={i} className="ax-div-1">
                        <a href={item.Link} className="aY">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hero-sectioN">
        <video className="hero-videO" autoPlay loop muted>
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="container-2">
          <div className="container-2-hero">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
              <h1 className="hero-titlE">
                <span className="hero-title-span-1">Your Home </span>
                Away From Home
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
              <ul class="custom-list">
                <li className="dropdown-li">
                  <select className="booking-dropdown">
                    <option value="EN">property name</option>
                    <option value="ML">property name</option>
                  </select>
                </li>
                <li className="dropdown-li">
                  <select className="booking-dropdown">
                    <option value="EN">Check in - Check Out</option>
                    <option value="ML">Check in - Check Out</option>
                  </select>
                </li>
                <li className="dropdown-li">
                  <select className="booking-dropdown">
                    <option value="EN">1 Room - 2 Adults</option>
                    <option value="ML">1 Room - 2 Adults</option>
                  </select>
                </li>
                <li>
                  <Link href="/#" className="search-rates-button">
                    Check Rates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
        <div className="hero-section-2">
          <div className="container-3">
            <h1 className="container-3-h1">Exclusive Offers</h1>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={2.2}
              navigation={{
                enabled: false,
              }}
              pagination={{
                type: "progressbar",
                enabled: false,
              }}
              style={{
                "--swiper-pagination-color": "#380913",
                "--swiper-pagination-progressbar-bg-color": "#ffffff",
                "--swiper-pagination-bottom": "0px",
                "--swiper-navigation-color": "#380913",
              }}
              scrollbar={{
                hide: true,
              }}

              loop={true}
              initialSlide={0}
              watchOverflow={true}
              observer={true}
              observeParents={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  navigation: {
                    enabled: true
                  },
                  pagination: {
                    enabled: false,
                    type: "progressbar"
                  }
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  navigation: {
                    enabled: false
                  },
                  pagination: {
                    enabled: true,
                    type: "progressbar"
                  }
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  pagination: {
                    enabled: true,
                    type: "progressbar"
                  }
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  pagination: {
                    enabled: true,
                    type: "progressbar"
                  }
                },
                1400: {
                  slidesPerView: 2.3,
                  spaceBetween: 30,
                  pagination: {
                    enabled: true,
                    type: "progressbar"
                  }
                },
                1600: {
                  slidesPerView: 2.5,
                  spaceBetween: 35,
                  pagination: {
                    enabled: true,
                    type: "progressbar"
                  }
                },
                1800: {
                  slidesPerView: 2.5,
                  spaceBetween: 35,
                  pagination: {
                    enabled: true,
                    type: "progressbar"
                  }
                }
              }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-container">
                    <div class="zoom-effect-container-1">
                      <div class="image-card-1">
                        <Image
                          src={slide.imgSrc}
                          width={526.38}
                          height={678.34}
                          alt=""
                          className="container-3image"
                        />
                      </div>
                    </div>

                    <div className="slide-content">
                      <p className="slider-1-p1">{slide.p1}</p>
                      <h1 className="slider-1-h1">{slide.h1}</h1>
                      <p className="slider-1-p2">{slide.p2}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="0">
        <div className="hero-section-3">
          <div className="container-4">
            <h1 className="container-3-h1">Explore by Categories</h1>
          </div>
          <div className="Categories-0">
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={0}
              slidesPerView={3}
              scrollbar={{ draggable: true }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 0,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
            >
              {slides.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="zoom-effect-container-2">
                    <div className="image-card-2">
                      <Image
                        src={item.imageSrc}
                        width={635}
                        height={674}
                        alt="Picture of the author"
                        className="category-image"
                      />
                      <div className="category-overlay">
                        <h1 className="container-4-h1">{item.title}</h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
          {slides.map((item, index) => (
            <div className="Categories" key={index}>
              <div className="zoom-effect-container-2">
                <div className="image-card-2">
                  <Image
                    src={item.imageSrc}
                    width={635}
                    height={674}
                    alt="Picture of the author"
                    className="category-image"
                  />
                  <div className="category-overlay">
                    <h1 className="container-4-h1">{item.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
        <div className="hero-section-4">
          <div className="container-5">
            <h1 className="container-3-h1">Explore More with Hometel</h1>

            <Swiper
              modules={[Navigation, Scrollbar]}
              navigation={{
                enabled: false,
              }}
              spaceBetween={10}
              slidesPerView={2}
              scrollbar={{ draggable: true }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  navigation: {
                    enabled: true,
                  },
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  navigation: {
                    enabled: false,
                  },
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
            >
              {defaultSlide.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div class="zoom-effect-container-3">
                    <div class="image-card-3">
                      <Image
                        width={500}
                        height={500}
                        className="container-5-image"
                        src={slide.imageSrc}
                        alt={slide.title}
                      />
                    </div>
                  </div>

                  <h1 className="container-5-h">{slide.title}</h1>
                  <p className="container-5-p">{slide.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="hero-section-5">
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
          <div className="container-6">
            <h1 className="container-3-h1">News & Updates</h1>

            <div className="Updates-0">

            <Swiper
              modules={[Scrollbar]}
              spaceBetween={10}
              slidesPerView={2}
              scrollbar={{ draggable: true }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
            >
              {sampleSlides.map((item, index) => (
                <SwiperSlide key={index}>
                  <div class="zoom-effect-container-4">
                    <div class="image-card-4">
                      <Image
                        src={item.imageSrc}
                        width={500}
                        height={500}
                        alt={item.imageAlt}
                      />
                    </div>
                  </div>
                  <div className="conatiner-6-desc">
                    <div>
                      <h1 className="container-6-h">{item.title}</h1>
                      <p className="container-6-p">{item.description}</p>
                    </div>

                    <Link href="/#" className="container-6-btn">
                      {item.buttonX}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>


            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
            {sampleSlides.map((item, index) => (
            <div className="Updates" key={index}>
              <div class="zoom-effect-container-4">
                <div class="image-card-4">
                  <Image
                    src={item.imageSrc}
                    width={500}
                    height={500}
                    alt={item.imageAlt}
                  />
                </div>
              </div>
              <div className="conatiner-6-desc">
                <div>
                  <h1 className="container-6-h">{item.title}</h1>
                  <p className="container-6-p">{item.description}</p>
                </div>

                <Link href="/#" className="container-6-btn">
                  {item.buttonX}
                </Link>
              </div>
            </div>
              ))}
               </div>

          </div>
        </div>
      </div>

      <div className="hero-section-6">
        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="0">
          <div className="container-7">
            <div className="inner-container-7">
              <div className="inner-container-7X">
                <div>
                  <h1 className="container-7-h">
                    Stay 20+ Nights and Save More
                  </h1>
                  <p className="container-7-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    rutrum accumsan diam a ornare. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.{" "}
                  </p>
                  <Link href="/#" className="container-7-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
        <div className="hero-section-7">
          <div className="container-8">
            <h1 className="container-8-h-X">Share Your Experince</h1>
          </div>
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            className="mySwiper"
            slidesPerView={5}
            allowTouchMove={false}
            preventInteractionOnTransition={true}
            noSwiping={true}
            simulateTouch={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
          >
            {lastSlid.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <h1 className="container-8-h">{item.desc}</h1>

                  <div class="zoom-effect-container-5">
                    <div class="image-card-5">
                      <Image
                        src={item.imageSrc}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="hero-section-8">
        <div className="container-9">
          <div className="container-9-1">
            <div style={{ display: "grid", placeItems: "center" }}>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
              >
                <Image
                  src="/images/2-logo.png"
                  width={500}
                  height={500}
                  alt=""
                  className="container-9-1-logo"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
              >
                <h1 className="container-9-1-h">Discover Our Story</h1>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
              >
                <p className="container-9-1-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla .
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
              >
                <Link href="/#" className="container-9-1-btn">
                  Explore More About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="container-9-2">
            <div className="container-9-2-1">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/log.png"
                  width={328}
                  height={130}
                  alt=""
                  className="container-9-2-1-image"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
                className="subscriber"
              >
                <div className="sub">
                  <h1 className="container-9-2-1-h">
                    Subscribe to Our Newsletter
                  </h1>
                  <div className="submit-div">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="container-9-2-1-input"
                    />
                    <button className="container-9-2-1-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-9-2-2">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="0"
              >
                <div className="footr">
                  <div className="foot-1">
                    {" "}
                    <div>
                      <h1 className="footer-h">Quick Links</h1>
                      <p className="footer-p1">Home</p>
                      <p className="footer-p1">About Us</p>
                      <p className="footer-p1">Investor Relations</p>
                      <p className="footer-p1">Support</p>
                    </div>
                    <div>
                      <p></p>
                      <p className="footer-p1x">Careers</p>
                      <p className="footer-p1">Request an Invoice</p>
                      <p className="footer-p1">News & Event</p>
                      <p className="footer-p1">Contact</p>
                    </div>
                  </div>
                  <div className="foot-2">
                    {" "}
                    <div className="foot-2-1">
                      <h1 className="footer-h">Explore by Categories</h1>
                      <p className="footer-p1">Collections</p>
                      <p className="footer-p1">Residences</p>
                      <p className="footer-p1">Boutiques</p>
                    </div>
                    <div>
                      <p className="footer-p1-last">
                        Riyadh, Saudi Arabia info@hometel-sa.com +966 59 00 0000
                      </p>
                      <div style={{ display: "flex", gap: "15px" }}>
                        <Link href="/#">
                          <IoLogoInstagram className="footer-icon" />{" "}
                        </Link>
                        <Link href="/#">
                          <BsTwitterX className="footer-icon" />{" "}
                        </Link>
                        <Link href="/#">
                          <FaLinkedin className="footer-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-9">
        <div className="container-10">
          <div className="container-10-di">
            <p className="container-10-p1">
              © Hometel . 2024 . All rights reserved
            </p>

            <p className="container-10-p2">
              Privacy Policy | Terms & Condition | Cookies Settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
