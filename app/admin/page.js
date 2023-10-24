"use client"
import { signIn, signOut, useSession } from "next-auth/react";

function HomeAdmin() {
  const { data } = useSession();

  return (
    <div>
      <button onClick={()=>{ signOut() }} > LOGOUT</button>
       
    </div>
  )
}

export default HomeAdmin