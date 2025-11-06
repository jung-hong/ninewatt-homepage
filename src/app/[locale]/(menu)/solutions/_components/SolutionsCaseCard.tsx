import Image from "next/image";
import { SolutionType } from "../_constants/solutions-list";

export default function SolutionCaseCard({ solutions }: { solutions: SolutionType }) {
  console.log({ solutions });
  return (
    <div className="bg-gray50 mt-5 py-[46px] px-12 rounded-2xl lg:rounded-3xl w-full">
      <div className="space-y-4">
        <div className="text-heading-02 text-gray900">CASE</div>
        <h6 className="text-body-03 text-gray700">{solutions.caseTitle}</h6>
      </div>
      <div className="w-full flex gap-4 mt-9 overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
        {solutions.cases.map((c, idx) => (
          <div
            key={idx}
            className="p-7 bg-white border border-gray-200 rounded-2xl shrink-0 lg:shrink min-w-[280px] md:w-1/3 lg:min-w-0 lg:w-1/3 snap-start"
          >
            <div className="w-full h-[128px] lg:h-[168px] relative">
              <Image src={c.img} alt={c.description || "no image"} fill />
            </div>

            <h6 className="text-heading-04-mo text-primary-400 mt-7">{c.title}</h6>
            <p className="text-caption-02-400-mo lg:text-body-01-mo text-gray900 mt-4">
              {c.secondTitle}
            </p>
            <p className="text-caption-02-400 text-gray600 mt-2 whitespace-pre-line">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
