import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { platform } from "os";

const allRoutes = new Hono();

allRoutes.get("/ping", (context) => {
  return context.json(
    {
      message: "pong",
    },
    200
  );
});

allRoutes.get("/platform", (context) => {
  return context.json(
    {
      platform: process.platform,
    },
    200
  );
});

serve(allRoutes); // 3000
