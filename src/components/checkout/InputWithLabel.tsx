import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

type InputWithLabelProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

export default function InputWithLabel({
  name,
  label,
  placeholder,
}: InputWithLabelProps) {
  return (
    <div>
      <Label id={name} className="mb-2 text-sm font-bold capitalize text-black">
        {label ? label : name}
      </Label>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder || ""}
      />
    </div>
  );
}
