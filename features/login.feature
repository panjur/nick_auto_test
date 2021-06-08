Feature: Pembepanjur login
  As a Developer in Test
  I want to test login

  Scenario Outline: As a user, I can log into Pembepanjur

    Given I am on the login page
    When I login with <username> and <password>
    Then I should text <message>
    Then I reload browser session

    Examples:
      | username             | password | message                       |
      | test@pembepanjur.com | h123456  | Anasayfa                      |
      | test@pembepanjur.com | badpass  | Hatalı şifre                  |
      | test@pembepanjur.com | badpass  | failed test with a screenshot |