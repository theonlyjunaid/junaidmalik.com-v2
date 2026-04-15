import React from "react";
import { Box } from "./box";
import Link from "next/link";
import { IconBrandYoutube } from "@tabler/icons-react";
import { Subheading } from "./subheading";

const LogoSVGNew = ({ className }: { className?: string }) => {
  return (
    <svg
      width="208"
      height="160"
      viewBox="48 48 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M146 48H106.136L48 208H87.8644L116.932 128C116.932 128 122 114.5 124.4 108L131.466 88L146 48Z"
        fill="currentColor"
      />
      <path d="M110 48H149.864L168.032 98H127.84L110 48Z" fill="currentColor" />
      <path
        d="M139.587 113.833L171.458 208H208L172.807 113.833H139.587Z"
        fill="currentColor"
      />
      <path d="M173 114L140.8 208H104L139.545 114H173Z" fill="currentColor" />
    </svg>
  );
};

const workItems = [
  {
    href: "https://nocage.in",
    title: "NOCAGE",
    description: "Social platform for connecting startups.",
    icon: (
      <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-gradient-to-b from-blue-500 to-blue-800 ring-offset-blue-500",
  },
  {
    href: "https://rankwallah.in",
    title: "DTU RankWallah",
    description: "Advanced analytics for ranking and stats.",
    icon: (
      <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-gradient-to-b from-green-500 to-green-700 ring-offset-green-500",
  },
  {
    href: "https://github.com/theonlyjunaid/",
    title: "DocuConvo & Open Source",
    description: "AI utilities for chatting with docs.",
    icon: (
      <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-gradient-to-b from-purple-500 to-purple-700 ring-offset-purple-500",
  },
  {
    href: "",
    title: "WRAPYSHOP",
    description: "Mobile skin e-commerce across India.",
    icon: (
      <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-gradient-to-b from-pink-500 to-pink-700 ring-offset-pink-500",
  },
];

export const Work = () => {
  return (
    <div>
      <Subheading>Things I built</Subheading>
      <div className="mt-4 flex flex-col gap-6 md:gap-4">
        {workItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
          >
            <Box className={`mr-4 text-white ${item.boxClassName}`}>{item.title.slice(0, 1)}</Box>
            <p className="text-foreground font-medium">{item.title}</p>
            <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
            <p className="text-foreground/70">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
