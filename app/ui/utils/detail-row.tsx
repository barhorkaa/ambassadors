export default function DetailRow(detail: { label: string; value: string | number }) {
  return (
    <div>
      <p className="font-light">{detail.label}</p>
      <p className="pl-16 text-xl">{detail.value}</p>
    </div>
  );
}
