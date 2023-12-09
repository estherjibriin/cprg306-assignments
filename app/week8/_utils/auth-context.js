
import { useUserAuth } from "../_utils/auth-context.js";

const YourComponent = () => {
  // Destructure the values returned by useUserAuth
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Now you can use user, gitHubSignIn, and firebaseSignOut in your component

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
      // Handle successful sign-in
    } catch (error) {
      // Handle sign-in error
      console.error("GitHub sign-in error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <p>Hello, {user.displayName}!</p>
      ) : (
        <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
      )}
    </div>
  );
};

export default YourComponent;
