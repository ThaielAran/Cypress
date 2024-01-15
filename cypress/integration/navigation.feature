Feature: Navigation to headers

Background:
    Given I visit demoblaze homepage

Scenario: Navigate to Contact
    When I navigate to Contact
    Then I am able to write a message

Scenario: Navigate to AboutUs
    When I navigate to AboutUs
    Then I can see a video

Scenario: Navigate to Cart
    When I navigate to Cart
    Then I can see my added products

Scenario: Navigate to SignUp
    When I navigate to Sign up
    Then I am able to create a user with username and password

Scenario: Navigate to Login
    When I navigate to Login
    Then I am able to send username and password to log in