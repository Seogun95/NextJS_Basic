enum RoutPath {
  HOME = '/',
  SETTINGS = '/settings',
  ABOUT = '/about',
}

const ABOUT = {
  HOME: RoutPath.ABOUT,
};

const SETTINGS = {
  HOME: RoutPath.SETTINGS,
  MYPAGE: `${RoutPath.SETTINGS}/mypage`,
  CART: `${RoutPath.SETTINGS}/cart`,
  ALARM: `${RoutPath.SETTINGS}/alarm`,
};

export const ROUT = {
  ABOUT,
  SETTINGS,
};
