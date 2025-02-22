import Crousel from "./crousel/crousel";
import Cards from "./cards/cards";
import Testimonial from "./testimonialsone/testimonial";
import Reviews from "./reviews/reviews"
import StickyContact from "./stickycontact/stickycontact";
import { AlertProvider } from "./contexts/AlertContext";
import PricingCard from "./pricing/pricing";

export default function Home() {
  return (
   <>
      <StickyContact/>
   <Crousel/>
   <AlertProvider>
   <Cards/>
   </AlertProvider>
   <Testimonial/>
   <PricingCard/>
   <Reviews/>
   </>
  );
}
