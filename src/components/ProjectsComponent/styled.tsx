import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/global";

const hoverVideo = keyframes`
 0% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		transform: scale(1);
	}

	100% {
		box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
		transform: scale(1.1);
	}

`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 260px;
  margin: 50px 0;

  @media screen and (min-width: 991px) {
    margin: 50px 0;
    padding: 0 40px;
  }

  @media screen and (min-width: 1200px) {
    padding: 24px 100px;
  }

  @media screen and (max-width: 990px) {
    margin: 0;
    padding: 0 40px;
  }

  p {
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: #808080;
    text-transform: uppercase;
    text-align: center;
  }
  h2 {
    font-size: 60px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;

    @media screen and (max-width: 990px) {
      font-size: 4rem;
    }
  }
`;

export const GridContainer = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  max-width: 1300px;

  @media screen and (max-width: 990px) {
    gap: 0;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;

    @media screen and (max-width: 990px) {
      gap: 10px;
    }

    .video-container {
      height: 400px;

      @media screen and (max-width: 990px) {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 300px;
        min-width: 320px;
        width: 90%;
      }

      @media screen and (max-width: 800px) {
        min-width: 320px;
        width: 90%;
      }

      video {
        border-radius: 20px;
        max-width: 400px;
        height: 400px;
        border: 2px solid #00000017;

        @media screen and (max-width: 990px) {
          width: 90%;
          height: 300px;
        }
      }
      .title {
        display: none;
        border-radius: 20px;

        h4 {
          text-transform: capitalize;
          font-size: 2.4rem;
          color: ${colors.white};
          z-index: 2;

          a {
            color: white;
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 4px;
          }
        }
      }

      .videoLuxe,
      .videoWeather,
      .videoTaskTide {
        position: relative;
        @media screen and (max-width: 990px) {
          display: flex;
          justify-content: center;
          min-width: 320px;
          width: 100%;
        }
      }

      .titleLuxe,
      .titleWeather,
      .titleTaskTide {
        position: absolute;
        width: 400px;
        height: 400px;

        @media screen and (max-width: 570px) {
          width: 68%;
          min-width: 320px;
          height: 300px;
        }
        @media screen and (max-width: 990px) {
          min-width: 320px;
          height: 300px;
        }
      }

      @media screen and (min-width: 600px) {
        &:hover {
          animation: ${hoverVideo} 0.6s ease 0s 1 normal forwards;
          border-radius: 20px;

          @media screen and (max-width: 1000px) {
            animation: none;
          }

          .title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 0 20px;
            background: linear-gradient(128deg, #4219dce6, #973af1c9);
          }
        }
      }
    }

    .image-project-resena {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      align-items: center;
      .imagProject {
        width: 100%;
        object-fit: contain;
        border-radius: 20px;
        filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7));
      }

      .resena {
        font-size: 18px;
        line-height: 28px;

        margin: 0 20px;
        text-transform: none;
        font-weight: 500;

        @media screen and (max-width: 990px) {
          margin: 0;
          font-size: 16px;
        }

        .url {
          color: #808080;
          text-underline-offset: 4px;
          font-weight: bold;
        }
      }
    }
  }
`;
