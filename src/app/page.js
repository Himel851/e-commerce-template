import CategoryProducts from "@/components/home-page/category-wise-product/CategoryProducts";
import HeroSection from "@/components/home-page/hero-section/HeroSection";
import TopCategories from "@/components/home-page/top-categories/TopCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <CategoryProducts />  
    </div>
  );
}
