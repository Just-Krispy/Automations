async function testExistingOrder() {
  await sendMessage('existing');
  await sendMessage('John Doe'); // Replace with an existing customer name
  // Add assertions based on the expected behavior for existing orders
  // For example, check if the system is prompting for additional information
  await page.waitForSelector('.system-message');
  // Add more interactions as needed
}
