from flask import Flask
import json
from epicSpider import *
import pickle
#设置递归深度，为了解决数据存储问题
import sys
sys.setrecursionlimit(10000)

app = Flask(__name__)
from path import *

@app.route('/getEpicFreeGame')
def getEpicFreeGame():
    games = {
        'content':getEpic(),
        'status':200
        }
    games = json.dumps(games)
    return games


#这里是js请求
# var data = null;

# var xhr = new XMLHttpRequest();
# xhr.withCredentials = true;

# xhr.addEventListener("readystatechange", function () {
#   if (this.readyState === 4) {
#     console.log(this.responseText);
#   }
# });

# xhr.open("GET", "http://127.0.0.1:5000/getEpicFreeGame");
# xhr.setRequestHeader("cache-control", "no-cache");
# xhr.setRequestHeader("postman-token", "1defae19-f4f7-b130-4903-c6857fa55182");

# xhr.send(data);






@app.route('/getNews')
def getNews():

    output = open(FileDir+'/../newspider/data.pkl', 'rb')
    data=pickle.load(output)
    output.close()

    news = {
        'content':data,
        'status':200
        }
    print(news)
    news = json.dumps(news)
    return news

# var data = null;

# var xhr = new XMLHttpRequest();
# xhr.withCredentials = true;

# xhr.addEventListener("readystatechange", function () {
#   if (this.readyState === 4) {
#     console.log(this.responseText);
#   }
# });

# xhr.open("GET", "http://127.0.0.1:5000/getNews");
# xhr.setRequestHeader("cache-control", "no-cache");
# xhr.setRequestHeader("postman-token", "8badb7af-4f51-c47a-d67e-e98b43a48710");

# xhr.send(data);








if __name__ == '__main__':



    app.debug = True
    app.run()