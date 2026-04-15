import React from "react";
import { LinkPreview } from "./link-preview";

export const Header = () => {
  return (
    <div>
      <div className="text-foreground pt-4 text-base">
        I'm a full-stack software engineer at heart, tinkering with the T3 stack, AI integrations, and Next.js almost 90% of the time. I'm mostly active on{" "}
        <LinkPreview url="https://github.com/theonlyjunaid">
          GitHub
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://x.com/the_onlyjunaid">
          Twitter
        </LinkPreview>{" "}
        where I share my open-source contributions and development journey.
      </div>
      {/* <div className="text-foreground pt-4 text-base">
        When I'm not coding, I usually write articles on{" "}
        <LinkPreview url="https://blog.junaidmalik.com">
          My Blogs
        </LinkPreview>{" "}
        about Full Stack Development, system design, and navigating the Indian startup ecosystem.
      </div> */}
      <div className="text-foreground pt-4 text-base">
        I've been building and scaling platforms like{" "}
        <LinkPreview url="https://rankwallah.in">
          DTU RankWallah
        </LinkPreview>
        , an advanced analytics tool that achieved nearly 1 million uses and over 300K analyses in its first month. My favourite thing is to rapidly prototype new ideas and build open-source AI utilities like{" "}
        <LinkPreview url="https://hdimagetools.com/">
          HD Image Tools
        </LinkPreview>
        {" "}and{" "}
        <LinkPreview url="https://dr-physio.vercel.app/">
          DrPhysio
        </LinkPreview>
        ...
      </div>

    </div>
  );
};
