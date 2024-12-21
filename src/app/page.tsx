import Image from "next/image";

export default function Home() {
  return (
    <main className="min-w-max flex flex-col md:flex-row bg-black gap-[50px] md:gap-[250px] text-white items-center md:items-start">
      <div className="text-center md:ml-[300px] md:mt-[21%] leading-[50px]">
        <h1 className="text-[32px] font-medium  text-[#9F9F9F]">
          Revolutionize
        </h1>
        <p>Make a statement, be Bold</p>
        <button className="bg-slate-400 px-2 rounded-2xl" type="button">
          Shop Now
        </button>
      </div>
      <div>
        <Image
          src="/iphone15.png"
          width={500}
          height={300}
          alt="iphone image"
        />
      </div>
    </main>
  );
}
