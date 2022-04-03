import { Button } from 'bootstrap';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BlogConext } from '../../App';
import './Header.css'
const Header = () => {
    const { pathname } = useLocation()
    const isTrue = pathname.includes('blog')
  
    
    return (
        <div
            style={isTrue ? { display: 'none' } : { display: 'block' }}
        >
            <Container>
                <Row>
                    <Col xs={4}>
                        <h3>logo</h3>
                    </Col>
                    <Col xs={8}>
                        <div>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'Link')} to='/'>
                                home
                            </NavLink>
                            <NavLink to='/login'>login</NavLink>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Header;