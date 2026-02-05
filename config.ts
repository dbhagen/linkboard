import {
  Twitter,
  Github,
  Linkedin,
  EnvelopeFill,
  Telegram,
  Instagram,
  Messenger,
  Spotify,
  Discord,
  JournalAlbum,
} from "react-bootstrap-icons";

const data: Data = {
  title: "Hagen Baby Boy Shower Site",
  theme: "default",
  animation: {
    nameRandomizer: false,
  },
  name: "Hagen Baby Shower",
  description: "", //Welcome to the official baby shower site for Hagen!\nHere you'll find all the details about the upcoming celebration,\nincluding date, location, and gift ideas.\We're excited to share this special moment with friends and family.\nJoin us in celebrating the arrival of our little bundle of joy!
  links: [
    {
      name: "Shower info",
      url: "#info",
      icon: JournalAlbum,
    },
    {
      name: "Baby List Registry",
      url: "https://www.babylist.com/list/kirsten-daniel-hagen",
      icon: JournalAlbum,
    },
    {
      name: "Amazon Registry",
      url: "https://www.target.com/gift-registry/gift/kirsten-and-daniel-1baby",
      icon: JournalAlbum,
    },
    {
      name: "Target Registry",
      url: "https://www.linkedin.com/in/franti%C5%A1ek-borisjuk-022686225/",
      icon: JournalAlbum,
    },
  ],
  sortByLength: true,
};

export default data;
