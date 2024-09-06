const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Function to send an email
app.post('/send-email', async (req, res) => {
    const formData = req.body; // Get form data from the request body

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kingderick554@gmail.com',   // Your email
            pass: 'your_app_specific_password',  // App-specific password
        },
    });

    let mailOptions = {
        from: 'kingderick554@gmail.com',
        to: formData.email,
        subject: formData.subject,
        text: formData.message,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
