import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import Card from '@material-ui/core/Card'
import { Chip, Grid, Button } from '@material-ui/core'

const Explore = () => {
  const [client, setClient] = useState([])

  useEffect(async () => {
    const usr = await fetch('/api/client').then(res => res.json())
    setClient(usr)
  }, [])
  return (
    <Layout>
      {client?.missions?.map((mission, index) => (
        <StyledCard key={index}>
          <StyledGrid container alignItems='space-between'>
            <div>
              {mission.label}
              <br />
              Submitted by: {client.address.slice(0, 10)}...
              <br />
              Budget: {mission.budget} ETH
              <br />
              Application Deadline: {mission.applicationDeadline}
              <br />
              Status: {mission.status}
              <br />
              {mission?.tags?.map((tag, index) => (
                <Chip key={index} label={tag} />
              ))}
            </div>
            <Grid container>
              <Button>Apply</Button>
              <Button>See details</Button>
            </Grid>
          </StyledGrid>
        </StyledCard>
      ))}
    </Layout>
  )
}

export default Explore

const StyledCard = styled(Card)`
  width: 300px;
  height: 400px;
  margin: 30px;
  padding: 30px;
`

const StyledGrid = styled(Grid)`
  height: 100%;
`
