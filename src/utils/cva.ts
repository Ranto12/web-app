type VariantConfig = Record<string, Record<string, string>>;
type DefaultVariants<T extends VariantConfig> = {
  [K in keyof T]?: keyof T[K];
};

interface CvaOptions<T extends VariantConfig> {
  variants?: T;
  defaultVariants?: DefaultVariants<T>;
}

export function cva<T extends VariantConfig>(
  base: string,
  options: CvaOptions<T> = {}
) {
  return (props: {
    className?: string;
  } & {
    [K in keyof T]?: keyof T[K];
  }) => {
    const { className, ...rest } = props;

    const classes = [base];

    // merge variants
    if (options.variants) {
      for (const key in options.variants) {
        const value =
          (rest[key] as string) ??
          (options.defaultVariants?.[key] as string | undefined);

        if (value && options.variants[key][value]) {
          classes.push(options.variants[key][value]);
        }
      }
    }

    // extra className
    if (className) {
      classes.push(className);
    }

    return classes.filter(Boolean).join(" ");
  };
}

export type VariantProps<T extends ReturnType<typeof cva>> =
  Parameters<T>[0];
