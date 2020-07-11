import styled from "styled-components";

export const AgentsSliderStyled = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
  .container {
    width: 100%;
    overflow: hidden;
    &::after,
    &::before {
      content: " ";
      width: 40%;
      height: 70px;
      position: absolute;
      top: 0;
      pointer-events: none;
    }
    &::after {
      background-image: linear-gradient(to right, #0e1920, transparent);
    }
    &::before {
      z-index: 2;
      right: 0;
      background-image: linear-gradient(to left, #0e1920, transparent);
    }
  }
  .item {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
  .item div {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
  }
  .item img {
    width: 100%;
    cursor: pointer;
  }
  .slick-next:before,
  .slick-prev:before {
    display: none;
  }
  .slick-current .item div {
    width: 70px;
    height: 70px;
  }
  .slick-current .item div img {
    border: 2px solid #fff;
  }
  .slick-track {
    display: flex !important;
    align-items: center !important;
  }
`;
