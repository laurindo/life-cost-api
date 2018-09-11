import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import NavMenu from '../../components/NavMenu';

const About = () => (
  <Container>
    <Header>
      <Logo />
      <NavMenu />
    </Header>
    <h2>About</h2>
  </Container>
);

export default About;
