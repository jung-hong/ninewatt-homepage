"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/app/_components/button";
import Modal from "@/app/_components/modal";
import CustomTextInput from "../_components/form/custom-text-input";
import PrivacyPolicy from "../_components/form/privacy-policy";
import ContactCompletedModal from "../_components/modal/contact-completed-modal";
import ContactType from "../_components/form/contact-type";

import { ContactInputs, contactSchema } from "../_constants/contact-schema";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("문의 접수에 실패했습니다.");
      }

      const result = await response.json();
      console.log("Server Response:", result);

      setIsModalOpen(true);
      methods.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(t("Form.ErrorAlert"));
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col py-12 md:py-40 mt-5 md:mt-0">
      <h1 className="text-black font-semibold text-3xl md:text-5xl !leading-normal mb-5 md:mb-[140px]">
        CONTACT US
        <br /> NOW
      </h1>

      <FormProvider {...methods}>
        <form id="contact-form" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            {/* 도입문의/ 기타문의 선택 */}
            <ContactType />

            <div className="w-full border-t border-black">
              <CustomTextInput
                registerId="name"
                label={t("Form.Name")}
                placeh={t("Form.NamePlaceh")}
                max={30}
              />
              <CustomTextInput
                registerId="email"
                label={t("Form.Email")}
                placeh={t("Form.EmailPlaceh")}
                max={64}
              />
              <CustomTextInput
                registerId="phone"
                label={t("Form.Phone")}
                placeh={t("Form.PhonePlaceh")}
                max={16}
              />
              <CustomTextInput
                registerId="detail"
                label={t("Form.InquiryContent")}
                placeh={t("Form.InquiryContentPlaceh")}
                max={1000}
                isTextArea
              />
            </div>

            <p className="mt-10 font-semibold text-sm md:text-base text-black leading-normal mb-[18px]">
              {t("Terms.Title")}
            </p>
            <PrivacyPolicy />

            <Button
              type="submit"
              size="lg"
              className="place-self-center mt-[60px] w-[180px] text-base md:text-lg disabled:bg-white disabled:text-black9 disabled:border-black9"
              disabled={isLoading || !methods.formState.isValid}
            >
              {false ? (
                <>
                  Loading...
                  <div className="animate-spin rounded-full size-4 border-b-2 border-gray-900 ml-4"></div>
                </>
              ) : (
                t("Button")
              )}
            </Button>
          </div>
        </form>
      </FormProvider>
      {isModalOpen && (
        <Modal title={t("Form.CompleteAlert")} onClose={closeModal}>
          <ContactCompletedModal onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
