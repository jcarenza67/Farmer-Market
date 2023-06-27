import React from 'react'
import { Container, Menu } from 'semantic-ui-react';

function Header() {
    return (
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item as="a" header>
                    Avery's Organics
                </Menu.Item>
                {/* Add more Menu.Item components here for additional links in the navbar */}
            </Container>
        </Menu>
    )
}

export default Header;
