import { test, expect } from "@playwright/test";

test("Adding a new project", async ({ page }) => {
  await page.goto("https://dashboard.useparagon.com/login")

  await page  
    .getByTestId("login-email")
    .fill("nikhil.kumar+01001@useparagon.com")
  await page.getByTestId("login-password").fill("PJW.bxg_amx8kxh5bga")
  await page.getByTestId("auth-form-submit").click()
  await page.waitForTimeout(5000)
  await page.getByTestId("project-selector").click()
  await page.waitForTimeout(4000)
  await page.getByRole('button', { name:  'Create'} ).click()
  
});

  
test("Verify the OAuth validation",async ({page}) => {
  await test.setTimeout(12000)
  await page.goto("https://dashboard.useparagon.com/login")
  await page  
    .getByTestId("login-email")
    .fill("nikhil.kumar+01001@useparagon.com")
  await page.getByTestId("login-password").fill("PJW.bxg_amx8kxh5bga")
  await page.getByTestId("auth-form-submit").click() 
  await page.locator("//i[contains(text(), 'Catalog')]").click()
  await page.pause()
})


