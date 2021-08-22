import React from 'react';

class Range extends React.Component{
    state = {
        val: '0',
        image: 'https://moslenta.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/05/13/23/4663260/e5290297a8c5f79664fe5821d52d3eaef81bb51d.jpg'
    }

    range = (event) =>{
        this.setState({val: event.target.value})
    }

    render(){
        return(
            <>
                <h2>Группа кино</h2>
                <input type="range" min='400' max='800' onInput={this.range} onChange={this.range} defaultValue='400'/>
                <p>{this.state.val}px X {this.state.val}px</p>
                <img src={this.state.image} alt="" style={{width : this.state.val + 'px'}} />
            </>
        )
    }
}

export default Range;
