import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";

function Button({ className, outline }) {
  return (
    <button
      className={cn(
        "bg-purple-500, px-3 py-2 rounded-md",
        {
          "border border-purple-500 ": outline,
        },
        className
      )}
    >
      Button
    </button>
  );
}

export default Button;
