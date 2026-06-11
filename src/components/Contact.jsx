import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

import { styles } from "../styles";
import { profile } from "../constants";
import Reveal, { MaskText } from "./Reveal";

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-3 border-b border-cream-100/15 pb-3 transition-colors focus-within:border-cream-100/60">
    <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-cream-300">
      {label}
    </span>
    {children}
    {error && <span className="font-sans text-[12px] text-iris-blush">{error}</span>}
  </label>
);

const inputClass =
  "w-full bg-transparent font-sans text-[16px] text-cream-100 placeholder:text-cream-300/50 outline-none";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) e.name = "Your name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) e.email = "That email looks off";
    if (!values.message.trim()) e.message = "Say a little something";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form));
    setIsSubmitting(true);
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_pzrytg2",
        "template_26hjic3",
        {
          from_name: form.name,
          to_name: "Aman Jaiman",
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        "bJBVpgo6aMs-B4M5a"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setLoading(true);
      sendEmail();
      setIsSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <section id="contact" className={`${styles.section} ${styles.paddingY}`}>
      <div className={styles.container}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: invitation */}
          <div>
            <p className={`${styles.eyebrow} mb-8`}>(Contact)</p>
            <h2 className="font-display text-[44px] font-extrabold leading-[0.95] tracking-tighter text-cream-100 sm:text-[68px] lg:text-[80px]">
              <MaskText text="Let's make" />
              <br />
              <span className="font-serif-soft font-light italic text-iridescent">
                <MaskText text="something" delay={0.12} />
              </span>{" "}
              <MaskText text="good." delay={0.2} />
            </h2>

            <Reveal delay={0.2}>
              <a
                href={`mailto:${profile.email}`}
                data-cursor
                className="link-sweep mt-10 inline-block font-sans text-[18px] text-cream-100 sm:text-[22px]"
              >
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-6 max-w-sm font-sans text-[15px] text-cream-200/70">
                Have a project, a role, or just a wild idea? I reply to every
                message — let&apos;s talk.
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <Field label="Your name" error={errors.name}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </Field>
              <Field label="Your email" error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@studio.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Your message" error={errors.message}>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about it…"
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                data-cursor
                disabled={loading}
                className="group relative mt-2 flex w-fit items-center gap-3 overflow-hidden rounded-full bg-cream-100 px-8 py-4 font-sans text-[15px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
              >
                <span>{loading ? "Sending…" : sent ? "Sent — thank you!" : "Send message"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
