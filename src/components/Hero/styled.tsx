import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/global";

const button = keyframes`
  
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
`;

const shaps = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const heroRight = keyframes`
  0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const heroLeft = keyframes`
  0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: #070268;
  padding: 24px;
  display: flex;
  width: 100%;
  min-width: 360px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  letter-spacing: 0.1rem;
  font-weight: 500;

  @media screen and (min-width: 400px) {
    justify-content: space-between;
    gap: 0;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1200px) {
    padding: 24px 100px;
  }

  @media screen and (min-width: 1400px) {
    padding: 24px 200px;
  }

  .ul-container {
    display: none;

    @media screen and (min-width: 1200px) {
      display: flex;
      font-size: 1.6rem;
      width: 50%;
      justify-content: space-between;
      list-style: none;

      li {
        .goTo {
          color: ${colors.white};
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            text-underline-offset: 10px;
          }
        }
      }
    }
  }

  .CV-languages {
    display: flex;
    align-items: center;
    gap: 20px;

    .buttons-es-en {
      display: flex;
      gap: 10px;
      .button-languages {
        gap: 4px;
        height: 40px;
        background: transparent;
        border: none;
        font-size: 1.6rem;
        font-weight: 600;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.1rem;
        cursor: pointer;

        img {
          width: 20px;
          height: 14px;
        }
      }
    }
  }
`;

export const ButtonCV = styled.button<{
  $backgroundColor?: string;
  $color?: string;
  $width?: string;
}>`
  min-width: 200px;
  height: 50px;
  padding: 0 20px;
  background: ${(props) => props.$backgroundColor || "transparent"};
  color: ${(props) => props.$color || "white"};
  border: none;
  border: 2px solid #c7a6e7;
  border-radius: 50px;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  a {
    text-decoration: none;
    color: ${(props) => props.$color || "white"};

    &:hover {
      color: white;
    }
  }

  &:hover {
    animation: ${button} 0.2s linear 0s 1 reverse none;
    background: linear-gradient(90deg, #4219dc, #973af1);
    border: none;
    color: white;
  }
`;

export const ExtraContainerBlue = styled.div`
  display: none;
  width: 100%;
  height: 80px;
  background: #070268;
`;

export const AboutMe = styled.section`
  width: 100%;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .section-hero-image {
    padding: 40px 20px;
    background: #070268;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 400px) {
      padding: 40px;
    }

    @media screen and (min-width: 942px) {
      display: flex;
      align-items: start;
      display: flex;
      flex-direction: row;
      height: 360px;
      z-index: 1;
    }

    @media screen and (min-width: 1200px) {
      height: 304px;
      padding: 20px 100px;
    }

    @media screen and (min-width: 1400px) {
      padding: 40px 200px;
    }
  }

  .about-me {
    width: 100%;
    animation: ${heroLeft} 0.5s ease-in 0s 1 normal none;
    @media screen and (min-width: 1600px) {
      position: relative;
      top: 50px;
    }

    h3 {
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-weight: 200;
      text-align: center;

      @media screen and (min-width: 700px) {
        font-size: 4rem;
      }

      @media screen and (min-width: 942px) {
        text-align: start;
      }
    }

    h2 {
      font-size: 4rem;
      letter-spacing: 0.12rem;
      text-align: center;

      @media screen and (min-width: 700px) {
        font-size: 5rem;
      }

      @media screen and (min-width: 942px) {
        text-align: start;
      }

      @media screen and (min-width: 1200px) {
        font-size: 6rem;
      }
    }

    .developer {
      font-size: 1.8rem;
      line-height: 30px;
      color: #c7c7c7;
      text-align: center;

      @media screen and (min-width: 700px) {
        font-size: 2rem;
      }
      @media screen and (min-width: 942px) {
        text-align: start;
      }
    }
  }

  .ready {
    letter-spacing: 0.18rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: #c7c7c7;
    text-align: center;
    @media screen and (min-width: 942px) {
      text-align: start;
    }
  }

  .svg {
    display: none;

    @media screen and (min-width: 942px) {
      display: block;
      position: relative;
      top: -97px;
    }
    @media screen and (min-width: 1600px) {
      top: -130px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  animation: ${heroRight} 0.5s ease-in 0s 1 normal none;

  @media screen and (min-width: 1200px) {
    justify-content: end;
  }

  .heroImage {
    width: 310px;
    height: 310px;
    object-fit: cover;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 501px) {
      width: 400px;
      height: 400px;
    }

    @media screen and (min-width: 760px) {
      width: 440px;
      height: 440px;
    }

    @media screen and (min-width: 1600px) {
      width: 500px;
      height: 500px;
    }
  }
  #shaps {
    position: absolute;
    top: 0;
    left: 50%;
    height: 230px;
    animation: ${shaps} 5s infinite;

    @media screen and (min-width: 760px) {
      height: 260px;
      top: 26px;
    }
    @media screen and (min-width: 1600px) {
      height: 300px;
      left: 70%;
    }
  }
`;
