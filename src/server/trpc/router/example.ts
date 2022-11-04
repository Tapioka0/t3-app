import { Input } from "postcss";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  create: publicProcedure
    .input(
      z
        .object({
          price: z.number(),
          descripcion: z.string(),
          inventario: z.number(),
          img: z.string(),
          name: z.string(),
        })
        .nullish()
    )
    .query(async ({ ctx, input }) => {
      await ctx.prisma.product.create({
        data: {
          descripcion: input?.descripcion ?? "None",
          precio: input?.price ?? 0,
          inventario: input?.inventario ?? 1,
          img: input?.img ?? "None",
          slug:
            input?.name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "") ?? "default",
        },
      });
    }),
});
