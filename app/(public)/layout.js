import NavbarComponent from "@/components/navbar/navbar"
import HomeComponent from "@/components/home/home"
import FooterComponent from "@/components/footer/footer"

function LayoutPublic({ children }) {
  return (
    <>
      <NavbarComponent />
      { children }
      <FooterComponent />
    </>
  )
}

export default LayoutPublic