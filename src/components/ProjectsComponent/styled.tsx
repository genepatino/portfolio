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

      .video {
        position: relative;
        @media screen and (max-width: 990px) {
          display: flex;
          justify-content: center;
          min-width: 320px;
          width: 100%;
        }
      }

      .titleVideo {
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

export const SectionTitle = styled.h3`
  align-self: flex-start;
  width: 100%;
  max-width: 1300px;
  margin: 60px auto 10px;
  padding-bottom: 12px;
  border-bottom: 2px solid #00000017;
  font-size: 3.2rem;
  font-weight: bold;
  color: ${colors.dark};

  @media screen and (max-width: 990px) {
    margin-top: 40px;
    font-size: 2.6rem;
  }
`;

export const ProfessionalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  max-width: 1300px;
  margin-top: 30px;
`;

export const ProfessionalCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 40px;
  align-items: start;

  @media screen and (max-width: 990px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .media {
    display: flex;
    flex-direction: column;
    gap: 16px;

    img {
      display: block;
      width: 100%;
      border-radius: 20px;
      border: 2px solid #00000017;
      filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
    }

    .cover {
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;

      img {
        border-radius: 12px;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .meta {
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${colors.purple};
    }

    h3 {
      font-size: 2.8rem;
      line-height: 1.25;
      color: ${colors.dark};
      margin-bottom: 6px;
    }

    h4 {
      margin-top: 8px;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${colors.darkGray};
    }

    p,
    li {
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 400;
      letter-spacing: normal;
      text-transform: none;
      text-align: left;
      color: ${colors.dark};
    }

    ul {
      padding-left: 20px;
    }

    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0;
      list-style: none;

      li {
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 1.3rem;
        line-height: 2rem;
        font-weight: 600;
        color: ${colors.white};
        background: linear-gradient(90deg, #4219dc, #973af1);
      }
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 8px;

      a {
        font-size: 1.6rem;
        font-weight: bold;
        color: ${colors.heroBlue};
        text-underline-offset: 4px;
      }
    }

    .code-note {
      font-size: 1.4rem;
      color: ${colors.gray};
    }
  }
`;
