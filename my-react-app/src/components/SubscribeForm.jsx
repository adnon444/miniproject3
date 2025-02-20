import React, { useState } from 'react';
import "./subscribeform.css" 
    
function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission logic here, e.g., send the email to your server
    console.log('Submitting email:', email);
    // Reset the form after submission (optional)
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscribeForm;