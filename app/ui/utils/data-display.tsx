interface DetailRowProps {
  label: string;
  value: string | number;
}

export function DetailRowVertical({ label, value }: DetailRowProps) {
  return (
    <div>
      <div className="grid grid-rows-[min-content_min-content] items-end">
        <p className="font-light text-sm">{label}</p>
        <p className="text-lg">{value}</p>
      </div>
      <hr className="w-full h-0.5 my-1 bg-base-300" />
    </div>
  );
}

export const DetailRowHorizontal = ({ label, value }: DetailRowProps) => (
  <div className="grid grid-cols-3 items-end">
    <p className="font-light">{label}</p>
    <p className="text-lg line-clamp-2 col-span-2">{value}</p>
    <hr className="w-full h-0.5 col-span-3 m-1 bg-base-300" />
  </div>
);

interface SectionInfoProps {
  title: string;
  contents: string[];
}

export function SectionInfo({ title, contents }: SectionInfoProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2>{title}</h2>
      {contents.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </div>
  );
}
