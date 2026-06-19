// schedule.js — Festival data & crew configuration for BA29 Festival Battle Plan
// To add bands: edit SCHEDULE. To add crew members: uncomment PEOPLE_SLOTS entries.

window.PEOPLE_SLOTS = [
  { id: "p1", color: "#dc267f" },  // magenta
  { id: "p2", color: "#ffb000" },  // yellow
  { id: "p3", color: "#648fff" },  // blue
  { id: "p4", color: "#785ef0" }   // purple
  // To add more members (max 10):
  // { id: "p5",  color: "#6cdb6c" },  // green
  // { id: "p6",  color: "#fe6100" },  // orange
  // { id: "p7",  color: "#fe3463" },  // pink
  // { id: "p8",  color: "#00bfb3" },  // teal
  // { id: "p9",  color: "#e8a87c" },  // ochre
  // { id: "p10", color: "#c38d9e" }   // rosé
];

window.PEOPLE = [];

window.buildPeopleFromConfig = function () {
  var slots = window.PEOPLE_SLOTS || [];
  var names = {};
  try { names = JSON.parse(localStorage.getItem('fbp-people-names') || '{}'); } catch (e) {}
  window.PEOPLE = slots.map(function (slot) {
    var n = names[slot.id] || null;
    return {
      id: slot.id,
      color: slot.color,
      name: n,
      short: n ? n.substring(0, 2).toUpperCase() : slot.id.toUpperCase(),
      cssVar: '--person-' + slot.id
    };
  });
};

window.applyPersonColors = function () {
  var root = document.documentElement;
  (window.PEOPLE_SLOTS || []).forEach(function (slot) {
    root.style.setProperty('--person-' + slot.id, slot.color);
  });
};

window.DAYS = [
  { id: "tue", date: "TUE Aug 4", short: "TUE", sub: "WARM-UP",   emoji: "⚡", color: "#5a3e1b" },
  { id: "wed", date: "WED Aug 5", short: "WED", sub: "DAY 1",     emoji: "🔥", color: "#8b1a1a" },
  { id: "thu", date: "THU Aug 6", short: "THU", sub: "DAY 2",     emoji: "💀", color: "#c0392b" },
  { id: "fri", date: "FRI Aug 7", short: "FRI", sub: "DAY 3",     emoji: "⚔",  color: "#a01818" },
  { id: "sat", date: "SAT Aug 8", short: "SAT", sub: "FINAL DAY", emoji: "🏴", color: "#7b1f1f" },
];

window.STAGES = [
  { id: "main_a",  label: "MAIN A · SEA SHEPHERD", short: "MAIN A",  color: "#e8c97a" },
  { id: "main_b",  label: "MAIN B · MARSHALL",     short: "MAIN B",  color: "#d04830" },
  { id: "obscure", label: "OBSCURE",                short: "OBSCURE", color: "#9b59b6" },
  { id: "octagon", label: "OCTAGON",                short: "OCTAGON", color: "#3a7ca5" },
];

window.GENRES = {
  death:      { l: "DEATH",  c: "#a52a2a" },
  black:      { l: "BLACK",  c: "#5d3a8e" },
  doom:       { l: "DOOM",   c: "#7a5c2e" },
  thrash:     { l: "THRASH", c: "#d4af37" },
  core:       { l: "CORE",   c: "#c0392b" },
  prog:       { l: "PROG",   c: "#1f6e8c" },
  nu:         { l: "NU",     c: "#d35400" },
  industrial: { l: "INDUS",  c: "#7f8c8d" },
  folk:       { l: "FOLK",   c: "#27ae60" },
  rock:       { l: "ROCK",   c: "#3498db" },
  other:      { l: "OTHER",  c: "#666"    },
};

