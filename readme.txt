My SMART Goal;
Specific:  Measurable: Attainable, attractive  Realistic, Relevant: Time-bound: 
-I would like to get broad knowledge about testcafe framework  by following up the best practices such as design patterns (POM), data provider, web element locators and test results report , so that I should be bale automate any test case scenario by using testcafe framework.
-I should be able to create an automation project from scratch
-I should complete my Bootcamp deliverables through the course of the following four weeks.


Front End  Automation Outline
-POM structure
-Pages
-Selectors
-Data provider
-Asssertions
-Enviroment variables
-Abstraction
-Only, skip methods
-Testcafe Roles
-Test Metadata
-Custom Scripts
-Headless Mode
-Multibrowser
-Concurrency

ENV: https://todoist.com/app/today
Users: 
1- kifmyvz@gmail.com / yavuz7575
2- aytemurerol1@gmail.com / yavuz7575


Execution Recording: https://drive.google.com/drive/folders/12FddB6ceiplxxEffNNwrqXlzg1FJuGea?usp=sharing

In this Project, we have 17 TCs. You can find the details in the below
-	4 TCs “Fixture: Positive Login Test:”  We use for different valid user which we stored then in an Excel file (DDT Concept). The Excel file is under the “data” folder
-	4 TCs “Fixture: Negative Login Test “We use for different invalid user which we stored then in an Excel file (DDT Concept). The Excel file is under the “data” folder
-	3TCs “Fixture: Negative Login to validate the warning messages for unsuccessful Logins 
-	1 TC “Fixture: Create a new Project”
-	1 TC “Fixture: Create a new task for today”
-	1 TC “Fixture: Create a new task for tomorrow”
-	1 TC “Fixture: Positive Login with Environment Variables”
-	2 TCs “Fixture: Create ten new tasks then delete


Test Cases:
1-	"test": "testcafe chrome  ./pom/tests/positive_login_test.js"
2-	"test": "testcafe chrome  ./pom/tests/negative_login_test.js"
3-	"test": "testcafe chrome  ./pom/tests/ddt_positive_login_test.js"
4-	"test": "testcafe chrome  ./pom/tests/ddt_negative_login_test.js"
5-  "test": "testcafe chrome  ./pom/tests/newtask-today.js"