import CommonInput from "@/components/common/CommonInput";
import clsx from "clsx";
import { useMemo, useState } from "react";
import case1 from "@/assets/showcase/case1.png";
import case2 from "@/assets/showcase/case2.png";
import case3 from "@/assets/showcase/case3.png";
import case4 from "@/assets/showcase/case4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface IShowCaseModuleProps {
  className?: string;
}

interface ICaseItem {
  id: number | string;
  img: string;
  title: string;
  description: string;
}

const cases: ICaseItem[] = [
  {
    id: 1,
    img: case1,
    title: "AI-Powered Urban Energy Optimization123",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
  },
  {
    id: 2,
    img: case2,
    title: "AI-Powered Urban Energy Optimization",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
  },
  {
    id: 3,
    img: case3,
    title: "AI-Powered Urban Energy",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification.",
  },
  {
    id: 4,
    img: case4,
    title: "AI-Powered Urban Energy",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification.",
  },
  //   {
  //     id: 5,
  //     img: case1,
  //     title: "AI-Powered Urban Energy",
  //     description:
  //       "Conduct multi-dimensional blockchain address investigations: Smart Money identification.",
  //   },
];
export default function ShowCaseModule(props?: IShowCaseModuleProps) {
  const { className } = props || {};
  const [searchValue, setSearchValue] = useState("");

  const filteredData = useMemo(() => {
    return cases.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <div className={clsx("w-[1088px] mx-auto", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-[24px] leading-[1.36] gradient-text font-kronaOne">
          SHOWCASE
        </h3>
        <CommonInput value={searchValue} onChange={setSearchValue} />
      </div>
      <Swiper
        className="mt-9"
        modules={[Navigation]}
        navigation={true}
        spaceBetween={16}
        slidesPerView={4}
      >
        {filteredData.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="flex-shrink-0 rounded-2xl overflow-hidden bg-white w-[260px] h-[266px] relative"
                key={index}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-fit absolute top-0 left-0 object-cover"
                />
                <div
                  className={clsx(
                    "px-6 py-3 break-words mt-[130px] h-full",
                    index % 2 === 0 ? "bg-[#C1F5F3]" : "bg-[#8AEFC9]"
                  )}
                >
                  <div className="line-clamp-2 text-[16px] font-medium leading-[20.63px] text-black">
                    {item.title}
                  </div>
                  <div className="mt-2 text-[12px] leading-[16px] text-[#373737] line-clamp-3">
                    {item.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
