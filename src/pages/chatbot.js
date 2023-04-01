import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from "../firebase";
import { ref, set } from "firebase/database";

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            mostRecentMessage: ""
        };
    }

    handleSendMessage = () => {
        let jsonObj = {
            "message": this.state.mostRecentMessage,
            "timestamp": Date.now()
        }
        set(ref(db, 'inputMessages'), jsonObj);
    }

    handleMessageChange = (e) => {
        this.setState({mostRecentMessage: e.target.value})
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