import Todo from "../components/todo";
import { SunIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center pt-20 flex-col gap-10">
      <div className="flex items-center justify-between w-1/3 text-black">
        <h3 className="text-3xl font-bold">Todo</h3>
        <SunIcon />
      </div>
      <Todo />
    </main>
  );
}
