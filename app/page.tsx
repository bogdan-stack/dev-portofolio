import Hero from "@/components/Hero";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Switch } from "@nextui-org/switch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <ThemeSwitcher />
    
     <Hero />
    </main>
  );
}
