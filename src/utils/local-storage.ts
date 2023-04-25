export const setStorage = (name: string, value: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

export const getStorage = (name: string, type?: string) => {
  if (typeof window !== 'undefined') {
    const item = JSON.parse(localStorage.getItem(name) ?? type ?? '{}');
    return item;
  }
};

export const removeStorage = (name: string | Array<string>) => {
  if (typeof window !== 'undefined') {
    if (typeof name !== 'string') {
      name.map((item) => {
        localStorage.removeItem(item);
      });
    } else {
      localStorage.removeItem(name);
    }
  }
};

export const clearStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};
