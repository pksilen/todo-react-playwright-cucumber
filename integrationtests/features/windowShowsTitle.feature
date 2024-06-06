Feature: Window shows title

  Scenario Outline: Window shows title with application name
    When user navigates to application using <browser>
    Then application name is shown in window title

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |
      | iPhone 14        |

