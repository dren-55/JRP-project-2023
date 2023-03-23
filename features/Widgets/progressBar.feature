Feature: widgets
@DP-9

Scenario: Verify progress bar is green when reached 100%
Given i am on Demo-qa
When i click on widgets
And i click on progress bar
And i click start and stop it at 69%
Then i Verify progress stopped at 69%