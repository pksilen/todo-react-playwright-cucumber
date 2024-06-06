Feature: Toggle todo done

  Scenario Outline: Successfully toggle todo done
    Given user navigates to application using <browser>
    When user marks todo done
    Then mark todo done button is hidden
    And mark todo undone is visible

    Examples:
      | browser          |
      | chromium desktop |
      | firefox desktop  |
      | webkit desktop   |

