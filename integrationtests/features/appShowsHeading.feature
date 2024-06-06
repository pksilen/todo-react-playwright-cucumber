Feature: Application shows a heading

  Scenario Outline: Application shows a heading with undone todo count badge
    When user navigates to application using <browser>
    Then application heading is shown
    And undone todo count badge shows value 1

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

