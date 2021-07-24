import { Grid } from '@material-ui/core'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Item = ({ item, isMission }) => {
  const { query } = useRouter()
  return (
    <StyledDiv container justifyContent='flex-start' alignItems='center'>
      <Link
        href={
          isMission
            ? `/client/${item.url}`
            : query.mission
            ? `${query.mission}/${item.url}`
            : `/${item.url}`
        }
        passHref
      >
        {item.label}
      </Link>
    </StyledDiv>
  )
}

export default Item

const StyledDiv = styled(Grid)`
  height: 50px;
  border-bottom: solid 1px lightgray;
  padding-left: 20px;
`
