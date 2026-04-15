import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { Box } from "@/components/box";
import {
  IconBriefcaseFilled,
  IconSchool,
  IconCode,
  IconRocket,
  IconDeviceLaptop,
  IconShoppingCart,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Experiences - Junaid Malik",
  description:
    "My professional journey, roles, and educational background.",
  alternates: {
    canonical: "/experiences",
  },
};

const workHistory = [
  {
    role: "Full Stack Developer",
    company: "VIRALLENS",
    period: "Sept 2025 - Present",
    location: "Bengaluru, India",
    description:
      "Developing an automated Claim Filing System that processes Outlook emails to seamlessly categorize and analyze data for efficient claim handling. Concurrently building a Citation Extraction and Analysis Platform that identifies and interprets complex legal citations, enabling attorneys to work faster and more accurately through intelligent data insights.",
    icon: (
      <IconCode className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500",
  },
  {
    role: "Tech Lead",
    company: "AREDUVAG SOLUTION",
    period: "May 2025 - Aug 2025",
    location: "Remote",
    description:
      "Designed and developed Omnitutor, an AI-powered tutor built for personalized teaching, planning, and testing. Completely optimized the backend architecture for the Shehsya product, aggressively reducing API response times from 1 minute to under 200 milliseconds. Additionally, architected and built a React Native mobile app for students and teachers from the ground up.",
    icon: (
      <IconRocket className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-green-400 to-green-600 ring-offset-green-500",
  },
  {
    role: "Tech Co-founder",
    company: "NOCAGE",
    period: "Aug 2024 - Apr 2025",
    location: "Hybrid (Delhi, India)",
    description:
      "Developed a dynamic platform designed to connect startups and foster ecosystem networking. Empowered founders to build teams, secure funding, and drive rapid growth by heavily leveraging the advanced T3 stack to engineer high-performance, infinitely scalable solutions.",
    icon: (
      <IconBriefcaseFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-violet-400 to-violet-600 ring-offset-violet-500",
  },
  {
    role: "Full Stack Developer",
    company: "HYPERLEAP",
    period: "Jun 2024 - Aug 2024",
    location: "Remote",
    description:
      "Engineered modular, plug-and-play chatbot widgets that integrated effortlessly into diverse client websites. Leveraged advanced React and Redux state management to enable 24/7 dynamic lead capture, delivering highly scalable, ROI-focused growth for businesses.",
    icon: (
      <IconDeviceLaptop className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
  },
  {
    role: "Tech Co-founder",
    company: "WRAPYSHOP",
    period: "Oct 2022 - Feb 2024",
    location: "U.P., India",
    description:
      "Launched and scaled a mobile skin e-commerce store supporting 600+ mobile models and 35 designs, capable of delivering across 29,000+ PIN codes. Orchestrated the infrastructure using Next.js, MongoDB, Razorpay, and Shiprocket. Heavily optimized Next.js Server-Side Rendering (SSR) to efficiently handle and serve over 21,000 product pages.",
    icon: (
      <IconShoppingCart className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-pink-400 to-pink-600 ring-offset-pink-500",
  },
  {
    role: "Web Developer",
    company: "FRESOURCES",
    period: "Jan 2022 - Oct 2022",
    location: "Remote",
    description:
      "Developed new web capabilities and aggressively optimized platform load times for a massive resource library. Improved the overall browsing experience for 15,000+ registered users, successfully scaling the platform to handle over 1 million views during peak academic months.",
    icon: (
      <IconSchool className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-teal-400 to-teal-600 ring-offset-teal-500",
  },
];

export default function ExperiencesPage() {
  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">Experience</Subheading>
        <p className="text-foreground pt-4 text-base">
          My professional journey, roles, and educational background.
        </p>

        <DottedSeparator className="my-8" />

        <Subheading>Working History</Subheading>
        <div className="mt-6 flex flex-col gap-8">
          {workHistory.map((item) => (
            <div key={item.company} className="flex flex-col gap-2">
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
                <Box className={item.boxClassName}>{item.icon}</Box>
                <div className="flex flex-col items-start gap-0.5 md:flex-row md:items-center md:gap-2">
                  <p className="text-foreground font-medium">
                    {item.role}
                  </p>
                  <span className="text-foreground/40 hidden md:inline">
                    —
                  </span>
                  <p className="text-primary font-medium">{item.company}</p>
                </div>
              </div>
              <p className="text-foreground/50 font-mono text-xs">
                {item.period} | {item.location}
              </p>
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
