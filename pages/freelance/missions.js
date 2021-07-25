import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { Chip } from '@material-ui/core'
const Missions = () => {
  const [missions, setMissions] = useState([])

  useEffect(async () => {
    const usr = await fetch('/api/freelance').then(res => res.json())
    setMissions(usr.missions)
  }, [])
  return (
    <Layout>
      <StyledCard>
        My missions:
        {missions.map((mission, index) => (
          <Grid key={index}>
            - {mission.label} {mission.clientAddress.slice(0, 14)}...
            <Chip label={mission.status} />
          </Grid>
        ))}
      </StyledCard>
    </Layout>
  )
}

export default Missions

const StyledCard = styled(Card)`
  margin: 30px;
  padding: 30px;
  width: 800px;
`
