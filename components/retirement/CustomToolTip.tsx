import { TooltipProps } from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  label?: string;
  payload?: {
    name: string;
    value: number;
    color: string;
  }[];
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
      }}
    >
      <p className="text-black font-bold">Año: {label}</p>

      {payload.map((entry, index) => (
        <p
          key={index}
          style={{ color: entry.color, margin: 0 }}
        >
          {entry.name}:{" "}
          <strong>${Number(entry.value).toLocaleString()}</strong>
        </p>
      ))}
    </div>
  );
};
