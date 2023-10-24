"use client";
import Image from "next/image";
import kabah from "../../public/kabah.png";

function WelcomeComponent() {
  return (
    <>
      <figure className="relative flex max-w-full justify-center items-center">
        <Image
          src={kabah}
          alt="kabah"
          width="0"
          height="0"
          priority={true}
          className="w-full h-96 md:h-auto lg:h-screen"
        />
        <figcaption className="absolute text-white flex flex-col items-center px-4 mb-5">
          <p className="md:text-xl lg:text-3xl font-bold my-3 text-center">
            WELCOME TO <br /> ADA TOUR & TRAVEL
          </p>
          <p className="text-xs md:text-lg text-center mt-2 md:mt-5">
            Percayakan parjalanan ibadah haji dan umrah Anda pada travel kami
            <br />
            kami siap melayani Anda
          </p>
          <div className="my-6 w-full text-center">
            <a
              href="#"
              className="text-white font-medium bg-blue-900 hover:bg-blue-700 rounded-lg text-xs md:text-sm px-4 py-2 text-center "
            >
              Pesan Sekarang
            </a>
          </div>
        </figcaption>
      </figure>
    </>
  );
}

export default WelcomeComponent;
