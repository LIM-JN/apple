import './App.css';


function Banner ({ title, copywrite, image, color }) {
    return (
        <div className="banner">
            <div className="text-wrap" 
            style={color === "white" ? {color:"white"}:{}}>
                <h2 >{title}</h2>
                <p>{copywrite}</p>
                <div className="cta-btns">
                    <a className="main-btn">더 알아보기</a>
                    <a className="sub-btn">구입하기</a>
                </div>
            </div>
            <div className="bg-box">
                <img src={image}/>
            </div>
        </div>
    )
}

export default Banner;