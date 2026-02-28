import vueQuasarConfig from '../.linters/eslint-vue-quasar.js'

export default [
  ...vueQuasarConfig,
  {
    // Project-specific overrides
    rules: {
      // Allow snake_case for database column names (Exercise_Sport, Workout_Exercise, etc.)
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': 'off'
    }
  },
  {
    // Ignore generated/legacy files
    ignores: ['src/api/sync.js', 'src/main.js', 'src/token.js']
  }
]
