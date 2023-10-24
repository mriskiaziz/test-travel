"use client";
import Image from "next/image";
import logo from "../../public/logo-perusahaan.png";

function TentangKamiHome() {
  return (
    <div className="w-full py-12 px-3 lg:px-12 bg-slate-100 dark:text-black ">
      <div className="text-xl font-medium p-3">Tentang Kami</div>
      <div className="grid grid-cols-3 p-3 md:mb-8 mt-5">
        <div className="col-span-3 md:col-span-1 flex justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height="0"
            priority={true}
            className="h-auto mb-7 md:mb-0"
          />
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col ">
          <div className="text-sm text-justify md:text-lg py-3 md:mr-12">
            Ada Tour & Travel adalah sebuah perusahaan atau agen perjalanan yang
            menyediakan layanan untuk mengatur dan mengurus perjalanan ibadah
            haji, umrah ataupun wisata halal ke mekkah dan madinah untuk umat
            Muslim. Ada Tour & Travel adalah sebuah perusahaan atau agen
            perjalanan yang menyediakan
          </div>
          <div className="my-3">
            <a
              href="#"
              className="text-white bg-blue-900 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKamiHome;
