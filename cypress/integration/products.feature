Feature: Product selection and Cart

Background:
    Given I am on demoblaze homepage

Scenario: Category: phones
    When I click on Phones category
    Then I am able to see only phone products
Scenario: Category: Laptops
    When I click on Laptops category
    Then I am able to see only laptop products
Scenario: Category: Monitors
    When I click on Monitors category
    Then I am able to see only monitor products

Scenario: Clicking on product
    When I click on an product
    Then I am able to see that product description and add it to cart

Scenario: Adding to cart
    When I add a product to cart
    Then I am able to see that product on cart

Scenario: Removing from cart
    When I remove a product from cart
    Then Its price should be subtracted from total

Scenario: Purchase
    When I click on buy cart
    Then I am able to fill with data and buy
    And To purchase successfully