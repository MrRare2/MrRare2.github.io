# getGJLevelLists.php

Gets a list of levels.

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**accountID** - The account ID of the user who is searching the levels. Only sent when **type** is set to 8, 13 or when **type** is set to 5 and you are loading your own levels.  

**type** - Controls the fetch priority.  

| type | desc |
| ---- | ---- |
| 0 | most liked |
| 1 | most downloaded |
| 4 | recent |
| 5 | user's levels (uses the player ID, **not the account ID,** in the `str` parameter to get which user) |
| 6 | featured |
| 11 | recently awarded |
| 12 | levels from people you follow |
| 13 | friends |


**str** - Search string, required when `type` is 5

**diff** - Difficulty filter. A list of integers denoting the different difficulties. Negative difficulties are ignored when any positive one is specified.

| diff | desc |
| ---- | ---- |
| -1 | N/A (doesn't work, always returns no results) |
| -2 | Demons (use the `demonFilter` parameter to denote which demon type to search) (exclusive from -3) |
| -3 | Auto (exclusive from -2) |
| 1 | Easy |
| 2 | Normal |
| 3 | Hard |
| 4 | Harder |
| 5 | Insane |
| 6–10 | Easy to Extreme Demon, respectively |

**star** - Rated filter. Not sent when off, 1 for on.

**followed** - Required if `type` is 12. A comma separated list of player IDs, **not account IDs** of the people you follow.

## Response

Returns a list of [level objects](/resources/server/level) separated by pipes `|` and sorted by the parameters, a list of objects denoting the authors sorted by increasing player ID (format is `PLAYERID:USERNAME:ACCOUNTID`) which are also separated by pipes `|`, and a list of [song objects](/resources/server/song) sorted by increasing song ID and separated by `~:~`. The indexers for each are `:`, `:` and `~|~` respectively.

## Example

<!-- tabs:start -->

### **curl**

```cmd
curl -H "User-Agent:" http://www.boomlings.com/database/getGJLevelLists.php -X POST -d "secret=Wmfd2893gb7&type=6"
```


**Response**
```py
1:17:2:The Demon Trial:3:Q2FuIHlvdSBiZWF0IGFueXRoaW5nPw==:5:1:49:1187377:50:YunHaSeu14:10:12:7:10:14:2:19:1:51:10565740,3979721,28220417,42584142:28:1687427379:29:0|1:16:2:My New List:3:U2Vjb25kIGxpc3QuIFRlc3RpbmcgdmVyc2lvbnMu:5:4:49:71:50:RobTop:10:11:7:1:14:1:19:1:51:91530036,91427162:28:1687427214:29:1687478036#16:RobTop:71|36314:YunHaSeu14:1187377#1:0:10#f5da5823d94bbe7208dd83a30ff427c7d88fdb99
```

<!-- tabs:end -->
