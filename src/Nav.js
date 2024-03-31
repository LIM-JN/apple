import './App.css';


function Nav () {

    return (
    <header className="App-header">
        <ul>
            <div className="img-box">
                <img src="/apple.svg"></img>
            </div>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>Tv 및 홈</li>
            <li>엔터테이먼트</li>
            <li>엑세서리</li>
            <li>고객지원</li>
            <div className="img-box">
                <img src="/search.svg"></img>
            </div>
            <div className="img-box">
                <img src="/bag.svg"></img>
            </div>
        </ul>
    </header>
    )
}

export default Nav;