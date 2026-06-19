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
8. You'll see a code block — **copy only the values** (the keys in quotes after the colons):

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",           ← copy this value
  authDomain: "...",             ← copy this value
  databaseURL: "https://...",    ← copy this value (may be missing — see note below)
  projectId: "...",              ← copy this value
  storageBucket: "...",          ← copy this value
  messagingSenderId: "...",      ← copy this value
  appId: "..."                   ← copy this value
};
```

> **Note on databaseURL**: This field may not appear in the Firebase console snippet.
> Find it manually: Firebase console → Realtime Database → copy the URL shown at the top
> of the Data tab. It looks like:
> `https://your-project-default-rtdb.europe-west1.firebasedatabase.app`

9. Click **"Continue to console"** — you don't need to do anything else on that page

## 5. Configure Your Fork

Now you'll create your personal `config.js` file with the credentials from Step 4.

1. In your local copy of the repo, find the file **`config.example.js`**
2. **Duplicate** it and rename the copy to **`config.js`** (same folder, same level as `index.html`)
3. Open `config.js` in a text editor — it must look **exactly** like this:

```js
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  databaseURL:       "https://your-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "your-project-id",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

4. Replace every value with the real values from Step 4 and save the file

**⚠️ Common mistakes that cause Demo Mode to stay active:**
- Using `const firebaseConfig = {...}` (from Firebase docs) instead of `window.FIREBASE_CONFIG = {...}`
- Leaving any `YOUR_...` placeholder unchanged
- Missing `databaseURL` — find it in Firebase console → Realtime Database → Data tab (the URL at the top)

> **Note**: `config.js` is in `.gitignore` and will never be committed to GitHub.
> It only lives on your computer — and on Netlify after you upload it in Step 6.

## 6. Deploy

### Option A: Netlify (recommended)

Netlify lets you upload the folder directly and serve it — including your `config.js`.

> ⚠️ **Important**: Make sure your `config.js` is inside the project folder before
> uploading. It is not in the GitHub repo (by design), so you need to add it manually.
> Without it, the app runs in Demo Mode even on Netlify.

1. Sign up at [netlify.com](https://netlify.com) (free)
2. Confirm that your project folder contains these files:
   ```
   ba29-festival-battle-plan/
   ├── index.html
   ├── schedule.js
   ├── config.js        ← must be here (you created this in Step 5)
   ├── config.example.js
   ├── sw.js
   └── ...
   ```
3. From the Netlify dashboard, click **"Add new site" → "Deploy manually"**
4. Drag your entire project folder into the upload area
5. Netlify deploys it in seconds — you get a URL like `your-app.netlify.app`
6. Share that URL with your group

To update later: drag-and-drop the folder again — Netlify replaces the old version.

**How to verify Firebase is active**: Open the app, open the browser developer tools
(F12), go to the Console tab. If you see `[BA29] config.js not found`, the file is
missing from the upload. If Firebase connects successfully, you'll see no such warning.

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
