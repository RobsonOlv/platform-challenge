import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, signOut, 
    createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth'
import { PostProps } from "components/carousel-section";
import { Plan } from "utils/typings/interfaces";

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
    static checkUser = async (userUID: string) => {
        const result = await getDoc(doc(db, 'users', userUID))
        if (result.exists()) return true
        return false
    }

    static getUserSubscription = async (userUID: string) => {
        try {
            const planID = getDoc(doc(db, 'users', userUID)).then((result) => {
                const purchasedPlan = result.data()?.purchasedPlan || ''
                return {
                    purchasedPlan,
                    error: ''
                }
            })
            return planID
        } catch (err: any) {
            return {
                purchasedPlan: '',
                error: err.code as string
            }
        }
    }

    static writeUserData = async (userUID: string, email: string, purchasedPlan?: string) => {
        try {
            await setDoc(doc(db, 'users', userUID), {
                email: email,
                purchasedPlan: purchasedPlan || ''
            })
            return ''
        } catch (err: any) {
            return err.code as string
        }
    }

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
            const result = await signInWithPopup(auth, provider)
            const isRegister = getAdditionalUserInfo(result)?.isNewUser
            if(isRegister) {
                FirebaseService.writeUserData( result.user.uid, result.user.email || '', '')
            }
            return ''
        } catch (err: any) {
            return err.code as string
        }
    }

    static register = async (email: string, password: string) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            FirebaseService.writeUserData( result.user.uid, email, '')
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
            let result: Plan[] = []
            plans.forEach((doc) => {
                result.push({
                    id: doc.id,
                    ...doc.data()
                } as Plan)
            })
            return { plans: result, error: '' }
        } catch (err: any) {
            return { plans: [], error: err.code }
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