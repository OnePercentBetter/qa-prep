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
