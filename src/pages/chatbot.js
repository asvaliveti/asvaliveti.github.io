import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import fanPic from "../icons/fan.jpeg";
import warriorsFanPic from "../icons/warriorsFan.jpeg";
import {Grid} from "@mui/material";
import axios from "axios";

const ChatBotWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    width: "90vw",
    margin: "auto",
    backgroundColor: "#6F7378",
    borderRadius: 8,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    overflowY: "auto"
});

const ChatBubbleWrapper = styled("div")({
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px"
});

const ChatBubble = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: grey[300],
    borderRadius: "16px",
    padding: "8px 16px",
    margin: "0 10px",
    fontSize: "16px",
    fontWeight: 500,
    maxWidth: "60%",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    lineHeight: "1.5",
    [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
    },
}));

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hi there! How can I help you today?",
            sender: "bot",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messageEndRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setMessages([
                ...messages,
                {message: inputValue, sender: "user"},
            ]);
            setInputValue("");
        }
        const senderMessage = {message: inputValue}
        const res = await axios.post(
            "https://average-warriors-fan.herokuapp.com/test",
            senderMessage
        );
        setMessages([
            ...messages,
            {message: res.data, sender: "bot"},
        ]);
    };

    useEffect(() => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <ChatBotWrapper>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message.sender === "bot" && (
                            <ChatBubbleWrapper>
                                <Avatar src={warriorsFanPic} />
                                <ChatBubble>{message.message}</ChatBubble>
                            </ChatBubbleWrapper>
                        )}
                        {message.sender === "user" && (
                            <ChatBubbleWrapper style={{ justifyContent: "flex-end" }}>
                                <ChatBubble>{message.message}</ChatBubble>
                                <Avatar src={fanPic}/>
                            </ChatBubbleWrapper>
                        )}
                    </div>
                ))}
                <div ref={messageEndRef}></div>
            </div>
            <form onSubmit={handleFormSubmit} >
                <Grid container spacing={2} m={1}>
                    <Grid item xs={10}>
                        <TextField
                            label="Type your message here"
                            variant="outlined"
                            value={inputValue}
                            fullWidth
                            onChange={handleInputChange}
                            sx={{ marginTop: "auto", marginBottom: "10px", backgroundColor: grey[300], borderRadius: 3 }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            type="submit"
                            sx={{
                                backgroundColor: "#DA0017",
                                borderRadius: 4
                            }}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ChatBotWrapper>
    );
};

export default Chatbot;
