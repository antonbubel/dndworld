const circles: Readonly<{ [key: number]: string }> = {
  1: 'Авернус',
  2: 'Дис',
  3: 'Минаурос',
  4: 'Флегетос',
  5: 'Стигия',
  6: 'Малболг',
  7: 'Маладомини',
  8: 'Кания',
  9: 'Нессус',
} as const;

export function getCircleName(circle: number): string {
  return circles[circle] || '';
}