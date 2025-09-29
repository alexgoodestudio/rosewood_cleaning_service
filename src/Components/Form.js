import { useState } from "react";

function Form() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((err) => alert(err));
  };

  if (submitted) {
    return <p>Thank you! Your message has been sent.</p>;
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <p>
        <label>
          Name <input type="text" name="name" required className="rounded ms-2" />
        </label>
      </p>

      <p>
        <label>
          Email <input type="email" name="email" required className="rounded ms-2" />
        </label>
      </p>

      <p className="mt-4">
        <button type="submit" className="btn btn-primary px-4 py-2">
          Send
        </button>
      </p>
    </form>
  );
}

export default Form;
