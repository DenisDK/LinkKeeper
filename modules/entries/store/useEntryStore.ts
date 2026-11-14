import { create } from "zustand";

import type { EntryStore } from "./types";

export const useEntryStore = create<EntryStore>((set) => ({
  isCreateDialogOpen: false,

  openCreateDialog: () => set({ isCreateDialogOpen: true }),

  closeCreateDialog: () => set({ isCreateDialogOpen: false }),

  setCreateDialogOpen: (open: boolean) => set({ isCreateDialogOpen: open }),
}));
