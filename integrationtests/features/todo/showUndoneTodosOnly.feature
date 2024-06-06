Feature: Show undone todos only

  Scenario Outline: Show undone todos
    Given user navigates to application using <browser>
    When user clicks show undone todos only toggle
    Then shown todo count is 1

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

Feature: Show undone todos only

  Scenario Outline: Does not show done todos
    Given user navigates to application using <browser>
    When user clicks show undone todos only toggle
    And user marks todo done
    Then shown todo count is 0

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
