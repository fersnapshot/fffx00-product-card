import { cn } from "../utils";
import { useProductContext } from "./product-card-context";

export interface ProductButtonsProps {
  className?: string;
}
export const ProductButtons = ({ className }: ProductButtonsProps) => {
  const { count, increaseBy, maxCount } = useProductContext("ProductButtons");

  const isMaxReached = count === maxCount;

  return (
    <div className={cn("flex flex-row m-2.5", className)}>
      <button
        onClick={() => increaseBy(-1)}
        className="cursor-pointer border text-xl w-[30px] rounded-l-sm  hover:bg-neutral-600"
      >
        -
      </button>
      <div className="h-[30px] text-center w-[30px] pt-[3px] border-y">
        {count}
      </div>
      <button
        onClick={() => increaseBy(1)}
        className={cn(
          "cursor-pointer border text-xl w-[30px] rounded-r-sm  hover:bg-neutral-600",
          {
            "cursor-auto border-r-0 border-y-0 text-gray-500 hover:bg-transparent":
              isMaxReached,
          }
        )}
        disabled={isMaxReached}
      >
        +
      </button>
    </div>
  );
};
