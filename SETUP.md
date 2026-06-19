# Setup Guide

## Step 0 — Get the Files

Download the project from GitHub:

1. Click the green **"Code"** button → **"Download ZIP"**
2. Unzip it — you get a folder called `ba29-festival-battle-plan-main`

---

## Step 1 — Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → name it (e.g. `ba29-battle-plan`)
3. Disable Google Analytics → **"Create project"**

---

## Step 2 — Create a Realtime Database

1. In your Firebase project: **Build → Realtime Database → Create Database**
2. Location: **europe-west1** → start in **locked mode**

---

## Step 3 — Set Database Rules

In the **Rules** tab, replace everything with:

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

Click **"Publish"**.

---

## Step 4 — Get Your Firebase Credentials

1. Click the **gear icon ⚙** → **"Project settings"**
2. Scroll to **"Your apps"** → click the **web icon `</>`**
3. Enter a nickname → click **"Register app"**
4. You'll see a code block with your credentials — keep this page open for Step 5

> **Note on `databaseURL`**: This value is sometimes missing from the code block.
> Find it here: **Realtime Database → Data tab** — it's the URL shown at the top,
> e.g. `https://ba29-battle-plan-default-rtdb.europe-west1.firebasedatabase.app`

---

## Step 5 — Create config.js

1. In your project folder, find **`config.example.js`**
2. Duplicate it and rename the copy to **`config.js`**
3. Open `config.js` in any text editor and **replace the entire contents** with:

```js
window.FIREBASE_CONFIG = {
  apiKey:            "paste your apiKey here",
  authDomain:        "paste your authDomain here",
  databaseURL:       "paste your databaseURL here",
  projectId:         "paste your projectId here",
  storageBucket:     "paste your storageBucket here",
  messagingSenderId: "paste your messagingSenderId here",
  appId:             "paste your appId here"
};
```

4. Replace each `"paste your ... here"` with the real value from Step 4
5. Save the file

**⚠️ Critical**: The variable must be called `window.FIREBASE_CONFIG`.  
Firebase's own docs show `const firebaseConfig = {...}` — that does **not** work here.

---

## Step 6 — Deploy to Netlify

1. Sign up at [netlify.com](https://netlify.com) (free)
2. Make sure your project folder contains `config.js` — check:
   ```
   ba29-festival-battle-plan-main/
   ├── index.html
   ├── config.js        ← must be here
   ├── schedule.js
   └── ...
   ```
3. Netlify dashboard → **"Add new site" → "Deploy manually"**
4. Drag your entire project folder into the upload area
5. Done — you get a URL like `your-app.netlify.app`

**To update later**: drag-and-drop the folder again.

> `config.js` is intentionally not in the GitHub repo. You must include it manually
> every time you upload to Netlify.

---

## Step 7 — First Use

1. Open your Netlify URL
2. Enter your crew names when prompted
3. Start picking bands — picks sync automatically across all devices
