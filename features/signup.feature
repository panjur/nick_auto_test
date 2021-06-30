Feature: Pembepanjur signup
  As a Developer in Test
  I want to test sign up

  Scenario Outline: As a user, I can signup into Pembepanjur

    Given I am on the signup page
    When I select <gender> and <looking_for>
    And I submit with <email>
    And I enter <name> as name
    And I click on Next button
    And I select <gender> as gender
    And I enter <email> as email
    And I click on Next button
    And I enter <password> as password
    And I click on Next button
    And I select <birthdate> for Birthday
    And I click on Next button
    And I select <country> as Country
    And I select <city> as City
    And I select <district> as District
    And I click on Next button
    And I select <proximate_area> for the how far member location
    And I select <income> for monthly income
    And I select keep it secret as <secret_income>
    And I click on Next button
    And I select <member_income_importance> for the finance situation of member
    And I select Your Merital Status as <marital_status>
    And I select <occupation> in occupation
    And I add the details as <occupation_comment>
    And I click on Next button
    And I select <has_children> in Children
    And I have <no_of_children> Children
    And I select keep it secret as <secret_children>
    And I click on Next button
    And I select <is_children_with_you> for is children living with you
    And I select <member_with_child> for the accept member who has child
    And I select <member_live_with_child> for the accept member live with child
    And I select <want_children> for if I want children
    And I select <profile_view> for who can see my profile
    And I <accept_agreement> for the accepting the agreement
    And I <promotional_mail> for the receiving the promotional mails
    And I click on Next button
    And I select my height as <height>
    And I click on Next button
    And I select my weight as <weight>
    And I select keep it secret as <secret_weight>
    And I click on Next button
    And I select my eye color as <eye_color>
    And I select my hair color as <hair_color>
    And I select I am physically <physics>
    And I select <importance_weight> importance of member weight
    And I select <importance_size> importance of member size
    And I select <member_appearance> importance of member appearance
    And I select <dressing_style> as my dressing style
    And I select <member_dressing_style> importance of member dressing style
    And I select my degree as <degree>
    And I enter my graduate school <school_name>
    And I click on Next button
    And I select <is_schooling> for my current is_schooling
    And I select <current_study> as my current study
    And I select <member_degree> importance of member degree
    And I select <prefer_member_degree> for member degree preference
    And I select <is_smoke> for my smoking
    And I select <is_member_smoking> importance of member smoking
    And I select <is_drinking> as my alcohol consumption
    And I select <is_member_drinking> importance of member drinking
    And I select with whom I live with <live_with>
    And I select keep it secret as <secret_live_with>
    And I click on Next button
    And I select <Has_house> for if I have my house
    And I select keep it secret as <secret_house>
    And I click on Next button
    And I select I work as <work_type>
    And I select my work position as <work_position>
    And I select I know <other_language> as well as other language
    And I click on Next button
    And I select <about_me> as Other thing I like
    And I click on Next button
    And I select <describe_me> as thing that describe me
    And I click on Next button
    And I select <my_hobby> as my hobbies
    And I click on Next button
    And I enter <about_dream_person> as my dream person
    And I click on Next button
    And I enter <about_myself> as about myself and life
    And I click on Next button
    And I upload my picture <upload_picture>
    Then I succesfully completed the registration
    And I click on Menu screen
    And I click on Account link
    And I click on Membership Cancellation button
    And I select the cancellation reason
    And I enter <password> as password
    And I click on Account Cancellation buuton
    Then I redirect to the login screen

    Examples:
      | gender  | looking_for | email              | name | password | birthdate     | country  | city     | district | proximate_area | income            | secret_income | member_income_importance | marital_status | occupation            | occupation_comment | has_children | no_of_children | secret_children | is_children_with_you | member_with_child | member_live_with_child| want_children| profile_view            | accept_agreement | promotional_mail| height | weight | secret_weight | eye_color | hair_color | physics | importance_weight | importance_size | member_appearance | dressing_style      | member_dressing_style | degree   | school_name | is_schooling | current_study | member_degree | prefer_member_degree | is_smoke | is_member_smoking | is_drinking | is_member_drinking         | live_with    | secret_live_with | Has_house | secret_house | work_type   | work_position      | other_language | about_me          | describe_me | my_hobby            | about_dream_person             | about_myself      | upload_picture  |
      | Erkek   | Kadın       | erik.m19@mail.com  | Erik | test@123 | 5/Şubat/1999  |  Türkiye | Adıyaman | Gerger   | Farketmez      |5.000 ile 10.000 TL| yes           |    Emin Değilim          | Hiç evlenmemiş | Bilişim Teknolojileri | I'm an engineer    | Evet         |  İki           | yes             |  Evet                 | Evet             |Evet                   | Evet         | Bütün üyeler görebilsin.|              yes |               no| 172    | 70     | yes           | Mavi      | Siyah      | Atletik | Önemli            | Hiç             | Emin Değilim      | Bazen dikkat ederim | Biraz                 | Doktora  | Test School | Evet         | Doktora       | Biraz         | Lise ve üzeri        | Bazen    | Az kullanabilir   | Sık sık     | Sosyal olarak kullanabilir | Çocuklarımla | yes              | Evet      | yes          | Tam zamanlı | Üst düzey yönetici | İngilizce      | Çocukları severim | Akıllı      | Arkadaşlarla gezmek | Smart, Passionate and Educated | Life is beautiful | later           |