export default function DetailRow(detail: { label: string; value: string | number }) {
  return (
    <div>
      <div className="grid grid-rows-[min-content_min-content] items-end">
        <p className="font-light text-sm">{detail.label}</p>
        <p className="text-xl">{detail.value}</p>
      </div>
      <hr className="w-full h-0.5 text-black my-1 bg-base-300" />
    </div>
  );
}
