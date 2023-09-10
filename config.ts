import { defineConfig, install, presetTailwind } from "./deps.ts";

export const tw = install(defineConfig({
  presets: [presetTailwind()],
}));
