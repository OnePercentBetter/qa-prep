#Big Problem of the Day

Your team is tasked with ensuring a public login page for a government web portal works correctly before launch. But what does 'works correctly' actually mean in QA terms?


#Notes:

Quality Assurance (QA) testing involves a systematic approach to ensure a product or service adheres to established standards and requirements. It is a preventive, process-focused activity that aims to minimize issues and guarantee consistent performance, unlike testing, which identifies flaws after the product is developed.

Benefits of QA Testing:

Ensures defects are avoided by focusing on the process.
Enhances the overall quality of the final product.
Reduces costs by identifying issues early in the development cycle.
Establishes consistent and reliable processes for software development.
Delivers a higher-quality product, improving customer experience.
Helps identify potential risks and address them before release.
Improves communication and alignment among development teams.
Ensures adherence to standards, regulations, and best practices.

Some types of QA Testing:

Functional Testing: Verifies software functionality.
Performance Testing: Tests responsiveness and stability.
Security Testing: Identifies vulnerabilities.
Usability Testing: Assesses user-friendliness.
Regression Testing: Ensures changes don’t affect existing features.



STLC is a process which verifies whether the software quality meets to the expectations or not.
It provides a simple testing approach to testing through a step-by-step process.
There are 6 phases:
1. Requirement Analysis:
-- Quality assurance teams understands the requirements for what it is to be tested, if there are any ambiguities then they meet with stakeholders
to confirm.
-- Activities include:
    Reviewing the SRD and other related documents
    Interviewing stakeholders
    Identifying any ambiguities or inconsistencies in the requirements
    Identifying any missing requirements
    Identifying on potential risks or issues that may impact the testing process.
-- Create a requirement traceability matrix to map requirements to test cases.
Testing team should have a solid idea by now on what to test, any issues that may come up, and are focused on the most important areas of software.

2. Test Planning
-- Most efficient phase of the software testing life cycle where all testing plans are defined. Testing manager calculates the estimated effort and cost
for the testing work.
-- Activities include:
    Identifying test objectives and scope
    Developing a testing strategy: selecting the testing methods and techniques that will be used
    Identifying the testing environment and resources needed
    identifying the test cases that will be executed and the test data that will be used
    Estimating the time and cost required for testing
    Identifying the test deliverables and milestones
    identifying roles and responsibilities to the testing team
    Reviewing and approving the test plan
-- This will help to ensure that the testing process is well-organized and that the testing team is able to deliver high-quality results.

3. Test Case Development
-- Test team notes down the test cases and prepare the required data for testing
-- Activities include:
    Identifying the test cases that will be developed
    Writing test cases that are clear, concise, and easy to understand
    Creating test data and test scenarios that will be used in the test cases
    Identifying the expected result for every test case
    Reviewing and validating the test cases
    Updating the requirement traceability matrix to map requirements to test cases
-- Should have a comprehensive set of test cases that provide adequate coverage of the software.

4. Test Environment Setup
-- Test environment decides the conditions in which the software is tested. It is an independent activity and either the developer or the customer
creates the testing environment

5. Test Execution
-- Test team begin executing test cases based on prepared test cases in the earlier step
-- Activities include:
    Test cases and scripts created in the test design stage are run against the software application to identify any issues or defects
    Any issues or defects found are logged in a defect tracking system, along with details of severity, priority, and description of the issue
    test data is prepared and loaded for test execution
    The necessary software, hardware, environment and network configurations are set up for execution
    The test cases and scripts are run, and the results are collected and analyzed.
    The results of the test execution are analyzed to determine the software's performance and identify any defects or issues.
    Any defects that are identified during test execution are retested to ensure that they have been fixed correctly.
    Test results are documented and reported to the relevant stakeholders.
-- It is important to note that test execution is an iterative process and may need to be repeated multiple times until all identified defects are fixed and the software is deemed fit for release.

6. Test Closure
-- Last phase where all testing-related activities are completed and documented. Main object is to ensure that all testing-related activities are completed and documented and the sotware is ready for release
-- At the end of the test closure stage, the testing team should have a clear understanding of the software's quality and reliability, and any defects or issues that were identified during testing should have been resolved. The test closure stage also includes documenting the testing process and any lessons learned so that they can be used to improve future testing processes

