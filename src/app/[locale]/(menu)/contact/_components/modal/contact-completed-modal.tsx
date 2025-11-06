import Button from "@/app/_components/button";
import { useTranslations } from "next-intl";

interface Props {
  onClose: () => void;
}

export default function ContactCompletedModal({ onClose }: Props) {
  const t = useTranslations("Contact.Form");

  return (
    <div className="flex flex-col items-center">
      <p className="font-medium text-lg leading-[1.6] text-45464A] text-center mb-10">
        {t("CompleteContent1")}
        <br />
        {t("CompleteContent2")}
      </p>
      <Button variant="reverse" className="font-bold w-[368px]" onClick={onClose}>
        {t("CompleteButton")}
      </Button>
    </div>
  );
}
