import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '3y6aodof',
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: "2024-01-24",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas},
});

export default config;
