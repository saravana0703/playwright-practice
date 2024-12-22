import { expect, test } from '@playwright/test'

const buttonUrl = "https://leafground.com/button.xhtml"

test(
    'Test on Click Image Button and Click on any hidden button', async ({ page }) => {

        await page.goto(buttonUrl);
        let buttonclick = page.locator(".card").filter({ hasText: "Click and Confirm title." }).getByRole("button")

        await buttonclick.click();
        await page.pause();
        await expect(page.locator(".monthly-sales")).toBeVisible();
        await page.pause();
    })

test(
    'Test the disabled state of a button', async ({ page }) => {
        await page.goto(buttonUrl);
        let buttonDisabled = page.locator(".card").filter({ hasText: "Confirm if the button is disabled." }).getByRole("button")

        //Confirm if the button is disabled.
        await expect(buttonDisabled).toBeDisabled();
    }
)

test(
    'Test the Click the Image button and click on any hidden button', async ({ page }) => {
        await page.goto(buttonUrl);
        let buttonImage = page.locator("//span[text()='Image']")
        await buttonImage.click();
        await expect(page.locator(".ui-overlaypanel-content")).toBeVisible();
    }
)

test
(
    'Test the Check how many rounded buttons are present', async ({ page }) => {
        await page.goto(buttonUrl);
        let roundButton = page.locator(".rounded-button");
        let lengthButton = await roundButton.count();
        console.log(`There are ${lengthButton} rounded buttons are present`);

        for (let i = 0; i < lengthButton; i++) {
            let buttonText = await roundButton.nth(i).innerText();
            console.log(buttonText);
            if (buttonText === "Primary") {
                await expect(roundButton.nth(i)).toHaveCSS('background-color', 'rgb(33, 150, 243)');
                console.log(`${buttonText} button is present`);
            } else if (buttonText === "Secondary") {
                await expect(roundButton.nth(i)).toHaveCSS('background-color', 'rgb(211, 47, 47)');
                console.log(`${buttonText} button is present`);
            } else if (buttonText === "Success") {
                await expect(roundButton.nth(i)).toHaveCSS('background-color', 'rgb(104, 159, 56)');
                console.log(`${buttonText} button is present`);
            } else if (buttonText === "Info") {
                await expect(roundButton.nth(i)).toHaveCSS('background-color', 'rgb(251, 192, 45)');
                console.log(`${buttonText} button is present`);
            } else {
                console.log("No buttons are found");
            }


        }
    }
)
