import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import type { Metadata } from "next";
import { Redirect } from "./Redirect";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: "link",
      label: "Register",
      target: "https://lu.ma/7atw9xr0",
    },
    {
      label: "Speakers →",
      action: "post",
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_URL}/frame/register/1.png`,
    aspectRatio: "1:1",
  },
  postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame/register/1`,
});

export const metadata: Metadata = {
  title: "Southern California Blockchain Conference",
  description:
    "University of Southern California presents an unrivaled opportunity for the brightest students and industry leaders to gather for the purpose of illuminating the bright future ahead for digital assets and blockchain technology. Join us at our annual 2-day marquee event to uncover emerging trends, explore cutting-edge research, and celebrate our community of builders.",
  openGraph: {
    title: "Southern California Blockchain Conference",
    description:
      "University of Southern California presents an unrivaled opportunity for the brightest students and industry leaders to gather for the purpose of illuminating the bright future ahead for digital assets and blockchain technology. Join us at our annual 2-day marquee event to uncover emerging trends, explore cutting-edge research, and celebrate our community of builders.",
    images: [`${process.env.NEXT_PUBLIC_URL}/frame/register/1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return <Redirect />;
}