Test closure is the final stage of the Software Testing Life Cycle (STLC) where all testing-related activities are completed and documented. The main activities that take place during the test closure stage include:

    Test summary report: A report is created that summarizes the overall testing process, including the number of test cases executed, the number of defects found, and the overall pass/fail rate.
    Defect tracking: All defects that were identified during testing are tracked and managed until they are resolved.
    Test environment clean-up: The test environment is cleaned up, and all test data and test artifacts are archived.
    Test closure report: A report is created that documents all the testing-related activities that took place, including the testing objectives, scope, schedule, and resources used.
    Knowledge transfer: Knowledge about the software and testing process is shared with the rest of the team and any stakeholders who may need to maintain or support the software in the future.
    Feedback and improvements: Feedback from the testing process is collected and used to improve future testing processes
It is important to note that test closure is not just about documenting the testing process, but also about ensuring that all relevant information is shared and any lessons learned are captured for future reference. The goal of test closure is to ensure that the software is ready for release and that the testing process has been conducted in an organized and efficient manner.


Accuracy: The capability of the software product to produce the right or agreed results.


Types of testing:
  Manual: Done in person by clicking through the application or interacting with the software and API's with the appropriate tooling. This is very expensive
  As it requires setting up an environment, and executing the tests themselves, which can be prone to human error via typos or missing steps in the test case.

  Automated: Performed by a machine that executes test scripts written in advance. These tests can vary in complexity, from checking a single method in a class to making sure that performing sequence of complex actions in the UI leads to the same results. It's much more robust and reliable than manual testing.


A requirement traceability matrix or RTM: a document that maps requirements and other artifacts ie test cases.


