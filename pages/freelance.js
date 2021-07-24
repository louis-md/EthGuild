import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Freelance = () => {
  return (
    <Layout missions={[]}>
      <StyledGrid container alignItems='center' justifyContent='center'>
        <div>Welcome 👋</div>
      </StyledGrid>
    </Layout>
  )
}

export default Freelance

const StyledGrid = styled(Grid)`
  height: 100%;
`
