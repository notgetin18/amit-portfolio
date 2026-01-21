import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { table } from "@sanity/table";

export default defineConfig({
  name: "default",
  title: "Amit Kumar Portfolio Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
});
