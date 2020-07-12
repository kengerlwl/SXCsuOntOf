
def getEpic():
    from requests import get
    import json


    # In[4]:


    url="https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=zh-CN&country=CN&allowCountries=CN,TW"
    #1.向伺服器傳送get請求
    response=get(url)
    #2.使用response處理伺服器的響應內容
    dataJson = response.text


    j = json.loads(dataJson)



    # In[15]:


    data = j['data']['Catalog']['searchStore']['elements']
    items=[]
    for i in data:
        item={}
        item['name'] = i['title']
        item['data'] = i['effectiveDate']
        item['image'] = i['keyImages'][0]['url']
        item['originPrice'] = i['price']['totalPrice']['fmtPrice']['originalPrice']
        url = 'https://www.epicgames.com/store/zh-CN/product/'+  i['productSlug'] + '/home'

        item['url'] = url
        
        
        items.append(item)


    # print(items)
    return items

