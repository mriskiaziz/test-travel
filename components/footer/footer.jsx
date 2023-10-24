import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail, AiOutlineInstagram } from "react-icons/ai";

function FooterComponent() {
  return (
    <>
      <footer
        className="text-white pt-2 md:pt-5"
        style={{ backgroundColor: "#2B458D" }}
      >
        <div className="mx-auto w-full max-w-screen-xl p-3 pt-5">
          <div className="grid grid-cols-4 gap-10 p-3 md:grid-cols-3 md:gap-6 lg:gap-14 ">
            <div className="col-span-4 md:col-span-1">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-md font-semibold mb-3 ">
                  ADA Tour & Travel
                </h2>
                <hr className=" border border-white mb-6 w-1/2" />
              </div>
              <div className="text-sm text-center md:text-left">
                Perusahaan atau agen perjalanan yang menyediakan layanan untuk
                mengatur dan mengurus perjalanan ibadah haji, umrah ataupun
                wisata halal ke mekkah dan madinah untuk umat Muslim.
              </div>
            </div>

            <div className="col-span-4 md:col-span-1 ">
              <div className="flex flex-col items-center md:items-start md:ms-11">
                <h2 className="text-md font-semibold mb-3 ">Kantor Cabang</h2>
                <hr className=" border border-white mb-6 w-1/2" />
              </div>
              <div className="flex justify-center md:justify-start">
                <ul>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/mKPseZq2R8P6AeqBA"
                      className="flex mb-3 items-center"
                    >
                      <FaMapMarkerAlt
                        className="mx-3"
                        style={{ fontSize: "15pt" }}
                      />
                      <div className="text-sm">
                        Jl. ZA. Pagar Alam No.46b, Labuhan Ratu, Kec. Kedaton,
                        Kota Bandar Lampung, Lampung
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/ZMxT5H3KUohpV6Ea6"
                      className="flex mb-3 items-center"
                    >
                      <FaMapMarkerAlt
                        className="mx-3"
                        style={{ fontSize: "15pt" }}
                      />
                      <div className="text-sm">
                        Jl. H. Abdul Latif No.53, Rajabasa, Kec. Rajabasa, Kota
                        Bandar Lampung, Lampung
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-4 md:col-span-1 ">
              <div className="flex flex-col items-center md:items-start md:ms-12">
                <h2 className="text-md font-semibold mb-3 ">Kontak Info</h2>
                <hr className=" border border-white mb-6 w-1/2" />
              </div>
              <div className="flex justify-center md:justify-start">
                <ul>
                  <li>
                    <a
                      href="https://wa.me/+628123456789"
                      className="flex mb-3 items-center"
                    >
                      <BsFillTelephoneFill
                        className="mx-3 mr-4"
                        style={{ fontSize: "15pt" }}
                      />
                      <div className="text-sm">08123456789</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:adhatourtravel27@gmail.com"
                      className="flex mb-3 items-center"
                    >
                      <AiFillMail
                        className="mx-3"
                        style={{ fontSize: "18pt" }}
                      />
                      <div className="text-sm">adhatourtravel27 @gmail.com</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ada.tourtravel/?hl=id"
                      className="flex mb-3 items-center"
                    >
                      <AiOutlineInstagram
                        className="mx-3"
                        style={{ fontSize: "18pt" }}
                      />
                      <div className="text-sm">@ada.tourtravel</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center p-3 mt-3 md:mt-8"
          style={{ backgroundColor: "#092163" }}
        >
          Copyrigth | © 2023 by ADA Tour & Travel
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
