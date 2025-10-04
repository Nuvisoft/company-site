import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { SectionId } from "@/constants";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { t } = useTranslation();
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async () => {
    const serviceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_JS_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      return;
    }
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, {
        publicKey,
      });
      toast.success(t("components.contactForm.toasts.success"));
      reset();
    } catch (error) {
      toast.error(t("components.contactForm.toasts.error"));
      console.error("Error sending email:", error);
    }
  };

  return (
    <Box
      id={SectionId.Contact}
      component="form"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="h3">{t("components.contactForm.title")}</Typography>
      <Typography variant="h6">
        {t("components.contactForm.subtitle")}
      </Typography>

      <Controller
        name="name"
        control={control}
        rules={{ required: t("components.contactForm.errors.nameRequired") }}
        render={({ field }) => (
          <TextField
            {...field}
            label={t("components.contactForm.labels.name")}
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: t("components.contactForm.errors.emailRequired"),
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: t("components.contactForm.errors.emailInvalid"),
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label={t("components.contactForm.labels.email")}
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{
          required: t("components.contactForm.errors.messageRequired"),
          minLength: {
            value: 10,
            message: t("components.contactForm.errors.messageMinLength"),
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label={t("components.contactForm.labels.message")}
            multiline
            rows={4}
            fullWidth
            error={!!errors.message}
            helperText={errors.message?.message}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? t("components.contactForm.button.sending")
          : t("components.contactForm.button.send")}
      </Button>
    </Box>
  );
}
