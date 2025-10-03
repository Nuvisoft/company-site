import React, { useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = React.useRef<HTMLFormElement | "">("");
  const contactForm = useFormik({
    initialValues: {
      name: "",
        email: "",
        message: "",
    },
    validationSchema: null,
    onSubmit: () => {
      sendEmail();

    }
  });

  const sendEmail = () => {
    const serviceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_JS_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          contactForm.resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    contactForm.setFieldTouched("name", true);
  }, []);

  return (
    <Box
      component="form"
      onSubmit={contactForm.handleSubmit}
      ref={form}
      sx={{
        mx: "auto",
        mt: 20,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4" align="left">
        Let's talk!
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={contactForm.values.name}
        onChange={contactForm.handleChange}
        fullWidth
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={contactForm.values.email}
        onChange={contactForm.handleChange}
        fullWidth
      />

      <TextField
        label="Tell us about your idea"
        name="message"
        multiline
        rows={4}
        value={contactForm.values.message}
        onChange={contactForm.handleChange}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
}
