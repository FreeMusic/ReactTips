import React , {useState} from "react";


function HookSample() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);

    return (<div>
        <p>点击了{count}次</p>
        <button onClick={()=> setCount(count+1)}>
            点击
        </button>
    </div>)
}

export default HookSample;
