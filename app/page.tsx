import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#363062] text-[#F5E8C7] py-10 sm:py-[140px] px-5">
      <div className="max-w-[500px] mx-auto my-auto justify-center items-center flex flex-col">
        <h1 className="text-5xl font-semibold text-center mb-5">
          Welcome to <span className="border-b-4 border-[#818FB4]">Daily</span>
        </h1>
        <p className="font-medium text-lg text-center mb-5">
          Elevate your daily experience. Track your moods, embrace
          self-discovery, and start each day with a fresh perspective. Let Daily
          be your guide on your journey to self-awareness.
        </p>
        <Link href="/journal">
          <button className="bg-[#435585] shadow-sm px-5 py-3 rounded-md font-semibold text-xl mx-auto">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
