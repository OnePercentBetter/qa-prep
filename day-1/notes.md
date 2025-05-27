# Big Problem of the Day

**Scenario:**  
Your team is responsible for ensuring that a public login page for a government web portal functions correctly before launch. But what does "works correctly" mean in the context of Quality Assurance (QA)?

---

# Quality Assurance (QA) Testing Overview

QA testing is a systematic, process-focused approach to ensure a product or service meets established standards and requirements. Unlike traditional testing, which finds flaws after development, QA aims to prevent issues and guarantee consistent performance.

> **Public-Sector Relevance:**  
> In a revenue-collection agency like NYC DOF, defects can have serious consequences—such as misbilling taxpayers or eroding public trust. For this reason, QA must produce a clear audit trail. This includes maintaining a Requirement Traceability Matrix (RTM), collecting test evidence, and logging all defects. These artifacts allow external auditors to verify that every statutory rule is tested and traceable, ensuring accountability and compliance.

See day-1/traceability_matrix.md for the actual Req ↔ TC mapping created today.

## **Benefits of QA Testing**
- **Prevents defects** by focusing on process improvement.
- **Enhances product quality** and customer satisfaction.
- **Reduces costs** by identifying issues early.
- **Establishes reliable development processes.**
- **Identifies and mitigates risks** before release.
- **Improves team communication and alignment.**
- **Ensures compliance** with standards and best practices.

---

Test-design techniques used in functional testing include **Boundary Value Analysis (BVA)**—testing just inside/outside numeric limits—and **Equivalence Partitioning (EP)**—grouping inputs into valid/invalid classes so one case represents each group.

## **Types of QA Testing**
- **Functional Testing:** Verifies software features work as intended.
- **Performance Testing:** Assesses speed, responsiveness, and stability.
- **Security Testing:** Identifies vulnerabilities and threats.
- **Usability Testing:** Evaluates user-friendliness.
- **Regression Testing:** Ensures new changes don’t break existing features.

---

# Software Testing Life Cycle (STLC)

The STLC is a structured process to verify software quality. It consists of six key phases:

### 1. **Requirement Analysis**
- Understand and clarify what needs to be tested.
- Activities:
  - Review requirements and related documents.
  - Interview stakeholders.
  - Identify ambiguities, inconsistencies, and missing requirements.
  - Assess potential risks.
  - Create a Requirement Traceability Matrix (RTM) to map requirements to test cases.

### 2. **Test Planning**
- Define the testing strategy, objectives, scope, and resources.
- Activities:
  - Develop a test plan and strategy.
  - Identify test environment, cases, and data.
  - Estimate time, cost, and resources.
  - Assign roles and responsibilities.
  - Review and approve the test plan.

### 3. **Test Case Development**
- Design and document test cases and scenarios.
- Activities:
  - Write clear, concise test cases.
  - Create test data.
  - Define expected results.
  - Review and validate test cases.
  - Update the RTM.

### 4. **Test Environment Setup**
- Prepare the hardware, software, and network conditions for testing.
- Can be set up by developers or customers.

### 5. **Test Execution**
- Run test cases and log results.
- Activities:
  - Execute test scripts.
  - Log defects with severity and priority.
  - Prepare and load test data.
  - Analyze and document results.
  - Retest fixed defects as needed.
  - Report results to stakeholders.

### 6. **Test Closure**
- Complete and document all testing activities.
- Activities:
  - Create test summary and closure reports.
  - Track and resolve all defects.
  - Clean up the test environment.
  - Archive test data and artifacts.
  - Share knowledge and lessons learned.
  - Collect feedback for process improvement.

**Note:** Test closure ensures the software is ready for release and all relevant information is documented for future reference.

---

## **Testing Approaches**

### **Manual Testing**
- Testers execute test cases by hand.
- Useful for exploratory, usability, and ad-hoc testing.
- Prone to human error and time-consuming.

### **Automated Testing**
- Machines run pre-written test scripts.
- Efficient for repetitive and regression tests.
- More reliable and scalable than manual testing.

---

## **Requirement Traceability Matrix (RTM)**
A Requirement Traceability Matrix (RTM) is a document that maps requirements to test cases and other artifacts, ensuring complete coverage. 

> **Why is this critical in the public sector?**  
> For agencies like NYC DOF, the RTM is not just a best practice—it is essential for compliance and auditability. Every statutory rule or business requirement must be traceable to one or more test cases, with evidence that each was executed. This audit trail allows external auditors to confirm that all legal and regulatory requirements have been tested, and that any defects or exceptions are properly logged and addressed.

---

# Defect (Bug) Life Cycle

A defect goes through several states from discovery to closure:

1. **New:** Tester identifies and documents a defect.
2. **Assigned:** Defect is assigned to the development team.
3. **Open:** Developer investigates and works on the defect.
4. **Fixed:** Developer resolves the defect.
5. **Pending Retest:** Awaiting tester verification.
6. **Retest:** Tester verifies the fix.
7. **Reopen:** If not fixed, defect is reopened.
8. **Verified:** Tester confirms the defect is resolved.
9. **Closed:** Defect is officially closed.

**Additional States:**
- **Rejected:** Not a valid defect (duplicate, not reproducible, not a defect).
- **Deferred:** Fix postponed to a future release.
- **Duplicate:** Already reported.
- **Non-Reproducible:** Cannot be reproduced.
- **Can't be Fixed:** Not fixable due to technical or resource constraints.
- **Need More Information:** Insufficient details to reproduce.

