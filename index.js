const Del_Kor = () => {
  const observer = new MutationObserver(() => {
      const Kor_Trends = document.querySelector('div[aria-label="타임라인: 실시간 트렌드"]');
      if (Kor_Trends) {
          Kor_Trends.remove();
      }
  });
  observer.observe(document.body, { childList: true, subtree: true });
};

const Del_Eng = () => {
  const observer = new MutationObserver(() => {
      const Eng_Trends = document.querySelector('div[aria-label="Timeline: Trending now"]');
      if (Eng_Trends) {
          Eng_Trends.remove();
      }
  });
  observer.observe(document.body, { childList: true, subtree: true });
};

window.onload = function(){
  Del_Kor();
  Del_Eng();
};
