"use client";

import { FaPlus } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { useEntryStore } from "../store/useEntryStore";

const CreateEntryButton = () => {
  const openCreateDialog = useEntryStore((state) => state.openCreateDialog);

  return (
    <Button
      size="icon"
      aria-label="Create new entry"
      onClick={openCreateDialog}
      className="fixed bottom-3 right-3 z-50 size-11 rounded-full shadow-lg bg-[#353535] hover:bg-[#454545] dark:bg-[#dadada] dark:hover:bg-[#c5c5c5] transition-colors"
    >
      <FaPlus className="size-5" />
    </Button>
  );
};

export default CreateEntryButton;
