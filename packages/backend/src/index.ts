import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

app.get("/health", (c) => {
  return c.json({ message: "OK" });
});

// /api

export default app;
