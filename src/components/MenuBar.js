import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/tzi_symbol_inverted.svg'
import { Menu } from 'semantic-ui-react'

const MenuBar = () => (
    <div>
        <Menu size="massive" inverted fluid widths={4}>
            <Menu.Item>
                <Link to="/">
                    <img className="" src={logo} alt="TZI Logo"
                        style={{
                        height: '40px',
                        marginBottom:'0',
                    }}
                   />
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/deck">Deck</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/games">Games</Link>
            </Menu.Item>
            <Menu.Item>
                <a href="https://shop.tzi.cards">
                    Store
                </a>
            </Menu.Item>
        </Menu>
    </div>
)

export default MenuBar
