import CommonButton from "@/components/common/CommonButton";
import { clsx } from "clsx";

interface IRegisterModuleProps {
  className?: string;
}
export default function RegisterModule(props: IRegisterModuleProps) {
  const { className } = props;
  return (
    <div
      className={clsx(
        "flex items-end gap-[157px] px-[90px] justify-between",
        className
      )}
    >
      <div className="text-[80px] leading-[100.8px] text-white font-kronaOne">
        <div className="flex space-x-[28px] items-center">
          <h2>Scoop</h2>
          <h2 className="bg-gradient-to-r to-[#C4F5F8] from-[#8CF6A6] bg-clip-text text-transparent">
            AI
          </h2>
        </div>
        <h2>Hackathon</h2>
      </div>
      <div className="flex gap-[32px]">
        <CommonButton type="primary">Register</CommonButton>
        <CommonButton>Document</CommonButton>
      </div>
    </div>
  );
}
