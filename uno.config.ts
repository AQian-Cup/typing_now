import { defineConfig, presetIcons, presetAttributify } from "unocss"
import presetUno from "@unocss/preset-uno"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        majesticons: () =>
          import("@iconify-json/majesticons/icons.json").then((i) => i.default),
      },
    }),
    presetAttributify(),
  ],
})
