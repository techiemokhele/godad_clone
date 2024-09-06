import {
  RecommendedBusinessComponent,
  TopHomeSectionComponent,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-14">
      <TopHomeSectionComponent />
      <RecommendedBusinessComponent />
    </main>
  );
}
