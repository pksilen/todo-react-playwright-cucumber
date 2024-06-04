Feature: Window title

  Scenario Outline: Window title shows application name
    When user navigates to application using <browser>
    Then application name is shown in window title

    Examples:
      | browser  |
      | chromium |
      | firefox  |
      | webkit   |

