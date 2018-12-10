import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import NavMenu from '../../components/NavMenu';
import CarouselPage from '../../containers/CarouselPage';

const Home = () => (
  <Container>
    <Header>
      <Logo />
      <NavMenu />
    </Header>
    <h2>Home</h2>
    <CarouselPage title='Categories' />
  </Container>
);

export default Home;
