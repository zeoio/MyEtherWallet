/* eslint-disable no-undef */
import { CX_WEB3_DETECTED } from '../cxEvents';
export default async ({ event }, res, next) => {
  if (event !== CX_WEB3_DETECTED) return next();
  chrome.storage.sync.get('warned', item => {
    if (Object.keys(item).length === 0) {
      chrome.windows.create({
        url: chrome.runtime.getURL(
          `popupLoading.html#?navigate-to=web3-detected`
        ),
        type: 'popup',
        height: 487,
        width: 300,
        focused: true
      });
      chrome.storage.sync.set({ warned: 'true' });
    }
  });
};
