@regression
Feature: Login Functionality
Scenario Outline: Login with Valid Credentials
Given Load the url
And Enter the Credentials as "<username>" and "<password>"
When  Click on Login Button
Then  Home page is displayed

Examples:
|username|password|
|demoCSR|crmsfa|
|demoSalesManager|crmsfa|