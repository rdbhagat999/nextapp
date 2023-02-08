// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "../../utils/rate-limit";

type Data = {
  name: string;
  error?: string;
};

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      try {
        await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
        res.status(200).json({ name: "John Doe" });
      } catch (error) {
        res.status(429).json({ name: "", error: "Rate limit exceeded" });
      }
      break;
    // case 'PUT':
    // try {
    //   await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
    //   res.status(200).json({ name: "John Doe" });
    // } catch (error) {
    //   res.status(429).json({ name: "", error: "Rate limit exceeded" });
    // }
    //   break
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
