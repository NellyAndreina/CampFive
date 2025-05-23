//Gherkin
//Escenario 1
Feature: Movie Search

  Scenario: Successful Movie Search Displays Movie Details
    Given The User Is On The IMDb Homepage
    When The User Types "Lilo & Stich" Into The Search Bar
    And The User Presses Enter
    Then The User Should Be Redirected To The Movie's Detail Page
    And The Page Should Display The Movie Title
    And The Page Should Display The Movie Rating
    And The Page Should Display The Movie Director
    And The Page Should Display The Main Cast
//Escenario 2
Feature: Movie Search

  Scenario: Nonexistent Movie Search Displays No Results Message
    Given The User Is On The IMDb Homepage
    When The User types "No existente" into the search bar
    And The User Presses Enter
    Then The Page Should Display A Message Indicating No Results Were Found

//Escenario 3
Feature: Movie Search

  Scenario: Autocomplete Suggests Movies While Typing
    Given The User Is On The IMDb Homepage
    When The User Types "Insert letter" Into The Search Bar
    Then The Autocomplete Suggestions Should Include "Insert letter"
