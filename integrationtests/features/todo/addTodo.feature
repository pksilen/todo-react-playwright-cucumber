Feature: Add todo

  Scenario Outline: Successfully add todo with non-empty title
    Given user navigates to application using <browser>
    And undone todo count badge shows 1
    When user adds todo with title "My todo"
    Then undone todo count badge shows 2
    And new todo with title "My todo" is shown

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |


  Scenario Outline: Fail to add todo with empty title
    Given user navigates to application using <browser>
    And undone todo count badge shows 1
    When user adds todo with title ""
    Then undone todo count badge shows 1

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

