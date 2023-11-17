const { chromium } = require('playwright');

let page; // Declare the page variable outside the IIFE

// Define sendMessage function
async function sendMessage(message) {
  await page.waitForSelector('#user-input', { timeout: 60000 }); // Increase timeout to 60 seconds
  await page.type('#user-input', message, { delay: 100 }); // Add a small delay between key presses
  await page.press('#user-input', 'Enter');
}

// Define other necessary functions here...

(async () => {
  const browser = await chromium.launch();
  page = await browser.newPage(); // Assign the page variable here

  // Move the definition of test functions inside the IIFE (Immediately Invoked Function Expression)
  async function testInitialPrompt() {
    await sendMessage(''); // Empty message to trigger the initial prompt
    // Add assertions based on the expected behavior after the initial prompt
    // For example, check if the system message is displayed
    await page.waitForSelector('.system-message');
  }

  // Define other test functions here...

  await page.goto('https://just-krispy.github.io/The-Donut-Shop/rl', { waitUntil: 'load' });

  // Explicitly wait for an element that indicates the completion of navigation
  await page.waitForSelector('.your-selector', { timeout: 60000 }); // Replace with the actual selector

  await testInitialPrompt();
  // Call other test functions...

  // Close the browser
  await browser.close();
})();
