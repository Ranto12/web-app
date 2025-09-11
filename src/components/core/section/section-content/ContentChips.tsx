import { listContent } from "@/data/content";

const ContentChips = ({
  items,
  selected,
  onSelect,
}: {
  items: typeof listContent;
  selected: number;
  onSelect: (index: number) => void;
}) => (
  <div className="flex gap-3 overflow-auto scrollbar-hide px-4 py-6 md:pt-8">
    {items.map((content, index) => (
      <div
        key={index}
        className={`px-4 py-2 rounded-4xl cursor-pointer ${
          selected === index ? "select-chip" : "unselect-chip"
        }`}
        onClick={() => onSelect(index)}
      >
        <p className="font-semibold text-sm whitespace-nowrap">
          {content.title}
        </p>
      </div>
    ))}
  </div>
);

export default ContentChips;
