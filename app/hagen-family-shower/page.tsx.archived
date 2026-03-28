"use client";

import LinkBoard from "@/components/linkBoard/linkBoard";
import {
  InvitationText,
  InvitationScript,
  InvitationDetail,
  InvitationDivider,
  InvitationLink,
} from "@/components/linkBoard/linkBoardStyles";

export default function Page() {
  return (
    <LinkBoard
      headerImage="/family-invitation.webp"
      excludeLinks={["Women's Shower Info", "Hagen Family Shower"]}
    >
      <InvitationText>
        <InvitationScript $size="lg">
          A sweet little baby boy is on his way!
        </InvitationScript>
        <InvitationDetail $size="sm">A family celebration</InvitationDetail>
        <InvitationDivider />
        <InvitationDetail>Join us for a baby shower honoring</InvitationDetail>
        <InvitationDetail $size="lg" $bold>
          Kirsten &amp; Daniel
        </InvitationDetail>
        <InvitationDivider />
        <InvitationDetail $bold>March 8th</InvitationDetail>
        <InvitationDetail $size="sm">Time TBD</InvitationDetail>
        <InvitationDivider />
        <InvitationLink
          href="https://maps.google.com/?q=8805+El+Rey+Blvd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InvitationDetail>Eric&apos;s House</InvitationDetail>
        </InvitationLink>
        <InvitationDivider />
        <InvitationDetail $size="sm">
          RSVP via Facebook Messenger Family Chat
        </InvitationDetail>
      </InvitationText>
    </LinkBoard>
  );
}
