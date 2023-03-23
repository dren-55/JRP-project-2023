Feature: Interactions

@DP-5

Scenario: Verify sorting in sortable interactions
Given i am on Demo-qa
When i click on interactions
And i click on Sortable
And i create a list from 6 to 1
Then i verify the changes