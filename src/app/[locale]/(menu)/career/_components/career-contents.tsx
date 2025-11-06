import CareerBenefits from "../_sections/career-benefits";
import CareerCulture from "../_sections/career-culture";
import CareerRecruit from "../_sections/career-recruit";
import CareerTalent from "../_sections/career-talent";

export default function CareerContents() {
  return (
    <div
      id="career-contents"
      className="flex flex-col justify-center items-center mt-0 xl:mt-20 bg-white"
    >
      <div className="responsiveWidth mb-16 relative text-black">
        <CareerCulture />
        <CareerTalent />
        <CareerRecruit />
        <CareerBenefits />
      </div>
    </div>
  );
}
