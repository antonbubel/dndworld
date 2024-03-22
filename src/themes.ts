export const darkTheme: string = 'night';
export const lightTheme: string = 'winter';
export const systemTheme: string = 'system';

export const defaultTheme = darkTheme;

export const themes = [
  {
    name: 'night',
    displayName: 'Night'
  },
  {
    name: 'winter',
    displayName: 'Winter'
  },
  {
    name: 'retro',
    displayName: 'Retro',
  },
  {
    name: 'cyberpunk',
    displayName: 'Cyberpunk',
  },
  {
    name: 'forest',
    displayName: 'Forest',
  },
  {
    name: 'wireframe',
    displayName: 'Wireframe',
  },
  {
    name: 'sunset',
    displayName: 'Sunset',
  }
] as const;