window.BAND_GENRES = {
  "200 STAB WOUNDS": "death", "3rd AND THE MORTAL": "doom", "A.A. WILLIAMS": "rock",
  "AHAB": "doom", "ALCEST": "black", "ALLT": "core", "ALTARS ABLAZE": "black",
  "AMENRA": "doom", "AMORPHIS": "folk", "ANGELUS APATRIDA": "thrash",
  "ANIMALS AS LEADERS": "prog", "ANTIMATTER": "rock", "ARMORED SAINT": "rock",
  "ARTHUR BROWN": "rock", "AURA NOIR": "black", "BAEST": "death",
  "BATUSHKA": "black", "BLACKBRAID": "black", "BLEED FROM WITHIN": "core",
  "BODY COUNT feat. ICE-T": "nu", "BORKNAGAR": "black", "BÖLZER": "black",
  "BRUTAL KIDS": "other", "CANDLEMASS": "doom", "CARPATHIAN FOREST": "black",
  "CARPENTER BRUT": "industrial", "CASTLE RAT": "doom", "CHAOTIAN": "doom",
  "CHELSEA GRIN": "core", "CLAWFINGER": "nu", "COFFINS": "doom", "CONJURER": "doom",
  "CORONER": "thrash", "CORROSION OF CONFORMITY": "doom", "COVEN": "rock",
  "CRADLE OF FILTH": "black", "CRIPPLING ALCOHOLISM": "black", "CROWBAR": "doom",
  "CRYPTIC SHIFT": "death", "CRYPTOPSY": "death", "DEAFHEAVEN": "black",
  "DEATH ANGEL": "thrash", "DECEASED": "death", "DEICIDE": "death",
  "DEMOLITION HAMMER": "thrash", "DER WEG EINER FREIHEIT": "black",
  "DESERTED FEAR": "death", "DIE KRUPPS": "industrial", "DJERV": "industrial",
  "DOM ZŁY": "black", "DOODSESKADER": "core", "DRACONIAN": "doom", "DUSK": "doom",
  "EIVØR": "folk", "ELDER": "doom", "FILTH": "core", "FIT FOR AN AUTOPSY": "core",
  "FRONT LINE ASSEMBLY": "industrial", "FU MANCHU": "rock", "GRAVE": "death",
  "GUILT TRIP": "core", "H2O": "core", "HEALTH": "industrial", "HEAVY//HITTER": "core",
  "HOCICO": "industrial", "ILL NIÑO": "nu", "ILLDISPOSED": "death",
  "IMMINENCE": "core", "IMMOLATION": "death", "INSOMNIUM": "death",
  "INTERNAL BLEEDING": "death", "IOTUNN": "death", "KATATONIA": "rock",
  "KIM DRACULA": "nu", "KITTIE": "nu", "KRAANIUM": "death", "KYLESA": "doom",
  "LEFT TO DIE": "death", "LVMEN": "rock", "MARDUK": "black",
  "MASTER BOOT RECORD": "industrial", "METAL CHURCH": "rock",
  "MISÞYRMING plays BEHEMOTH": "black", "MONSTROSITY": "death", "MORAX": "black",
  "MORDLOCH": "black", "MORTAL SIN": "thrash", "MUNICIPAL WASTE": "thrash",
  "NAHUM": "thrash", "NEVERMORE": "prog", "NOVEMBERS DOOM": "doom",
  "OLD MAN'S CHILD": "black", "ONSLAUGHT": "thrash", "PALEFACE SWISS": "core",
  "PATRIARCHA": "death", "PEELINGFLESH": "death", "PERIPHERY": "prog",
  "PERTURBATOR": "industrial", "PIG": "industrial", "PRIMUS": "rock",
  "PROTEST THE HERO": "prog", "PRVNÍ HOŘE": "black", "PSYCHONAUT": "doom",
  "RAGANA": "black", "RATOS DE PORÃO": "core", "REVOCATION": "thrash",
  "SACRED REICH": "thrash", "SADISTIC INTENT": "death", "SAMAEL": "industrial",
  "SANGUISUGABOGG": "death", "SAOR": "black", "SEPTICFLESH": "death",
  "SIGNS OF THE SWARM": "core", "SLIFT": "rock", "SLOPE": "core", "SNĚŤ": "death",
  "SÓLSTAFIR": "rock", "TERROR": "core", "THE 3RD AND THE MORTAL": "doom",
  "THE CASUALTIES": "core", "THE GHOST INSIDE": "core",
  "THE LAWS performing SARCOFAGO": "death", "THE RUINS OF BEVERAST": "doom",
  "THY ART IS MURDER": "core", "THY CATAFALQUE": "prog", "TORMENTOR": "black",
  "TRIPTYKON": "doom", "UNEARTH": "core", "VADER": "death", "VENDED": "nu",
  "VIO-LENCE": "thrash", "VIOLENT MAGIC ORCHESTRA": "industrial",
  "VULVODYNIA": "death", "WALTARI · DEATH METAL SYMPHONY w/ ORCHESTRA": "prog",
  "WARDRUNA": "folk", "WITCH CLUB SATAN": "black", "WORMED": "death",
  "WYATT E.": "doom", "~ TBC ~": "other"
};

