import React from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Navigation() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<LinkContainer to="/">
					<Nav.Link>
						<Navbar.Brand>Showbuzz</Navbar.Brand>
					</Nav.Link>
				</LinkContainer>

				<Nav className="mr-auto">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>

					<LinkContainer to="/movies">
						<Nav.Link>Listing</Nav.Link>
					</LinkContainer>
					<Nav.Link href="#pricing">Login</Nav.Link>
					<Nav.Link href="#pricing">Sign up</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</>
	)
}

export default Navigation
