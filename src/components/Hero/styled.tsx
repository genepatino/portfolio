import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/global";
import shapsImg from "../../images/shaps.png";

const hero = keyframes`
  0% {
		opacity: 0;
		transform: translateY(250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
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

const myAnim = keyframes`
  
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  padding: 0 260px;
  background-color: ${colors.heroBlue};
  padding-top: 40px;
  height: 120px;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-weight: 500;

  ul {
    display: flex;
    width: 50%;
    justify-content: space-between;
    list-style: none;
    gap: 10px;

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
`;

export const ButtonCV = styled.button<{ $backgroundColor?: string }>`
  width: 240px;
  height: 54px;
  padding: 20px;
  background: ${(props) => props.$backgroundColor || "transparent"};
  border: none;
  border: 2px solid #c7a6e7;
  border-radius: 50px;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  a {
    text-decoration: none;
    color: ${colors.white};
    padding: 20px;
  }

  &:hover {
    animation: ${myAnim} 0.2s linear 0s 1 reverse none;
    background: linear-gradient(90deg, #4219dc, #973af1);
    border: none;
  }
`;

export const AboutMe = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .svg {
    position: absolute;
    width: 100%;
  }
  .about-me {
    z-index: 2;
    margin-left: 260px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    animation: ${hero} 0.5s ease-in 0s 1 normal none;

    h3 {
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 4rem;
      color: white;
      font-weight: 200;
    }
    h2 {
      font-size: 7rem;
      color: white;
      letter-spacing: 0.12rem;
    }
    .developer {
      font-size: 18px;
      line-height: 28px;
      width: 100%;
      color: #c7c7c7;
    }
    .ready {
      letter-spacing: 0.18rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: #c7c7c7;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  z-index: 1;
  justify-content: flex-end;
  animation: ${hero} 0.5s ease-in 0s 1 normal none;

  &::before {
    content: url(${shapsImg});
    position: absolute;
    right: 106px;
    top: 40px;
    z-index: 2;
    animation: ${shaps} 5s infinite;
  }

  img {
    width: 480px;
    height: 480px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 110px;
    position: absolute;
    top: 0;
  }
`;
