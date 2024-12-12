'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('SMS sent successfully!')
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to send SMS')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send SMS')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">SMS Demo</h1>
          <p className="mt-2 text-gray-600">
            Enter a phone number to receive a test message
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <Input
              type="tel"
              placeholder="Enter phone number (e.g., +1234567890)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              pattern="^\+?[1-9]\d{1,14}$"
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send SMS'}
          </Button>

          {message && (
            <p
              className={`mt-4 text-center ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}
