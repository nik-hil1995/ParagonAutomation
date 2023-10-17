import { chromium, Browser, Page } from '@playwright/test'

async function automateGoogleOAuth(): Promise<void> {
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  // Step 1: Open OAuth 2.0 Provider's Authorization URL
  const authorizationUrl = 'https://accounts.google.com/o/oauth2/auth?' +
    'client_id=YOUR_CLIENT_ID&' +
    'redirect_uri=YOUR_REDIRECT_URI&' +
    'response_type=code&' +
    'scope=desired_scopes';

  await page.goto(authorizationUrl);

  // Perform the necessary interactions to log in and authorize the app
  // You might need to fill in credentials, click buttons, etc.
  // For security reasons, these interactions cannot be automated here.

  // Wait for the redirect to occur after granting authorization
  

  // Extract the Authorization Code from the Redirect URL
  const redirectUrl = page.url();
  const urlSearchParams = new URLSearchParams(redirectUrl.split('?')[1]);
  const authorizationCode = urlSearchParams.get('code');

  // Step 3: Exchange Authorization Code for Access Token
  const tokenUrl = 'https://oauth2.googleapis.com/token';
  const tokenResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: authorizationCode!,
      client_id: '942630443376-1sl4crraqn8qg0ut2c070gduhih34au4.apps.googleusercontent.com',
      client_secret: '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',
      redirect_uri: 'https://oauth.pstmn.io/v1/callback',
    }),
  });
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;
  const CALAEDAR= "kumar.nikhil@thinksys.com"


  // Now you have the access token, use it in your API requests
  const apiEndpoint = 'https://www.googleapis.com/calendar/v3/calendars/kumar.nikhil@thinksys.com/events'; // Replace with your actual API endpoint
  const apiResponse = await fetch(apiEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Handle the API response as needed
  // ...

  await browser.close();
}

automateGoogleOAuth().catch(console.error);
