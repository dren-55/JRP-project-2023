Feature: Alerts
@DP-11

Scenario: Verify that when i enter a name on the prompt box it matches the output
Given i am on Demo-qa
When i click on Alerts Frames and Windows
And i click on Alerts
And i click on "prompt box will appear"
And i enter the name Dren and press ok
Then i verify the prompt box displays the message You entered Dren