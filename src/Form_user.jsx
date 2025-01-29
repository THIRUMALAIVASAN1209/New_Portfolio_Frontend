import React, { useState } from 'react';
import axios from 'axios';

const FormUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submit = async (event) => {
    event.preventDefault();

    const userData = { name, email, feedback };

    try {
      const response = await axios.post('https://portfolio-backend-b7s2.onrender.com/users/create', userData);
      setSuccess(response.data.message);
      setError(''); // Clear any previous error messages

      // Clear form inputs
      setName('');
      setEmail('');
      setFeedback('');
      
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); // Display backend error message
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setSuccess(''); // Clears any success messages
    }
  };

  return (
    <div className='contact-right my-font-class'>
      <form onSubmit={submit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "15px" }} type="submit">Submit</button>

        {/* Displaying success or error messages */}
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default FormUser;
