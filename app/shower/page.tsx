"use client";

import { useEffect, useState } from "react";
import LinkBoard from "@/components/linkBoard/linkBoard";
import {
  InvitationText,
  InvitationScript,
  InvitationDetail,
  InvitationDivider,
  InvitationLink,
} from "@/components/linkBoard/linkBoardStyles";

// Split and reversed to avoid plain-text scraping
const p = ["4", "6", "0", "6", "-", "8", "5", "6", " ", ")", "2", "1", "5", "("];

export default function Page() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(p.toReversed().join(""));
  }, []);

  return (
    <LinkBoard
      headerImage="/invitation.webp"
      excludeLinks={["Shower info"]}
    >
      <InvitationText>
        <InvitationScript>Join Carol &amp; Brittany for a</InvitationScript>
        <InvitationScript $size="lg">Baby Blue Brunch &amp; Shower</InvitationScript>
        <InvitationDivider />
        <InvitationScript>Honoring the Mommy-to-be</InvitationScript>
        <InvitationDetail $size="lg" $bold>Kirsten Johnson Hagen</InvitationDetail>
        <InvitationDivider />
        <InvitationDetail $bold>Saturday, March 7th</InvitationDetail>
        <InvitationDetail $size="sm">11-11:30am Mingle and Select Your Meal</InvitationDetail>
        <InvitationDetail $size="sm">11:30am-1pm Seated Brunch</InvitationDetail>
        <InvitationDivider />
        <InvitationLink href="https://maps.app.goo.gl/2prLLgig7Sd6TLSV6" target="_blank" rel="noopener noreferrer">
          <InvitationDetail>Cafe Blue Restaurant</InvitationDetail>
          <InvitationDetail $size="sm">Hill Country Galleria</InvitationDetail>
          <InvitationDetail $size="sm">Bee Cave, TX 78738</InvitationDetail>
        </InvitationLink>
        <InvitationDivider />
        <InvitationDetail $size="sm">
          RSVP to Carol{phone && ` at ${phone}`}
        </InvitationDetail>
      </InvitationText>
    </LinkBoard>
  );
}
