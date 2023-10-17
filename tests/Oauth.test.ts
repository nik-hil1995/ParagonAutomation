import { test, expect, chromium } from "@playwright/test";

test("Validating the Oauth of Gmail Integration", async ({ page }) => {
  await page.goto("https://staging-connect.paragonsandbox.com/sandbox");
  await page.getByTestId("project-id").click();
  await page
    .getByTestId("project-id")
    .fill("a4068e0d-e512-484a-af0a-2acaafb5d937");
  await page.getByTestId("user-token").click();
  await page
    .getByTestId("user-token")
    .fill(
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdXRvbWF0aW9udGVzdHVzZXIiLCJpYXQiOjE2OTc0NTgzMTIsImV4cCI6MTY5NzU0NDcxMn0.piduPJ-fxK3YQtDXtnNmlZoxbewxYxuYRsgxGcnLeS2TfDz9Hje2kRRvwKsVw1SJS-CPK1NAKrxeb6MIojOJgkTCIfs7ye7y55h7arhQFeK8LpFlYO3f8jFva3JZAMdyO8tZNfyPQre_zKsqe3BkW0rWRuVSDU_iRlKWr03Tlc8gCPxteguGdbEU_dxJxmEmGGNdj_ENwWMtboEVUsSt58fF_1ze34h-hmVhQuLDk7Xy9G1k9fVXYYDGeOf5LetAVNZdWBgyxGM9rgHdAD4io-ohye4kEHT_45spWrSBZ4TJPNMWel01QuwjSrN8UNMOlpF5vWPFsQ5_ThDX88KUsu6psSzuGD6Tzs9ff38ZiJhBBB5PjmPvibXjBEEDNcMSGNcm5VUnWCuAhD7mYRsXT4LHwSWTD2t4fqQHlufuGOwH_hqpJsQt2maDnHTnQ8SE1I5rWralGA2ao7xmGnJGAWQMMebjZi4Q0E2BXE4slm0t15PUuga1Nx-SqyrqSV0dlv-XHNA2WMEJ-fosXs2MwgIKdTFhmMCWaQfuhO6CUL_Es3aRKHnQ1_5886IbCBD6gDOm18Q5pCBZDAtKOWNdzgXmW1KIfMn7fpOFlC0sep_C1Hsw4qw-1sN5zXoNF8vgEmz152fg4JXaFyAMfQwK84iQxWTb8FzQr9DKyMgBQ4M"
    );
  await page.getByTestId("load-script").click();
  await page.waitForTimeout(6000);
  await page.getByTestId("authenticate").click();
  await page.waitForTimeout(6000);
  //  await page.getByTestId("connect-gmail").click()
  const runcode = await page.getByTestId("code");
  await runcode.fill("paragon.connect('gmail')");
  await page.getByTestId("run-code").click();

  const page1Promise = page.waitForEvent("popup");
  const element = page
    .frameLocator("#paragon-connect-frame")
    .getByTestId("enable-button");
  await element.scrollIntoViewIfNeeded();
  await element.click();
  const page1 = await page1Promise;
  await page1.waitForTimeout(5000);
  await page1.getByLabel("Email or phone").fill("kumar.nikhil@thinksys.com");
  await page1.getByLabel("Email or phone").press("Enter");
  await page1.waitForTimeout(4000);
  await page1.getByLabel("Enter your password").fill("nikhil@1996");
  await page1.waitForTimeout(4000);
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.waitForTimeout(3000);
  await page1.getByRole("button", { name: "Continue" }).click();
  await page1.waitForTimeout(3000);
  await page1.getByRole("button", { name: "Continue" }).click();
  await console.log(element.textContent())
  await expect(element).toHaveText('Connected')
});


test("Validating the api key auth of Klaviyo integration", async ({ page }) => {
    await page.goto("https://staging-connect.paragonsandbox.com/sandbox");
    await page.getByTestId("project-id").click();
    await page
      .getByTestId("project-id")
      .fill("a4068e0d-e512-484a-af0a-2acaafb5d937");
    await page.getByTestId("user-token").click();
    await page
      .getByTestId("user-token")
      .fill(
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdXRvbWF0aW9udGVzdHVzZXIiLCJpYXQiOjE2OTc0NTgzMTIsImV4cCI6MTY5NzU0NDcxMn0.piduPJ-fxK3YQtDXtnNmlZoxbewxYxuYRsgxGcnLeS2TfDz9Hje2kRRvwKsVw1SJS-CPK1NAKrxeb6MIojOJgkTCIfs7ye7y55h7arhQFeK8LpFlYO3f8jFva3JZAMdyO8tZNfyPQre_zKsqe3BkW0rWRuVSDU_iRlKWr03Tlc8gCPxteguGdbEU_dxJxmEmGGNdj_ENwWMtboEVUsSt58fF_1ze34h-hmVhQuLDk7Xy9G1k9fVXYYDGeOf5LetAVNZdWBgyxGM9rgHdAD4io-ohye4kEHT_45spWrSBZ4TJPNMWel01QuwjSrN8UNMOlpF5vWPFsQ5_ThDX88KUsu6psSzuGD6Tzs9ff38ZiJhBBB5PjmPvibXjBEEDNcMSGNcm5VUnWCuAhD7mYRsXT4LHwSWTD2t4fqQHlufuGOwH_hqpJsQt2maDnHTnQ8SE1I5rWralGA2ao7xmGnJGAWQMMebjZi4Q0E2BXE4slm0t15PUuga1Nx-SqyrqSV0dlv-XHNA2WMEJ-fosXs2MwgIKdTFhmMCWaQfuhO6CUL_Es3aRKHnQ1_5886IbCBD6gDOm18Q5pCBZDAtKOWNdzgXmW1KIfMn7fpOFlC0sep_C1Hsw4qw-1sN5zXoNF8vgEmz152fg4JXaFyAMfQwK84iQxWTb8FzQr9DKyMgBQ4M"
      );
    await page.getByTestId("load-script").click();
    await page.waitForTimeout(6000);
    await page.getByTestId("authenticate").click();
    await page.waitForTimeout(6000);
    const runcode = await page.getByTestId("code");
    await runcode.fill("paragon.connect('klaviyo')");
    await page.getByTestId("run-code").click();  
    const element = page
      .frameLocator("#paragon-connect-frame")
      .getByTestId("enable-button");
    await element.click();
    await page.waitForTimeout(5000);
    await page.getByPlaceholder('pk_d7801c10ade7e58f3d4998f911d4dc92d6').fill('pk_97153c4488b9354bee56abc4f79b7ada98')
    await page.waitForTimeout(4000)
    await page.getByRole('button', { name : 'Continue'}).click()
    console.log(element.textContent())
    await expect(element).toHaveText('Connected')
  });
  