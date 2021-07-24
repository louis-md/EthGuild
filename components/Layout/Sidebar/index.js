import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Item from './Item'
import { Button } from '@material-ui/core'

const Sidebar = ({ isMission }) => {
  const { pathname } = useRouter()
  const [missions, setMissions] = useState([])

  useEffect(async () => {
    const user = await fetch('/api/client').then(res => res.json())
    setMissions(user.missions)
  }, [])

  return (
    <StyledDiv isMission={isMission}>
      {pathname.includes('freelance') ? (
        items.map((item, index) => <Item key={index} item={item} />)
      ) : isMission ? (
        missionItems.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <>
          {missions?.map((item, index) => (
            <Item key={index} item={item} isMission />
          ))}
          <StyledButton variant='outlined'>New mission</StyledButton>
        </>
      )}
    </StyledDiv>
  )
}

const items = [
  { label: 'Explore', url: 'explore' },
  { label: 'Skills', url: 'skills' },
  { label: 'Missions', url: 'missions' },
  { label: 'Payments', url: 'payments' }
]

const missionItems = [
  { label: 'Description', url: 'description' },
  { label: 'Candidates', url: 'candidates' },
  { label: 'Activity Report', url: 'activity-report' }
]

export default Sidebar

const StyledDiv = styled.div`
  position: absolute;
  margin-top: ${props => (props.isMission ? 0 : '100px')};
  border-right: solid 1px lightgray;
  height: 100%;
  width: 200px;
`

const StyledButton = styled(Button)`
  &&& {
    margin-top: 20px;
    margin-left: 20px;
  }
`
