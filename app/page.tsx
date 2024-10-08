import {
  BrandWebsiteComponent,
  RecommendedBusinessComponent,
  RetainCustomerInfoComponents,
  TestimonialComponents,
  TopHomeSectionComponent,
  CTAComponent,
  TeamGuideComponent,
  FAQComponent,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-14">
      <TopHomeSectionComponent />
      <RecommendedBusinessComponent />
      <BrandWebsiteComponent />
      <RetainCustomerInfoComponents />
      <TestimonialComponents />
      <CTAComponent />
      <TeamGuideComponent />
      <FAQComponent />
    </main>
  );
}
