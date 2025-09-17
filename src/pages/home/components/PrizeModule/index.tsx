import down from "@/assets/down.svg";
import cup from "@/assets/cup.svg";

interface IPrizeModuleProps {
  className?: string;
}

export default function PrizeModule(props?: IPrizeModuleProps) {
  return (
    <div className={props?.className}>
      <h3 className="w-[913px] text-white text-lg leading-[1] text-center mx-auto">
        Join the premier technology competition Compete, innovate, and win. Join
        the premier technology competition Compete, innovate, and winoin the
        premier technology competition Compete, innovate, and winoin the premier
        technology competition Compete, innovate, and win
      </h3>
      <div className="flex flex-col items-center mt-[77px]">
        <img src={down} alt="" className="w-[30px] h-[30px]" />
        <div className="w-[603px] h-[188px] flex justify-center items-center gradient-bg-1 mt-[46px] rounded-[20px]">
          <div className="w-[601px] h-[186px] flex flex-col justify-center items-center relative bg-black rounded-[20px]">
            <span className="gradient-text-1 font-kronaOne text-[64px] leading-[1.36]">
              $100,000
            </span>
            <span className="text-[#B3B3B3] font-kronaOne text-[18px] leading-[1.36]">
              IN GAS
            </span>
            <div className="w-[268px] flex absolute bg-black -top-4 left-1/2 transform -translate-x-1/2 gap-2 items-center justify-center">
              <img src={cup} alt="" className="w-8 h-8" />
              <span className="gradient-text text-[24px] leading-[1.36] font-kronaOne">
                PRIZE POOL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
