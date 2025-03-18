import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    globals: true,
    coverage: {
      reporter: ['json-summary', 'html'],
      provider: 'istanbul'
    },
    exclude: ['coverage/*', 'cypress/*', 'node_modules/*', 'e2e/*'],
    environment: 'nuxt'
  }
})