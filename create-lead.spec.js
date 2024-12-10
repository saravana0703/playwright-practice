import {test} from "@playwright/test";

test('create a new lead', async({page}) => {
  //Navigate to the uRL  
    
  const pageUrl = "http://leaftaps.com/opentaps/control/main";
  await page.goto(pageUrl);

  //Enter the username as ‘Demosalesmanager’
  const username = 'Demosalesmanager';
  await page.locator("#username").fill(username);

  //Enter the password as ‘crmsfa’
  const password = 'crmsfa';
  await page.locator("#password").fill('crmsfa');

  //Click the Login button
  const loginButton = page.locator('.decorativeSubmit');
  await loginButton.click();

  //Click CRM/SFA
  const crmLink = page.locator('#label');
  await crmLink.click();

  //Click Leads
  const leads = page.locator("(//a[contains(text(), 'Leads')])[1]");
  await leads.click();

  //Click Create Lead
  const createLead = page.locator("//a[contains(text(), 'Create Lead')]");
  await createLead.click();

  //Fill the Company Name
  const companyName = page.locator("#createLeadForm_companyName");
  await companyName.fill("Mallow Technologies");

  //Fill the First Name
  const firstName = page.locator('#createLeadForm_firstName');
  await firstName.fill('Saravana Kumar');

  //Fill the last name
  const lastName = page.locator('#createLeadForm_lastName');
  await lastName.fill("Subramanian");

  //Fill the Salutation
  const Salutation = page.locator('#createLeadForm_personalTitle');
  await Salutation.fill("Welcome to Salesforce!!");

  //Fill the Title
  const title = page.locator('#createLeadForm_generalProfTitle');
  await title.fill("Playwright Automation");

  //Fill the Annual Revenue
  const annualRevenue = page.locator('#createLeadForm_annualRevenue');
  await annualRevenue.fill("100000/month");

  //Fill the Department
  const department = page.locator('#createLeadForm_departmentName');
  await department.fill("IT")

  //Fill the Phone number
  const phoneNumber = page.locator('#createLeadForm_primaryPhoneNumber');
  await phoneNumber.fill("9629511512")

  //Click Create Lead button
  const createLeadButton = page.locator("[name='submitButton']");
  await createLeadButton.click();

  //Verify the company name, first name, last name and the status 
  const verifyCompanyName = page.locator('#viewLead_companyName_sp');
  console.log (await verifyCompanyName.textContent());

  const verifyFirstName = page.locator("#viewLead_firstName_sp");
  console.log(await verifyFirstName.textContent());

  const verifyLastName = page.locator("#viewLead_lastName_sp");
  console.log(await verifyLastName.textContent());

  const verifyStatus = page.locator("#viewLead_statusId_sp");
  console.log(await verifyStatus.textContent());

  console.log(await page.title());


})