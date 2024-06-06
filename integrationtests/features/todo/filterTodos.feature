Feature: Filter todos

  Scenario Outline: Successfully filter todos
    Given user navigates to application using <browser>
    When user enters "X" to search box
    Then shown todo count is 0

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

