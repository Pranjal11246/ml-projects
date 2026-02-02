#pip install speechrecognition pyttsx3
from datetime import datetime
import webbrowser
import requests
import speech_recognition 
import pyttsx3

engine = pyttsx3.init()
engine.setProperty('rate',150)

def speech(text):
    engine.say(text)
    engine.runAndWait()

def listen():
    rec= speech_recognition.Recognizer()
    with speech_recognition.Microphone() as source:
        print("Listening..")
        audio= rec.listen(source)
        try:
            query= rec.recognize_google(audio)
            print("You : ",query)
            return query.lower()
        except:
            print("Can't catch that")
            return ""

def get_news():
    url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=695e07af402f4b119f0703e9b19f4683"
    response=requests.get(url)
    data=response.json()
    articles= data['articles']
    for i in articles:
        print(i['title'])
        speech(i[title])

curr_time= datetime.now().time()
curr_time.strftime("%H:%M:%S")
curr_time.strftime("%I:%M:%S")
curr_time.strftime("%H:%M:%S %p")
chat= True
greet_msgs= ["hello", "hi", "greetings", "sup", "what's up"]
time_msgs= ["time", "current time", "tell me the time", "what's the time"]
date_msgs= ["date", "current date", "tell me the date", "what's the date"]
news_msgs= ["news", "tell me the news", "current news", "what's the news"]
while chat:
    user_msg= listen()

    if user_msg in greet_msgs:
        speech("Hello! How can I assist you today?")
        print("Hello! How can I assist you today?")

        print("Hello! How can I assist you today?")
    elif user_msg in time_msgs:
        print("The current time is:", curr_time.strftime("%I:%M:%S %p"))
    elif user_msg in date_msgs:
        print("Today's date is:", datetime.now().date())
    elif user_msg=="bye":
        print("Goodbye! Have a great day!")
        chat= False

    elif user_msg.startswith("open "):
        webbrowser.open("https://www." + user_msg[5:]+".com")
    
    elif "calculate" in user_msg:
        expression= user_msg.split("calculate")[-1].strip()
        result= eval(expression)
        print("Result is:",result)
        
            
    elif user_msg in news_msgs:
        print("Here are the latest news headlines:")
        get_news()
        
           
    else :
        print("I'm here to help with any questions you have.")