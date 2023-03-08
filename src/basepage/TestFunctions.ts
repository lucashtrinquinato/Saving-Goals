import global from "../types/globalthis";
import { expect } from "@playwright/test";

class FuncoesElementos {

    Test(elemento: string = '', validacao: string = '', texto: string = '') {
        return {
            elemento: elemento,
            validacao: validacao,
            texto: texto,

            async Executeclick() {
                await global.page.locator(`${elemento}`).click();
            },
            async ExecuteDoubleclick() {
                await global.page.locator(`${elemento}`).dblclick();
            },
            async ValidateText() {
                await expect(global.page.locator(`${elemento}`)).toHaveText(`${validacao}`);
            },
            async IframdeLocatorValidateText() {
                await  expect(global.page.frameLocator(`${elemento}`).locator(`${validacao}`)).toHaveText(`${texto}`);
            },
            async IframeLocatorClick() {
                await global.page.frameLocator(`${elemento}`).locator(`${validacao}`).click();
            },
            async TypeText() {
                await global.page.locator(`${elemento}`).fill(`${validacao}`,{force:true,noWaitAfter: true,timeout: 50000});
            },
            async IframeLocatorTypeText() {
                await global.page.frameLocator(`${elemento}`).locator(`${validacao}`).type(`${texto}`);
            },
            async ValidateUrl() {
                await global.page.waitForURL(`${elemento}`, {waitUntil: "load",timeout: 50000 });
            },
            async KeyBoard() {
                await global.page.keyboard.press(`${elemento}`);
            },
            async WaitLoadPage() {
                await global.page.waitForLoadState("domcontentloaded");
            },
            async Keyboard() {
                await global.page.keyboard.press(`${elemento}`);
            },
            async ValidateElementExist() {
                await global.page.locator(`${elemento}`).waitFor({state: 'attached', timeout: 15000})
            },
            async ValidateHiddenElementExist() {
                await global.page.isHidden(`${elemento}`);               
            },
            async isVisible() {
                await global.page.locator(`${elemento}`).isVisible();
            }
        }

    }
}

export default FuncoesElementos;