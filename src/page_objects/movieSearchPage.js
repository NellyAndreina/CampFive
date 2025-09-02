class MovieSearchPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#suggestion-search');
    this.searchButton = page.locator('#suggestion-search-button');
    this.firstSuggestion = page.locator('.react-autosuggest__suggestion a').first();
    this.headingSearchName = page.getByRole('heading', { name: /Lilo/i })
  }

  async gotoHome() {
    await this.page.goto('https://www.imdb.com/');
  }

  async searchMovie(movieName) {
  await this.searchBox.fill(movieName);
  await this.firstSuggestion.waitFor({ state: 'visible' });
  await this.firstSuggestion.click();
  }
}

module.exports = { MovieSearchPage };

