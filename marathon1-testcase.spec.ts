import {chromium, expect, test} from "@playwright/test"
import exp from "constants";
import { channel } from "diagnostics_channel"

test("Verify Lead Creation and Conversion to Opportunity", async({page}) => {
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

    //Type ‘Marketing’ in the search box and click on the Marketing link
    const searchBox = page.locator("input[placeholder='Search apps or items...']");
    await searchBox.fill("Marketing");
    const marketing = page.locator("div[data-name='Marketing CRM Classic']");
    await marketing.click({timeout: 5000});

    //Navigate to the Leads tab from the Marketing dashboard
    let leadsLink = page.locator("(//span[text()='Leads'])[1]");
    await leadsLink.click();

    //Click on the New button to create a lead
    let newLead = page.locator("//div[@title='New']");
    await newLead.click();
    await page.waitForSelector(".modal-container");

    //: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.
    let firstname = `Dwanyne${Math.floor(Math.random() * 100)}`;
    let lastname = `Johnson${Math.floor(Math.random() * 100)}`;
    let companyname = "WWE"
    const salutation = page.locator("//button[@name='salutation']");
    await salutation.click();
    await page.locator("[data-value='Mr.']").click();
    await page.locator("input[placeholder='First Name']").fill(firstname);
    await page.locator("input[placeholder='Last Name']").fill(lastname);
    await page.locator("input[name='Company']").fill(companyname);

    //Click on the Save button.
    const saveButton = page.locator("button[name='SaveEdit']");
    await saveButton.click();
    await expect(page.locator("div.forceToastMessage")).toContainText("created");

    //In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link
    const dropdown = page.locator("lightning-button-menu.menu-button-item");
    await dropdown.click({timeout: 3000});
    const convertlink = page.locator("//span[text()='Convert']");
    await convertlink.click();

    //Click on the Opportunity Name input field, clear and enter a new opportunity name
    let opportunityfield = page.locator("//button[@title='WWE-']");
    await page.pause();
    await opportunityfield.click();
    let opportunityfield1 = page.locator("(//input[@class=' input'])[4]");
    await opportunityfield1.click();
    await opportunityfield1.clear();
    let opportunityName = `Opp John${Math.floor(Math.random() * 100)}`;
    await opportunityfield1.fill(opportunityName);

    //Click on the Convert button
    const convertButton = page.locator("(//button[text()='Convert'])");
    await convertButton.click();
    await page.waitForSelector(".panel.runtime_sales_leadConvertedConfirmationDesktop");
    await expect(page.locator(".panel.runtime_sales_leadConvertedConfirmationDesktop div div.title")).toContainText("Your lead has been converted");

    //Click on the Go to Leads button.
    const goToLeadsButton = page.locator("//button[text()='Go to Leads']");
    await goToLeadsButton.click();

    //Search the verified lead name in the Search box and verify the text ‘No items to display’
    let searchList = page.locator("[placeholder='Search this list...']");
    await searchList.fill(firstname);
    await page.locator("//span[text()='No items to display.']").isVisible();

    //Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
    let opportunitylink = page.locator("//span[text()='Opportunities']");
    await opportunitylink.click();

    //Search the opportunity name created and click on the created opportunity name
    let opportunitySearch = page.locator("input[name='Opportunity-search-input']");
    await opportunitySearch.fill(opportunityName);
    let searchResult = page.locator(`a[title="${opportunityName}"]`);
    await expect(searchResult).toHaveText(opportunityName);

})