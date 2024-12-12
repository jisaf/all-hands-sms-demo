import { NextResponse } from 'next/server'
import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromNumber = process.env.TWILIO_PHONE_NUMBER

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json()
    
    if (!accountSid || !authToken || !fromNumber) {
      return NextResponse.json(
        { error: 'Twilio credentials not configured' },
        { status: 500 }
      )
    }

    const client = twilio(accountSid, authToken)
    
    await client.messages.create({
      body: 'Hello from All Hands SMS Demo!',
      to: phoneNumber,
      from: fromNumber,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending SMS:', error)
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    )
  }
}