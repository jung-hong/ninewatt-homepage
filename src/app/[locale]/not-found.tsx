import { NextPage } from "next";
import { Link } from "@/i18n/routing";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다.</div>
      <Link href={"/"}>홈으로</Link>
    </div>
  );
};

export default NotFound;
