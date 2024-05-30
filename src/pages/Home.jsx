import SecAbout from "../components/section/SecAbout";
import SecCourses from "../components/section/SecCourses";
import SecHero from "../components/section/SecHero";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <SecHero />
      <SecCourses />
      <SecAbout />
    </MainLayout>
  );
}
