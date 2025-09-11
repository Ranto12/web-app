import * as React from "react";

export type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

function Slot({ children, ...props }: SlotProps) {
  if (!React.isValidElement(children)) {
    return <>{children}</>;
  }

  const child = children as React.ReactElement<{ className?: string }>;

  const childClassName = child.props.className ?? "";

  return React.cloneElement(child, {
    ...props,
    className: [childClassName, props.className].filter(Boolean).join(" "),
  });
}

export { Slot };
