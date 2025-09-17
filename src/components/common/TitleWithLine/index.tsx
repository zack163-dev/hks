export default function TitleWithLine({ title }: { title: string }) {
  return (
    <div className="w-fit flex flex-col items-center">
      <div className="text-white text-[18px] leading-[1.36] font-kronaOne">
        {title.toUpperCase()}
      </div>
      <div className="w-12 h-1 gradient-bg mt-2"></div>
    </div>
  );
}
