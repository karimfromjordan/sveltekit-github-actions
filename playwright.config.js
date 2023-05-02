/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	},
	testDir: 'tests'
};

export default config;
