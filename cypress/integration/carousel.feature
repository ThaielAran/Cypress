Feature: Manage carousel slides

Background:
    Given I visit demoblaze homepage

Scenario: Moving forward
        When I advance three times on slides
        Then Im back in the first slide

Scenario: Waiting full cycle
    When I wait for slides to move automatically three times
    Then Im back in the first slide

Scenario: Moving backwards
    When I go back three times on slides
    Then Im back in the first slide