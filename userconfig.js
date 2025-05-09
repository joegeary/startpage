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
  fastlink: "",
  openLastVisitedTab: false,
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
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-ycombinator",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
            },
            {
              name: "x",
              url: "https://x.com",
              icon: "brand-x",
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
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
            },
            {
              name: "gmail - family",
              url: "https://mail.google.com/mail/u/1",
              icon: "brand-gmail",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com/calendar/u/1/r",
              icon: "calendar-filled",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
            },
            {
              name: "drive - family",
              url: "https://drive.google.com/drive/u/1/home",
              icon: "brand-google-drive",
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
            },
            {
              name: "chase",
              url: "https://chase.com",
              icon: "building-bank",
            },
            {
              name: "schwab",
              url: "https://schwab.com",
              icon: "wallet",
            },
            {
              name: "trading-view",
              url: "https://www.tradingview.com/chart/l7zQFJ9x/?symbol=AMEX%3ASPY",
              icon: "chart-line",
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
            },
            {
              name: "twitch",
              url: "https://www.twitch.com",
              icon: "brand-twitch",
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
            },
            {
              name: "youtube-music",
              url: "https://music.twitch.com",
              icon: "brand-youtube",
            },
          ]
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
            },
            {
              name: "gog",
              url: "https://www.gog.com",
              icon: "brand-appgallery",
            },
            {
              name: "nexus mods",
              url: "https://www.nexusmods.com",
              icon: "hexagons",
            },
            {
              name: "steamdb",
              url: "https://steamdb.info",
              icon: "database-search",
            },
            {
              name: "HowLongToBeat",
              url: "https://store.howlongtobeat.com",
              icon: "books",
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
          name: "workspace",
          links: [
            {
              name: "github",
              url: "https://github.com/oncoursesystems",
              icon: "brand-github",
            },
            {
              name: "outlook",
              url: "https://outlook.office.com",
              icon: "mail",
            },
            {
              name: "wrike",
              url: "https://wrike.com",
              icon: "check",
            }
          ]
        },
        {
          name: "utils",
          links: [
            {
              name: "azure devops",
              url: "https://dev.azure.com/oncoursesystems",
              icon: "brand-azure",
            },
            {
              name: "sentry",
              url: "https://oncourse-systems-for-education.sentry.io",
              icon: "brand-sentry",
            },
            {
              name: "cloudflare",
              url: "https://dash.cloudflare.com",
              icon: "brand-cloudflare",
            },
          ],
        },
        {
          name: "websites",
          links: [
            {
              name: "ocs",
              url: "https://app.oncoursesystems.com",
              icon: "school",
            },
            {
              name: "occ",
              url: "https://www.oncourseconnect.com",
              icon: "cloud",
            },
            {
              name: "intranet",
              url: "https://intranet.oncoursesystems.com",
              icon: "school",
            },
            {
              name: "devops",
              url: "https://devops.oncoursesystems.com",
              icon: "brand-terraform",
            },
          ],
        },
      ],
    },
    // {
    //   name: "homelab",
    //   background_url: "src/img/chill.gif",
    //   categories: [
    //     {
    //       name: "gaming",
    //       links: [
    //         {
    //           name: "nintendo",
    //           url: "https://store.nintendo.co.uk",
    //           icon: "device-nintendo",
    //           icon_color: palette.peach,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "misc",
      background_url: "src/img/chill.gif",
      categories: [
        {
          name: "dev",
          links: [
            {
              name: "dotfyle",
              url: "https://dotfyle.com",
              icon: "puzzle",
            },
            {
              name: "it-tools",
              url: "https://it-tools.tech",
              icon: "tools",
            },
            {
              name: "regex101",
              url: "https://regex101.com/",
              icon: "regex",
            },
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "books",
            },
            {
              name: "cheatsheets",
              url: "https://cheatsheets.zip/",
              icon: "file-spreadsheet",
            },
          ],
        },
        {
          name: "ai",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
            },
            {
              name: "claude",
              url: "https://claude.ai",
              icon: "brand-openai",
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "brand-google",
            },
          ],
        },
        {
          name: "high seas",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net",
              icon: "barrier-block",
            },
            {
              name: "megathread",
              url: "https://rentry.org/megathread",
              icon: "skull",
            },
            {
              name: "mobilism",
              url: "https://forum.mobilism.me/",
              icon: "device-mobile",
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
