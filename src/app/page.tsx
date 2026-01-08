import Hero from "@/components/sections/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import BestSellers from "@/components/sections/BestSellers";
import BrandStory from "@/components/sections/BrandStory";
import SocialProof from "@/components/sections/SocialProof";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Banner from "@/components/sections/Banner";
import Community from "@/components/sections/Community";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <WhyChooseUs />
      <Banner />
      <BrandStory />
      <SocialProof />
      <Community />
    </div>
  );
}
