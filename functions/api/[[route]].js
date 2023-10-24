import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";

const app = new Hono().basePath("/api");

app.get("/posts/:slug/comments", async (c) => {
  const { slug } = c.req.param();
  const { results } = await c.env.DB.prepare(
    `
    select * from comments where post_slug = ?
  `,
  )
    .bind(slug)
    .all();
  return c.json(results);
});

export const onRequest = handle(app);
