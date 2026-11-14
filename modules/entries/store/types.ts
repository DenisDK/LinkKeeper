export type EntryStore = {
  isCreateDialogOpen: boolean;
  openCreateDialog: () => void;
  closeCreateDialog: () => void;
  setCreateDialogOpen: (open: boolean) => void;
};
