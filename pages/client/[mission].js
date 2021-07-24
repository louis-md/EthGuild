import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Sidebar from '../../components/Layout/Sidebar'
import Layout from '../../components/Layout'

const Mission = () => {
  const {
    query: { mission }
  } = useRouter()

  return (
    <Layout>
      <Sidebar isMission />
      <StyledGrid container alignItems='center' justifyContent='center'>
        <p>Mission: {mission}</p>
      </StyledGrid>
    </Layout>
  )
}

export default Mission

const StyledGrid = styled(Grid)`
  height: 100%;
`
