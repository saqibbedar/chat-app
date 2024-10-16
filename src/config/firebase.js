import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    // create user
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // store user
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, there I am using chat app",
      lastSeen: Date.now(),
    })
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.error("firebase config error: ", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error: ", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async (params) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error: ", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

export { signup, login, logout, auth, db };