![Bug Defect Life Cycle](https://media.geeksforgeeks.org/wp-content/uploads/20230131183145/Bug-Defect-Life-Cycle-1.png)

**Benefits:**
- Delivers high-quality products.
- Improves ROI by catching defects early.
- Enhances team communication.
- Enables early issue detection.
- Increases customer satisfaction.

**Limitations:**
- Can be time-consuming and resource-intensive.
- May introduce administrative overhead.
- Could delay releases if not managed efficiently.

---

# Types of Software Tests

| Test Type         | Description                                                                                  |
|-------------------|---------------------------------------------------------------------------------------------|
| **Unit Test**     | Tests individual functions or methods. Fast and easy to automate.                           |
| **Integration**   | Verifies modules/services work together (e.g., database, APIs).                             |
| **Functional**    | Checks business requirements and output correctness.                                         |
| **End-to-End**    | Simulates real user flows across the entire application.                                    |
| **Acceptance**    | Formal tests to verify business requirements are met.                                        |
| **Performance**   | Measures speed, scalability, and stability under load.                                       |
| **Smoke**         | Quick checks for basic functionality after builds or deployments.                            |

---

## **Automating Tests**
- Use frameworks (e.g., PHPUnit, Mocha, RSpec) to write tests.
- Integrate with CI/CD tools (e.g., Bamboo, Bitbucket Pipelines) for automatic execution on code changes.

---

## **Exploratory Testing**
- Manual, unscripted testing to uncover non-obvious errors.
- Sessions should be focused and time-boxed (e.g., 2 hours).

---

# Common Testing Types Explained

- **Functional Testing:** Verifies features work as specified (e.g., login form validation).
- **Non-functional Testing:** Assesses performance, security, and usability (e.g., load times).
- **Manual Testing:** Human-driven, detailed examination (e.g., UI alignment).
- **Automated Testing:** Scripted, tool-driven, efficient for repetitive tasks (e.g., login automation).
- **Regression Testing:** Ensures new changes don’t break existing features.
- **Exploratory Testing:** Unscripted, creative testing to find unexpected bugs.
- **Usability Testing:** Checks user-friendliness and intuitiveness.
- **Security Testing:** Identifies vulnerabilities (e.g., penetration testing, API security).
- **Performance Testing:** Evaluates speed and stability under load (e.g., load, stress, endurance, spike testing).
- **Acceptance Testing:** Confirms software meets user requirements.
- **Compatibility Testing:** Ensures software works across devices, browsers, and OS.
- **Smoke Testing:** Quick checks for basic functionality after builds.
- **Alpha Testing:** Internal team testing before external release.
- **Beta Testing:** Real users test in production for feedback.

---

# How to Perform Quality Assurance Testing

**Step-by-Step QA Process:**

1. **Plan the Testing Process**
   - Analyze requirements and collaborate with stakeholders.
   - Develop a test plan (strategy, scope, resources, risks).
   - Prepare test cases for real-world scenarios.

2. **Set Up the Testing Environment**
   - Prepare hardware, software, databases, and networks.
   - Simulate user conditions (e.g., using BrowserStack).

3. **Execute Tests**
   - Run test cases manually or via automation.
   - Record results and discrepancies.

4. **Check and Report Findings**
   - Evaluate functionality, usability, and performance.
   - Log defects in tracking tools (e.g., Jira).

5. **Act on Findings**
   - Collaborate with developers to fix issues.
   - Retest and perform regression testing.

6. **Close the Testing Cycle**
   - Review results and confirm objectives are met.
   - Generate closure reports and document lessons learned.

---

## **QA Testing Example: User Registration Form**

**Scenario:** Test a website’s user registration form.

**Steps:**
1. **Define Requirements:**  
   - Fields: name, email, password, confirm password.
   - Validations: email format, password strength, matching passwords.
   - Success: confirmation message on registration.

2. **Create a Test Plan:**  
   - Input validation, UI layout, error messages, submission behavior.

3. **Test Cases:**  
   - Valid inputs → success message.
   - Invalid email → error message.
   - Blank fields → error messages.
   - Mismatched passwords → prevent submission.

4. **Manual Testing:**  
   - Test on multiple browsers/devices.
   - Negative tests: empty fields, invalid email, weak password.

5. **Automate Repetitive Tasks:**  
   - Use Selenium/Cypress for form input and validation.

6. **Cross-Browser/Device Testing:**  
   - Use tools like BrowserStack.

7. **Regression Testing:**  
   - After changes, ensure original functionality remains.

8. **Bug Reporting and Fixes:**  
   - Log and retest issues.

9. **Retesting and Final Verification:**  
   - Confirm all bugs are fixed before release.

---

# Best Practices for QA Testing

- **Combine Manual & Automated Testing:**  
  Use manual for complex scenarios, automate repetitive tasks.

- **Leverage Crowdtesting:**  
  Engage diverse testers for broader coverage.

- **Implement CI/CD:**  
  Integrate continuous testing for early defect detection.

- **Incorporate Risk Management:**  
  Prioritize high-risk areas and allocate resources efficiently.

- **Balance Quality & Speed:**  
  Integrate testing into every development phase.

- **Use Multiple Methodologies:**  
  Mix functional, performance, and security testing.

- **Monitor Continuously:**  
  QA is ongoing—ensure standards are met at all stages.

- **Leverage Predictive Analytics:**  
  Use data to forecast and prioritize testing efforts.

- **Conduct Rigorous Regression Testing:**  
  Regularly verify that updates don’t break existing features.

---
**Summary:**  
QA testing is a comprehensive, structured process that ensures software meets requirements, is reliable, and provides a positive user experience. By combining various testing types, following best practices, and leveraging automation, teams can deliver high-quality products efficiently and effectively.