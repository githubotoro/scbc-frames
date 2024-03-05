import { getFrameHtmlResponse } from "@coinbase/onchainkit/frame";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: "<<",
          action: "post",
        },
        {
          action: "link",
          label: "Register",
          target: "https://lu.ma/7atw9xr0",
        },
        {
          label: ">>",
          action: "post",
        },
      ],
      image: {
        src: `${process.env.NEXT_PUBLIC_URL}/frame/register/2.png`,
        aspectRatio: "1:1",
      },
      postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame/register/2`,
    }),
    {
      headers: {
        "Cache-Control": "max-age=3600", // refresh image every hour
      },
    }
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
