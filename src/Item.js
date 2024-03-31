import './App.css';

function Item({image,title,color,desc}) {
    return(
        <div className="item">
            <div className="text-wrap"
                style={color === "white" ? {color:"white"}:{}}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="cta-btns">
                <a className="main-btn">더 알아보기</a>
                <a className="sub-btn">구입하기</a>
            </div>
            <div className="bg-box">
                <img src= {image} />
            </div>
        </div>
    )
}

export default Item;