import React from 'react';
import styled from 'styled-components';
import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Button path="https://airtable.com/">
        <span role="img" aria-label="List">📍</span> List your business
      </Button>
       <Button path="mailto:me@mytowndelivers.com">
       <span role="img" aria-label="Email">📧</span> Email us
       </Button>
       <Button path="https://www.facebook.com/mytowndelivers">
       <span role="img" aria-label="Facebook">🙌</span> Follow on Facebook
       </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        <h1>My Town Delivers</h1>
        <p>Helping local restaurants, shops &amp; essential services that deliver direct to your door.</p>
        <p>Try searching what you're looking for e.g. bread, coffee, beer, prescriptions:</p>
        <LocationSearch />
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
