import { Magic } from 'magic-sdk';

const magic = new Magic(process.env.REACT_APP_PK_KEY);

export const checkUser = async (cb, ref) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn && ref.current) {
    return cb(true);
  }
  return ref.current && cb(false);
};

export const loginUser = async (email, cb) => {
  try {
    await magic.auth.loginWithMagicLink({ email });
    return cb(true);
  } catch (error) {
    return cb(false);
  }
};

export const logoutUser = async (cb) => {
  await magic.user.logout();
  return cb(false);
};
