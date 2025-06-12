# DOF Software Testing Lifecycle (STLC) – Template Reference

This document lists the **standard templates** to be created, updated, or finalized at each phase of the DOF Software Testing Lifecycle. Store completed artifacts in the project’s QA folder on SharePoint (📂 **`/Templates`**) and update the version number whenever a revision is issued.

---

## 1. Requirement Analysis
| Deliverable | Template | Notes |
|-------------|----------|-------|
| **STLC Checklist** | *STLC Checklist* (internal Word form) | Start a new checklist as soon as the BRD/feature list is received. Use it to log readiness items and sign‑offs throughout the release. |

**


> **Tip:** Attach the BRD link at the top of the checklist so reviewers can open requirements directly from the artifact.

---

## 2. Test Planning
| Deliverable | Template | Notes |
|-------------|----------|-------|
| **Functional Test Plan** | [DOF Brief Functional Test Plan](Templates/DOF%20Brief%20Functional%20Test%20Plan.docx) | Covers scope, environment matrix, defect‑tracking location, risks, and the high‑level schedule. |
| **Performance Test Plan** (if perf in scope) | [DOF Performance Test Plan (Brief)](Templates/DOF%20Performance%20Test%20Plan%20Template%20%28Brief%29.docx) | Add only when load, stress, or capacity testing is required. Defines load model & monitoring tool stack. |

> **Reminder:** Create the project folder tree (📁 *01_Test Plan*, *02_Test Cases*, etc.) in the repository at this stage.

---

## 3. Test Case Development
| Deliverable | Template | Notes |
|-------------|----------|-------|
| **Test Case Suite** | [DOF Standardized Test Case Template](Templates/DOF%20Standardized%20Test%20Case%20Template.xlsx) | One workbook per functional area. Include requirement IDs in the *Traceability* column. |
| **Peer‑review Log** | Tab **Review_Notes** in the same workbook | Reviewers sign and date after feedback is addressed. |

---

## 4. Test Execution
| Deliverable | Template | Notes |
|-------------|----------|-------|
| **Execution Log** | *Execution* tab of the test‑case Excel | Update status, tester initials, date, and defect IDs every day. |
| **Interim QA Test Report** (optional) | [DOF QA Test Report Template](Templates/DOF%20QA%20test%20report%20template.docx) | Issue mid‑cycle summaries for long test windows or at major build drops. |
| **Defect Log** | Azure DevOps / SharePoint list | Reference defect IDs in the Execution Log. |

---

## 5. Test Closure
| Deliverable | Template | Notes |
|-------------|----------|-------|
| **Final QA Test Report & Sign‑off** | [DOF QA Test Report Template](Templates/DOF%20QA%20test%20report%20template.docx) | Complete all report sections, obtain QA lead e‑signature, and e‑mail to project leads. |
| **UAT Gap Analysis** | Section inside the QA Test Report | Summarize outstanding defects, deferred tests, and residual risks. |
| **STLC Checklist – Closed** | *STLC Checklist* | Mark every item as *Done* and archive the checklist with a final timestamp. |

---

## Quick‑Reference Matrix
| STLC Phase | Core Templates | Primary Owner |
|------------|----------------|---------------|
| Requirement Analysis | STLC Checklist | QA Lead |
| Test Planning | [Brief Functional Test Plan](Templates/DOF%20Brief%20Functional%20Test%20Plan.docx)  •  [Performance Test Plan](Templates/DOF%20Performance%20Test%20Plan%20Template%20%28Brief%29.docx) | QA Lead / Perf Eng. |
| Test Case Development | [Standardized Test Case Template](Templates/DOF%20Standardized%20Test%20Case%20Template.xlsx) | QA Analysts |
| Test Execution | Execution Log  •  [QA Test Report](Templates/DOF%20QA%20test%20report%20template.docx) | QA Team |
| Test Closure | [Final QA Test Report](Templates/DOF%20QA%20test%20report%20template.docx)  •  STLC Checklist (Closed) | QA Lead |

---

### Version History
| Date | Author | Change |
|------|--------|--------|
| 2025‑06‑09 | S. Alhudais (QA Intern) | Initial draft |
| 2025‑06‑09 | S. Alhudais (QA Intern) | Added links to template files in **/Templates** folder |

---