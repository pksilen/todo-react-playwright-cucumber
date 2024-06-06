Feature: Remove todo

  Scenario Outline: Successfully remove todo
    Given user navigates to application using <browser>
    When user clicks todo remove button
    Then shown todo count is 0

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |

