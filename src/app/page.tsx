import HappyClients from "@/components/HomePage/HappyClients";
import Hero from "@/components/HomePage/Hero";
import Parallax from "@/components/HomePage/Parallax";
import Services from "@/components/HomePage/Services";
import Card from "@/components/PricingCard/Card";
import TeamMember from "@/components/TeamMember";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Card />
      <Parallax />
      <HappyClients />
      <TeamMember />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor
        incidunt odio at, porro ab ipsa numquam dolorem voluptatem veniam esse,
        omnis quos, amet nulla corrupti repellat nostrum. Et, possimus!
      </div>
    </>
  );
}
