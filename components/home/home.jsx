"use client";

import WhymeComponent from "./whyme";
import TentangKamiHome from "./tentang";
import ProgramHomeComponent from "./program";
import LocationComponent from "./location";
import WelcomeComponent from "./welcome";

function HomeComponent() {
  return (
    <div>
      {/* Welcome To */}
      <WelcomeComponent />

      {/* Tentang Kami */}
      <TentangKamiHome />

      {/* Mengapa Memilih Kami */}
      <WhymeComponent />

      {/* Mengapa Memilih Kami */}
      <ProgramHomeComponent />

      {/* Mengapa Memilih Kami */}
      <LocationComponent />
    </div>
  );
}

export default HomeComponent;
