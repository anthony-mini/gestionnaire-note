import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Ex: Mathématiques').click();
  await page.getByPlaceholder('Ex: Mathématiques').fill('Anglais');
  await page.getByPlaceholder('Note de 0 à').click();
  await page.getByPlaceholder('Note de 0 à').fill('17');
  await page.getByPlaceholder('Ajouté un commentaire').click();
  await page.getByPlaceholder('Ajouté un commentaire').fill('Super !');
  await page.getByRole('button', { name: 'Ajouter une note' }).click();
  await page.getByText('Mathématique05/06/').click();
  await page
    .locator('div')
    .filter({ hasText: /^Mathématique05\/06\/2024SuperDelete$/ })
    .getByRole('button')
    .click();
  await page.getByPlaceholder('Ex: Mathématiques').click();
  await page.getByPlaceholder('Ex: Mathématiques').fill('Mathématique');
  await page.getByPlaceholder('Ex: Mathématiques').press('Tab');
  await page.getByPlaceholder('Note de 0 à').fill('5');
  await page.getByPlaceholder('Ajouté un commentaire').click();
  await page.getByPlaceholder('Ajouté un commentaire').fill('Bad...');
  await page.getByRole('button', { name: 'Ajouter une note' }).click();
});
