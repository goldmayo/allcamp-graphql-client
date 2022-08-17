export const CAMP_THEME = {
  Beach: "해변",
  Island: "섬",
  Mountain: "산",
  Forest: "숲",
  Velley: "계곡",
  River: " 강",
  Lake: "호수",
  Downtown: "도심",
} as const;

export type CAMP_THEME_VALUE = typeof CAMP_THEME[keyof typeof CAMP_THEME];
