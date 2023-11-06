import React from "react";
import { HeroImageRight } from "../components/HeroHeader";
import TopCategories from "../layout/TopCategories";
import { CardsCarousel } from "../components/CardCarousel";
import { OfferSection } from "../components/OfferSection";
import { FooterLinks } from "../core/Footer";

const Home = () => {
  return (
    <>
      <HeroImageRight />
      <TopCategories />
      {/* <CardsCarousel /> */}
      <OfferSection />
      <FooterLinks />
    </>
  );
};

export default Home;
