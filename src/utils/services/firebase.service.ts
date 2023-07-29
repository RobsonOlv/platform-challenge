import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, signOut, 
    createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { PlanCardProps } from "components/plan-card";
import { PostProps } from "components/carousel-section";

const firebaseConfig = {
    apiKey: "AIzaSyD6Cu5R5OAXDiz2lSIfLpGa-VpSaRMdrS8",
    authDomain: "ropj-project.firebaseapp.com",
    projectId: "ropj-project",
    storageBucket: "ropj-project.appspot.com",
    messagingSenderId: "431604622605",
    appId: "1:431604622605:web:527ffafa9ba3d34e83fc44"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app)

export default class FirebaseService {
    static login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            return ''
        } catch (err: any) {
            return err.code
        }
    };

    static googleLogin = async () => {
        try {
            await signInWithPopup(auth, provider)
            return ''
        } catch (err: any) {
            return err.code as string
        }
    }

    static register = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            return ''
        } catch (err: any) {
            return err.code
        }
    }

    static logout = async () => {
        await signOut(auth)
    }

    static getPlans = async () => {
        try {
            const plans = await getDocs(collection(db, 'plans'))
            let result: PlanCardProps[] = []
            plans.forEach((doc) => {
                result.push(doc.data() as PlanCardProps)
            })
            return { success: result }
        } catch (err: any) {
            return { error: err.code }
        }
    }

    static getPosts = async () => {
        try {
            const posts = await getDocs(collection(db, 'posts'))
            let result: PostProps[] = []
            posts.forEach((post) => {
                result.push(post.data() as PostProps)
            })
            return { success: result }
        } catch (err: any) {
            return { error: err.code }
        }
    }
}