import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import NavMenu from '../../components/NavMenu';
import PickList from '../../components/form/PickList';
import Button from '../../components/form/Button';

const countries = [{
  name: 'Brazil',
  initial: 'bra'
}, {
  name: 'India',
  initial: 'ind'
}, {
  name: 'Canada',
  initial: 'can'
}];

const Landing = () => (
  <Container>
    <Header>
      <Logo />
      <NavMenu />
    </Header>
    <div className="container-pick-list">
      <h2>Select Location</h2>

      <div className="pick-list">
        <PickList title="Country" items={countries} />
        <PickList title="State" items={countries} />
        <PickList title="City" items={countries} />
      </div>

      <div>
        <Button text="Search" />
      </div>
    </div>
  </Container>
);

export default Landing;
