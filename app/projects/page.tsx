import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { Box } from "@/components/box";
import {
  IconChartBar,
  IconStethoscope,
  IconMessageChatbot,
  IconDiamond,
  IconFileText,
  IconRocket,
  IconShoppingCart,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Projects - Junaid Malik",
  description:
    "A selection of my standalone projects, AI utilities, and scalable platforms.",
  alternates: {
    canonical: "/projects",
  },
};

const projects = [
  {
    title: "DTU RankWallah",
    tagline: "Advanced Analytics Platform.",
    description:
      "A highly scalable result analysis and CGPA prediction tool built on Next.js. Achieved nearly 1 million uses and 300K+ analyses in its first month.",
    icon: (
      <IconChartBar className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-green-400 to-green-600 ring-offset-green-500",
  },
  {
    title: "DRPHYSIO.CO",
    tagline: "AI Physiotherapy Diagnosis.",
    description:
      "An AI-powered diagnosis system engineered with the T3 stack. Built a deep-level patient assessment model to provide highly personalized treatment plans.",
    icon: (
      <IconStethoscope className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500",
  },
  {
    title: "DocuConvo",
    tagline: "Converse with Documentation.",
    description:
      "An open-source TypeScript application utilizing RAG architecture that transforms static documentation into a dynamic, intelligent dialogue.",
    icon: (
      <IconMessageChatbot className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-purple-400 to-purple-600 ring-offset-purple-500",
  },
  {
    title: "NFTWala",
    tagline: "Decentralized NFT Marketplace.",
    description:
      "A Web3 marketplace facilitating the secure buying, selling, and reselling of digital assets, featuring immutable smart contracts and resilient IPFS integration.",
    icon: (
      <IconDiamond className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-amber-400 to-amber-600 ring-offset-amber-500",
  },
  {
    title: "PDFgpt",
    tagline: "Natural Language Document Analysis.",
    description:
      "A sophisticated data extraction utility built with TypeScript and advanced LLMs, allowing users to query and extract bounded context directly from unstructured PDF files.",
    icon: (
      <IconFileText className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
  },
  {
    title: "NOCAGE",
    tagline: "Startup Ecosystem Infrastructure.",
    description:
      "A comprehensive social media platform built natively on the T3 stack, integrating real-time communication and AI-driven matching to connect startup founders.",
    icon: (
      <IconRocket className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-violet-400 to-violet-600 ring-offset-violet-500",
  },
  {
    title: "WRAPYSHOP",
    tagline: "High-Volume E-commerce Architecture.",
    description:
      "A heavily optimized Next.js SSR platform managing complex logistics, Razorpay integrations, and automated inventory for 600+ SKUs across 29,000+ PIN codes.",
    icon: (
      <IconShoppingCart className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-pink-400 to-pink-600 ring-offset-pink-500",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">Projects</Subheading>
        <p className="text-foreground pt-4 text-base">
          A selection of my standalone projects, AI utilities, and scalable
          platforms.
        </p>

        <div className="mt-8 flex flex-col gap-8">
          {projects.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
                <Box className={item.boxClassName}>{item.icon}</Box>
                <div className="flex flex-col items-start gap-0.5 md:flex-row md:items-center md:gap-2">
                  <p className="text-foreground font-medium">{item.title}</p>
                  <div className="hidden size-1 rounded-full bg-neutral-200 md:block" />
                  <p className="text-foreground/50 font-mono text-xs">
                    {item.tagline}
                  </p>
                </div>
              </div>
              <p className="text-foreground/70 text-sm text-pretty leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
