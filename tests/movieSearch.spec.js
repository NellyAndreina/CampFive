const { test, expect } = require('@playwright/test');
const { MovieSearchPage } = require('../src/page_objects/movieSearchPage');
const {movieName } = require ('../src/support/testData/movieData.json');
const RESULTNAME = "Lilo & Stitch (2025) - IMDb";

test('Search for the movie Lilo and Stitch on IMDb', async ({ page }) => {
  const movieSearchPage = new MovieSearchPage(page);

  await movieSearchPage.gotoHome();

  await movieSearchPage.searchMovie(movieName);

  // Check that the movie page contains the title
  await expect(page).toHaveTitle(RESULTNAME);
  await expect(movieSearchPage.headingSearchName).toBeVisible();
});
