import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false, // 기본값은 false로 설정합니다 (라이트 모드)
});

export const isModal = atom({
  key: 'modal',
  default: false,
})