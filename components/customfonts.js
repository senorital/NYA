import * as Font from "expo-font";

export default customfonts = async () => {
   await Font.loadAsync({
      "Poppins" : require("../assets/fonts/Poppins-Regular.ttf"),
      // All other fonts here
    });
};
