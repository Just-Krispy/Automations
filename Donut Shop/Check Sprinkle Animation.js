async function testSprinkleAnimation() {
  // Trigger the sprinkle animation by simulating a specific scenario
  await sendMessage('new');
  await sendMessage('John Doe');
  await sendMessage('john.doe@example.com');
  await sendMessage('1234567890');
  await sendMessage('y');
  await sendMessage('Chocolate');
  await sendMessage('3');
  await sendMessage('done');
  // Add assertions based on the expected behavior for the sprinkle animation
  // For example, check if the sprinkle animation container has the 'active' class
  await page.waitForSelector('#sprinkle-container.active');
}
