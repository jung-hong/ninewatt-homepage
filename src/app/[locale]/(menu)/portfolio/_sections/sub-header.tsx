import { useTranslations } from "next-intl";

export default function SubHeader() {
  const t = useTranslations("Portfolio");

  return (
    <div id="portfolio-subheader" className="-mt-14 md:-mt-14 pb-14 md:pb-28">
      <h2 className="text-display-02-mo md:text-display-02 text-gray900">Net Zero.</h2>
      <p className="text-body-01-mo md:text-body-01 text-gray600">{t("Header")}</p>
    </div>
  );
}
