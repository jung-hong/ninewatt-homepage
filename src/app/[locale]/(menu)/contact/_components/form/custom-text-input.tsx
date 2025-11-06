import { Controller, useFormContext } from "react-hook-form";

interface Props {
  registerId: string;
  label: string;
  placeh?: string;
  isTextArea?: boolean;
  max?: number;
}

export default function CustomTextInput({ registerId, label, placeh, isTextArea, max }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={registerId}
      render={({ field: { onChange, value, ref }, fieldState: {} }) => (
        <div className="flex items-center border-b">
          <div className="w-[150px] md:min-w-[218px] h-full font-medium text-black text-sm md:text-base leading-normal pl-4 md:pl-6 py-[26px]">
            {label}
          </div>
          <div className="w-full px-4 border-l py-[14px]">
            {isTextArea ? (
              <textarea
                id={registerId}
                ref={ref}
                onChange={onChange}
                value={value || ""}
                className="w-full h-56 px-4 md:px-7 py-3 border border-black9 rounded-lg text-black placeholder:text-sm placeholder:text-black9 block"
                placeholder={placeh}
                maxLength={max}
              />
            ) : (
              <input
                id={registerId}
                ref={ref}
                onChange={onChange}
                value={value || ""}
                type="text"
                className="w-full h-12 px-4 md:px-7 py-3 border border-black9 rounded-lg text-black placeholder:text-sm placeholder:text-black9"
                placeholder={placeh}
                maxLength={max}
              />
            )}
            {/* {error?.message && (
              <p className="mt-[10px] text-xs font-medium text-[#EB003B]">{error?.message}</p>
            )} */}
          </div>
        </div>
      )}
    />
  );
}
