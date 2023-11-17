async function testInitialPrompt() {
  await sendMessage(''); // Empty message to trigger the initial prompt
  // Add assertions based on the expected behavior after the initial prompt
  // For example, check if the system message is displayed
  await page.waitForSelector('.system-message');
}
