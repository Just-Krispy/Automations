async function testInvalidChoices() {
  await sendMessage('invalid_choice');
  // Add assertions based on the expected behavior for invalid choices
  // For example, check if an error message is displayed
  await page.waitForSelector('.system-message');
  // Add more interactions as needed
}
