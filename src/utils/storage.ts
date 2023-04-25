export const loadState = (key: string, typeOfValue?: string) => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem(key);
      if (!serializedState) {
        return undefined;
      }
      return JSON.parse(serializedState);
    }
  } catch (e) {
    return undefined;
  }
};

export const saveState = async (key: string, state: any) => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    }
  } catch (e) {}
};
