import { InfoCircle, Gift, Amazon, Bullseye } from "react-bootstrap-icons";

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
      url: "/shower",
      icon: InfoCircle,
    },
    {
      name: "Baby List Registry",
      url: "https://www.babylist.com/list/kirsten-daniel-hagen",
      icon: Gift,
    },
    {
      name: "Amazon Registry",
      url: "https://www.amazon.com/baby-reg/kirsten-hagen-daniel-hagen-april-2026-austin/4FDQ2UR9GX5L",
      icon: Amazon,
    },
    {
      name: "Target Registry",
      url: "https://www.target.com/gift-registry/gift/kirsten-and-daniel-1baby",
      icon: Bullseye,
    },
  ],
  sortByLength: true,
};

export default data;
