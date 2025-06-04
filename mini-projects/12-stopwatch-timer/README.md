# ⏱️ 12 - Stopwatch Timer

A simple and functional stopwatch app built with React. This app allows you to start, stop, and reset a timer, with the time displayed in a clean `MM:SS` format. Built as a standalone React application using Create React App.

---

## 🚀 Features

- ⏯️ Start, Stop, and Reset the timer  
- 🕒 Displays time in `MM:SS` format  
- ✅ Conditional message when timer is running  
- 🧹 Interval cleanup using `useEffect` to avoid stacking  
- ⚛️ Built with React Hooks (`useState`, `useEffect`)  

---

## 📂 Folder Structure

```
12-stopwatch-timer/
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── index.js
│   └── App.css (optional / remove if not used)
│
├── package.json
└── README.md
```

---

## 🧠 Tech Stack

- React.js (via Create React App)  
- JavaScript (ES6+)  
- React Hooks: `useState`, `useEffect`  
- CSS (inline or optional `App.css`)  
- Git & GitHub  

---

## ▶️ How to Run

1. Clone the repo
```bash
git clone https://github.com/your-username/12-stopwatch-timer.git
cd 12-stopwatch-timer
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

App will run at: [http://localhost:3000](http://localhost:3000)

---

## 🌟 Preview

Click **Start** to begin the timer, **Stop** to pause, and **Reset** to return to 00:00.  
A message appears below the timer while it’s actively running.

---

## 📚 What I Learned

- How to manage intervals in React
- How to prevent memory leaks using `clearInterval` and `useEffect` cleanup
- Formatting time from seconds to MM:SS
- Managing React component state in real-time apps

---

This app is part of my [React Projects Portfolio](https://github.com/abhishekdevelops/react-projects-portfolio).
