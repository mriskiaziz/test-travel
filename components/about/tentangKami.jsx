import React from "react";
import Image from "next/image";
import logo from "../../public/logo-perusahaan.png";

function TentangKamiComponent() {
  return (
    <div className="bg-slate-100 w-full h-full p-6 py-10 lg:p-12 dark:text-black">
      <div className="container mx-auto lg:px-12 lg:w-3/4">
        <div className="text-xl lg:text-2xl font-medium py-5">Tentang Kami</div>
        <div className="flex justify-center items-center py-5">
          <Image
            src={logo}
            alt="logo"
            width=""
            height="0"
            priority={true}
            className="w-[200px] lg:w-[250px] h-auto mb-7 md:mb-0"
          />
        </div>
        <div className="">
          Ada Tour & Travel adalah sebuah perusahaan atau agen perjalanan yang
          menyediakan layanan untuk mengatur dan mengurus perjalanan ibadah
          haji, umrah ataupun wisata halal ke mekkah dan madinah untuk umat
          Muslim. <br />
          Ada Tour & Travel adalah sebuah perusahaan atau agen perjalanan yang
          menyediakan layanan untuk mengatur dan mengurus perjalanan ibadah
          haji, umrah ataupun wisata halal ke mekkah dan madinah untuk umat
          Muslim.
        </div>

        <div className="text-xl lg:text-2xl font-medium py-5">Visi</div>
        <div className="">
          Ada Tour & Travel adalah sebuah perusahaan atau agen perjalanan yang
          menyediakan layanan untuk mengatur dan mengurus perjalanan ibadah
          haji, umrah ataupun wisata halal ke mekkah dan madinah untuk umat
          Muslim.
        </div>

        <div className="text-xl lg:text-2xl font-medium py-5">Misi</div>
        <div className="">
          Ada Tour & Travel adalah sebuah perusahaan atau agen perjalanan yang
          menyediakan layanan untuk mengatur dan mengurus perjalanan ibadah
          haji, umrah ataupun wisata halal ke mekkah dan madinah untuk umat
          Muslim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.
          Nunc dignissim risus id metus. Cras ornare tristique elit. Vivamus
          vestibulum ntulla nec ante.
        </div>
      </div>
    </div>
  );
}

export default TentangKamiComponent;
