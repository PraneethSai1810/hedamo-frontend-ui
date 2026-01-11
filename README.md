# HEDAMO – Frontend UI Assignment

This project is a frontend implementation of a product disclosure interface for **HEDAMO**, built as part of the frontend developer assignment.

HEDAMO is a **structured disclosure system**. It captures and presents **producer-declared information** about products. The platform does **not** verify, certify, approve, or validate the disclosed information.

---

## Project Overview

The goal of this UI is to demonstrate:
- Understanding of disclosure-based systems
- Careful use of non-authoritative language
- Clean, calm, and institutional UI design
- Strong frontend craft and interaction polish

The interface focuses on clarity, neutrality, and transparency rather than validation or endorsement.

---

## Features

### Product List View
- Product cards displaying:
  - Product name
  - Producer (declared by)
  - Category
  - Disclosure status (Draft / Submitted / Published)
  - Last updated date
- Search and filter controls
- Loading (skeleton) and empty states
- Subtle hover and transition effects

### Product Detail View
- Disclosure summary (declared by, date, evidence count)
- Clear disclaimer stating producer responsibility
- Version history (minimum two versions)
- Neutral, disclosure-focused language throughout

---

## Tech Stack

- React (Create React App)
- Plain CSS with CSS variables
- React Router
- Mock data (no backend)

---

## Disclosure Philosophy

All information shown in the interface is **producer-declared**.  
HEDAMO structures and displays this information but does **not** verify, certify, or approve the content.

Language and UI design intentionally avoid authority or validation signals.

---

## Live Demo

https://hedamo-three.vercel.app/

---

## Running Locally

```bash
npm install
npm start
