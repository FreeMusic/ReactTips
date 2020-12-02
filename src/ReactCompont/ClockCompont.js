import React from "react";


class ClockCompont extends React.Component {

    constructor(props) {
        super(props);

        this.state = {date: new Date()};
    }

    render () {
        return (<div>
            <h1>Hello,World!</h1>
            <h2>我来了</h2>
            <h3>时间：{this.state.date.toLocaleTimeString()}</h3>
            <h4>sadasdadad</h4>
            <h5>12121212</h5>
            <h6>代课教师防守反击是否健康</h6>
            <h1>最后大是大非第三方代发是几点吧第三方本赛季得分不打算福建省大部分</h1>
            <div>
                <h3>12121212</h3>
                <h4>sadasdadad</h4>
                <h5>12121212</h5>
                <h6>代课教师防守反击是否健康</h6>
                <h1>最后大是大非第三方代发是几点吧第三方本赛季得分不打算福建省大部分</h1>
            </div>
        </div>)
    }
}

export default ClockCompont
