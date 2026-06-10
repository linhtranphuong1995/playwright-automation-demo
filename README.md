# DEMO — Playwright Automation

End-to-end and API test suite built with [Playwright](https://playwright.dev/) and TypeScript, using the Page Object Model pattern.

---

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD pipeline
├── api/
│   └── auth.api.ts               # API helper for authentication 
├── e2e/
│   ├── api/
│   │   └── auth.spec.ts          # API-level auth tests 
│   └── ui/
│       └── login.spec.ts         # UI login tests
├── pages/
│   ├── base.page.ts              # Base page object (shared methods)
│   ├── inventory.page.ts         # Inventory page object
│   └── login.page.ts             # Login page object
├── test-data/                    # Static test fixtures and data files
├── test-results/                 # Test output artifacts (auto-generated)
├── playwright-report/            # HTML test reports (auto-generated)
│   └── index.html
├── .env                          # Environment variables (not committed)
├── .secrets                      # Secrets file (not committed)
├── playwright.config.ts          # Playwright configuration
└── package.json
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher
- UI Target Application: https://www.saucedemo.com
- API Target Application: https://restful-booker.herokuapp.com/auth

---

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd demo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## Configuration

Create a `.env` file in the project root:

```env
BASE_URL=https://your-app-url.com
ADMIN_USER=abc
ADMIN_PASS=123
```

Sensitive credentials (usernames, passwords) go in `.secrets` and are never committed to source control. (Used for running CI locally)

---

## Running Tests

```bash
# Run all tests
npx playwright test

# Run only UI tests
npx playwright test e2e/ui/

# Run only API tests
npx playwright test e2e/api/

# Run a specific spec file
npx playwright test e2e/ui/login.spec.ts

# Run in headed mode (visible browser)
npx playwright test --headed

# Run in debug mode
npx playwright test --debug

# Run with a specific browser
npx playwright test --project=chromium
```

---

## Viewing Reports

After a test run, open the HTML report:

```bash
npx playwright show-report
```

The report is saved to `playwright-report/index.html`.

---

## Architecture

### Page Object Model

UI interactions are encapsulated in page objects under `pages/`:

| File | Description |
|---|---|
| `base.page.ts` | Shared locators and utilities inherited by all pages |
| `login.page.ts` | Login page actions |
| `inventory.page.ts` | Inventory page actions |

### API Helpers

Reusable API clients live in `api/`:

| File | Description |
|---|---|
| `auth.api.ts` | Authentication endpoints (login) |

### Test Suites

| Suite | Path | Coverage |
|---|---|---|
| UI — Login | `e2e/ui/login.spec.ts` | Browser-based login flows |
| API — Auth | `e2e/api/auth.spec.ts` | Auth endpoint contract tests |

---

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions (`.github/workflows/playwright.yml`). The workflow:

1. Installs dependencies and Playwright browsers
2. Runs the full test suite
3. Uploads the HTML report as a build artifact

---

## Contributing

1. Branch off `main` for new features or fixes
2. Add or update page objects for any new UI flows
3. Keep test data in `test-data/` — never hardcode values in specs
4. Run `npx playwright test` locally before opening a PR
