# 数据库注意事项

## 插入中文显示??
### 结果：使数据库的character-set-server默认为utf-8
修改mysql.conf.d
在[mysqld]标签前加入

'''
[client]  
default-character-set=utf8 
'''

在[mysqld]标签域的最后加入

'''
default-storage-engine=INNODB  
character-set-server=utf8 
collation-server=utf8_general_ci
'''
