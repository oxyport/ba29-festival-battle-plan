# BA29 Festival Battle Plan

Open-source festival schedule planner for groups attending
**Brutal Assault 29** (August 4–8, 2026, Josefov Fortress, CZ).

🎮 **[Live Demo](https://oxyport.github.io/ba29-festival-battle-plan/)**
(runs in demo mode — local-only, no sync)

## Features

- Schedule view with grid and list layouts
- 4 customizable crew members (extendable to 10)
- Track who wants to see which bands
- Time conflict and group consensus detection
- Dark/Light theme with auto-switching
- PWA — installable, works offline
- Haptic feedback where supported
- English UI

## Disclaimer

This is an unofficial fan project. Brutal Assault™ and related
trademarks are property of Obscure Promotion s.r.o. Not affiliated
with the festival organizers.

## Quick Setup (5 minutes)

1. **Use this template**: Click "Use this template" → "Create a new repository" on GitHub
2. **Create Firebase project** (free) — see [SETUP.md](SETUP.md)
3. **Add credentials**: copy `config.example.js` to `config.js`, fill in your Firebase values
4. **Deploy**: Drop the folder into Netlify, Vercel, or any static host. Or use GitHub Pages.
5. **Open the app**: enter your crew members' names, start picking

## Customization

- **More members**: uncomment additional `PEOPLE_SLOTS` in `schedule.js` (up to 10)
- **Different festival**: replace `SCHEDULE` array in `schedule.js` with your festival data
- **Branding**: replace icons in root and `splash/` folder

## License

MIT — see [LICENSE](LICENSE)

## Contributing

Issues and PRs welcome. This is a hobby project, no guarantees.
