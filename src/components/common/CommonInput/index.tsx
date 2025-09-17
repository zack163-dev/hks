import clsx from "clsx";
import search from "@/assets/search.svg";

interface ICommonInputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function CommonInput(props?: ICommonInputProps) {
  const { className, placeholder, value, onChange } = props || {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      className={clsx(
        "w-[258px] h-8 p-[1px] gradient-bg-1 rounded-[16px] overflow-hidden",
        className
      )}
    >
      <div className="w-full h-full rounded-[16px] px-5 py-2 bg-black flex items-center">
        <img src={search} alt="" className="w-[14px] h-[14px]" />
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder={placeholder || "Find a Project"}
          className="flex-1 ml-2 outline-none bg-transparent placeholder:text-[#616161] text-white placeholder:text-[11px] text-[12px]"
        />
      </div>
    </div>
  );
}
