import { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import {
  Gangnamgu,
  Gyeonggido,
  IcnMetropolitanCity,
  Kepco,
  LSelectric,
  SeoulFacilities,
  SeoulMetropolitanGov,
  SmesAndStartups,
} from "@/shared/assets/icons/banner/contractors";

const PARTNERS = [
  <SmesAndStartups key={"중소벤처기업부"} />,
  <SeoulMetropolitanGov key={"서울특별시"} />,
  <Gyeonggido key={"경기도"} />,
  <IcnMetropolitanCity key={"인천광역시"} />,
  <SeoulFacilities key={"서울시설공단"} />,
  <Gangnamgu key={"강남구"} />,
  <LSelectric key={"ls-electric"} />,
  <Kepco key={"한전"} />,
];

export default function RollingBanner() {
  const [stop, setStop] = useState(false);

  const mouseOn = () => setStop(true);
  const mouseDown = () => setStop(false);

  return (
    <div className={styles.rolling_container}>
      <ul className={styles.rolling_wrap} onMouseEnter={mouseOn} onMouseLeave={mouseDown}>
        <div className={clsx(styles.slide, styles.original, stop ? styles.stop : "")}>
          {PARTNERS.map((item, idx: number) => (
            <li key={`origin-img-${idx}`}>
              <div className={styles.li_items}>{item}</div>
            </li>
          ))}
        </div>
        <div className={clsx(styles.slide, styles.clone, stop ? styles.stop : "z-10")}>
          {PARTNERS.map((item, idx: number) => (
            <li key={`clone-img-${idx}`}>
              <div className={styles.li_items}>{item}</div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
