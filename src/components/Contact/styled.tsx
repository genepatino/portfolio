import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/global";

const imgSocialMedia360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
  padding: 0 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1200px) {
    padding: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
  }

  h2 {
    font-size: 60px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 30px;
    text-align: center;

    @media screen and (max-width: 990px) {
      font-size: 4rem;
      padding: 0 40px;
    }
  }
  .title-p {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    p {
      @media screen and (max-width: 1023px) {
        text-align: center;
        padding: 0 40px;
      }
    }

    .text {
      font-size: 20px;
      line-height: 28px;
      color: ${colors.gray};
      font-weight: 300;
      text-transform: none;
      text-align: center;

      @media screen and (max-width: 990px) {
        font-size: 1.8rem;
        padding: 0 40px;
      }
    }
  }

  .icon-socialmedia {
    display: flex;
    margin-top: 30px;
    border-radius: 60px;
    background: linear-gradient(90deg, #4219dc, #973af1);
    padding: 20px 30px;
    gap: 40px;

    @media screen and (max-width: 1200px) {
      border-radius: 0;
      width: 100%;
      padding: 20px;
      justify-content: center;
    }

    @media screen and (max-width: 410px) {
      gap: 10px;
      padding: 20px 40px;
      justify-content: space-around;
    }

    .link {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: white;
      font-size: 16px;
      text-transform: capitalize;

      @media (min-width: 800px) and (max-width: 1023px) {
        font-size: 1.6rem;
      }

      @media screen and (max-width: 799px) {
        font-size: 1.4rem;
      }

      img {
        width: 40px;
      }

      span {
        @media screen and (max-width: 490px) {
          display: none;
        }
      }

      &:hover {
        img {
          animation: ${imgSocialMedia360} 0.2s linear;
        }
      }
    }
  }
`;
