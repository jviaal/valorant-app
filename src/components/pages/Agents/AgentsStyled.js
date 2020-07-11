import styled from "styled-components";

export const AgentsStyled = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  & > section {
    padding: 1.6rem;
  }
  .agent-image-slider-section {
    position: relative;
    min-height: calc(100vh - 80px);
    .video-background {
      width: 100%;
      position: absolute;
      height: 85%;
      top: 0;
      left: 0;
      z-index: -1;
      object-fit: cover;
      object-position: center;
    }
    .current-agent-image-container {
      margin-top: 4rem;
      img {
        z-index: 1;
        width: 100%;
      }
    }
  }
  .agent-details-section {
    min-height: calc(100vh - 80px);
    position: relative;
    font-family: "Tungsten", sans-serif;
    color: #0f1821;
    .agent-main-details {
      text-transform: uppercase;
      text-rendering: optimizeLegibility;
      margin-top: 2rem;
      .agentID {
        font-size: 30px;
        font-weight: bold;
      }
      .agent-name {
        margin-top: -1rem;
        font-size: 80px;
        letter-spacing: 1px;
        color: #ff4655;
        text-shadow: 2px 2px 5px rgb(15, 24, 33, 0.25);
        font-weight: 900;
      }
      .agent-role {
        margin-top: -0.5rem;
        font-size: 40px;
        letter-spacing: 1px;
      }
      .agent-biography {
        font-weight: 400;
        font-size: 1rem;
        opacity: 0.7;
        margin-top: 0.5rem;
        line-height: 1.6rem;
        text-transform: capitalize;
        font-family: "Roboto", sans-serif;
        max-width: 600px;
      }
    }
    .agent-ability-details-container {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 2rem;
      .agent-ability-title {
        font-size: 40px;
        letter-spacing: 0.5px;
        color: #ff4655;
        text-shadow: 2px 2px 5px rgb(15, 24, 33, 0.1);
      }
      .abilities-nav-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        max-width: 375px;
        button {
          width: 23%;
          border: none;
          background: transparent;
          outline: none;
          img {
            padding: 0.5rem;
            width: 100%;
            box-shadow: 2px 2px 5px rgb(15, 24, 33, 0.5);
          }
        }
      }
      .agent-other-details {
        div.agent-ability-default-name {
          font-weight: bold;
          margin: 1rem 0;
          font-size: 1.75rem;
          letter-spacing: 1px;
        }
        div.agent-ability-desc {
          font-weight: 400;
          font-size: 1rem;
          font-family: "Roboto", sans-serif;
          opacity: 0.7;
          margin-top: 0.5rem;
          line-height: 1.6rem;
        }
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .agent-image-slider-section {
      width: 50%;
      max-height: calc(100vh - 80px);
    }
    .agent-details-section {
      max-height: calc(100vh - 80px);
      overflow-y: hidden;
      width: 100%;
      &:hover {
        overflow-y: scroll;
      }
      .agent-ability-details-container {
        .agent-video {
          max-width: 650px;
        }
      }
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(15, 24, 33, 0.5);
        border-radius: 100px;
      }
    }
  }
  @media (min-width: 1024px) {
    .agent-image-slider-section {
      width: 40%;
    }
    .abilities-nav-buttons {
      max-width: 300px !important;
    }
  }
  @media (min-width: 1440px) {
    padding: 0 10%;
    .agent-image-slider-section {
      width: 35%;
    }
  }
  @media (min-width: 1500px) {
    padding: 0 12%;
    .agent-image-slider-section {
      width: 32%;
    }
  }
`;
