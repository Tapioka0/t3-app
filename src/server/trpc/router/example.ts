import { Input } from "postcss";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),

  getOne: publicProcedure
    .input(
      z
        .object({
          id: z.number(),
        })
        .nullish()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findFirst({
        where: { id: input?.id },
      });
    }),
  edit: publicProcedure
    .input(
      z
        .object({
          price: z.number(),
          descripcion: z.string(),
          inventario: z.number(),
          img: z.string(),
          id: z.number(),
        })
        .nullish()
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: { id: input?.id },
        data: {
          precio: input?.price,
          descripcion: input?.descripcion,
          inventario: input?.inventario,
          img: input?.img,
        },
      });
    }),
    delete: publicProcedure
    .input(
      z
        .object({
       
          id: z.number(),
        })
        .nullish()
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.delete({
        where: { id: input?.id },
       
      });
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
    .mutation(async ({ ctx, input }) => {
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
