import { create } from 'zustand'

// Theme for the whole store: state + modules
type ThemeState = {
  initialTheme: 'light' | 'dark';
  toggleTheme: () => void;
}
//the create() function returns an hook, in this case it's useThemeStore()
//set() is the function that updates the state
export const useThemeStore = create<ThemeState>((set) => ({
  initialTheme: 'light',
  toggleTheme: () =>
    set((state) => ({
      initialTheme: state.initialTheme === 'light' ? 'dark' : 'light'
    }))
}));
