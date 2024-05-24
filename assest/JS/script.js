const clearBtn=document.querySelector('#submit-button')
 

// Initialize EmailJS with your service ID
emailjs.init('service_32iu1ck');

// Function to send email
function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(event.target);
  
  // Send email using EmailJS
  emailjs.sendForm('service_32iu1ck', 'template_ybabv4q', formData)
    .then(function(response) {
      console.log('Email sent successfully:', response);
      
      // Reset form fields
      event.target.reset();
    }, function(error) {
      console.error('Email sending failed:', error);
    });
}

// Add submit event listener to the form
document.getElementById('contact-form').addEventListener('submit', sendEmail);