import Image from "next/image";

interface Props {
  img: string;
  opacity: number;
  isLogoWhite?: boolean;
}

export default function MenuCover({ img, opacity, isLogoWhite = false }: Props) {
  return (
    <>
      <Image src={img} alt="menu cover image" fill className="object-cover" priority />
      <h2
        style={{
          opacity,
          transition: "opacity 0.3s ease-in-out",
        }}
        className={`absolute -top-2 -left-1 md:-top-[18px] md:-left-[5px] md:w-[720px] h-[68px] font-bold text-[32px] xs:text-[40px] md:text-[96px] leading-[1.1] text-center tracking-[0.34em] mix-blend-overlay ${
          isLogoWhite ? "text-white" : "text-black"
        }`}
      >
        NINEWATT
      </h2>
    </>
  );
}
