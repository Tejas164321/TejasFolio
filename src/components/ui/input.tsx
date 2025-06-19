/**
 * Input component for text input fields.
 * Uses tailwind CSS classes for styling and supports forwarding refs.
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input component implementation.
 * @param className - Additional class names.
 * @param type - Input type attribute.
 * @param props - Other input props.
 * @param ref - Ref forwarded to the input element.
 * @returns JSX element for the input.
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
