import React from 'react';
import styled from 'styled-components';
import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
       <Button path="mailto:dealdelivers2020@gmail.com">
       <span role="img" aria-label="Email">📧</span>&nbsp;&nbsp;Email us
       </Button>
       <Button path="https://medium.com/ukdelivers">
       <span role="img" aria-label="Medium">🙌</span>&nbsp;&nbsp;Follow on Medium
       </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        <h1>UK Delivers</h1>
        <p>We’re creating local listings directories for independent businesses delivering contact-free to your neighbourhood. #shoplocal.</p>
        { /* launch search with 9+ listings: <LocationSearch /> */ }
      </Container>
    </StyledHeroHeader >
  )
}

const StyledHeroHeader = styled.header`
  display:block;
  padding:var(--spacing-xxxl) 0;
  padding-bottom:calc(var(--spacing-lg) * 2.5);
  background-color:var(--base);
  background-size:cover;
  background-position:top;

  h1 {
    color:var(--text-high-white);
    margin:0 0 1rem 0;
  }
  p {
    color:var(--text-med-white);
    max-width:35ch;
  }

  @media(min-width:48rem) {
    padding:var(--spacing-xxl) 0;
    padding-bottom:calc(var(--spacing-xl) * 1.5);
  }
`

const StyledNav = styled.nav`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:block;
  justify-content:space-between;
  align-items:center;
  flex-flow:row nowrap;
  width:100%;
  padding:var(--spacing-sm);

  a {
    width:100%;
    margin:0 0 var(--spacing-xs) 0;
  }

  @media(min-width:48rem) {
    display:flex;
    justify-content:flex-end;

    a {
      width:auto;
      margin:0 0 0 var(--spacing-xs);
    }
  }


`
