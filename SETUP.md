# Setup Guide

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

1. Project Settings (gear icon) → "General" tab
2. Scroll to "Your apps" → Click web icon (`</>`)
3. Register app — give it a nickname
4. **Don't** enable Firebase Hosting
5. Copy the `firebaseConfig` object

## 5. Configure Your Fork

1. In your repo: copy `config.example.js` to `config.js`
2. Paste your Firebase values into `config.js`
3. **Important**: `config.js` is in `.gitignore` — never commit it

## 6. Deploy

### Option A: Netlify (recommended)

1. Sign up at netlify.com (free)
2. Drag-and-drop your repo folder into Netlify
3. Done — you get a URL like `your-app.netlify.app`

### Option B: GitHub Pages

1. Repo Settings → Pages
2. Source: Deploy from branch → main → `/` (root)
3. URL: `your-username.github.io/your-repo-name/`
4. ⚠️ GitHub Pages serves the public repo — your `config.js` would be missing
   (since it's gitignored). For sync, use Option A or include `config.js`
   (but accept that Firebase credentials become public).

## 7. First Use

1. Open your deployed URL
2. Enter crew member names (these stay on your device)
3. Start picking bands

## Adding More Crew Members

In `schedule.js`, uncomment additional `PEOPLE_SLOTS` entries (up to 10 total).
Refresh the app to see new name input fields.

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
