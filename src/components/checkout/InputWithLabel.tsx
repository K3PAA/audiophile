import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";
import { CheckoutFormValues } from "@/lib/types";
import { cn } from "@/lib/utils";

type InputWithLabelProps = {
  name: keyof CheckoutFormValues;
  register: UseFormRegister<CheckoutFormValues>;
  error?: FieldError | undefined;
  label?: string;
  placeholder?: string;
};

export default function InputWithLabel({
  name,
  register,
  error,
  label,
  placeholder,
}: InputWithLabelProps) {
  return (
    <div>
      <div className="mb-1 flex justify-between">
        <Label
          id={name}
          className="mb-2 text-sm font-bold capitalize text-black"
        >
          {label ? label : name}
        </Label>

        {error && (
          <p className="text-sm font-bold text-red-500">{error.message}</p>
        )}
      </div>
      <Input
        {...register(name)}
        id={name}
        placeholder={placeholder || ""}
        className={cn(
          "hover:ring-2 hover:ring-primary/40 focus:ring-2 focus:ring-primary",
          error && "border-red-500",
        )}
      />
    </div>
  );
}
