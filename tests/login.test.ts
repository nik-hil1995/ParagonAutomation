import { test, expect, chromium } from "@playwright/test";

test("login to paragon app", async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("https://dashboard.useparagon.com/login")
  await page
    .getByTestId("login-email")
    .fill("nikhil.kumar+01001@useparagon.com")
  await page.getByTestId("login-password").fill("PJW.bxg_amx8kxh5bga")
  await page.getByTestId("auth-form-submit").click()
  
});



test("Check the invalid login validation", async ({ page }) => {
  await page.goto("https://dashboard.useparagon.com/login")
  await page
    .getByTestId("login-email")
    .fill("nikhil.kumar+01001@useparagon.com")
  await page.getByTestId("login-password").fill("incorrect")
  await page.getByTestId("auth-form-submit").click()
  await page.waitForTimeout(5000)
  await expect(page.getByText("Invalid login credentials.")).toBeVisible()
});







