import TestFunctions from "../basepage/TestFunctions";
import elementSavingGoals from "../elements/ElementsSavingGoalsPage";
import global from "../types/globalthis";
import { Env } from "../support/enviroment";

export default class SavingGoalsPage extends TestFunctions {
    
    async IAmOnTheBuyHouseSavingGoalScreen(){
        await global.page.goto(Env.url);
    }

    async IFillTheTotalAmountField(total_amount: string){
        await this.Test(elementSavingGoals.TXT_TOTAL_AMOUNT, total_amount).TypeText();
    }

    async ISelectTheReachGoalFieldWith(months_quantity: number){
        while(months_quantity>=2){
            await this.Test(elementSavingGoals.BTN_INCREASE_MONTH).Executeclick();
            months_quantity--;
        }
    }

    async ValidateTheMonthlyAmount(monthly_amount: number){
        await this.Test(elementSavingGoals.LBL_MONTHLY_AMOUNT, monthly_amount.toString()).ValidateText();
    }

    async ValidateTheMonthlyAmountDetails(total_amount: string, months_quantity: string){
        await this.Test(elementSavingGoals.LBL_DETAIL_MONTHLY_QUANTITY, months_quantity+" monthly deposits").ValidateText();
        await this.Test(elementSavingGoals.LBL_DETAIL_MONTHLY_VALUE, "$"+total_amount).ValidateText();
    }

    async IncreaseTheReachGoalFieldBy(increasing_method: string){
        if(increasing_method == "keyboard"){
            await this.Test(elementSavingGoals.TAB_REACH_GOAL_FOCUS).Executeclick();
            await global.page.keyboard.press('ArrowRight');
        } else {
            await this.Test(elementSavingGoals.BTN_INCREASE_MONTH).Executeclick();
        }
    }

    async ValidateTheMonthIncreased(){
        await this.Test(elementSavingGoals.LBL_DETAIL_MONTHLY_QUANTITY, "2 monthly deposits").ValidateText();
    }

    async DecreaseTheReachGoalFieldBy(decreasing_method: string){
        //Increasing the month's quantity since the default it's the current month
        this.IncreaseTheReachGoalFieldBy("arrow button");

        if(decreasing_method == "keyboard"){
            await this.Test(elementSavingGoals.TAB_REACH_GOAL_FOCUS).Executeclick();
            await global.page.keyboard.press('ArrowLeft');
        } else {
            await this.Test(elementSavingGoals.BTN_DECREASE_MONTH).Executeclick();
        }
    }

    async ValidateTheMonthDecreased(){
        await this.Test(elementSavingGoals.LBL_DETAIL_MONTHLY_QUANTITY, "1 monthly deposits").ValidateText();
    }
}