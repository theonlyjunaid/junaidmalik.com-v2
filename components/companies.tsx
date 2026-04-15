import React from "react";
import { Subheading } from "./subheading";
import {
  CursorIcon,
  FireworksIcon,
  HostingerIcon,
  NeonIcon,
  PosthogIcon,
  StrapiIcon,
} from "./icons/general";
import { Box } from "./box";

export const Companies = () => {
  const companies = [
    {
      title: "VIRALLENS",
      description: "Full Stack Developer building AI-driven claim filing and legal citation extraction platforms.",
      skeleton: (
        <CursorIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-neutral-400 to-neutral-600 ring-offset-neutral-500",
    },
    {
      title: "AREDUVAG SOLUTION",
      description: "Tech Lead designing Omnitutor (an AI-powered personalized teaching system) and sub-200ms backend architectures.",
      skeleton: (
        <NeonIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-green-400 to-green-600 ring-offset-green-500",
    },
    {
      title: "HYPERLEAP",
      description: "Full Stack Developer engineering plug-and-play React/Redux chatbot widgets for 24/7 lead capture.",
      skeleton: (
        <StrapiIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-violet-400 to-violet-600 ring-offset-violet-500",
    },
    {
      title: "FRESOURCES",
      description: "Web Developer optimizing massive resource libraries serving over 1M+ views during peak months.",
      skeleton: (
        <HostingerIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-purple-400 to-purple-600 ring-offset-purple-500",
    },
  ];
  return (
    <section>
      <Subheading>Companies I've worked with</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 ">
        {companies.map((company) => (
          <div key={company.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className={company.boxClassName}>{company.skeleton}</Box>
              <p className="text-foreground text-sm font-medium">
                {company.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty">
              {company.description}
            </p>
          </div>
        ))}
      </div>
      {/* Note about additional freelance work after these companies */}
      <div className="mt-8 text-foreground/60 text-sm md:col-span-3 col-span-2">
        <span>
          ...and lot of freelance work for a wide variety of clients and projects.
        </span>

      </div>
    </section>
  );
};
