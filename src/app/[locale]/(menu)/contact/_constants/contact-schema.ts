import * as yup from "yup";
// yup Schema

/* 
  이름 및 소속: 필수
  휴대폰번호: 필수
  이메일주소: 필수
  문의 내용: 필수
*/
export type ContactInputs = {
  name: string;
  phone: string;
  email: string;
  detail: string;
  term: boolean;
  type: string; // 문의 타입
  solution: string; // 문의할 솔루션션
};

const CONTACT_REGEX = {
  name: /^[가-힣]+$/, // 한글만
  phone: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/, // 010-1234-5678 형식
  phoneGlobal: /^[0-9-+]+$/,
};

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("성명/회사명은 필수 값입니다.")
    // .matches(CONTACT_REGEX.name, "한글만 입력 가능합니다."),
    .max(20, "최대 20자까지 입력 가능합니다."),
  phone: yup.string().required("전화번호는 필수 값입니다.").matches(CONTACT_REGEX.phoneGlobal, ""),
  // .matches(CONTACT_REGEX.phone, "휴대폰번호 형식을 확인해주세요."),
  email: yup
    .string()
    .max(64, "최대 64자까지 입력 가능합니다.")
    .required("이메일 주소는 필수 값입니다.")
    .email("올바른 이메일 주소 형식이 아닙니다."),
  detail: yup
    .string()
    .max(1000, "최대 1,000자까지 입력 가능합니다.")
    .required("문의내용은 필수 값입니다."),
  term: yup.bool().required("필수 약관에 동의해주세요.").oneOf([true], "필수 약관에 동의해주세요."),
  type: yup.string().required(),
  solution: yup.string().required(),
});
