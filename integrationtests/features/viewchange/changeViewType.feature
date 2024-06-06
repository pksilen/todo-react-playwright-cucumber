Feature: Change view type

  Scenario Outline: Change view type
    Given user navigates to application using <browser>
    When table view toggle button is clicked
    Then todo checkbox is shown
    And page content matches screenshot
    When list view toggle button is clicked
    Then todo checkbox is hidden
    And page content matches screenshot

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

