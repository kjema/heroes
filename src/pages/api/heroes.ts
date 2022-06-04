// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import heroService, { Heroes } from "@/heroes/shared/hero.service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Heroes>,
) {
  const heroes = await heroService.heroes();
  res.status(200).json(heroes);
}
