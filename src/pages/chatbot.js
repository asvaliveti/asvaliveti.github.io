import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            message: "",
            avgWarriorsFanResponse: "",
        };
    }

    handleSendMessage = async () => {
        const fetchPromise = fetch('https://average-warriors-fan.herokuapp.com/message', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: {message: this.state.messages}
        });
        console.log(fetchPromise)
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value})
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.messages.map((message, index) => (
                        <div key={index}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div>
                    <TextField
                        id="message-input"
                        label="Message"
                        margin="normal"
                        onChange={(e) => this.handleMessageChange(e)}
                    />
                    <Button variant="contained" onClick={this.handleSendMessage}>
                        Send
                    </Button>
                </div>
            </div>
        );
    }
}

export default Chatbot;