import BlogSection from "@/components/ui/BlogSection";
import Categories from "@/components/ui/Categories";
import FeaturedBlogs from "@/components/ui/FeaturedBlogs";
import Latest from "@/components/ui/Latest";
import Slider from "@/components/ui/Slider";

export default function Home() {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Latest/>
      <FeaturedBlogs/>
      <BlogSection/>
    </div>
  );
}