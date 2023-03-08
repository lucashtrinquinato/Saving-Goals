enum Elements {
    TXT_TOTAL_AMOUNT = "//*[@data-testid='input']",
    BTN_INCREASE_MONTH = "//*[@data-testid='reachDateIncrement']",
    BTN_DECREASE_MONTH = "//*[@data-testid='reachDateDecrement']",
    LBL_MONTHLY_AMOUNT = "//*[contains(@class, 'sc-hKwDye ldRKEV')]",
    LBL_DETAIL_MONTHLY_QUANTITY = "(//p[@class='sc-hKwDye iYoBgQ']/span)[1]",
    LBL_DETAIL_MONTHLY_VALUE = "(//p[@class='sc-hKwDye iYoBgQ']/span)[2]",
    TAB_REACH_GOAL_FOCUS = "//*[@data-testid='reachDate']"
}

export default Elements;