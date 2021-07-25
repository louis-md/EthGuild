import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const Nav = () => {
  return (
    <StyledGrid container alignItems='center' justifyContent='space-between'>
      <Link passHref href='/'>
        <StyledButton>Home</StyledButton>
      </Link>
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

const StyledButton = styled(Button)`
  &&& {
    margin-left: 20px;
  }
`
