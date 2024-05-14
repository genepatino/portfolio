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

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 260px;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 991px) {
    flex-wrap: nowrap;
    padding: 24px 40px;
    margin-top: -118px;
  }
  @media screen and (min-width: 1200px) {
    padding: 24px 100px;
  }
  @media screen and (min-width: 1400px) {
    padding: 24px 200px;
  }

  @media screen and (max-width: 990px) {
    padding: 24px 40px;
    justify-content: center;
  }

  .left {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 990px) {
      width: 100%;
    }

    h2 {
      font-size: 60px;
      font-weight: bold;

      @media screen and (max-width: 990px) {
        font-size: 4rem;
        text-align: center;
      }
    }
    p {
      font-size: 2rem;
      line-height: 28px;
      color: ${colors.gray};

      @media screen and (max-width: 990px) {
        font-size: 1.8rem;
      }
    }

    .button-icons {
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      @media screen and (max-width: 990px) {
        justify-content: center;
      }

      img {
        width: 40px;
        @media screen and (max-width: 990px) {
          width: 30px;
        }

        &:hover {
          animation: ${imgSocialMedia360} 0.2s linear;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
      width: 400px;
      height: 300px;

      @media screen and (max-width: 990px) {
        display: none;
      }
    }
  }
`;
