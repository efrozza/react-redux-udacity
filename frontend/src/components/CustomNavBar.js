import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CustomNavBar = props => {
  return (
    <div>
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to='/'>
            <Navbar.Brand>Readable app</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to='/postnew'>
              <NavItem eventKey={1}>New Post</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default CustomNavBar
