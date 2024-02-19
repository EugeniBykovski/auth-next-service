import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KeyRound } from "lucide-react";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-700 to-slate-900 text-white">
      <div className="space-y-2 text-center">
        <h1
          className={cn(
            "text-5xl font-semibold to-white drop-shadow-md flex items-center justify-center",
            font.className
          )}
        >
          <KeyRound width={35} height={35} className="mx-3" />
          Auth
        </h1>

        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button className="my-4" variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
