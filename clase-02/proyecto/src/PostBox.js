import React, { Component } from 'react';

class PostBox extends Component {
    handleOnKeyPress(e){
        if (e.charCode === 13){ // === dice que tiene que ser un numero y de valor 13
            alert('Enter');
        }
    }
    render() {
        return (
            <textarea onKeyPress={this.handleOnKeyPress.bind(this)}></textarea>
        );
    }
}

export default PostBox;
