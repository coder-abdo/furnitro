import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  labelName: string;
  inputType: string;
  inputPlaceholder: string;
  inputId: string;
};
export const InputWithLabel = ({
  labelName,
  inputType,
  inputPlaceholder,
  inputId,
}: Props) => {
  return (
    <div className="grid w-full gap-1.5 mb-8">
      <Label htmlFor={inputId} className="font-medium text-base">
        {labelName}
      </Label>
      <Input
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        className="py-6 rounded-md border-gray-400"
      />
    </div>
  );
};
