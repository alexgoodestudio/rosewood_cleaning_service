function Form() {
  return (
    <div>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Hidden input required for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you’re human: 
            <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Name <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default Form;
