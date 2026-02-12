"use client";

import data from "@/config";
import Link from "next/link";
import {
  HeaderContainer,
  InfoContainer,
  ProfilePicture,
  HeaderImage,
  ImageOverlay,
  Name,
  Description,
  LinksContainer,
  LinkContainer,
  Container,
  CardContainer,
} from "@/components/linkBoard/linkBoardStyles";
import { useEffect, useState } from "react";
import ShareBar from "@/components/sharebar/sharebar";
import nameRandomizer from "@/utils/nameRandomizer";
import Loading from "@/components/loading/loading";
import Source from "@/components/source/source";

interface LinkBoardProps {
  headerImage?: string;
  excludeLinks?: string[];
  children?: React.ReactNode;
}

export default function LinkBoard({ headerImage, excludeLinks, children }: LinkBoardProps) {
  const [loading, setLoading] = useState(true);
  const [randomizedName, setRandomizedName] = useState(data.name);
  const [imageExpanded, setImageExpanded] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (data.animation && data.animation?.nameRandomizer) {
      nameRandomizer({ name: data.name, setRandomizedName });
    }
    if (data.sortByLength) {
      data.links.sort((a, b) => (a.name.length > b.name.length ? 1 : -1));
    }
  }, []);

  if (loading) return <Loading />;

  const links = excludeLinks
    ? data.links.filter((link) => !excludeLinks.includes(link.name))
    : data.links;

  return (
    <Container>
      <ShareBar />
      <CardContainer>
        <HeaderContainer>
          {headerImage ? (
            <HeaderImage
              src={headerImage}
              alt="Header"
              width={350}
              height={500}
              onClick={() => setImageExpanded(true)}
            />
          ) : (
            <ProfilePicture
              src="/profile.webp"
              alt="Profile"
              width={150}
              height={150}
            />
          )}
          {!headerImage && (
            <InfoContainer>
              <Name>{randomizedName}</Name>
            </InfoContainer>
          )}
        </HeaderContainer>
        {children}
        <LinksContainer $linksNumber={links.length}>
          {links.map((link, index) => (
            <LinkContainer key={link.url} $delay={index * 100}>
              <Link href={link.url}>
                {link.icon && <link.icon />}
                {link.name}
              </Link>
            </LinkContainer>
          ))}
        </LinksContainer>
      </CardContainer>
      {imageExpanded && headerImage && (
        <ImageOverlay onClick={() => setImageExpanded(false)}>
          <img src={headerImage} alt="Header" />
        </ImageOverlay>
      )}
    </Container>
  );
}
