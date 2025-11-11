import { useRef } from 'react';

function Talk() {
  const formRef = useRef(null);

  const scriptURL =
    'https://script.google.com/macros/s/AKfycby05t2PYwsC9Kv1O9tI0aXuDQeRItH3UpXsUHhA58Yi49x7jlXd7G4zAw84wM_UIT4CMA/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(() => {
        alert('Thank you! Your form is submitted successfully.');
        form.reset(); // Clear the form after submission
      })
      .catch((error) => {
        console.error('Error!', error.message);
      });
  };

  return (
    <div id="talk">
      <form
        className="letstalk"
        name="letstalk"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h1>Lets Talk</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          style={{backgroundColor: '#ffffff', color: '#000000', border: '2px solid rgb(0, 0, 0)'}}
          name="name"
          id="name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          style={{backgroundColor: '#ffffff', color: '#000000', border: '2px solid rgb(0, 0, 0)'}}
          name="email"
          id="email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          style={{backgroundColor: '#ffffff', color: '#000000', border: '2px solid rgb(0, 0, 0)'}}
          name="message"
          id="message"
          rows="5"
          required
        ></textarea>

        <div className="btn-submit">
          <button type="submit">
            Send Message{' '}
            <span className="paper">
              <i className="fa-solid fa-paper-plane"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Talk;
