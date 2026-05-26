Feature: Login

  Scenario Outline: Successful login
    Given user is on login page
    When user login with "<email>" and "<password>"
    Then user should login successfully
  Examples:
    | email           | password |
    | abc123@test.com | test@123 |
  
  Scenario Outline: Unsuccessful login
    Given user is on login page
    When user login with "<email>" and "<password>"
    Then user should not be able to login successfully
  Examples:
    | email                 | password |
    | admin123@test.com     | test@123 | 

@test
  Scenario: Login with credentials from environment file
    Given user is on login page
    When user login with valid credentials
    Then user should login successfully
