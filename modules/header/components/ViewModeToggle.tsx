import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Icons
import { FaList } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";

const ViewModeToggle = () => {
  return (
    <div className="border rounded-lg p-0.5">
      <ToggleGroup
        className="gap-0"
        variant="outline"
        defaultValue={["LayoutGrid"]}
      >
        <ToggleGroupItem
          className="border-none"
          value="LayoutGrid"
          aria-label="Toggle layout grid"
        >
          <LuLayoutGrid />
        </ToggleGroupItem>
        <ToggleGroupItem
          className="border-none"
          value="LayoutList"
          aria-label="Toggle layout list"
        >
          <FaList />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ViewModeToggle;
