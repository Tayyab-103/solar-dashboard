import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

    <h1 className="text-3xl font-bold underline text-white">Hello World</h1>
     <Button variant="outline">Button</Button>
  </div>
  );
}
