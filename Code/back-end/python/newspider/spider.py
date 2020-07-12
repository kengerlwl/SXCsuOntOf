import aiohttp
import asyncio
import time
import pickle
from path  import *

#设置递归深度，为了解决数据存储问题
import sys
sys.setrecursionlimit(10000)

from bs4 import BeautifulSoup

ans = []

async def newsSpider(url, title):
    #print(f"started at {time.strftime('%X')}")

    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            print(resp.status)
            html = await resp.text()
            #print(html)
            soup = BeautifulSoup(html, 'html.parser')
            content = soup.find(attrs={'id':'vsb_content'})
            #ans[url]=content
            news = {
                'content':str(content),
                'url':url,
                'title':title
            }
            ans.append(news)
            #print(content)
    #print(f"finished at {time.strftime('%X')}")



async def spider():
    async with aiohttp.ClientSession() as session:
        async with session.get('http://cse.csu.edu.cn/index/tzgg.htm') as resp:
            print(resp.status)
            html = await resp.text()
            soup = BeautifulSoup(html, 'html.parser')
            ul = soup.find_all(attrs={'class':'download'})
            lis = ul[0].find_all('li')


            #解析页面
            urls = []

            for i in lis:
                #print(i.text)
                temp  = i.find('a')
                href = temp.get('href')

                url = 'http://cse.csu.edu.cn/'

                href = href.replace('..', '')
                #print(href)

                url = url + href

                urls.append([url,i.text])

            print(f"started at {time.strftime('%X')}")

            #创建子任务
            task = []

            for i in urls:
                t = newsSpider(i[0],i[1])
                task.append(t)


            # t1 = newsSpider(urls[0])
            # task.append(t1)

            await asyncio.wait(task)

            print(len(ans))

            #将变量存储到本地
            output = open(FileDir+'/data.pkl', 'wb')

            # Pickle dictionary using protocol 0.
            pickle.dump(ans, output)
            
            print(f"finished at {time.strftime('%X')}")







t = spider()

asyncio.run(t)