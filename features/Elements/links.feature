Feature: links
@DP-3

Scenario: Verify a link is displayed in a new window handle.
Given i am on Demo-qa
When i click on Elements
And i click on links
And i click on Home link
Then i verify home link is displayed in a new window handle