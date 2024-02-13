import "./ContactForm.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Nieprawidłowe Іmię")
    .max(20, "Nieprawidłowe Іmię")
    .matches(/^[^\d]*$/, "Nieprawidłowe Іmię")
    .required("Nieprawidłowe Іmię"),
  email: Yup.string().email("Wrong Email").required("Nieprawidłowy email"),
  message: Yup.string(),
});

export function ContactForm() {
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      {(props) => (
        <Form className="contact-form">
          <div className="contact-form-wrap">
            <label htmlFor="name" className="contact-form-label">
              <span className="contact-form-text">Imię*</span>
              <Field
                className={`contact-form-input ${
                  props.errors.name ? "error" : ""
                }`}
                type="text"
                name="name"
                id="name"
                placeholder="Imię"
                border={props.errors.name}
              />
              <div className="contact-form-error">
                <ErrorMessage name="name" />
              </div>
            </label>
            <label htmlFor="email" className="contact-form-label">
              <span className="contact-form-text">E-mail*</span>
              <Field
                className={`contact-form-input ${
                  props.errors.email ? "error" : ""
                }`}
                type="text"
                name="email"
                id="email"
                placeholder="mail@gmail.com"
                border={props.errors.email}
              />
              <div className="contact-form-error">
                <ErrorMessage name="email" />
              </div>
            </label>
            <label htmlFor="message" className="contact-form-label">
              <span className="contact-form-text">Wiadomość</span>
              <Field
                as={"textarea"}
                className="contact-form-input"
                type="text"
                name="message"
                id="message"
                style={{ height: "128px" }}
                placeholder="Twoja wiadomość..."
              />
              <div className="contact-form-error">
                <ErrorMessage name="message" />
              </div>
            </label>
            <button
              className="contact-form-btn"
              type="submit"
              aria-label="Button for submit form"
            >
              Wyślij
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
