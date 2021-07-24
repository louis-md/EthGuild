import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const Client = () => (
  <Layout>
    <StyledGrid container alignItems='center' justifyContent='center'>
      <div>Welcome 👋</div>
    </StyledGrid>
  </Layout>
)

export default Client

const StyledGrid = styled(Grid)`
  height: 100%;
`
