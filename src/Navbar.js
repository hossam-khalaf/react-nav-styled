import { useState } from 'react'

import styled from 'styled-components'

const Navbar = () => {
	const [isOpen, setisOpen] = useState(false)

	return (
		<Nav>
			<Logo href='/'>
				Hoss<span>Codess</span>
			</Logo>

			<Hamburger onClick={() => setisOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</Hamburger>

			<Menu isOpen={isOpen}>
				<MenuLink href=''>Our Work</MenuLink>
				<MenuLink href=''>About</MenuLink>
				<MenuLink href=''>Careers</MenuLink>
				<MenuLink href=''>Contact</MenuLink>
			</Menu>
		</Nav>
	)
}

export default Navbar

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	padding: 0 2rem;
	background: #fff;
`

const Logo = styled.a`
	padding: 1rem 0;
	font-size: 1.7rem;
	font-weight: 700;

	color: #333;

	span {
		color: #37c075;
		font-weight: 300;
		font-size: 1.3rem;
	}
`
const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	span {
		width: 25px;
		height: 3px;
		background-color: #37c075;
		margin-bottom: 3px;
		border-radius: 5px;
	}

	@media (max-width: 786px) {
		display: flex;
	}
`

const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: max-height 0.4s ease-in;

	@media (max-width: 786px) {
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
	}
`
const MenuLink = styled.a`
	cursor: pointer;
	text-align: center;
	padding: 1rem 2rem;
	font-size: 0.9rem;
	color: #333;
	transition: color 0.3s ease-in;

	&:hover {
		color: #37c075;
	}
`
