import styled, { css, keyframes } from "styled-components";
import Image from "next/image";

interface LinkContainerProps {
  $delay: number;
}

interface LinksContainerProps {
  $linksNumber: number;
}

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.8);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`;

const flexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${flexCenter}
  gap: 1rem;
  min-height: 100vh;
  padding: 2rem 0;
`;

export const CardContainer = styled.div`
  ${flexCenter}
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(70, 120, 200, 0.3);
  border-radius: 20px;
  padding: 2rem;
`;

export const HeaderContainer = styled.div`
  ${flexCenter}
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  ${flexCenter}
  opacity: 0;
  color: rgb(${({ theme }) => theme.colors.title});
  transform: scale(0.8);
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 500ms;
`;

export const ProfilePicture = styled(Image)`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  background-color: rgb(${({ theme }) => theme.colors.image});
  border: 5px solid rgb(${({ theme }) => theme.colors.image});
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
`;

export const HeaderImage = styled(Image)`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 12px;
  border: 3px solid rgba(${({ theme }) => theme.colors.border}, 0.5);
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-out forwards;

  img {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    border-radius: 16px;
    object-fit: contain;
  }
`;

export const InvitationText = styled.div`
  ${flexCenter}
  gap: 0.25rem;
  text-align: center;
  color: rgb(${({ theme }) => theme.colors.title});
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 600ms;
  max-width: 420px;
`;

export const InvitationScript = styled.p<{ $size?: string }>`
  font-family: "Great Vibes", cursive;
  font-size: ${({ $size }) =>
    $size === "lg" ? "2.4rem" : $size === "md" ? "1.7rem" : "1.35rem"};
  line-height: 1.3;
  margin: 0;
  color: rgb(${({ theme }) => theme.colors.title});
`;

export const InvitationDetail = styled.p<{ $size?: string; $bold?: boolean }>`
  font-family: "K2D", sans-serif;
  font-size: ${({ $size }) =>
    $size === "lg" ? "1.5rem" : $size === "sm" ? "1rem" : "1.2rem"};
  line-height: 1.4;
  margin: 0;
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  color: rgb(${({ theme }) => theme.colors.title});
`;

export const InvitationLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const InvitationDivider = styled.hr`
  width: 60%;
  border: none;
  border-top: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.5);
  margin: 0.5rem 0;
`;

export const Name = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  font-family: ${({ theme }) => theme.fonts.join(", ")};
  font-weight: bold;
  position: relative;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.join(", ")};
  font-weight: normal;
  margin: 0;

  &::before,
  &::after {
    content: "-";
    margin: 0 2.5rem;
    opacity: 0;
  }

  &::before {
    animation: slideIn 0.5s ease-out forwards;
    animation-delay: 2500ms;
  }

  &::after {
    animation: slideIn 0.5s ease-out forwards;
    animation-delay: 2500ms;
  }

  @keyframes slideIn {
    from {
      margin: 0 2.5rem;
      opacity: 0;
    }
    to {
      margin: 0 0.5rem;
      opacity: 1;
    }
  }
`;

export const LinksContainer = styled.div<LinksContainerProps>`
  ${flexCenter}
  gap: 10px;
  height: 0;
  animation: scaleUp 0.5s ease-out forwards;
  animation-delay: 1000ms;

  @keyframes scaleUp {
    from {
      height: 0;
    }
    to {
      height: ${({ $linksNumber }) => $linksNumber * 65 - 15}px;
    }
  }
`;

export const LinkContainer = styled.div<LinkContainerProps>`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  width: 420px;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(${({ theme }) => theme.colors.background}, 0.45);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.5);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.join(", ")};
  display: flex;
  transform: scaleX(0);
  animation: scaleIn 1s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay + 1000}ms;

  a {
    gap: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(${({ theme }) => theme.colors.text}, 1);
    text-decoration: none;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-out forwards;
    animation-delay: ${(props) => props.$delay + 1250}ms;
  }

  @keyframes scaleIn {
    from {
      transform: scaleX(0);
      display: flex;
    }
    to {
      transform: scaleX(1);
    }
  }

  &:hover {
    transform: scale(1.05) !important;
    background-color: rgba(${({ theme }) => theme.colors.background}, 0.6);
    border: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.8);
    cursor: pointer;
  }
`;
