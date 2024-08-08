import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { UseFormRegister } from "react-hook-form";
import { CheckoutFormValues } from "@/lib/types";

type InputWithLabelProps = {
  name: keyof CheckoutFormValues;
  register: UseFormRegister<CheckoutFormValues>;
  label?: string;
  placeholder?: string;
};

export default function InputWithLabel({
  name,
  register,
  label,
  placeholder,
}: InputWithLabelProps) {
  return (
    <div>
      <Label id={name} className="mb-2 text-sm font-bold capitalize text-black">
        {label ? label : name}
      </Label>
      <Input
        {...register(name)}
        id={name}
        placeholder={placeholder || ""}
        className="hover:ring-2 hover:ring-primary/40 focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
