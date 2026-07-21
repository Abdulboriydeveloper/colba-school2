export const BITRIX_URL =
  'https://colba-crm.bitrix24.kz/rest/1/tujlbuciogxsgoij/crm.lead.add.json';

export const BRANCHES = [
  { value: 'tinchlik', label: 'Tinchlik filiali (Toshkent shahri)' },
  { value: 'chilonzor', label: 'Chilonzor filiali (Toshkent shahri)' },
  { value: 'yunusobod', label: 'Yunusobod filiali (Toshkent shahri)' },
  { value: 'samarqand', label: 'Samarqand filiali (Samarqand shahri)' },
];

export const GRADES = ['5', '6', '7', '8', '9', '10'].map((grade) => ({
  value: grade,
  label: `${grade}-sinf`,
}));

export const FIELD_IDS = {
  filial: { tinchlik: 1147, chilonzor: 775, yunusobod: 779, samarqand: 1075 },
  grade: { 5: 1095, 6: 1097, 7: 1099, 8: 1101, 9: 1103, 10: 1105 },
  city: { tinchlik: 1211, chilonzor: 1211, yunusobod: 1211, samarqand: 1213 },
};

export const TELEGRAM_LINKS = {
  tinchlik: 'https://t.me/colba_taqdimot',
  chilonzor: 'https://t.me/colba_taqdimot',
  yunusobod: 'https://t.me/colba_taqdimot',
  samarqand: 'https://t.me/colba_maktabi_samarqand',
};

export const SOURCE_IDS = {
  youtube: 'UC_28NXX8',
  instagram: 'UC_TC7AYC',
  telegram: 'UC_P9K0YI',
  facebook: 'ADVERTISING',
  organic: 'WEB',
};
