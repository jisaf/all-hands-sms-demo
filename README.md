# All Hands SMS Demo

A simple Next.js application that demonstrates sending SMS messages using Twilio and shadcn UI components.

```
Note from the human

Created by All-Hands.dev CodeActAgent, see TRANSCRIPT.md for the development transcript.
Operation took 18 minutes to complete.
Cost $0.44 using Claude 3.5 Sonnet 2024-10-22.
```


## Features

- Modern UI built with Next.js and shadcn UI
- Phone number input with validation
- SMS sending functionality using Twilio
- Real-time feedback on SMS sending status

## Prerequisites

- Node.js 18 or later
- A Twilio account with:
  - Account SID
  - Auth Token
  - Twilio phone number

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/all-hands-sms-demo.git
   cd all-hands-sms-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Twilio credentials:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a valid phone number in international format (e.g., +1234567890)
2. Click the "Send SMS" button
3. Wait for the confirmation message

## Notes

- The phone number must be in international format with a + prefix
- The SMS message content is hardcoded for demo purposes
- Make sure your Twilio account has sufficient credits for sending SMS messages

## License

MIT
