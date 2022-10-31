import { PrismaClient } from "@prisma/client";
import { ObjectID } from "bson";

const client = new PrismaClient();

async function main() {
  client.user.create({
    data: {
      id: new ObjectID() + "",
      name: "seed name",
      email: "seed email",
    },
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect());
