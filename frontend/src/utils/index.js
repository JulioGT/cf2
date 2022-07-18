export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      
      return JSON.parse(serializedState);
    } catch (e) {
      
      return undefined;
    }
  };