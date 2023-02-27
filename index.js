const del_kor = () => {
    setInterval(() => {
        const kor_trends = document.querySelector('div[aria-label="타임라인: 실시간 트렌드"]')
        if (kor_trends) {
            kor_trends.remove()
        }
    }
    , 1);
}

const del_eng = () => {
    setInterval(() => {
        const eng_trends = document.querySelector('div[aria-label="Timeline: Trending now"]')
        if (eng_trends) {
            eng_trends.remove()
        }
    }
    , 1);
}

window.onload = function(){
    del_kor();
    del_eng();
};