export default function DetailRowVertical({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="grid grid-rows-[min-content_min-content] items-end">
        <p className="font-light text-sm">{label}</p>
        <p className="text-xl">{value}</p>
      </div>
      <hr className="w-full h-0.5 text-black my-1 bg-base-300" />
    </div>
  );
}

export function DetailRowHorizontal({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="grid grid-cols-3 items-end">
      <p className="font-light">{label}</p>
      <p className="text-lg line-clamp-2 col-span-2">{value}</p>
      <hr className="w-full h-0.5 text-black col-span-3 m-1 bg-base-300" />
    </div>
  );
}
