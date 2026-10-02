import { chromium } from 'playwright'

const SITE_URL = process.env.SITE_URL || 'https://federicavendruscolo.it'

async function acceptCookies(page) {
  const selectors = [
    'button.iubenda-cs-accept-btn',
    '.iubenda-cs-accept-btn',
    'button:has-text("Accetta e chiudi")',
    'button:has-text("Accetta")',
  ]

  for (const selector of selectors) {
    const button = page.locator(selector).first()
    try {
      if (await button.isVisible({ timeout: 2500 })) {
        await button.click()
        return
      }
    } catch {
      // banner assente o selettore non trovato
    }
  }
}

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()

try {
  await page.goto(`${SITE_URL}/?monitor=1#contact`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  })

  await page.waitForTimeout(2500)
  await acceptCookies(page)
  await page.locator('#firstName').waitFor({ state: 'visible', timeout: 15000 })
  await page.locator('#contact').scrollIntoViewIfNeeded()

  await page.fill('#firstName', 'TEST')
  await page.fill('#lastName', 'AUTOMATICO')
  await page.fill('#email', 'test-form@federicavendruscolo.it')
  await page.fill('#phone', '3330000000')
  await page.fill(
    '#goals',
    'Verifica automatica giornaliera del form. Questa richiesta si può ignorare.'
  )
  await page.check('#privacy')

  await Promise.all([
    page.waitForURL('**/thank-you**', { timeout: 30000 }),
    page.click('button[type="submit"]'),
  ])

  console.log('Form check OK: invio riuscito e pagina di ringraziamento raggiunta.')
} catch (error) {
  console.error('Form check FAILED:', error)
  process.exitCode = 1
} finally {
  await browser.close()
}
