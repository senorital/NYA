import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";
import Header from "../components/Header";

// import { removeToken } from "..a/services/AsyncStorageService";
// import { useGetDetailsQuery } from "../services/signUpApi";
// import { useDispatch } from "react-redux";
// import { setUserInfo } from "../features/userSlice";
const ProfileScreen = ({ navigation }) => {

  
  // const handleLogout= async()=>{ //little bit incomplete
  //   await removeToken('token')
  //   navigation.navigate("Sign Up")
  //   console.log("token is remove!")
  // }
  // const dispatch = useDispatch();
  // const {data, isSuccess } = useGetDetailsQuery();
//  const [userData,setUserData]=useState({})
  // console.log("Data",data)
  // useEffect(() => {
  //   if (isSuccess) {
  //     setUserData(data);
  //   }
  // }, [isSuccess, data]);
  // console.log("Profile" ,userData.name);
  // //Store User data in redux store
  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(
  //       setUserInfo({ name: userData.name, mobileNumber: userData.mobileNumber,
  //         email:userData.email
  //        })
  //     );
  //   }
  // });
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'blue' }}>
      <Header title={"My Profile"} icon={require("../assets/back.png")} />
      <View style={{ margin: 20, flexDirection: "row" , backgroundColor: 'red' }}>

        <Avatar
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          }}
          size={75}
        />
        <View style={{ marginLeft: 20, marginTop: 15 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
            {/* Andrea Hirata */}
            {/* {userData.name} */}Prakhar
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins",
              color: "gray",
              marginTop: 3,
            }}
          >
            {/* hirata@gmail.com */}
            {/* {userData.email} */}Prakhar@gmail.com
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins",
              color: "gray",
              marginTop: 3,
            }}
          >
            {/* hirata@gmail.com */}
            {/* {userData.email} */}Registered Since Dec 2022

          </Text>
        </View>
      </View>
      </View>
      <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('ThemeScreen')}>
        <View
          style={styles.view} >
          <Image
            style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}  >
            Yoga News
          </Text>
         
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("ThemeScreen")}>
        <View
          style={styles.view} >
       <Image
           style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
             style={styles.text}  >
            Yoga Trainer
          </Text>
         
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("YogaCentre")}>
        <View
          style={styles.view} >
          <Image
           style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}  >
            Yoga Centers
          </Text>
       
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
          style={styles.view} >
          <Image
           style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}  >
            Yoga Videos     
         </Text>
     
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <View
           style={styles.view} >
          <Image
         style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}  >
            Celebrity Testimonials
          </Text>
  
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity
      //  onPress={ () => navigation.navigate('MyOrders')}
      >
        <View
          style={styles.view} >
          <Image
            style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
             style={styles.text}  >
            Health/ Fitness Activity
          </Text>
       
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
         style={styles.view} >
          <Image
           style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}  >
          Quiz     
    </Text>
     
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
           style={styles.view} >
          <Image
             style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
             style={styles.text}  >
            Polls      
   </Text>
     
        </View>
      </TouchableOpacity>

      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
          style={styles.view} >
          <Image
          style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}>Share</Text>
     
        </View>
      </TouchableOpacity>

      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
           style={styles.view} >
          <Image
             style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
             style={styles.text}  >
          Bhuvan App
         </Text>
     
        </View>
      </TouchableOpacity>

      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
          style={styles.view} >
          <Image
             style={styles.image}
            source={require("../assets/profile-icon.png")}
          />
          <Text
            style={styles.text}  >
          Privacy Policy
         </Text>
     
        </View>
      </TouchableOpacity>

      </ScrollView>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // padding:16,
  },
  hr: {
    position: "relative",
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    // marginLeft: 15,
    // marginRight: 20,
    marginTop: 5,
    // marginBottom: 10,
  },
  text :{
    fontSize: 16,
    fontFamily: "Poppins",
  },
  view : {
    marginTop: 10,
    padding:10,
    flexDirection: "row",
  },
  image :{
    width: 24, height: 24, marginLeft: 20,marginRight:20 
  }
});

export default ProfileScreen;
