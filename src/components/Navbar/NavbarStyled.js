import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #1f2326;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  position: relative;
  z-index: 3;
  .logo-container {
    padding-right: 1rem;
    .desktop-logo {
      display: none;
    }
  }
  .mobile-nav-links {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    left: 0;
    top: 80px;
    background-color: rgb(255, 70, 85);
    padding: 1rem 1.6rem;
    text-align: right;
    z-index: 4;
    div {
      a {
        display: block;
        color: #ece8e1;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
        padding: 1rem 0;
        width: 100%;
      }
    }
  }
  .desktop-nav-links {
    display: none;
    a {
      padding-left: 1rem;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 700;
      color: #ece8e1;
    }
  }
  .menu-logo-container {
    img {
      height: 30px;
      width: 30px;
    }
  }
  @media (min-width: 768px) {
    .mobile-nav-links {
      display: none;
    }
    .desktop-nav-links {
      display: flex;
    }
    .menu-logo-container {
      display: none;
    }
  }
`;
