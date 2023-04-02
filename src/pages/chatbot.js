import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const { PythonShell } = require('python-shell');

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            mostRecentMessage: ""
        };
    }

    // initChatbotPy() {
    //     PythonShell.run('../AverageWarriorsFan/chatbot.py', null).then((messages) => {
    //         console.log('finished');
    //     });
    // }
    //
    // sendMessagePy(text) {
    //     let pyshell = new PythonShell('../AverageWarriorsFan/startConversation.py');
    //     pyshell.send(text);
    //     pyshell.on('message', function (message) {
    //         // received a message sent from the Python script (a simple "print" statement)
    //         console.log(message);
    //     });
    //
    //     pyshell.end(function (err,code,signal) {
    //         if (err) throw err;
    //         console.log('The exit code was: ' + code);
    //         console.log('The exit signal was: ' + signal);
    //         console.log('finished');
    //     });
    // }

    componentDidMount() {
        // this.initChatbotPy()
    }

    handleSendMessage = () => {
        // this.sendMessagePy(this.state.mostRecentMessage);
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