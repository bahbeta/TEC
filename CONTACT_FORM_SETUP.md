# Contact Form Setup Guide

The "Join The Collective" contact form uses Web3Forms API to send form submissions directly to your email.

## Setup Instructions

### 1. Get Your Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started - It's Free"
3. Enter your email: `reach@theelevatecollective.me`
4. Verify your email address
5. Copy your Access Key

### 2. Configure the Form

Open `src/components/JoinCollective.jsx` and replace the placeholder:

```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace this with your actual key
```

With your actual access key:

```javascript
access_key: 'your-actual-access-key-here',
```

### 3. Test the Form

1. Run the development server: `npm run dev`
2. Navigate to the "Join The Collective" section
3. Fill out the form and submit
4. Check your email at `reach@theelevatecollective.me`

## Form Data Structure

The form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Enquiry** (optional)

All submissions are sent to: `reach@theelevatecollective.me`

## Email Format

You'll receive emails with:
- Subject: "New Enquiry from The Elevate Collective Website"
- From: Customer's name and email
- Body includes: Name, Email, Phone, and Enquiry message

## Alternative Solutions

If you prefer a different email service:

### Option 1: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update the form submission code

### Option 2: Custom Backend
Create your own API endpoint using:
- Node.js + Nodemailer
- Serverless functions (Vercel, Netlify)
- Supabase Edge Functions

### Option 3: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action URL

## Security Notes

- Web3Forms is free for up to 250 submissions/month
- No API key storage in environment variables needed (it's safe for client-side)
- Includes spam protection
- GDPR compliant

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify access key is correct
- Ensure email is verified with Web3Forms

**Not receiving emails?**
- Check spam folder
- Verify email address in Web3Forms dashboard
- Test with a different email service

## Support

For Web3Forms support: [https://web3forms.com/docs](https://web3forms.com/docs)
