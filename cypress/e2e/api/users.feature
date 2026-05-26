Feature: Users API

  Scenario: Create users successfully
    When I send a POST request to "/users"
    Then the response status should be 201
    And the response should contain user 2 and "janet.weaver@reqres.in"

  Scenario: Update users successfully
    When I send a PUT request to "/users/2"
    Then the response status should be 200
    And the response should contain user 2 and "janet.weaver_test@reqres.in"