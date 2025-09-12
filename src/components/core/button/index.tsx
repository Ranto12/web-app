import * as React from "react";
import { cn } from "@/libs/utils";
import { cva, VariantProps } from "@/utils/cva";
import { Slot } from "@/components/core/button/slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        none: ''
      },
      fullWidth: {
        true: "w-full",
      },
      paddingY: {
        0: "py-0",
        1: "py-1",
        2: "py-2",
        3: "py-3",
        4: "py-4",
        5: "py-5",
        6: "py-6",
        7: "py-7",
        8: "py-8",
      },
      paddingX: {
        0: "px-0",
        1: "px-1",
        2: "px-2",
        3: "px-3",
        4: "px-4",
        5: "px-5",
        6: "px-6",
        7: "px-7",
        8: "px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  Omit<VariantProps<typeof buttonVariants>, "fullWidth"> & {
    asChild?: boolean;
    fullWidth?: boolean;
  };

function Button({
  className,
  variant,
  size,
  fullWidth = false,
  asChild = false,
  paddingY,
  paddingX,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth: fullWidth ? "true" : undefined,
          paddingX,
          paddingY,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
