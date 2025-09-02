const { test, expect } = require('@playwright/test');
const { MovieSearchPage } = require('../src/page_objects/movieSearchPage');

test('Search for the movie Lilo and Stitch on IMDb', async ({ page }) => {
  const movieSearchPage = new MovieSearchPage(page);

  await movieSearchPage.gotoHome();

  await movieSearchPage.searchMovie('Lilo y Stitch');

  await movieSearchPage.clickFirstResult();

  // Check that the movie page contains the title
  await expect(page).toHaveTitle(/Lilo & Stitch/i);
  await expect(page.getByRole('heading', { name: /Lilo/i })).toBeVisible();
});
