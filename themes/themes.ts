interface Themes {
  [key: string]: {
    colors: {
      title: string;
      text: string;
      image: string;
      background: string;
      border: string;
    };
    fonts: string[];
  };
}

export const themes: Themes = {
  default: {
    colors: {
      title: "35, 75, 140",
      text: "255, 255, 255",
      image: "40, 40, 40",
      background: "45, 85, 155",
      border: "70, 120, 200",
    },
    fonts: ["K2D", "sans-serif"],
  },
  dark: {
    colors: {
      title: "25, 25, 25",
      text: "200, 200, 200",
      image: "150, 150, 150",
      background: "50, 50, 50",
      border: "25, 25, 25",
    },
    fonts: ["K2D", "sans-serif"],
  },
  light: {
    colors: {
      title: "25, 25, 25",
      text: "200, 200, 200",
      image: "150, 150, 150",
      background: "225, 225, 225",
      border: "25, 25, 25",
    },
    fonts: ["K2D", "sans-serif"],
  },
};
