import sys
from chatbot import Chatbot

cb = Chatbot.getInstance()
cb.inputMessage(sys.argv[1])