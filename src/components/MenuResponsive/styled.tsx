import styled, { css, keyframes } from "styled-components";
import { colors } from "../../styles/global";

const leftMenuEntry = keyframes`
0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const rightMenuExit = keyframes`
0% {
  opacity: 1;
  transform: translateX(0);
}

100% {
  opacity: 0;
  transform: translateX(-250px);
}
`;

export const Menu = styled.section`
  display: none;

  @media screen and (max-width: 1199px) {
    display: block;
  }
  .menu-icon {
    color: ${colors.white};
    font-size: 2.6rem;
    cursor: pointer;
  }
`;

export const SidebarMenu = styled.section<{
  $openMenu: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.white};
  padding: 40px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: ${(props) =>
    props.$openMenu
      ? css`
          ${leftMenuEntry} 0.5s ease 0s 1 normal forwards;
        `
      : css`
          ${rightMenuExit} 0.5s ease 0s 1 normal forwards
        `};

  display: ${(props) =>
    props.$openMenu ? "block" : setTimeout(() => "none", 0.5)};
  pointer-events: ${(props) => (props.$openMenu ? "auto" : "none")};

  @media screen and (min-width: 600px) {
    width: 50%;
  }

  .icon-close {
    display: flex;
    justify-content: end;
    font-size: 4rem;
    color: ${colors.gray};
    cursor: pointer;
  }
  .ul-responsive {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    gap: 20px;

    a {
      text-transform: capitalize;
      text-decoration: none;
      font-size: 1.8rem;
      color: black;
      li {
        align-items: center;
        padding: 14px 20px;
        border-radius: 40px;
        background: #f7f8fe;
        display: flex;
        gap: 20px;
        font-weight: 400;
        cursor: pointer;

        .icon {
          font-size: 2.4rem;
        }
        &:hover {
          background: linear-gradient(90deg, #4219dc, #973af1);
          border: none;
          color: white;
          a {
            color: white;
          }
        }
      }
    }
  }
`;
