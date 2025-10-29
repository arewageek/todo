import { SunIcon } from "lucide-react";
import Image from "next/image";
import Todo from "@/Components/Todo";

export default function Home() {
  return (

    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>TODO</h1>
        <SunIcon />
      </div>
    </main>

  );
}
