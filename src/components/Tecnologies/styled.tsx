import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 0 260px;
  margin-bottom: 50px;

  @media screen and (max-width: 990px) {
    padding: 0px 40px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 100px;
  }

  h2 {
    font-size: 60px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 30px;

    @media screen and (max-width: 990px) {
      font-size: 4rem;
    }
  }
`;

export const GridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  gap: 30px;

  @media screen and (min-width: 630px) {
    flex-wrap: nowrap;
    gap: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
  border-radius: 20px;
  padding: 20px 40px;
  background-color: white;

  p {
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;

    @media screen and (max-width: 990px) {
      text-align: center;
    }
  }

  .icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;

      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7));
      }

      figcaption {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
`;
