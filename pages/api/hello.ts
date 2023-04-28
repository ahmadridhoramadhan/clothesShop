// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // if (req.method === "POST") {
  //   const { nama, alamat } = req.body;
  //   res.status(200).json({ nama, alamat });
  // } else {
  //   res.status(400).json({ message: "Metode yang diizinkan hanya POST" });
  // }
}
