Feature: Registration

    Scenario: Successful Registration
        Given user is on registration page
        When user enters the following details
        | firstName | lastName | email               | telephone  | password |
        | test1     | abc1     | abc.test17@test.com | 1234567890 | test@123 |
        | test2     | abc2     | abc.test26@test.com | 9876543210 | test@123 |
        Then user should be registered successfully
     
  
    Scenario Outline: Unsuccessful Registration
        Given user is on registration page
        When user enters the following details without agreeing privacy policy
        Then warning message should be displayed
        And user should not be registered
 
        