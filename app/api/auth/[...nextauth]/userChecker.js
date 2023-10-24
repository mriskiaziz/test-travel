
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

async function UserChecker(email, password, role) {
  const get = await getDocs(collection(db, "akun"));
  const data = get.docs.map((doc) => {
    if (email == doc.data().email && password == doc.data().password && role == doc.data().role ) {
        return { ...doc.data(), id: doc.id }
    }else{
        return null
    }
  });

  return data[0]
}

export default UserChecker