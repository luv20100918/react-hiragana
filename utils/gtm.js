/**
 * GTM 이벤트를 발송하는 함수
 * @param {string} eventName - 이벤트 이름
 * @param {Object} eventParams - 이벤트 파라미터
 */
export const pushGTMEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }
}; 