import {
  Hero,
  FeaturedProducts,
  Collections,
  BrandValues,
  Testimonials,
  CallToAction,
  InstagramFeed,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Hero Section with parallax background */}
      <Hero />

      {/* Featured Products with horizontal scroll */}
      <FeaturedProducts />

      {/* Collections with parallax images */}
      <Collections />

      {/* Brand Values with pinned header */}
      <BrandValues />

      {/* Testimonials slider */}
      <Testimonials />

      {/* Call to Action with parallax */}
      <CallToAction />

      {/* Instagram Feed */}
      <InstagramFeed />
    </>
  );
}
