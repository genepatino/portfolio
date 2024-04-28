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
  margin: 160px 260px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .left {
    h2 {
      font-size: 60px;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      line-height: 28px;
      margin: 0;
      color: ${colors.gray};
    }
    .button-icons {
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 40px;

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
    }
  }
`;