Defect Life Cycle: The life cycle of a bug or defect that it goes through covering a specific set of states in it's entire life. Mainly bug life cycle refers to its entire state starting from a new defect detected to the closing off of that defect by the tester.
![Bug Defect Life Cycle](https://media.geeksforgeeks.org/wp-content/uploads/20230131183145/Bug-Defect-Life-Cycle-1.png)

Bug lifecycle
1. New: When any new defect is identified by the tester, it falls in the 'New’ state. It is the first state of the Bug Life Cycle. The tester provides a proper Defect document to the Development team so that the development team can refer to Defect Document and can fix the bug accordingly.

2. Assigned: Defects that are in the status of 'New' will be approved and that newly identified defect is assigned to the development team for working on the defect and to resolve that. When the defect is assigned to the developer team the status of the bug changes to the 'Assigned' state.

3. Open: In this 'Open' state the defect is being addressed by the developer team and the developer team works on the defect for fixing the bug. Based on some specific reason if the developer team feels that the defect is not appropriate then it is transferred to either the 'Rejected' or 'Deferred' state.

4. Fixed: After necessary changes of codes or after fixing identified bug developer team marks the state as 'Fixed'.

5. Pending Retest: During the fixing of the defect is completed, the developer team passes the new code to the testing team for retesting. And the code/application is pending for retesting on the Tester side so the status is assigned as 'Pending Retest'.

6. Retest: At this stage, the tester starts work of retesting the defect to check whether the defect is fixed by the developer or not, and the status is marked as 'Retesting'.

7. Reopen: After 'Retesting' if the tester team found that the bug continues like previously even after the developer team has fixed the bug, then the status of the bug is again changed to 'Reopened'. Once again bug goes to the 'Open' state and goes through the life cycle again. This means it goes for Re-fixing by the developer team.

8. Verified: The tester re-tests the bug after it got fixed by the developer team and if the tester does not find any kind of defect/bug then the bug is fixed and the status assigned is 'Verified'.

9. Closed: It is the final state of the Defect Cycle, after fixing the defect by the developer team when testing found that the bug has been resolved and it does not persist then they mark the defect as a 'Closed' state.

Few More States that also come under this Defect Life Cycle:

1. Rejected: If the developer team rejects a defect if they feel that defect is not considered a genuine defect, and then they mark the status as ‘Rejected’. The cause of rejection may be any of these three i.e Duplicate Defect, NOT a Defect, Non-Reproducible.

2. Deferred: All defects have a bad impact on developed software and also they have a level based on their impact on software. If the developer team feels that the defect that is identified is not a prime priority and it can get fixed in further updates or releases then the developer team can mark the status as 'Deferred'. This means from the current defect life cycle it will be terminated.

3. Duplicate: Sometimes it may happen that the defect is repeated twice or the defect is the same as any other defect then it is marked as a 'Duplicate' state and then the defect is 'Rejected'.

4. Not a Defect: If the defect has no impact or effect on other functions of the software then it is marked as 'NOT A DEFECT' state and 'Rejected'.

5. Non-Reproducible: If the defect is not reproduced due to platform mismatch, data mismatch, build mismatch, or any other reason then the developer marks the defect as in a 'Non-Reproducible' state.

6. Can't be Fixed: If the developer team fails to fix the defect due to Technology support, the Cost of fixing a bug is more, lack of required skill, or due to any other reasons then the developer team marks the defect as in 'Can't be fixed' state.

7. Need more information: This state is very close to the 'Non-reproducible' state. But it is different from that. When the developer team fails to reproduce the defect due to the steps/document provided by the tester being insufficient or the Defect Document is not so clear to reproduce the defect then the developer team can change the status to “Need more information’. When the Tester team provides a good defect document the developer team proceeds to fix the bug.

Defect Lifecycle
Consider the flow chart below to understand the defect lifecycle.

The tester finds a defect.
The defect status is changed to New.
The development manager will then analyze the defect.
The manager determines if the defect is valid or not.
If the defect is not valid then the development manager assigns the status Rejected to defect.
If the defect is valid then it is checked whether the defect is in scope or not. If no then the defect status is changed to Deferred.
If the defect is in scope then the manager checks whether a similar defect was raised earlier. If yes then the defect is assigned a status duplicate.
If the defect is not already raised then the manager starts fixing the code and the defect is assigned the status In-Progress.
Once the defect is fixed the status is changed to fixed.
The tester retests the code if the test is passed then the defect status is changed to closed.
If the test fails again then the defect is assigned status reopened and assigned to the developer.
Defect lifecycle
Benefits of Defect Lifecycle
Deliver High-Quality Product: The defect lifecycle helps in identifying and fixing bugs throughout the development process, that helps in delivering high-quality product.
Improve Return on Investment (ROI): Finding and fixing defects early in the lifecycle is cheaper and less time-consuming than addressing them later, which saves money and resources.
Better Communication: The defect lifecycle provides a structured process for logging, tracking, and resolving defects, which provides better communication and collaboration among team members.
Early Issue Detection: The lifecycle process allows for early detection of defects, enabling the team to understand patterns and trends, and take preventive measures for future development.
Customer Satisfaction: By systematically managing and resolving defects, the final product is more reliable and user-friendly, leading to higher customer satisfaction and loyalty.
Limitations in Defect Lifecycle
Time-Consuming: Tracking and managing defects can be lengthy and complex.
Resource Intensive: Requires dedicated resources for effective defect management.
Possible Overhead: Bug Lifecycle can introduce additional administrative tasks, slowing down development.
Delayed Releases: Extensive defect management might delay product release timelines.



Different types of tests:
1.Unit tests:
    Unit tests are very low level and close to the source of an application. They consist in testing individual methods and functions of the classes, components, or modules used by your software. Unit tests are generally quite cheap to automate and can run very quickly by a continuous integration server.

2. Integration tests:
    Integration tests verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

3. Functional tests:
    Functional tests focus on the business requirements of an application. They only verify the output of an action and do not check the intermediate states of the system when performing that action.

    There is sometimes a confusion between integration tests and functional tests as they both require multiple components to interact with each other. The difference is that an integration test may simply verify that you can query the database while a functional test would expect to get a specific value from the database as defined by the product requirements.

4. End-to-end tests
    End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc...

    End-to-end tests are very useful, but they're expensive to perform and can be hard to maintain when they're automated. It is recommended to have a few key end-to-end tests and rely more on lower level types of testing (unit and integration tests) to be able to quickly identify breaking changes.

5. Acceptance testing:
    Acceptance tests are formal tests that verify if a system satisfies business requirements. They require the entire application to be running while testing and focus on replicating user behaviors. But they can also go further and measure the performance of the system and reject changes if certain goals are not met.


6. Performance Testing:
    Performance tests evaluate how a system performs under a particular workload. These tests help to measure the reliability, speed, scalability, and responsiveness of an application. For instance, a performance test can observe response times when executing a high number of requests, or determine how a system behaves with a significant amount of data. It can determine if an application meets performance requirements, locate bottlenecks, measure stability during peak traffic, and more. 

7. Smoke Testing
    Smoke tests are basic tests that check the basic functionality of an application. They are meant to be quick to execute, and their goal is to give you the assurance that the major features of your system are working as expected.

    Smoke tests can be useful right after a new build is made to decide whether or not you can run more expensive tests, or right after a deployment to make sure that they application is running properly in the newly deployed environment.

How to automate tests?
    To automate your tests, you will first need to write them programmatically using a testing framework that suits your application. PHPUnit, Mocha, RSpec are examples of testing frameworks that you can use for PHP, Javascript, and Ruby respectively. There are many options out there for each language so you might have to do some research and ask developer communities to find out what would be the best framework for you.

    When your tests can be executed via script from your terminal, you can have them be automatically executed by a continuous integration server like Bamboo or use a cloud service like Bitbucket Pipelines. These tools will monitor your repositories and execute your test suite whenever new changes are pushed to the main repository.

Exploratory testing

    The more features and improvements go into your code, the more you'll need to test to make sure that all your system works properly. And then for each bug you fix, it would be wise to check that they don't get back in newer releases. Automation is key to make this possible and writing tests sooner or later will become part of your development workflow.

    So the question is whether it is still worth doing manual testing? The short answer is yes and it might be best to perform exploratory testing to uncover non-obvious errors.

    An exploratory testing session should not exceed two hours and should have a clear scope to help testers focus on a specific area of the software. Once all testers have been briefed, various actions should be used to check how the system behaves. 
    A note about testing



Functional Testing

    Functional testing verifies that the software’s features operate according to the specified requirements. It uses the black box method, focusing on the results of the software rather than the underlying code. This type of testing is typically conducted at both the system level and the user acceptance level.

    For example, testing whether a login form accepts valid credentials and denies incorrect ones.

2. Non-functional Testing

    Non-functional testing evaluates aspects such as performance, security, and usability that aren’t directly related to specific functions.

    For instance, checking the website’s loading time under heavy traffic.


Manual Testing
    In manual testing, testers execute test cases by hand without relying on automation tools. It allows for detailed examination but can be time-consuming.

    For example, manually checking the UI design for alignment and color consistency.

4. Automated Testing
    Automated testing uses scripts, tools, and frameworks like Selenium or Appium to run repetitive tests automatically. This testing method is more efficient for repetitive tasks and speeds up the testing process.

    For instance, automating login and checkout processes for an e-commerce site.

5. Regression Testing

    Regression testing involves re-checking existing functionalities after code changes to ensure that no new errors have been introduced. Although applicable at any level, regression testing is particularly crucial for integration and system quality assurance.

    For example, verifying that a new feature doesn’t affect the login process.

6. Exploratory Testing

    Exploratory testing is performed without predefined test cases, allowing testers to explore the software to find unexpected bugs. It helps identify problems that are not easily found through scripted testing.

    For instance, interacting with a mobile app to discover hidden issues.


7. Usability Testing

    Usability testing verifies how user-friendly and intuitive the software is for end users. This ensures that the software provides a positive and effective user experience.

    For example, assessing how intuitive a shopping cart feature is for first-time users.




8. Security Testing

Security testing identifies vulnerabilities and ensure data protection within the software. Identifies vulnerabilities and threats that could lead to data leaks, malicious attacks, system crashes, and other issues. Common security checks include:

Penetration Testing: Simulates real-world cyber attacks to identify and fix security vulnerabilities.
Application Security Testing (AST): Detects vulnerabilities in application code and configurations to enhance security.
API Security Testing: Ensures APIs are secure against unauthorized access and data breaches.
Configuration Scanning: Reviews system configurations to ensure they follow security best practices.
Security Audits: Evaluates system security and compliance with industry regulations and standards.
For instance, testing a banking application to ensure sensitive information is encrypted.

9. Performance Testing

Performance testing evaluates how an application works in terms of speed, responsiveness, and stability under varying loads. Different types of performance testing assess the system’s behavior based on the workload:

Load Testing: Assesses performance with a gradually increasing workload.
Stress Testing: Examines system behavior at or beyond the maximum anticipated workload.
Endurance Testing: Evaluates performance under a continuous and significant workload over an extended period.
Spike Testing: Tests the system’s response to sudden and substantial increases in workload.
For example, testing a website’s response time when thousands of users access it simultaneously.

Read More: Essential metrics for the QA process
10. Acceptance Testing

Acceptance testing determines if the software satisfies the user’s requirements and is ready for final approval.

For example, having the client test a project management tool before final approval.

11. Compatibility Testing

Compatibility testing verifies that the software works across different devices, browsers, and operating systems. This ensures a uniform user experience.

For instance, testing a website on both iOS and Android devices.

12. Smoke Testing

Smoke testing is a preliminary check to verify that the basic functionalities of a new build are working correctly. This initial test helps identify major issues early in the development cycle.

For example, verifying that the homepage loads after a new deployment.

13. Alpha Testing

Alpha testing is conducted by internal teams to identify bugs before releasing the software to external users. This phase helps catch problems early in the development process.

For example, a company’s developers testing a new app version internally.

14. Beta Testing

Conducted by real users in a production environment to get feedback. This feedback helps refine the product before the final release.

For example, releasing a beta version of a mobile game to a select group of players.



How to Perform Quality Assurance Testing?

QA testing follows a structured approach to ensure software quality and reliability.

Steps To Perform Quality Assurance Testing
Define the testing plan, scope, and risks, and prepare test cases.
Set up the environment and simulate user conditions with tools like BrowserStack.
Run tests, record results, and note discrepancies.
Log defects and evaluate performance, usability, and functionality.
Fix issues, retest, and perform regression testing.
Verify objectives, resolve defects, and summarize results.
Here’s a detailed explanation of the step-by-step guide:

Step 1: Plan the Testing Process

Analyze the software’s functional and non-functional requirements and collaborate with stakeholders to clarify expectations. Develop a test plan that outlines the testing strategy, scope, resources, and timelines, identifying tools and potential risks. Prepare test cases that cover real-world scenarios, including valid, invalid, and edge cases.

Step 2: Set Up the Testing Environment

Prepare the necessary hardware, software, databases, and network configurations for testing. Simulate real user conditions by using cloud-based tools like BrowserStack to replicate different device and browser environments.

Step 3: Execute Tests

Execute the prepared test cases manually or through automation. Test across various scenarios and conditions, recording results and noting any discrepancies between expected and actual behavior.

Step 4: Check and Report Findings

Evaluate the software’s functionality, usability, and performance. Identify any gaps or areas for improvement, then report defects in tracking tools like Jira with necessary details like steps to reproduce and priority.

Step 5: Act on Findings

Collaborate with the development team to resolve any issues and vulnerabilities found during testing. After fixes are applied, retest the software to verify the fixes and conduct regression tests to ensure no new issues arise.

Step 6: Close the Testing Cycle

Review the results to confirm that all objectives were met and critical defects were addressed. Generate a closure report that summarizes the testing activities, outcomes, and any remaining risks or lessons learned.

QA Testing Example: Performing User Registration Form Testing

This scenario tests the functionality of a simple user registration form on a website.

Step-by-Step QA Testing Process:

Step 1. Define Requirements

The registration form should allow users to input their name, email, and password, as well as confirm their password.
Form validation should check for valid email format, password strength, and matching passwords.
Upon successful registration, the user should receive a confirmation message.
Step 2. Create a Test Plan

Create manual test cases for:
Input validation (required fields, valid formats).
UI testing (layout, field labels, error messages).
Form submission and confirmation behavior.
Step 3. Test Cases and Scenarios

Test Case 1: Submit the form with valid inputs (for example, valid email and matching passwords) and verify the success message.
Test Case 2: Submit an invalid email format (for example, “test@invalid“) and ensure an error message is shown.
Test Case 3: Leave required fields blank and check for appropriate error messages.
Test Case 4: Enter mismatched passwords and verify that the form prevents submission and displays an error.
Step 4. Perform Manual Testing

Test the form on different browsers (Chrome, Firefox, Safari) and devices (mobile and desktop) to ensure layout consistency.
Perform negative tests like submitting the form with the following:
Empty fields.
Invalid email format.
Weak password (e.g., “12345”).
Step 5. Automate Repetitive Tasks

Use tools like Selenium or Cypress to automate common form tests:
Automate the process of entering valid and invalid data into the form fields.
Automate validation of form submission and check for error messages.
Step 6. Cross-Browser and Device Testing

Use cross-browser testing tools like BrowserStack to test the form’s behavior across various browsers and devices to ensure responsiveness.
BrowserStack Automate Banner

Step 7. Regression Testing

If changes are made to the form (e.g., adding a phone number field), perform regression testing to ensure the original functionality (email, password fields) still works as expected.
Step 8. Bug Reporting and Fixes

If issues are found during testing (e.g., the form accepts weak passwords or the email validation doesn’t work), log these bugs and retest after fixes are applied.
Step 9. Retesting and Final Verification

Retest the form with all possible input scenarios to confirm that all bugs are fixed and the form behaves as expected before releasing the feature.




Best Practices for Quality Assurance Testing

Achieving high-quality software while maintaining speed and efficiency in the development cycle requires a strategic approach to QA testing. Below are some best practices that can elevate your QA efforts:

Combine Manual and Automated Testing: Use manual testing for complex scenarios and automate repetitive tasks to maximize coverage and efficiency. Use tools like Selenium, Cypress, or BrowserStack to automate regression and performance tests, allowing manual testers to focus on areas where human insight is essential.
Leverage Crowdtesting: Scale testing quickly by engaging a large number of QA testers across different devices, browsers, and operating systems. For the best results, combine crowd testing with in-house and automated testing, increasing coverage and accelerating feedback.
Implement Continuous Integration and Delivery (CI/CD): Integrate continuous testing with CI/CD to catch defects early and ensure seamless product updates. With continuous integration (CI), developers can integrate small code changes into a shared repository, where automated test scripts run continuously.
Combine CI with continuous delivery (CD) to deploy updates regularly and ensure seamless user experience improvements.
Incorporate Risk Management: QA testing should include a risk management strategy to address potential challenges early. By assessing and prioritizing risks from the start, teams can focus on high-risk areas and allocate resources efficiently.
Achieve Quality with Speed: To balance speed with high-quality output, integrate testing into each development phase. Unit testing, CI/CD, and parallel testing are effective strategies to speed up testing without sacrificing quality.
Ensure Effective Methodologies: Use a mix of testing methodologies (functional, performance, security) to reduce costs and improve quality. By ensuring the software conforms to the defined requirements and guidelines, QA teams can minimize development costs, reduce bugs, and enhance the user experience.
Monitor Continuously: QA testing isn’t a one-time task; it requires continuous monitoring throughout the development process. Ensuring adherence to relevant standards and procedures across all stages of testing helps maintain consistency and quality.
Use Predictive Analytics: Leverage predictive analytics to forecast where bugs are most likely to occur based on past testing data. By analyzing defect, application, and customer usage data, QA teams can prioritize testing efforts and improve overall efficiency.
Conduct Rigorous Regression Testing: Every code update risks introducing new bugs in previously working features. Implement regression testing to ensure that new additions don’t compromise the integrity of the existing software. Regular regression testing helps maintain the stability of the product, ensuring that new features and updates don’t inadvertently cause issues.