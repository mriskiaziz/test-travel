"use client";
import { AiOutlineWhatsApp } from "react-icons/ai";

function LocationComponent() {
  const cabang = [
    {
      city: "Lampung",
      phone: "08123456789",
      address:
        "Jl. ZA. Pagar Alam No.46b, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung, Lampung",
    },
    {
      city: "Lampung",
      phone: "08123456789",
      address:
        "Jl. ZA. Pagar Alam No.46b, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung, Lampung",
    },
  ];
  return (
    <div className="w-full py-12 px-3 lg:px-12 md:mb-12">
      <div className="text-xl font-medium p-3">Cabang Perusahaan</div>
      <div className="my-6 py-8">
        <div className="grid grid-cols-2 gap-10">
          {cabang.map((e, i) => {
            return (
              <div
                className="col-span-2 md:col-span-1 px-3 md:px-8 flex flex-col items-center text-center"
                key={i}
              >
                <div className="md:text-2xl text-xl font-medium">{e.city}</div>
                <div className="md:text-xl text-sm flex justify-center items-center font-medium text-green-700 py-3">
                  <AiOutlineWhatsApp className="mr-3 md:text-2xl text-lg" />{" "}
                  {e.phone}
                </div>
                <a href="" className="text-sm md:text-lg">
                  {e.address}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LocationComponent;
