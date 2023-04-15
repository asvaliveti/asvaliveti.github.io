import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            message: "",
            avgWarriorsFanResponse: "",
            open: true
        };
    }

    handleSendMessage = async () => {
        fetch('http://localhost:4000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: this.state.message
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    handleModalChange = () => {
        this.setState({open: false})
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value})
    }

    render() {
        return (
            <div>
                <Modal
                    open={this.state.open}
                    onClose={this.handleModalChange}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                    }}
                    sx={{backgroundColor: "#FFFFFF", align: "center", borderRadius: 10, margin: "50px"}}
                >
                    <Typography mt={30} sx={{textAlign: "center"}}>This page is still under development!</Typography>
                </Modal>
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