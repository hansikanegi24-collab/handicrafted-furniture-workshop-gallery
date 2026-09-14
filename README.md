# Handcrafted Furniture Workshop Gallery

A responsive and accessible furniture gallery website designed to showcase handcrafted furniture in a clean and professional interface.

## Project Overview

The Handcrafted Furniture Workshop Gallery provides an interactive way for users to explore a collection of handcrafted furniture pieces.

Users can search for furniture, filter items by category, view furniture images and descriptions, and easily navigate the gallery across different screen sizes.

## Features

- Responsive furniture gallery
- Six handcrafted furniture pieces
- Furniture images displayed using PNG files
- Search furniture by name, material, category, or description
- Category-based filtering
- Clear filters option
- Dynamic furniture card generation
- Empty state when no matching furniture is found
- Offline/online connectivity status
- Keyboard-accessible navigation
- Skip-to-content accessibility link
- Visible keyboard focus states
- Reduced-motion support
- ARIA live regions for dynamic information
- Secure DOM-based content rendering
- Gallery interaction logging through the browser console

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Furniture Categories

### Seating
- Aster Lounge Chair
- Ridge Armchair

### Tables
- Meadow Dining Table
- Foundry Coffee Table

### Storage
- Workshop Sideboard
- Hearth Bookcase

## Search and Filtering

The gallery provides a dynamic search and filtering system.

Users can:

- Search by furniture name
- Search by material
- Search by category
- Search by description
- Filter furniture by Seating, Tables, or Storage
- Clear all filters with one click

## Responsive Design

The website is designed to work across:

- Desktop
- Tablet
- Mobile devices

The layout automatically adapts to smaller screen sizes using CSS media queries.

## Accessibility

Accessibility was considered throughout the project.

The website includes:

- Semantic HTML
- Proper form labels
- Keyboard navigation
- Visible focus indicators
- Skip-to-content navigation
- ARIA live regions
- Accessible image alternative text
- Reduced-motion support

## Security

Furniture information is rendered using DOM text properties instead of directly injecting HTML.

This reduces the risk of unwanted HTML or script injection when displaying dynamic content.

The project does not contain:

- API keys
- Passwords
- Authentication credentials
- Other sensitive information

## Project Structure

```text
Handcrafted-Furniture-Workshop-Gallery/
│
├── index.html
├── appearance.css
├── functionality.js
├── README.md
│
├── aster.png
├── meadow.png
├── sideboard.png
├── ridge.png
├── foundry.png
└── hearth.png
