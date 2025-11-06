"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import AOS from "aos";
import "aos/dist/aos.css";

import { paths } from "@/shared/routing";
import { ArrowRight, NoTailArrow } from "@/shared/assets/icons/main-icons";
import ButtonLink from "@/app/_components/design-system/link";

import { useDraggableScroll } from "@/service/hook/useDraggableScroll";

function useBlurInEffect<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("blur-in-active");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
}

type Article = {
  title: string;
  link: string;
  date: string;
  createdAt: string;
  image: string;
};

export default function NewsNew() {
  const t = useTranslations("Home");

  const [articles, setArticles] = useState<Article[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useBlurInEffect(sectionRef);
  useDraggableScroll<HTMLDivElement>(scrollContainerRef);

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 600,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch("/api/career?tab=article&page=1&limit=15");
      const result = await response.json();
      setArticles(result.data.filter((d: Article) => d.image !== "").slice(0, 5));
    };
    getArticles();
  }, []);

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -332, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const updateScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    updateScrollPosition();
    container.addEventListener("scroll", updateScrollPosition);
    return () => container.removeEventListener("scroll", updateScrollPosition);
  }, []);

  useEffect(() => {
    updateScrollPosition();
  }, [articles]);

  const isDraggingRef = useRef(false);
  let startX = 0;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      startX = e.clientX;
      isDraggingRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.abs(e.clientX - startX) > 5) {
        isDraggingRef.current = true;
      }
    };

    const handleMouseUp = () => {
      setTimeout(() => {
        isDraggingRef.current = false; // reset after interaction
      }, 0);
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      id="section9-news"
      ref={sectionRef}
      className="blur-in w-screen overflow-x-hidden py-14 md:py-[240px] flex items-center justify-center"
    >
      <div className="w-full pl-5 md:px-0 md:w-[1280px] !overflow-x-visible h-full flex flex-col md:flex-row gap-10 md:gap-6">
        <div className="w-full md:w-[411px] md:h-[355px] pb-5 flex flex-col items-start">
          <h4 data-aos="fade-up" className="text-gray900 text-display-02-mo md:text-display-02">
            NEWS
          </h4>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-2 md:w-[628px] text-gray700 text-body-02-mo md:text-body-02 text-left"
          >
            {t("SectionNine.NewsDescription")}
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="hidden mt-6 md:flex items-center gap-2"
          >
            <button
              onClick={handleScrollLeft}
              className={`p-[15px] flex items-center justify-center rounded-full bg-gray100 ${
                !isAtStart && "hover:bg-gray200"
              }`}
            >
              <NoTailArrow direction="left" isActive={!isAtStart} />
            </button>
            <button
              onClick={handleScrollRight}
              className={`p-[15px] flex items-center justify-center rounded-full bg-gray100 ${
                !isAtEnd && "hover:bg-gray200"
              }`}
            >
              <NoTailArrow direction="right" isActive={!isAtEnd} />
            </button>
          </div>
          <ButtonLink
            data-aos="fade-up"
            data-aos-delay="300"
            href={paths.news}
            label="더보기"
            iconComponent={<ArrowRight color="#18191B" />}
            variant="tertiary"
            color="white"
            className="hidden md:flex w-fit mt-[50px]"
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="cursor-grab active:cursor-grabbing w-full overflow-hidden h-fit md:h-[355px] flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide snap-x select-none mb-8 md:mb-0"
        >
          {articles.map((article, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => {
                if (!isDraggingRef.current) {
                  window.open(article.link, "_blank");
                }
              }}
              className="flex-shrink-0 w-[240px] md:w-[320px] h-full flex flex-col snap-start"
            >
              <div className="w-full h-40 md:h-[213px] flex-shrink-0 relative rounded-xl overflow-hidden border border-[#000000] border-opacity-[0.08]">
                <Image src={article.image} fill alt={article.title} draggable={false} />
              </div>
              <div className="px-4 py-4 md:py-6">
                <span className="text-[#3896A8] text-base font-semibold">ARTICLE</span>
                <h6 className="mt-2 text-gray900 text-heading-04-mo md:text-heading-04 line-clamp-2">
                  {article.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
        <ButtonLink
          data-aos="fade-up"
          data-aos-delay="300"
          href={paths.news}
          label="더보기"
          iconComponent={<ArrowRight color="#18191B" />}
          variant="tertiary"
          color="white"
          className="w-fit mx-auto md:hidden -mt-10"
        />
      </div>
    </div>
  );
}
