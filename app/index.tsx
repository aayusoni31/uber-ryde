/* eslint-disable prettier/prettier */
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    // redirct to home page
    return <Redirect href="/(root)/(tabs)/home" />;
  }
  // else to welcome page 3 slides
  return <Redirect href="/(auth)/welcome" />;
};
export default Home;
