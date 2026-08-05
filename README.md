# Iron Pulse Gym — Website

A responsive, multi-page gym website built as a college front-end project. It showcases a home page, an about page, a classes page, a contact page, and a login page — all sharing a consistent dark, high-energy design.

**Live demo:** _add your GitHub Pages / hosting link here once deployed_

---

## 📸 Preview

| Page | Description |
|------|-------------|
| Home | Hero section, gym stats, featured classes, testimonial, call-to-action |
| About | Gym story, mission values, coach profiles |
| Classes | 6 class cards with images, schedule days and timings |
| Contact | Contact form, address/hours, embedded Google Map |
| Login | Simple email/password login form with front-end validation |

---

## ✨ Features

- Fully responsive layout (desktop, tablet, and mobile)
- Sticky navigation bar with a mobile hamburger menu
- Animated scrolling marquee strip
- Reusable card components for classes and coach profiles
- Contact form with front-end validation and a success message
- Login form with front-end validation (email format + minimum password length)
- Images automatically fall back to a branded placeholder graphic if they fail to load
- Accessible focus states and semantic HTML
- No frameworks or build tools required — pure HTML, CSS, and vanilla JavaScript

---

## 🛠️ Built With

- **HTML5** — page structure
- **CSS3** — custom properties (design tokens), Flexbox, Grid, media queries
- **JavaScript (Vanilla)** — mobile nav toggle, form validation
- **Google Fonts** — Anton (headings) & Work Sans (body text)
- **Unsplash** — stock photography

---

## 📁 Project Structure

```
gym-site/
├── index.html          # Home page
├── about.html           # About page
├── classes.html          # Classes page
├── contact.html          # Contact page
├── login.html            # Login page
├── css/
│   └── style.css         # All styles (design tokens, layout, components)
├── js/
│   └── script.js          # Nav toggle + form validation
└── assets/
    └── placeholder.svg     # Fallback image if an external image fails to load
```

---

## 🚀 Getting Started

No build tools or dependencies are required.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/iron-pulse-gym.git
   cd iron-pulse-gym
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

---

## 🔐 About the Login Page

This is a front-end-only demo — there is no backend or database connected. Submitting the login form checks that the email and password fields are filled in correctly and shows a success message, but it does not authenticate against a real server. To make it fully functional, connect the form in `login.html` to a backend (e.g. Node.js/Express, Django, PHP) and replace the mock logic in `js/script.js`.

---

## 📝 Notes

- This project was built for educational purposes as part of a college assignment.
- All content (gym name, coach names, testimonials) is fictional placeholder content.
- Images are sourced from Unsplash and are for demo purposes only.

---

## 📄 License

This project is open for educational use. Feel free to fork and adapt it for your own learning.
