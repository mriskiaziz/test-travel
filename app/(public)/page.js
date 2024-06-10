"use client"
import NavbarComponent from "@/components/navbar/navbar"
import HomeComponent from "@/components/home/home"
import FooterComponent from "@/components/footer/footer"
import { signIn, signOut, useSession } from "next-auth/react";


export default function Home() { 
  const { data } = useSession();

  return (
    <main>
      {console.log(data)}
        <HomeComponent />
    </main>
  )
}
