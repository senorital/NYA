// import { Font } from 'expo-font';
import * as Font from 'expo-font';

const loadCustomFonts = async () => {
  await Font.loadAsync({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
  });
};

export default loadCustomFonts;