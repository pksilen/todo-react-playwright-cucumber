Feature: Change view mode

  Scenario Outline: Change view mode
    Given user navigates to application using <browser>
    When light mode toggle button is clicked
    Then page content matches screenshot
    When dark mode toggle button is clicked
    Then page content matches screenshot

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

