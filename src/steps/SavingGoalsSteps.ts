import { Given, When, Then } from "@cucumber/cucumber";
import SavingGoalsPage from "../pages/SavingGoalsPage";

const SavingGoals = new SavingGoalsPage();

Given(/I am on the Buy a house saving goal screen/, async () => {
    await SavingGoals.IAmOnTheBuyHouseSavingGoalScreen();
});

/* Scenario: "Buy a house" saving goal successfully */
When(/I fill the total amount field with (.*)/, async (total_amount) => {
    await SavingGoals.IFillTheTotalAmountField(total_amount);
});

/* Scenario: "Buy a house" saving goal successfully */
When(/I select the reach goal field with (.*) months ahead/, async (months_quantity) => {
    await SavingGoals.ISelectTheReachGoalFieldWith(months_quantity);
});

/* Scenario: "Buy a house" saving goal successfully */
Then(/the monthly amount should be updated to (.*)/, async (monthly_amount) => {
    await SavingGoals.ValidateTheMonthlyAmount(monthly_amount);
});

/* Scenario: Monthly amount details */
Then(/the monthly amount details should be (.*) in (.*) months/, async (total_amount, months_quantity) => {
    await SavingGoals.ValidateTheMonthlyAmountDetails(total_amount, months_quantity);
});

/* Scenario: Increase the Date input */
When(/I increase the reach goal field using the (.*)/, async (increasing_method) => {
    await SavingGoals.IncreaseTheReachGoalFieldBy(increasing_method);
});

/* Scenario: Increase the Date input */
Then(/the month should be increased/, async () => {
    await SavingGoals.ValidateTheMonthIncreased();
});

/* Scenario: Decrease the Date input */
When(/I decrease the reach goal field using the (.*)/, async (decreasing_method) => {
    await SavingGoals.DecreaseTheReachGoalFieldBy(decreasing_method);
});

/* Scenario: Decrease the Date input */
Then(/the month should be decreased/, async () => {
    await SavingGoals.ValidateTheMonthDecreased();
});