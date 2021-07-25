import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import Card from '@material-ui/core/Card'
import {
  Button,
  Grid,
  Select,
  TextField,
  FormControl,
  InputLabel,
  MenuItem
} from '@material-ui/core'

const Skills = () => {
  const [client, setClient] = useState([])
  const [experience, setExperience] = useState(0)

  useEffect(async () => {
    const usr = await fetch('/api/freelance').then(res => res.json())
    setClient(usr)
  }, [])
  return (
    <Layout>
      <StyledCard>
        Type a skill and expertise level to add it to your profile:
        <br />
        <br />
        <Grid container justifyContent='space-between' alignItems='center'>
          <TextField label='Skill Name' />
          <FormControl>
            <InputLabel id='demo-simple-select-label'>Experience</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={experience}
              onChange={() => {}}
            >
              <MenuItem value={0}>Select value</MenuItem>
              <MenuItem value={1}>Begineer (less than 6 months)</MenuItem>
              <MenuItem value={2}>Junior (between 6 month and a year)</MenuItem>
              <MenuItem value={3}>Intermediate (between 1 & 3 years)</MenuItem>
              <MenuItem value={4}>Senior (more than 3 years)</MenuItem>
            </Select>
          </FormControl>
          <Button>Confirm</Button>
        </Grid>
      </StyledCard>
    </Layout>
  )
}

export default Skills

const StyledCard = styled(Card)`
  width: 800px;
  height: 400px;
  margin: 30px;
  padding: 30px;
`
