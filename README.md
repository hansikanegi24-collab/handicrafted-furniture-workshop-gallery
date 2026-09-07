# Handcrafted Furniture Workshop Gallery

A responsive and accessible furniture gallery website created for a
Handcrafted Furniture Workshop.

## Features

- Responsive furniture gallery
- Search furniture by name, material, or category
- Category filtering
- Clear filters option
- Empty state when no furniture matches the search
- Offline/poor-connectivity notification
- Keyboard-accessible navigation
- Skip-to-content accessibility link
- Visible keyboard focus states
- Reduced-motion support
- Safe rendering of content using `textContent`
- Gallery interaction telemetry through the browser console
- No external frameworks or CSS libraries

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Furniture Categories

- Seating
- Tables
- Storage

## Accessibility

The project uses semantic HTML, accessible labels, keyboard navigation,
ARIA live regions, focus indicators, and reduced-motion support.

## Security

Furniture information is rendered using DOM text properties rather than
injecting HTML. This helps prevent HTML/script injection if the data source
is expanded in the future.

No API keys, passwords, or other sensitive credentials are included in
the project.

## How to Run

Open `structure.html` in a modern web browser.

For best results, serve the project using a local web server.

## Project Structure

```text
Handcrafted-Furniture-Workshop-Gallery/
│
├── structure.html
├── appearance.css
├── functionality.js
└── README.md