window.SCHEDULE = [
  // TUE Aug 4 — WARM-UP (OBSCURE)
  { d: "tue", s: "14:40", e: "15:10", st: "obscure", n: "PATRIARCHA" },
  { d: "tue", s: "15:30", e: "16:00", st: "obscure", n: "MORDLOCH" },
  { d: "tue", s: "16:15", e: "16:50", st: "obscure", n: "NAHUM" },
  { d: "tue", s: "17:10", e: "17:50", st: "obscure", n: "PRVNÍ HOŘE" },
  { d: "tue", s: "18:10", e: "18:50", st: "obscure", n: "FILTH" },
  { d: "tue", s: "19:10", e: "19:50", st: "obscure", n: "MORAX" },
  { d: "tue", s: "20:10", e: "20:50", st: "obscure", n: "AHAB" },
  { d: "tue", s: "21:10", e: "21:55", st: "obscure", n: "THE LAWS performing SARCOFAGO" },

  // WED Aug 5 — MAIN STAGES
  { d: "wed", s: "12:00", e: "12:30", st: "main_a", n: "GUILT TRIP" },
  { d: "wed", s: "12:35", e: "13:15", st: "main_b", n: "ONSLAUGHT" },
  { d: "wed", s: "13:20", e: "14:00", st: "main_a", n: "UNEARTH" },
  { d: "wed", s: "14:05", e: "14:45", st: "main_b", n: "H2O" },
  { d: "wed", s: "14:50", e: "15:35", st: "main_a", n: "VENDED" },
  { d: "wed", s: "15:40", e: "16:20", st: "main_b", n: "METAL CHURCH" },
  { d: "wed", s: "16:25", e: "17:10", st: "main_a", n: "CROWBAR" },
  { d: "wed", s: "17:15", e: "18:05", st: "main_b", n: "SAMAEL" },
  { d: "wed", s: "18:10", e: "19:05", st: "main_a", n: "NEVERMORE" },
  { d: "wed", s: "19:10", e: "20:00", st: "main_b", n: "FIT FOR AN AUTOPSY" },
  { d: "wed", s: "20:05", e: "21:05", st: "main_a", n: "PERIPHERY" },
  { d: "wed", s: "21:10", e: "22:15", st: "main_b", n: "MUNICIPAL WASTE" },
  { d: "wed", s: "22:20", e: "23:25", st: "main_a", n: "TRIPTYKON" },
  { d: "wed", s: "23:30", e: "00:30", st: "main_b", n: "AMENRA" },
  { d: "wed", s: "00:35", e: "01:30", st: "main_a", n: "BATUSHKA" },

  // THU Aug 6 — MAIN STAGES
  { d: "thu", s: "10:30", e: "11:00", st: "main_b", n: "CRYPTIC SHIFT" },
  { d: "thu", s: "11:05", e: "11:35", st: "main_a", n: "BAEST" },
  { d: "thu", s: "11:40", e: "12:15", st: "main_b", n: "THE CASUALTIES" },
  { d: "thu", s: "12:20", e: "12:55", st: "main_a", n: "DECEASED" },
  { d: "thu", s: "13:00", e: "13:35", st: "main_b", n: "SANGUISUGABOGG" },
  { d: "thu", s: "13:40", e: "14:15", st: "main_a", n: "ILLDISPOSED" },
  { d: "thu", s: "14:20", e: "15:05", st: "main_b", n: "HOCICO" },
  { d: "thu", s: "15:10", e: "15:55", st: "main_a", n: "KITTIE" },
  { d: "thu", s: "16:00", e: "16:45", st: "main_b", n: "BLEED FROM WITHIN" },
  { d: "thu", s: "16:50", e: "17:35", st: "main_a", n: "THY ART IS MURDER" },
  { d: "thu", s: "17:40", e: "18:45", st: "main_b", n: "WALTARI · DEATH METAL SYMPHONY w/ ORCHESTRA" },
  { d: "thu", s: "18:50", e: "19:50", st: "main_a", n: "SEPTICFLESH" },
  { d: "thu", s: "19:55", e: "21:00", st: "main_b", n: "BODY COUNT feat. ICE-T" },
  { d: "thu", s: "21:05", e: "22:10", st: "main_a", n: "AMORPHIS" },
  { d: "thu", s: "22:15", e: "23:25", st: "main_b", n: "CARPENTER BRUT" },
  { d: "thu", s: "23:30", e: "00:30", st: "main_a", n: "ALCEST" },
  { d: "thu", s: "00:35", e: "01:30", st: "main_b", n: "DEICIDE" },

  // FRI Aug 7 — MAIN STAGES
  { d: "fri", s: "10:30", e: "11:00", st: "main_a", n: "ALTARS ABLAZE" },
  { d: "fri", s: "11:05", e: "11:40", st: "main_b", n: "ALLT" },
  { d: "fri", s: "11:45", e: "12:20", st: "main_a", n: "INTERNAL BLEEDING" },
  { d: "fri", s: "12:25", e: "13:00", st: "main_b", n: "~ TBC ~" },
  { d: "fri", s: "13:05", e: "13:40", st: "main_a", n: "ANGELUS APATRIDA" },
  { d: "fri", s: "13:45", e: "14:25", st: "main_b", n: "RATOS DE PORÃO" },
  { d: "fri", s: "14:30", e: "15:10", st: "main_a", n: "SIGNS OF THE SWARM" },
  { d: "fri", s: "15:15", e: "15:55", st: "main_b", n: "SNĚŤ" },
  { d: "fri", s: "16:00", e: "16:50", st: "main_a", n: "CORROSION OF CONFORMITY" },
  { d: "fri", s: "16:55", e: "17:45", st: "main_b", n: "ANIMALS AS LEADERS" },
  { d: "fri", s: "17:50", e: "18:45", st: "main_a", n: "CORONER" },
  { d: "fri", s: "18:50", e: "19:40", st: "main_b", n: "PALEFACE SWISS" },
  { d: "fri", s: "19:45", e: "20:50", st: "main_a", n: "CLAWFINGER" },
  { d: "fri", s: "20:55", e: "22:10", st: "main_b", n: "PRIMUS" },
  { d: "fri", s: "22:15", e: "23:15", st: "main_a", n: "EIVØR" },
  { d: "fri", s: "23:20", e: "00:20", st: "main_b", n: "KATATONIA" },
  { d: "fri", s: "00:25", e: "01:25", st: "main_a", n: "OLD MAN'S CHILD" },

  // SAT Aug 8 — MAIN STAGES
  { d: "sat", s: "10:30", e: "11:00", st: "main_b", n: "DESERTED FEAR" },
  { d: "sat", s: "11:05", e: "11:40", st: "main_a", n: "VULVODYNIA" },
  { d: "sat", s: "11:45", e: "12:20", st: "main_b", n: "DJERV" },
  { d: "sat", s: "12:25", e: "13:00", st: "main_a", n: "HEAVY//HITTER" },
  { d: "sat", s: "13:05", e: "13:45", st: "main_b", n: "REVOCATION" },
  { d: "sat", s: "13:50", e: "14:30", st: "main_a", n: "SACRED REICH" },
  { d: "sat", s: "14:35", e: "15:15", st: "main_b", n: "MONSTROSITY" },
  { d: "sat", s: "15:20", e: "16:00", st: "main_a", n: "DEMOLITION HAMMER" },
  { d: "sat", s: "16:05", e: "16:50", st: "main_b", n: "PEELINGFLESH" },
  { d: "sat", s: "16:55", e: "17:45", st: "main_a", n: "IMMINENCE" },
  { d: "sat", s: "17:50", e: "18:45", st: "main_b", n: "INSOMNIUM" },
  { d: "sat", s: "18:50", e: "19:45", st: "main_a", n: "THE GHOST INSIDE" },
  { d: "sat", s: "19:50", e: "20:55", st: "main_b", n: "CANDLEMASS" },
  { d: "sat", s: "21:00", e: "22:00", st: "main_a", n: "LEFT TO DIE" },
  { d: "sat", s: "22:05", e: "23:20", st: "main_b", n: "WARDRUNA" },
  { d: "sat", s: "23:25", e: "00:25", st: "main_a", n: "CRADLE OF FILTH" },
  { d: "sat", s: "00:30", e: "01:30", st: "main_b", n: "PERTURBATOR" },

  // OBSCURE — WED Aug 5
  { d: "wed", s: "13:30", e: "14:05", st: "obscure", n: "200 STAB WOUNDS" },
  { d: "wed", s: "14:30", e: "15:15", st: "obscure", n: "ARMORED SAINT" },
  { d: "wed", s: "15:45", e: "16:25", st: "obscure", n: "NOVEMBERS DOOM" },
  { d: "wed", s: "16:55", e: "17:35", st: "obscure", n: "ELDER" },
  { d: "wed", s: "18:05", e: "18:50", st: "obscure", n: "KYLESA" },
  { d: "wed", s: "19:20", e: "20:05", st: "obscure", n: "COVEN" },
  { d: "wed", s: "20:40", e: "21:30", st: "obscure", n: "KIM DRACULA" },
  { d: "wed", s: "22:00", e: "22:55", st: "obscure", n: "SÓLSTAFIR" },
  { d: "wed", s: "23:25", e: "00:15", st: "obscure", n: "PROTEST THE HERO" },
  { d: "wed", s: "00:45", e: "01:30", st: "obscure", n: "DIE KRUPPS" },
  { d: "wed", s: "02:00", e: "02:40", st: "obscure", n: "WITCH CLUB SATAN" },
  // OBSCURE — THU Aug 6
  { d: "thu", s: "14:00", e: "14:35", st: "obscure", n: "CASTLE RAT" },
  { d: "thu", s: "15:05", e: "15:45", st: "obscure", n: "ILL NIÑO" },
  { d: "thu", s: "16:15", e: "16:55", st: "obscure", n: "DEATH ANGEL" },
  { d: "thu", s: "17:25", e: "18:05", st: "obscure", n: "BLACKBRAID" },
  { d: "thu", s: "18:35", e: "19:20", st: "obscure", n: "TERROR" },
  { d: "thu", s: "19:50", e: "20:35", st: "obscure", n: "DRACONIAN" },
  { d: "thu", s: "21:05", e: "21:55", st: "obscure", n: "IMMOLATION" },
  { d: "thu", s: "22:25", e: "23:15", st: "obscure", n: "AURA NOIR" },
  { d: "thu", s: "23:45", e: "00:30", st: "obscure", n: "FU MANCHU" },
  { d: "thu", s: "01:00", e: "01:40", st: "obscure", n: "FRONT LINE ASSEMBLY" },
  { d: "thu", s: "02:10", e: "02:50", st: "obscure", n: "TORMENTOR" },
  // OBSCURE — FRI Aug 7
  { d: "fri", s: "14:30", e: "15:10", st: "obscure", n: "SAOR" },
  { d: "fri", s: "15:35", e: "16:15", st: "obscure", n: "KRAANIUM" },
  { d: "fri", s: "16:45", e: "17:25", st: "obscure", n: "THY CATAFALQUE" },
  { d: "fri", s: "17:55", e: "18:40", st: "obscure", n: "VIO-LENCE" },
  { d: "fri", s: "19:10", e: "20:00", st: "obscure", n: "MASTER BOOT RECORD" },
  { d: "fri", s: "20:30", e: "21:25", st: "obscure", n: "GRAVE" },
  { d: "fri", s: "22:00", e: "22:50", st: "obscure", n: "MISÞYRMING plays BEHEMOTH" },
  { d: "fri", s: "23:20", e: "00:05", st: "obscure", n: "ARTHUR BROWN" },
  { d: "fri", s: "00:35", e: "01:25", st: "obscure", n: "MARDUK" },
  { d: "fri", s: "01:55", e: "02:40", st: "obscure", n: "PIG" },
  // OBSCURE — SAT Aug 8
  { d: "sat", s: "14:30", e: "15:05", st: "obscure", n: "COFFINS" },
  { d: "sat", s: "15:35", e: "16:15", st: "obscure", n: "THE 3RD AND THE MORTAL" },
  { d: "sat", s: "16:45", e: "17:20", st: "obscure", n: "WORMED" },
  { d: "sat", s: "17:50", e: "18:40", st: "obscure", n: "SLIFT" },
  { d: "sat", s: "19:10", e: "20:00", st: "obscure", n: "VADER" },
  { d: "sat", s: "20:30", e: "21:20", st: "obscure", n: "DEAFHEAVEN" },
  { d: "sat", s: "22:00", e: "22:50", st: "obscure", n: "HEALTH" },
  { d: "sat", s: "23:30", e: "00:20", st: "obscure", n: "BORKNAGAR" },
  { d: "sat", s: "00:50", e: "01:30", st: "obscure", n: "CRYPTOPSY" },
  { d: "sat", s: "02:00", e: "02:40", st: "obscure", n: "CARPATHIAN FOREST" },

  // OCTAGON — WED Aug 5
  { d: "wed", s: "17:15", e: "18:00", st: "octagon", n: "DOM ZŁY" },
  { d: "wed", s: "18:30", e: "19:15", st: "octagon", n: "CRIPPLING ALCOHOLISM" },
  { d: "wed", s: "19:45", e: "20:30", st: "octagon", n: "IOTUNN" },
  { d: "wed", s: "21:00", e: "22:00", st: "octagon", n: "BÖLZER" },
  { d: "wed", s: "22:30", e: "23:30", st: "octagon", n: "VIOLENT MAGIC ORCHESTRA" },
  // OCTAGON — THU Aug 6
  { d: "thu", s: "17:30", e: "18:00", st: "octagon", n: "SLOPE" },
  { d: "thu", s: "18:30", e: "19:15", st: "octagon", n: "PSYCHONAUT" },
  { d: "thu", s: "19:45", e: "20:30", st: "octagon", n: "WYATT E." },
  { d: "thu", s: "21:00", e: "21:50", st: "octagon", n: "LVMEN" },
  { d: "thu", s: "22:30", e: "23:30", st: "octagon", n: "ANTIMATTER" },
  // OCTAGON — FRI Aug 7
  { d: "fri", s: "17:30", e: "18:00", st: "octagon", n: "CHAOTIAN" },
  { d: "fri", s: "18:30", e: "19:15", st: "octagon", n: "DUSK" },
  { d: "fri", s: "19:45", e: "20:30", st: "octagon", n: "MORTAL SIN" },
  { d: "fri", s: "21:00", e: "21:50", st: "octagon", n: "SADISTIC INTENT" },
  { d: "fri", s: "22:30", e: "23:30", st: "octagon", n: "A.A. WILLIAMS" },
  // OCTAGON — SAT Aug 8
  { d: "sat", s: "16:00", e: "16:30", st: "octagon", n: "BRUTAL KIDS" },
  { d: "sat", s: "17:30", e: "18:00", st: "octagon", n: "CONJURER" },
  { d: "sat", s: "18:30", e: "19:15", st: "octagon", n: "DOODSESKADER" },
  { d: "sat", s: "19:45", e: "20:30", st: "octagon", n: "RAGANA" },
  { d: "sat", s: "21:00", e: "22:00", st: "octagon", n: "DER WEG EINER FREIHEIT" },
  { d: "sat", s: "22:30", e: "23:30", st: "octagon", n: "THE RUINS OF BEVERAST" },
];
