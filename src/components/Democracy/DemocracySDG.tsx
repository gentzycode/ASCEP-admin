import { useGetAllSDGs } from "@/api/sdg";

export default function DemocracySDG() {
  const { data } = useGetAllSDGs();

  return (
    <div>
      <p className="mb-4 text-lg text-subtle_text">SDGs</p>

      <div className="flex gap-4 pb-1 overflow-x-auto custom-scrollbar">
        {data &&
          data.map((sdg) => (
            <img
              src={sdg.banner}
              key={sdg.id}
              className="object-contain h-[60px] w-[60px] rounded-lg"
              alt="sdg"
            />
          ))}
      </div>
    </div>
  );
}
