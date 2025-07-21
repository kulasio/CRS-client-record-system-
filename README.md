# Client Record System

A simple, modern web application to manage and record client information for small businesses. Built with Angular (frontend), Express/Node.js (backend), and SQLite (database).

---

## 📋 Project Overview
This system allows admin to add, view, edit, and delete client records for future reference. Designed for ease of use, data security, and future extensibility.

---

## ✨ Features
- Add new clients
- View all clients in a searchable, sortable table
- Edit client details
- Delete clients
- Store essential client information (name, contact, address, notes, date added)
- Simple, clean user interface

---

## 🛠️ Tech Stack
- **Frontend:** Angular
- **Backend:** Node.js + Express
- **Database:** SQLite (via better-sqlite3 or sqlite3 npm package)
- **API:** RESTful endpoints

---

## 📁 Folder Structure
```
Client Record System/
  backend/        # Express API & database
  frontend/       # Angular app
  README.md       # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repo-url>
cd "Client Record System"
```

### 2. Backend Setup
```bash
cd backend
npm install
# Configure .env if needed
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
# Scaffold Angular app in a subdirectory
npx -p @angular/cli ng new client-app --skip-git --skip-install --defaults
# Move contents up (if desired)
# On Unix/macOS:
mv client-app/* .
mv client-app/.* . 2>/dev/null || true
rmdir client-app
# On Windows, move files manually or use File Explorer
npm install
```

### 4. Start the Angular App
```bash
npx ng serve
```

- Open your browser at [http://localhost:4200](http://localhost:4200)

---

## 🗄️ Database Schema (clients table)
| Field      | Type    | Description         |
|------------|---------|---------------------|
| id         | INTEGER | Primary Key         |
| name       | TEXT    | Full Name           |
| phone      | TEXT    | Phone Number        |
| email      | TEXT    | Email Address       |
| address    | TEXT    | Address             |
| notes      | TEXT    | Notes/Comments      |
| date_added | TEXT    | Date Added (ISO)    |

---

## 🔒 Security & Privacy
- Data stored locally (unless deployed online)
- No authentication by default (can be added if needed)

---

## 🛣️ Future Improvements
- User authentication (login/logout)
- Export client data (CSV/PDF)
- Attachments (upload files/photos)
- Activity log (track changes)
- Cloud deployment

---

## 🤝 License
MIT # CLIENT_RECORD_SYSTEM
