import { defineConfig, devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	},
	testDir: 'tests',
	reporter: 'html',
	projects: [
		/* Test against desktop browsers */
		{
			name: 'Desktop Chrome',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'Desktop Firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'Desktop Safari',
			use: { ...devices['Desktop Safari'] }
		},
		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] }
		}
	]
};

export default defineConfig(config);
