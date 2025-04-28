Bookish — Book Wishlist Web App

🔗 **Live Preview:** [bookish on GitHub](https://github.com/Mwirigikelvinkubai/bookish_myApp)

---

Overview

**Bookish** is a React-based web app that lets users search books via the Open Library API and save them to a personalized wishlist. The app supports user registration and login, and each user’s wishlist is stored individually using a local `json-server`.

Whether you're keeping track of your next read or just building your dream bookshelf, **Bookish** makes it smooth and aesthetic.

---

Features

-  Search Books – Lookup books using Open Library’s public API.
- User Auth – Register, login, and sign out securely.
- Wishlist – Add or remove books from your personal list.
- User-specific Data – Wishlists tied to individual users only.
- Route Protection – Only logged-in users can access or modify their wishlist.
- Context API – Global state management for auth and book data.
- Fake Backend – Powered by `json-server` for local storage and testing.

---


⚡ How It Works
Users can register with email, password, and optional details like name.

Once signed in, they can search for books and click a ❤️ to save them.

Each wishlist is unique to the user and synced with the local json-server.

Signing out resets the app state and prevents wishlist interactions until re-login.

Non-auth users are redirected to the login page with a prompt if they try to wishlist.

---
 App Structure
/bookish_myApp
├── /api              # Handles all fetch/POST/DELETE logic
├── /components       # Reusable UI components like buttons and cards
├── /context          # Context providers for User & Book state
├── /pages            # Route views (Home, Login, Register, Wishlist)
├── db.json           # Mock backend with users & wishlist data
├── App.jsx           # Main component with routing
└── main.jsx          # Entry point
