#language:en

@saving_goals
Feature: Saving Goals

@regression
Scenario Outline: "Buy a house" saving goal successfully
  Given I am on the Buy a house saving goal screen
  When I fill the total amount field with <total_amount>
  And I select the reach goal field with <months_quantity> months ahead
  Then the monthly amount should be updated to <monthly_amount>

  Examples:
  | total_amount       | months_quantity | monthly_amount  |
  | 100.00             | 1               | $100.00         |
  | 1000.00            | 2               | $500.00         |
  | 10,000.00          | 3               | $3,333.33       |
  | 100,000.00         | 4               | $25,000.00      |
  | 1,000,000.00       | 5               | $200,000.00     |
  | 10,000,000.00      | 6               | $1,666,666.67   |

@regression
Scenario Outline: Monthly amount details
  Given I am on the Buy a house saving goal screen
  When I fill the total amount field with <total_amount>
  And I select the reach goal field with <months_quantity> months ahead
  Then the monthly amount details should be <total_amount> in <months_quantity> months 

  Examples:
  | total_amount       | months_quantity |
  | 100.00             | 2               |


@regression
Scenario Outline: Increase the Date input
  Given I am on the Buy a house saving goal screen
  When I increase the reach goal field using the <increasing_method>
  Then the month should be increased

  Examples:
  | increasing_method |
  | arrow button      |
  | keyboard          |

@regression
Scenario Outline: Decrease the Date input
  Given I am on the Buy a house saving goal screen
  When I decrease the reach goal field using the <decreasing_method>
  Then the month should be decreased

  Examples:
  | decreasing_method |
  | arrow button      |
  | keyboard          |