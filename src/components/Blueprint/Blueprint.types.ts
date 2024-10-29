export interface BlueprintInterface {
  droppedItems: {
    headerState: string;
    contentState: string;
    bottomNavigationState: string;
  };
  clearHeaderSection: () => void;
  clearContentSection: () => void;
  clearBottomNavigationSection: () => void;
}
