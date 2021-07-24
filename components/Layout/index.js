import styled from 'styled-components'
import Nav from './Nav'
import Sidebar from './Sidebar'

const Layout = ({ children }) => (
  <>
    <Nav />
    <Sidebar />
    <Body>{children}</Body>
  </>
)

export default Layout

const Body = styled.div`
  position: absolute;
  margin-top: 100px;
  margin-left: 200px;
  height: calc(100vh - 100px);
  width: calc(100vw - 200px);
`
