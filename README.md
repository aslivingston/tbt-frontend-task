# Team Directory Widget

An interactive team directory built with React, TypeScript and Vite.

This project demonstrates a dynamic UI component that allows users to browse team members via an autoplaying slider or select a specific person from a dropdown.

---

## Features

- Autoplaying team slider using Swiper
- Dropdown selector to jump to a specific team member
- Clickable cards to select and focus a team member
- Autoplay pauses on selection and resumes when cleared
- Clear selection button + Escape key support
- Active card expands to reveal contact details (email, phone, address)
- Clickable email (`mailto:`) and phone (`tel:`) links
- Custom navigation controls (desktop)
- Responsive layout (mobile → desktop)
- Accessible interactions (keyboard + ARIA support)
- Subtle UI animations and transitions

---

## Interaction Overview

- Slider autoplays through team members by default
- Selecting a team member (via dropdown or card):
  - Stops autoplay
  - Moves slider to the selected person
  - Expands the card to reveal additional details
- Clicking "clear selection" or pressing `Escape`:
  - Resets selection
  - Resumes autoplay

---

## Tech Stack

- React
- TypeScript
- Vite
- Swiper (slider)
- LESS (styling)

---

## Installation

Clone the repo:

```bash
git clone https://github.com/aslivingston/tbt-frontend-task.git
cd tbt-frontend-task
npm install
npm run dev
```

Open: http://localhost:5173