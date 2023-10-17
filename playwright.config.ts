import { defineConfig, devices } from "@playwright/test";
import { toUSVString } from "util";

export default defineConfig({
  timeout: 5 * 60 * 1000,
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "paragonjsonreports/paragon.json",
      },
    ],
    [
      "html",
      {
        open: "never",
        outputFolder: "Paragon-html-reports",
      },
    ],
  ],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
