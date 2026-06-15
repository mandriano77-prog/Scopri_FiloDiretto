import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export default function Logo({
  className,
  iconClassName,
  textClassName,
  showText = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "rounded-[28%] bg-gradient-to-br from-[#a78bfa] to-[#6d28d9] flex items-center justify-center shadow-lg shadow-primary/25",
          iconClassName ?? "w-9 h-9",
        )}
      >
        <Wallet className="text-white w-[55%] h-[55%]" strokeWidth={2.2} />
      </div>
      {showText && (
        <span
          className={cn(
            "font-serif tracking-tight text-foreground",
            textClassName ?? "text-2xl",
          )}
        >
          Filo Diretto
        </span>
      )}
    </div>
  );
}
