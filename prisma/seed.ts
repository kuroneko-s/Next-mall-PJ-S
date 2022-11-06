import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  await client.$connect();

  await client.user.create({
    data: {
      name: "seed name",
      email: "seed email",
    },
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect());
