import { CloseIcon } from "@/shared/assets/icons/common";
import { cn } from "@/shared/utils/tailwindUtils";
import { ReactElement } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: ReactElement;
  title?: string; // 헤더 있는 경우
  isCardModal?: boolean;
  onClose: () => void;
};

/**
 * 모달 기본 레이아웃
 * @param children 모달 내부 내용
 * @param title 헤더 있는 경우 제목
 * @param isCardModal 사업/특허 카드 클릭 시 나타나는 모달 여부
 * @param onClose 모달 창 닫기
 */
export default function Modal({ children, title, isCardModal, onClose }: Props) {
  // return (
  //   <div
  //     onClick={onClose}
  //     className="fixed left-0 top-0 w-screen h-screen bg-black/[.5] flex items-center justify-center z-[200]"
  //   >
  //     <div
  //       onClick={(e) => e.stopPropagation()}
  //       className={cn("rounded-[20px] bg-white", isCardModal && "max-w-[90%] md:max-w-[860px]")}
  //     >
  //       {title && (
  //         <div className="border-b w-full h-[88px] flex items-center justify-center">
  //           <header className="font-bold text-xl px-8">{title}</header>
  //         </div>
  //       )}
  //       <div
  //         className={cn(
  //           "px-[60px] py-10 text-lg text-[#45464A] flex flex-col",
  //           isCardModal && "px-6 pt-6 pb-7"
  //         )}
  //       >
  //         {isCardModal && (
  //           <div className="w-full flex justify-end" onClick={onClose}>
  //             <CloseIcon className="cursor-pointer" />
  //           </div>
  //         )}
  //         {children}
  //       </div>
  //     </div>
  //   </div>
  // );
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="fixed left-0 top-0 w-screen h-screen bg-black/[.5] flex items-center justify-center z-[200]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn("rounded-[20px] bg-white", isCardModal && "max-w-[90%] md:w-[860px]")}
      >
        {title && (
          <div className="border-b w-full h-[88px] flex items-center justify-center">
            <header className="font-bold text-xl px-8">{title}</header>
          </div>
        )}
        <div
          className={cn(
            "px-[60px] py-10 text-lg text-[#45464A] flex flex-col",
            isCardModal && "px-6 pt-6 pb-7"
          )}
        >
          {isCardModal && (
            <div className="w-full flex justify-end" onClick={onClose}>
              <CloseIcon className="cursor-pointer size-5 md:size-6" />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
