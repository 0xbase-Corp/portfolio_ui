'use client'

import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const Waitlist = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    yearsOfExperience: '',
    toolUsage: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<{ value: unknown }> | SelectChangeEvent<string>
  ) => {
    const target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
    console.log(formData)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
     
      const response = await fetch('/api/v1/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Successfully joined the waitlist!')
      } else {
        console.error('Error joining the waitlist.')
      }
    } catch (error) {
      console.error('An error occurred during the submission:', error)
    }
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
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
          label="Years of Experience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
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
        <Button type="submit" variant="contained" color="primary">
          Join Waitlist
        </Button>
      </form>
    </Container>
  )
}

export default Waitlist
