import { PatentDataType } from "@/types/api-types";

interface Props {
  onClick: () => void;
}

export default function PatentCard({
  title,
  applicant,
  applicationDate,
  applicationNumber,
  country,
  onClick,
}: PatentDataType & Props) {
  return (
    <>
      <div
        className="w-full p-8 space-y-2 bg-common-white rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <h6 className="text-heading-05-mo md:text-heading-05 text-gray900">{title}</h6>
        <div className="text-gray600 text-caption-02-400-mo md:text-caption-02-400-mo">
          <span className="text-[#4D84F2] block mb-1 md:mb-0 md:inline px-2 first:pl-0 last:pr-0 text-caption-02-600-mo md:text-caption-02-600 w-fit">
            {country}
          </span>
          <span className="pr-2 md:px-2 first:pl-0 last:pr-0 border-r border-r-gray-200 md:border-x-2">
            {applicationDate?.split(".")[0]}
          </span>
          <span className="px-2 first:pl-0 last:pr-0 border-r border-r-gray-200">{applicant}</span>
          <span className="px-2 first:pl-0 last:pr-0">{applicationNumber}</span>
        </div>
      </div>
    </>
  );
}
