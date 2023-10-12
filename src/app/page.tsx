import About from "@/components/About";
import CustomButton from "@/components/CustomButton";
import EarnFromPrompt from "@/components/EarnFromPrompt";
import FeaturedCompany from "@/components/FeaturedCompany";
import FeaturedPrompt from "@/components/FeaturedPrompt";
import Footer from "@/components/Footer";
import GenerateImage from "@/components/GenerateImage";
import HeroSection from "@/components/HeroSection";
import HotestPrompt from "@/components/HotestPrompt";
import MostPopularPromptsMonthly from "@/components/MostPopularPromptsMonthly";
import MostPopularPrompt from "@/components/MostPopularPromptsWeekly";
import NewestDALLEPrompt from "@/components/NewestDALLEPrompt";
import NewestGptPrompt from "@/components/NewestGptPrompt";
import NewestMidJourneyPrompt from "@/components/NewestMidJourneyPrompt";
import NewestPrompt from "@/components/NewestPrompt";
import NewestStableDiffusionPrompt from "@/components/NewestStableDiffusionPrompt";

export default function Home() {
  return (
    <div className="">
      <div className=" mx-auto h-[88vh] ">
        <HeroSection />
        <FeaturedCompany />

        <div>
          <FeaturedPrompt />
          <HotestPrompt />
          <NewestPrompt />
          <CustomButton />
        </div>
        <About />
        <div>
          <MostPopularPrompt />
          <MostPopularPromptsMonthly />
          <CustomButton />
        </div>

        <GenerateImage />
        <div>
          <NewestMidJourneyPrompt />
          <NewestGptPrompt />
          <CustomButton />
        </div>

        <EarnFromPrompt />
        <div>
          <NewestDALLEPrompt />
          <NewestStableDiffusionPrompt />
          <CustomButton />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
