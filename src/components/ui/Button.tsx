import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";

function Button({ className, variant }) {
  const getVariant = (variant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";

      default:
        return "btn-solid";
    }
  };

  return <button className={cn(getVariant(variant), className)}>Button</button>;
}

export default Button;
