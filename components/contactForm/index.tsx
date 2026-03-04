"use client";

import { useState } from "react";
import MessageSuccess from "../../icons/messageSuccess";
import styles from "./component.module.css";

const validationPatterns = {
  name: "^(?!\\s*$).+",
  email: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\\.)+[A-Za-z]{2,}$",
  message: "^(?!\\s*$).+",
};

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const pattern = validationPatterns[name as keyof typeof validationPatterns];

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: pattern ? !new RegExp(pattern).test(value) : false,
    }));
  };

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: !new RegExp(validationPatterns.name).test(state.name),
      email: !new RegExp(validationPatterns.email).test(state.email),
      message: !new RegExp(validationPatterns.message).test(state.message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("https://formspree.io/f/xeelywvj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        setStatus("success");
        setState({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus("error");
        if (data.errors) {
          setServerError(
            data.errors
              .map((err: { message: string }) => err.message)
              .join(", "),
          );
        } else {
          setServerError("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      setStatus("error");
      setServerError("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section className={styles.component}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>
            Let’s build something incredible together
          </p>
        </header>
        <div className={styles.formContainer}>
          <div
            className={`${styles.form} ${styles.successMessage} ${
              status === "success" ? styles.visible : styles.hidden
            }`}
          >
            <h3 className={styles.successHeader}>
              Thank you for reaching out!
            </h3>
            <p className={styles.successText}>
              I'll get back to you as soon as possible.
            </p>
          </div>

          <div
            className={`${styles.form} ${styles.submitErrorMessage} ${
              status === "error" ? styles.visible : styles.hidden
            }`}
          >
            <h3 className={styles.submitErrorHeader}>Something went wrong</h3>
            <p className={styles.submitErrorText}>
              {serverError || "Oops! There was a problem submitting your form."}
            </p>
            <button
              className={styles.button}
              onClick={() => setStatus("idle")}
              type="button"
            >
              Try Again
            </button>
          </div>

          <form
            className={`${styles.form} ${
              status === "idle" || status === "submitting"
                ? styles.visible
                : styles.hidden
            }`}
            onSubmit={handleSubmit}
          >
            <div className={styles.row}>
              <label className={styles.field} htmlFor="name">
                <p className={styles.label}>Name</p>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                  value={state.name}
                  autoComplete="name"
                  onBlur={handleBlur}
                  data-invalid={errors.name}
                  required
                />
                <p className={styles.errorMessage}>Please enter your name</p>
              </label>
              <label className={styles.field} htmlFor="email">
                <p className={styles.label}>Email</p>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  value={state.email}
                  autoComplete="email"
                  onBlur={handleBlur}
                  data-invalid={errors.email}
                  required
                />
                <p className={styles.errorMessage}>
                  Please enter a valid email
                </p>
              </label>
            </div>
            <label
              className={styles.field}
              htmlFor="message"
              data-replicated-value={state.message}
            >
              <p className={styles.label}>Message</p>
              <textarea
                className={styles.input}
                id="message"
                name="message"
                onChange={handleInputChange}
                value={state.message}
                onBlur={handleBlur}
                data-invalid={errors.message}
                required
              />
              <p className={styles.errorMessage}>Please enter a message</p>
            </label>
            <button
              className={styles.button}
              disabled={
                Object.values(errors).some(Boolean) || status === "submitting"
              }
              type="submit"
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
