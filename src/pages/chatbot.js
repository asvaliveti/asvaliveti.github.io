import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

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
        axios.default.baseUrl = ''
        const config = {
            headers: {
                'Access-Control-Allow-Origin': 'https://average-warriors-fan.herokuapp.com/',
                'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
            },
            body: {
                message: this.state.message
            }
        };
        axios.get('https://asvaliveti.github.io/message', config)
            .then(response => this.setState({ totalReactPackages: response.data.total }));
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