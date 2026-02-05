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
  description: "Welcome to the official baby shower site for Hagen! Here you'll find all the details about the upcoming celebration, including date, location, and gift ideas. We're excited to share this special moment with friends and family. Join us in celebrating the arrival of our little bundle of joy!",
  links: [
    {
      name: "Shower RSVP",
      url: "mailto:f.borisjuk@hangerthem.com",
      icon: EnvelopeFill,
    },
    {
      name: "Baby List Registry",
      url: "https://twitter.com/hangerthem",
      icon: Twitter,
    },
    {
      name: "Amazon Registry",
      url: "https://github.com/hangerthem",
      icon: Github,
    },
    {
      name: "Target Registry",
      url: "https://www.linkedin.com/in/franti%C5%A1ek-borisjuk-022686225/",
      icon: Linkedin,
    },
  ],
  sortByLength: true,
};

export default data;
