import { BsSearch } from "react-icons/bs";

export default function MitraComponent() {
  return (
    <>
      <div className="w-full h-full py-12 px-28 bg-slate-100">
        <div className="flex w-full justify-center text-3xl font-medium py-4">
          Cari Mitra Resmi
        </div>
        <div className="flex border bg-[#E5E9F4] border-[#2B458D] my-4 rounded-lg items-center">
          <input
            type="text"
            className="w-5/6 bg-[#E5E9F4] text-2xl mx-3 border-none border-0 focus:outline-none"
          />
          <button className="flex items-center bg-[#2B458D] p-2 justify-center text-white w-1/6">
            <BsSearch size={22} className="mx-2" />
            <div>Cari Agen</div>
          </button>
        </div>
        <div className="flex h-[300px] bg-[#E5E9F4] border p-3 border-[#2B458D] rounded-lg justify-center items-center text-gray-700">
          Tidak Agen Yang Tersedia
        </div>
      </div>
    </>
  );
}
