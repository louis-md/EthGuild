import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styled from 'styled-components'

const Nav = () => {
  return (
    <StyledGrid container alignItems='center' justifyContent='flex-end'>
      <StyledDiv>
        <Image src='/user.png' alt='User Icon' width={37} height={37} />
      </StyledDiv>
    </StyledGrid>
  )
}

export default Nav

const StyledGrid = styled(Grid)`
  position: absolute;
  height: 100px;
  top: 0;
  border-bottom: solid 1px lightgray;
`

const StyledDiv = styled.div`
  margin-right: 30px;
`
