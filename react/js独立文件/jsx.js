    // 1.使用表达式｛表达式｝
    let text = "你好";
    let myDom = <p> {
        text
    } </p>
    ReactDOM.render(myDom, document.getElementById("root"))