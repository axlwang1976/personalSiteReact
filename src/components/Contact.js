import React from 'react';

class Contact extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  messageRef = React.createRef();

  createContact = e => {
    e.preventDefault();
    const singleContact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      message: this.messageRef.current.value
    };
    this.props.addContact(singleContact);
    e.currentTarget.reset();
    alert('Contact form was sended.');
  }

  render() {
    return (
      <section className="contact" id="section-contact">
        <h2 className="heading-2">Contact Me</h2>
        <form className="form" onSubmit={this.createContact}>
          <div className="form__group">
            <input ref={this.nameRef} type="text" className="form__input" placeholder="Your Name" id="name" name="name" required />
            <label htmlFor="name" className="form__label">
              Your Name
            </label>
          </div>
          <div className="form__group">
            <input type="email" className="form__input" placeholder="Your E-mail" id="email" name="email" ref={this.emailRef} required />
            <label htmlFor="email" className="form__label">Your E-mail</label>
          </div>
          <div className="form__group">
            <textarea id="message" className="form__textarea" placeholder="Your Message" rows="5" name="message" ref={this.messageRef} />
            <label htmlFor="message" className="form__label">Your Message</label>
          </div>
          <button type="submit" className="btn btn-submit">Send</button>
        </form>
      </section>
    );
  }
}

export default Contact;
