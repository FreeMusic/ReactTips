import React from "react";

class ButtonComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {isTouchOn:true};

        // 这个绑定是必要的，使`this`在回调中起作用
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isTouchOn: !prevState.isTouchOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isTouchOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default ButtonComponent;
