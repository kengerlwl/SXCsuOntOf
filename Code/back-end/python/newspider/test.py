import aiohttp
import asyncio
import time

from bs4 import BeautifulSoup

ans = []

async def newsSpider(url):
    #print(f"started at {time.strftime('%X')}")

    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            print(resp.status)
            html = await resp.text()
            #print(html)
            soup = BeautifulSoup(html, 'html.parser')
            content = soup.find(attrs={'id':'vsb_content'})
            ans.append({url:content})
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
                # print(i.text)
                temp  = i.find('a')
                href = temp.get('href')

                url = 'http://cse.csu.edu.cn/'

                href = href.replace('..', '')
                #print(href)

                url = url + href

                urls.append(url)

            print(urls[1:5])
            print(f"started at {time.strftime('%X')}")

            #创建子任务
            task = []

            for i in urls:
                t = newsSpider(i)
                task.append(t)


            # t1 = newsSpider(urls[0])
            # task.append(t1)

            await asyncio.wait(task)

            print(ans)
            
            print(f"finished at {time.strftime('%X')}")







t = spider()

asyncio.run(t)