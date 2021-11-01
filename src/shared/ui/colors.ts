interface IThemes {
  [name: string]: any;
}

const Themes: IThemes = {
  light: {
    blue: {
      primary: "#6d86e3",
    },
    red: {
      primary: "#e27992",
    },
    purple: {
      primary: "#b096e3",
    },
    grey: {
      primary: "#e9e9e9",
      secondary: "#d5d5d5",
    },
    text: {
      primary: "#0c0c0c",
      secondary: "#565656",
    },
    theme: {
      primary: "#fff",
    },
  },
  dark: {
    blue: {
      primary: "blue",
    },
    red: {
      primary: "red",
    },
    purple: {
      primary: "purple",
    },
    grey: {
      primary: "#e9e9e9",
      secondary: "#d5d5d5",
    },
    text: {
      primary: "#0c0c0c",
      secondary: "#565656",
    },
    theme: {
      primary: "#000",
    },
  },
};

export default Themes;
