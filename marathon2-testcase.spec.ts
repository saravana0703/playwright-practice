import {chromium, expect, test} from "@playwright/test"
import exp from "constants";
import { channel } from "diagnostics_channel"

test(" Create and verify a New Case in Chatter", async({page}) => {
    test.setTimeout(60000);
    //: Load the specified URL
    const salesforceUrl = "https://mallowtechnologies-dev-ed.develop.my.salesforce.com/";
    await page.goto(salesforceUrl);

    //Enter the Username, Password and click on the Login button.
    const username = "saravana@mallow-tech.com";
    const password = "Sara@0702";

    let usernameField = page.locator("#username");
    let passwordField = page.locator("#password");
    let loginButton = page.locator("#Login");

    await usernameField.fill(username);
    await passwordField.fill(password);
    await loginButton.click();
    await page.waitForTimeout(10000);

    //: Click on the App Launcher toggle button
    const appLauncherButton = page.locator("//button[@title='App Launcher']");
    await appLauncherButton.click();
    await page.waitForTimeout(5000);

    //Click on the View All link
    const viewAlllink = page.locator("//button[@aria-label='View All Applications']");
    await viewAlllink.click({timeout : 5000});

    //Type Service in the search box and click on the Service link
    const searchBox = page.locator("input[placeholder='Search apps or items...']");
    await searchBox.fill("Service");
    let service = page.locator("//one-app-launcher-app-tile[@data-name='Service']");
    await service.click();

    //Navigate to the Cases tab from the Service dashboard
    let cases = page.locator("//span[text()='Cases']");
    await cases.click();

    //Click on the New button to create a new case
    let casesNew = page.locator("//a[@title='New']");
    await casesNew.click();

    //: Click on the Search Contacts input field in Contact Name
    let searchContact = page.locator("//input[@placeholder='Search Contacts...']");
    await searchContact.click();

    //Click on the New Contact link
    let newContactLink = page.locator("//span[@title='New Contact']");
    await newContactLink.click();

    //Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data.
    let firstname = `John${Math.floor(Math.random() * 100)}`;
    let lastname = `Cena${Math.floor(Math.random() * 100)}`;
    const salutation = page.locator("//button[@name='salutation']");
    await salutation.click();
    await page.locator("[data-value='Mr.']").click();
    await page.locator("input[placeholder='First Name']").fill(firstname);
    await page.locator("input[placeholder='Last Name']").fill(lastname);

    //Click on the Save button.
    let saveButton = page.locator("(//button[@name='SaveEdit'])[2]");
    await saveButton.click();
    let contactCreate = page.locator("span.toastMessage");
    await expect(contactCreate).toContainText("created");

    //Click Search Accounts input field in Account Name and click on the New Account link
    let searchAccount = page.locator("//input[@placeholder='Search Accounts...']");
    await searchAccount.click();
    let newAccountLink = page.locator("//span[@title='New Account']");
    await newAccountLink.click();

    //Fill in all the mandatory fields (Account Name, Account Number) with a valid data
    let accountName = page.locator("[name='Name']");
    await accountName.fill(`${firstname} + " "+ ${lastname}`);
    let accountNumber = page.locator("[name='AccountNumber']");
    await accountNumber.fill("1234567890");

    //Select the Rating dropdown and choose the option ‘Hot’
    let rating = page.locator("(//span[text()='--None--'])[7]");
    await rating.click();
    let ratingOption = page.locator("(//span[text()='Hot'])");
    await ratingOption.click();

    //Click on the Save button.
    let saveAccountButton = page.locator("[name='SaveEdit']");
    await saveButton.click();
    let accountCreate = page.locator(".forceToastMessage");
    await expect(accountCreate).toContainText("created");

    //Select the Status dropdown icon and choose the value as New
    let status = page.locator("//button[@aria-label='Status']//span[text()='New']");
    await status.click();
    let statusOption = page.locator("//span[@title='New']");
    await statusOption.click();

    //Select the Priority dropdown icon and choose the value as ‘High’
    let priority = page.locator("//span[.='Medium']");
    await priority.click();
    let priorityOption = page.locator("(//span[text()='High'])");
    await priorityOption.click();

    //Select the Case Origin dropdown icon and choose the value as ‘Email’.
    let caseOrigin = page.locator("(//span[text()='--None--'])[3]");
    await caseOrigin.click();
    let caseOriginOption = page.locator("//div[@aria-label='Case Origin']//span[text()='Email']");
    await caseOriginOption.click();

    //Fill in the Subject input field as ‘Product Return Request’ and Description input field as 
    //‘Requesting a return for a defective product’
    let subject = page.locator("[name='Subject']");
    await subject.fill("Product Return Request");
    let description = page.locator("(//textarea)[1]");
    await description.fill("Requesting a return for a defective product");

    //Click on the Save button.
    await saveAccountButton.click();
    let caseCreate = page.locator("div.forceToastMessage").nth(1);
    await expect(caseCreate).toContainText("created");

    //Edit the Status under Details category and choose the ‘Escalated’ option from the dropdown.
    let editButton = page.locator("button[title='Edit Status']");
    await editButton.click();
    let newEdit = page.locator("button[data-value='New']");
    await newEdit.click();
    let escalated = page.locator("//span[@class='slds-media__body']//span[text()='Escalated']");
    await escalated.click();

    //Click on the Save button.
    await saveAccountButton.click();

    //Enter a valid data in the Share an Update input field and click on the Share button.
    let shareUpdate = page.locator("[title='Share an update...']");
    await shareUpdate.click();
    let shareUpdateArea = page.locator(".slds-rich-text-area__content");
    await shareUpdateArea.fill("Playwright is faster");
    let shareButton = page.locator("//button[text()='Share']");
    await shareButton.click();
    await page.pause();

    //Click on the dropdown icon and choose the Like on Chatter option.
    let likedropdown = page.locator("//article[@data-type='TextPost']//a[@class='cuf-feedItemActionTrigger cuf-buttonIcon slds-button slds-button_icon-border slds-button_icon-x-small']");
    await likedropdown.click();
    let likeonchatter = page.locator("//span[text()='Like on Chatter']");
    await likeonchatter.click();
    await expect(page.locator("span.toastMessage")).toHaveText("Post was liked.");

    //: Navigate to the Chatter tab and verify the post liked by the user
    let chatter = page.locator("//span[text()='Chatter']");
    await chatter.click();
    let verifyChatterLike = page.locator("//article[contains(@aria-label, 'Just now')]//span[@title='Unlike']");
    await expect(verifyChatterLike).toContainText("Liked");



})