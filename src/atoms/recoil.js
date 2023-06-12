import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false, // 기본값은 false로 설정합니다 (라이트 모드)
});

export const isModal = atom({
  key: 'modal',
  default: false,
});

export const isModalRef = atom({
  key: 'modalRef',
  default: null,
});

export const isRegi = atom({
  key: 'Regi',
  default: false,
});

export const isBase = atom({
  key: 'Base',
  default: false,
});