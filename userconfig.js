// User configuration for the startpage. Update the palette, location, and your preferred tabs, categories, and links.
const palette = macchiato;

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Mount Laurel, NJ",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "home",
      background_url: "src/img/home.gif",
      categories: [
        {
          name: "reading",
          links: [
            {
              name: "gn",
              url: "https://news.google.com",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-ycombinator",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "finance",
          links: [
            {
              name: "usaa",
              url: "https://usaa.com",
              icon: "building-bank",
              icon_color: palette.green,
            },
            {
              name: "chase",
              url: "https://chase.com",
              icon: "building-bank",
              icon_color: palette.peach,
            },
            {
              name: "schwab",
              url: "https://schwab.com",
              icon: "wallet",
              icon_color: palette.red,
            },
            {
              name: "trading-view",
              url: "https://www.tradingview.com/chart/l7zQFJ9x/?symbol=AMEX%3ASPY",
              icon: "chart-line",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      background_url: "src/img/work.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "outlook",
              url: "https://outlook.office.com",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "wrike",
              url: "https://wrike.com",
              icon: "check",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "apps",
          links: [
            {
              name: "ocs",
              url: "https://app.oncoursesystems.com",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "ocs-stg",
              url: "https://staging.oncoursesystems.com",
              icon: "school",
              icon_color: palette.peach,
            },
            {
              name: "ocs-dev",
              url: "https://devel.oncoursesystems.com",
              icon: "school",
              icon_color: palette.red,
            },
            {
              name: "occ",
              url: "https://www.oncourseconnect.com",
              icon: "cloud",
              icon_color: palette.blue,
            },
            {
              name: "occ-stg",
              url: "https://staging.oncourseconnect.com",
              icon: "cloud",
              icon_color: palette.blue,
            },
            {
              name: "occ-dev",
              url: "https://devel.oncourseconnect.com",
              icon: "cloud",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/chill.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "x",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.green,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "twitch",
              url: "https://www.twitch.com",
              icon: "brand-twitch",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
