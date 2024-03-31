import './App.css';
import Banner from './Banner.js';
import Item from './Item.js';
import Header from './Header.js'


function App() {
  return (
    <div className="App">      
      <Header></Header>
      <div class="banner-wrap">
        <Banner title="MacBook Air" 
        copywrite="날렵하게. 강력하게. M3답게." 
        image = "banner1.jpg">
        </Banner>
        <Banner title="iPhone 15 Pro" 
        copywrite="티타늄. 초강력. 초경량. 초프로." 
        image = "banner2.jpg" color = "white">
        </Banner>
        <Banner title="iPhone 15" 
        copywrite="새로운 카메라. 새로운 디자인. 새로움이 물씬." image = "banner3.jpg" >
        </Banner>
      </div>
      <div class="item-wrap">
        <Item image="item1.jpg" desc="Apple WWDC(세계개발자회의).
        6월 10일-14일(태평양 연안 표준시), 온라인에서 만나요."
        color = "white"></Item>
        <Item image="item2.jpg" title="Apple WATCH"
        desc = "보다 똑똑. 보다 또렷. 보다 강력."
        color = "white"></Item>
        <Item image="item3.jpg" title="MacBook Pro"
        desc = "비교 불가 성능. 시선 강탈 매력."></Item>
        <Item image="item4.jpg" title="불금엔 야구"
        desc = "드디어 돌아온 야구의 계절. 매주 금요일(미국 시간) 생중계." color = "white"></Item>
        <Item image="item5.jpg" title="iPad"
        desc = "쓰다. 그리다. 빠져들다."></Item>
        <Item image="item6.jpg" title="AirPods Pro"
        desc="전에 없던 청취 경험. 적응형 오디오."
        color = "white"></Item>
      </div>
    </div>

  );
}

export default App;
