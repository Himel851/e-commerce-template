// @ts-nocheck
"use client";

import { useAppSelector } from "@/store/store";
// Template1 components
import CategoryProducts1 from "@/components/home-page/template1/category-wise-product/CategoryProducts";
import HeroSection1 from "@/components/home-page/template1/hero-section/HeroSection";
import TopCategories1 from "@/components/home-page/template1/top-categories/TopCategories";
// Template2 components
import CategoryProducts2 from "@/components/home-page/template2/category-wise-product/CategoryProducts";
import HeroSection2 from "@/components/home-page/template2/hero-section/HeroSection";
import TopCategories2 from "@/components/home-page/template2/top-categories/TopCategories";
import FeaturedCategory from "@/components/home-page/template2/featured-category/FeaturedCategory";
import BrandList from "@/components/home-page/template2/brandlist/BrandList";

export default function Home() {
  const activeTemplate = useAppSelector((state) => state.template.activeTemplate);

  if (activeTemplate === "template1") {
    return (
      <div>
        <HeroSection1 />
        <TopCategories1 />
        <CategoryProducts1 />
      </div>
    );
  }

  // template2 components
  return (
    <div>
      <HeroSection2 />
      <TopCategories2 />
      <CategoryProducts2 />
      <FeaturedCategory />
      <CategoryProducts2 />
      <BrandList />
    </div>
  );
}
