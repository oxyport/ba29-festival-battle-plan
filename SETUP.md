# Setup Guide

## 0. Get the Files

You need a local copy of the project before you can configure anything.

### Option A: Download as ZIP (simplest, no Git needed)

1. Go to the repository on GitHub
2. Click the green **"Code"** button (top right)
3. Select **"Download ZIP"**
4. Unzip the downloaded file — you'll get a folder like `ba29-festival-battle-plan-main`
5. Rename it to `ba29-festival-battle-plan` (optional, for clarity)

### Option B: Clone with Git

If you have Git installed:

```bash
git clone https://github.com/oxyport/ba29-festival-battle-plan.git
cd ba29-festival-battle-plan
```

Either way, the result is a local folder containing `index.html`, `schedule.js`,
`config.example.js`, and the other project files. That folder is what you'll
configure in Step 5 and upload to Netlify in Step 6.

---

## 1. Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click "Add project"
3. Name it (e.g., "ba29-battle-plan")
4. **Disable Google Analytics** (simpler privacy)
5. Click "Create project"

## 2. Realtime Database

1. In your Firebase project, go to **Build → Realtime Database**
2. Click "Create Database"
3. Location: **europe-west1** (or your region)
4. Start in **locked mode**

## 3. Database Rules

Go to the "Rules" tab. Replace the rules with:

```json
{
  "rules": {
    "ba29": {
      ".read": true,
      ".write": true
    }
  }
}
```

Click "Publish".

⚠️ **Security note**: These rules make your data publicly readable/writable.
Anyone with your deployed URL can modify it. This is intentional for a trusted
group scenario. Don't store sensitive data.

## 4. Get Web Config

This step gets your Firebase credentials — a set of keys that lets the app
connect to your database.

1. In the Firebase console, click the **gear icon ⚙** (top left, next to "Project Overview")
2. Select **"Project settings"**
3. Scroll down to the **"Your apps"** section
4. Click the **web icon `</>`** to add a web app
5. Enter any nickname (e.g., "BA29 App") — this is just a label
6. Leave **"Also set up Firebase Hosting"** unchecked
7. Click **"Register app"**
8. You'll see a code block like this — **copy the whole `firebaseConfig` object**:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

9. Click **"Continue to console"** — you don't need to do anything else on that page

## 5. Configure Your Fork

Now you'll create your personal `config.js` file with the credentials from Step 4.

1. In your local copy of the repo, find the file **`config.example.js`**
2. **Duplicate** it and rename the copy to **`config.js`** (same folder, same level as `index.html`)
3. Open `config.js` in a text editor
4. Replace each placeholder with the real value from your Firebase `firebaseConfig`:

```js
// config.js — fill in your Firebase credentials from Step 4
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",           // ← paste your apiKey here
  authDomain:        "your-project.firebaseapp.com",
  databaseURL:       "https://your-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "your-project-id",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

5. Save the file

> **Important**: `config.js` is listed in `.gitignore` and will never be committed
> to GitHub. It only lives on your computer (and on Netlify — see Step 6).

## 6. Deploy

### Option A: Netlify (recommended)

Netlify lets you upload the folder directly and serve it — including your `config.js`.

1. Sign up at [netlify.com](https://netlify.com) (free)
2. From the Netlify dashboard, click **"Add new site" → "Deploy manually"**
3. Drag your entire project folder (the one containing `index.html`) into the upload area
4. Netlify deploys it in seconds — you get a URL like `your-app.netlify.app`
5. Share that URL with your group

To update later: drag-and-drop the folder again — Netlify replaces the old version.

### Option B: GitHub Pages

1. Repo Settings → Pages
2. Source: Deploy from branch → main → `/` (root)
3. URL: `your-username.github.io/your-repo-name/`
4. ⚠️ GitHub Pages serves the public repo — your `config.js` would be missing
   (since it's gitignored). For sync, use Option A or include `config.js`
   (but accept that Firebase credentials become public).

## 7. First Use

1. Open your deployed URL
2. Enter your name (and optionally your crew members' names)
3. Start picking bands — picks sync automatically across all devices

## Adding More Crew Members

All 10 slots are already available in the app. Just open the app, tap the
hamburger menu **☰ → Edit Crew**, and add more names.

## Custom Festival Data

Replace the `SCHEDULE` array in `schedule.js` with your festival's schedule.
Format:

```js
window.SCHEDULE = [
  { day: "tue", start: "14:40", end: "15:10", stage: "obscure", name: "Patriarcha" },
  // ...
];
```

`day` values: `"tue"`, `"wed"`, `"thu"`, `"fri"`, `"sat"`.
