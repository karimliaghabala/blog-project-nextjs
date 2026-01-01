import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["cyrillic"], weight: "400" });

export default function Home() {
  return (
    <>
      <header className="bg-amber-700 p-4 border-b-3 border-b-orange-300 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg md:text-xl   font-semibold">logo</div>
          <div className="hidden md:block md:w-1/2">
            <input className="bg-amber-300 w-full focus:bg-amber-200 focus:outline" type="text" />
          </div>
          <div className="text-white text-lg font-semibold">login</div>
        </div>
      </header>
      <div className="flex items-center justify-center p-3 space-x-6 bg-amber-200">
        <a href="" className="hover:text-blue-700">Ana Səhifə</a>
        <a href="" className="hover:text-blue-700"> Blog</a>
        <a href="" className="hover:text-blue-700">Contact</a>

      </div>
    </>
  );
}
