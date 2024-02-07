'use client'

import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import React, { FC, useState } from 'react'

import LoadingButton from '@/components/loadingbutton/LoadingButton'

const WaitlistForm: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    yearsOfExperience: '',
    toolUsage: '',
  })
  const [emailError, setEmailError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<{ value: unknown }> | SelectChangeEvent<string>
  ) => {
    const target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
    console.log(formData)

    if (target.name === 'email' && validateEmail(target.value)) {
      setEmailError('')
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    setTimeout(async () => {
      try {
        const response = await fetch('/api/v1/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          alert('Successfully joined the waitlist!')
        } else {
          alert('Error joining the waitlist.')
        }
        setLoading(false)
      } catch (error) {
        console.error('An error occurred during the submission:', error)
      }
    }, 1000) // Add a 1-second delay before submitting the form
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4, textAlign: 'center' }}>
        Waitlist Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Years of Experience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
          <InputLabel>How will you use the tool?</InputLabel>
          <Select
            label="How will you use the tool?"
            name="toolUsage"
            value={formData.toolUsage}
            onChange={handleChange}
          >
            <MenuItem value="personal">Personal</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
          </Select>
        </FormControl>

        <LoadingButton title="Join Waitlist" type="submit" onClick={() => {}} loading={loading} />
      </form>
    </Container>
  )
}

export default WaitlistForm
