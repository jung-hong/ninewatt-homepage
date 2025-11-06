"use client";

import LenisWrap from "../../_components/lenis";
import Intro from "./_sections/section1-intro";
import ContactNew from "./_sections/section10-contact-new";
import Contractor from "./_sections/section2-contractor";
import MainAbout from "./_sections/section3-main-about";
import Business from "./_sections/section5-business";
import OurBusinessNew from "./_sections/section7-our-business-new";
import ResultNew from "./_sections/section8-result-new";
import NewsNew from "./_sections/section9-news-new";

export default function MainPage() {
  return (
    <LenisWrap>
      <div>
        <div className="flex flex-col">
          <Intro />
          <Contractor />
          <MainAbout />
          <Business />
          <OurBusinessNew />
          <ResultNew />
          <NewsNew />
          <ContactNew />
        </div>
      </div>
    </LenisWrap>
  );
}
