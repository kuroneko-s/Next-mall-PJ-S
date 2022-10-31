import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSession } from "@lib/server/session";
import prisma from "@lib/server/client";
import { ObjectID } from "bson";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  prisma.user.create({
    data: {
      id: new ObjectID() + "",
      email: "user info sample",
      name: "user info sample2",
    },
  });

  const user = req.session?.user;
  console.log(req.session);

  if (!user) {
    return res.json({ ok: false, error: "not foudn user info" });
  }

  return res.json({
    ok: true,
    data: {
      id: user?.id,
      name: user?.name,
      role: user?.role,
    },
  });
}

export default withIronSession(handler);
