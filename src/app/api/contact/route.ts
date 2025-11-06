import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/app/[locale]/(menu)/contact/_constants/contact-schema";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // 카페24 인증 문제 방지 (필요한 경우)
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    await contactSchema.validate(body);

    const ADMIN_MAIL_TEXT = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">문의 접수 확인</h2>
        <p style="color: #555; text-align: center;">회원님의 요청이 정상적으로 접수되었습니다.</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
        <p><strong>고객 이메일:</strong> ${body.email}</p>
        <p><strong>요청 타입:</strong> ${body.type === "deployment" ? "도입 문의" : "기타 문의"}</p>
        <p><strong>카테고리:</strong> ${body.solution}</p>
        <p><strong>성명/회사명:</strong> ${body.name}</p>
        <p><strong>전화번호:</strong> ${body.phone}</p>
        <p><strong>문의내용:</strong></p>
        <div style="background-color: #fff; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">${
          body.detail
        }</div>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="text-align: center; color: #777;">Ninewatt 고객지원팀</p>
            </div>
            `;

    await transporter.sendMail({
      from: "ninewatt2020@gmail.com",
      to: "junghong@ninewatt.com", // 문의 내용을 받을 이메일 주소
      subject: "문의 메일",
      html: ADMIN_MAIL_TEXT,
    });

    return NextResponse.json({ message: "문의가 성공적으로 접수되었습니다." }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        message: "잘못된 요청입니다.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
};
