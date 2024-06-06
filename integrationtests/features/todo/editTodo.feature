Feature: Edit todo

  Scenario Outline: Successfully edit todo title
    Given user navigates to application using <browser>
    When user clicks todo edit button
    Then todo title is editable

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |


