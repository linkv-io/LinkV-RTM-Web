# LinkV-Communication
* 商务合作与技术交流请加QQ群：1160896626，邮箱：develop@linkv.sg

此SDK主要是对 LinkV [音视频SDK](https://doc-zh.linkv.sg/web/rtc/api)和 [IM SDK](https://doc-zh.linkv.sg/web/im/api)的一层封装，使其接口更加简单易用。所有封装的代码都在 `LVCEngine` 文件夹下，您可以参考此文档或者 [demo](https://linkv-rtc-web.linkv.fun/) 来实现功能。当然您也可以在项目中直接引用LinkV [音视频SDK](https://doc-zh.linkv.sg/web/rtc/api)和[IM SDK](https://doc-zh.linkv.sg/web/im/api)相关的类来实现更加复杂的功能。

# 一、如何集成

## 下载SDK

直接引入 LVCEngine 下的 js 文件到本地。

# 二、 如何使用LVCEngine

## 前提条件

首先需要在 [开发者平台](https://dev.linkv.sg/) 注册账号，创建应用，然后获取 **SDK** 鉴权需要的 `appID` 和 `appSecret` ，在实现直播之前，请确认您已完成以下操作：

* [创建应用、获取 appID 和 appSecret](https://doc-zh.linkv.sg/platform/info/quick_start)
* Web 站点必须为 localhost 或 https


## 2.1 获取 im 和 rtc appId 和 appkey(只有 im 使用) 
```js
/***
 * appId      通过开发者平台获取
 * appSecret  通过开发者平台获取
 * return data (为了安全起见,获取方式需要放到服务端)
 */
   async getInfo() {
      try {
        const data = await this.$http({
          data: {
            appId,
            appSecret
          method: "post",
          url: "/linkv_decrypt",
          baseURL: "https://linkv-rtc-web.linkv.fun/",
        });
        console.log(data)
      } catch (error) {
        console.log("getInfo error", error);
      }
    }
```

## 2.2 初始化SDK

```js
/**
 *  userId      string  用户id
 *  imAppId     string  im appId
 *  rtcAppId    string  rtc appID
 *  imAppkey    string  im appKey
 *  token  im token  (你需要通过server to server方式获取IM的toke,然后传入)
*/

  const lvcEngine = new LVCEngine({userId,imAppId,rtcAppId,appKey:imAppkey,token})
```
## 2.3 登录SDK

```js
lvcEngine.login().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
```

## 2.4 设置IM私信事件监听

> 建议在初始化**sdk**时注册 IM 事件，如不注册，私信消息和房间消息都将无法收到。

```js
const  { personalManager} = lvcEngine
    personalManager.on("message",(value)=>{
      console.log(value)
    })
```

## 2.5 发送私信事件消息

`私信:`即点对点IM消息，发送给指定userId的用户

```js
/**
 *  userId   string 用户id
 *  content  string 需要发送的内容
 *  type     string 消息类型
*/

personalManager.sendEventMessage(userId,content,type).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

# 三、使用LVCEngine实现直播间功能

## 3.1 登录房间

```js
/**
 *  roomId 用户id
 *  role  1 主播 2 非主播
*/

let lvcEngine.joinRoom(roomId,role);
```

## 3.2 发送直播间消息

```js
/**
 *  roomId 用户id
 *  content 消息内容
 *  type 消息类型
*/

let lvcEngine.liveroomManager.sendDIYMessage(roomId,content,type);
```

注册 IM 和音视频事件回调

```js
cosnt  {liveroomManager} = lvcEngine
/**
 * 网络断开连接
 * 
*/
 lvcEngine.on("disconnect",(err) => {
        console.log("disconnect", err);
      });
/**
 * 房间人员变更
 * code  0 人员离开 1人员加入 
 * streamList 
*/
 lvcEngine.on("stream-update",({code,streamList})=>{
 })      
/**
 * 拉流状态变更
 * code 0 拉流失败 1 拉流成功
 * streamId 流Id
 * state 状态  NO_PLAY PLAYING
*/
lvcEngine.on("play-state-update", ({code,streamId,state})=>{

})
/**
 * 推流状态变更
 * code 0 推流失败 1 推流成功
 * state 状态 NO_PUBLISH PUBLISHING
*/
lvcEngine.on("publish-state-update", ({code,streamId,state})=>{

})

/**
 * 直播间消息
 * 
*/
liveroomManager.on("message",(value)=>{
    console.log(value)
})

```

## 3.3 添加预览视图并往服务器推流

在**登录房间成功的回调**里 `添加预览视图` 和 `推流`

```js
/**
 * 添加预览视图
 * source  具体souce描述 请查看 https://doc-zh.linkv.sg/web/chat/api#%E5%88%9B%E5%BB%BA%E6%B5%81
 *  视频源类型通过  
*/
funtion async publishStream(streamId){
    try{
      const stream = await lvcEngine.createStream(source)lvcEngine.startPublishingStream(streamId,stream)
    }catch(err){
        console.log(err)
    }
}
```

## 3.4 拉取或者停止拉取房间中其他人的视频流

在 `stream-update` 这个回调中拉取或者停止拉取他人的视频流

```js
/**
 * 拉取
 * userId 拉取的用户 ID
*/
lvcEngine.startPlayingStream(userId).then(mediastream=>{
    // 将 mediastream 绑定到 video 上进行播放
    console.log(mediastream)
}).catch(err=>{
    cosnole.log(err)
})
/**
 * 停止拉取
 * userId 拉取的用户 ID
*/
lvcEngine.stopPlayingStream(userId).then(()=>{
    console.log('停止拉流成功')
}).catch(err=>{
    cosnole.log(err)
})
```

## 3.5 退出房间

```js
lvcEngine.logout()
```

# 四 api 接口文档

详细的 api 接口文档请点击[查看](LVCEngine/api.md)




