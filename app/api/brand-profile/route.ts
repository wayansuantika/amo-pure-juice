import { NextResponse } from "next/server";

const brandProfile = {
  brand: {
    name: "AMO Pure Juice",
    website: "https://amopurejuice.com",
    description:
      "Premium grape juice brand bringing fresh grapes from Spain to Indonesia, offering natural goodness with zero alcohol.",
  },
  owner: {
    names: ["David", "Agnez"],
    role: "Founders",
    location: "Indonesia",
  },
  creator: {
    repository: "https://github.com/wayansuantika/amo-pure-juice",
    developer: "Wayan Suantika",
    technology: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    role: "Website Creator",
  },
};

export async function GET() {
  return NextResponse.json(brandProfile, {
    headers: {
      "cache-control": "public, max-age=300, s-maxage=300",
    },
  });
}
