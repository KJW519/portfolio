import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  pointer-events: none;
`

const LeftGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const RightGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const LogoItem = styled(Link)`
  pointer-events: auto;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.1rem 0.1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  border-radius: 0;
  line-height: 1;
`

const NavItem = styled(NavLink)`
  pointer-events: auto;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.1rem 0.1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  border-radius: 0;
  line-height: 1;

  &.active {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
  }
`
const Navbar = () => {
  return (
    <Nav>
      <LeftGroup>
        <LogoItem to="/">Junwon</LogoItem>
      </LeftGroup>
      <RightGroup>
        <NavItem to="/work">Work</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </RightGroup>
    </Nav>
  )
}

export default Navbar