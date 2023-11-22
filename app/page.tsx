import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#345678]">
      <div className="max-w-[500px] mx-auto my-auto justify-center items-center">
        <h1 className="text-5xl font-semibold text-center mb-5">
          Welcome to Daily
        </h1>
        <p className="font-medium text-2xl  text-center mb-5">
          Track your daily moods and embark on a journey of self-discovery.
          Start each day with a fresh outlook and let Daily be your trusted
          companion in daily self-discovery.
        </p>
        <Link href="/journal">
          <button className="bg-[#cacc4d] px-5 py-3 rounded-md font-semibold text-xl mx-auto">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
