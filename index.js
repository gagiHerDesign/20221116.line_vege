import 'dotenv/config'
import linebot from 'linebot'
// 水果類
import fetchfruitsRoiDai from './commands/fetchfruits(熱帶).js'
import fetchfruitsInn from './commands/fetchfruits(硬核).js'
import fetchfruitsCitrus from './commands/fetchfruits(柑橘柚).js'
import fetchfruitsHigh from './commands/fetchfruits(高山).js'
import fetchfruitsHao from './commands/fetchfruits(厚皮).js'
import fetchfruitsBoa from './commands/fetchfruits(薄皮).js'
import fetchfruitsMelon from './commands/fetchfruits(瓜類水果).js'
// 蔬菜類
import fetchVegeWater from './commands/fetchVege(水生).js'
import fetchVegeMelon from './commands/fetchVege(瓜).js'
import fetchVegeBean from './commands/fetchVege(豆).js'
import fetchVegeKuo from './commands/fetchVege(果).js'
import fetchVegeRoot from './commands/fetchVege(根).js'
import fetchVegeGin from './commands/fetchVege(莖).js'
import fetchVegeGoo from './commands/fetchVege(菇).js'
import fetchVegeLeaf from './commands/fetchVege(葉菜).js'
import fetchVegeTao from './commands/fetchVege(調味).js'
import fetchVegeEan from './commands/fetchVege(醃漬).js'
// 搜尋功能
import fetchSearch from './commands/fetchSearch(搜尋).js'
import quickVege from './quick_replies_vege.js'
import quickFruit from './quick_replies_fruits.js'
import fetchCa from './commands/fetchCa.js'

// import express from 'express'

// const app = express()

// // dyno用
// import express from 'express'
// import wakeUpDyno from './wokeDyno.js' // my module!

const bot = linebot({
  channelID: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// // 自動喚醒避免heroku睡眠，我才能半夜抓剛好整天的資料 (上網找的方法)
// const app = express()

// app.listen(4001, () => {
//   wakeUpDyno('https://linebot--rain.herokuapp.com/') // will start once server starts
// })

bot.on('message', event => {
  if (event.message.text === '熱帶水果') {
    fetchfruitsRoiDai(event)
  } else if (event.message.text === '硬核類') {
    fetchfruitsInn(event)
  } else if (event.message.text === '柑橘柚類') {
    fetchfruitsCitrus(event)
  } else if (event.message.text === '高山類') {
    fetchfruitsHigh(event)
  } else if (event.message.text === '厚皮類') {
    fetchfruitsHao(event)
  } else if (event.message.text === '薄皮類') {
    fetchfruitsBoa(event)
  } else if (event.message.text === '瓜類水果') {
    fetchfruitsMelon(event)
  } else if (event.message.text === '水生類') {
    fetchVegeWater(event)
  } else if (event.message.text === '瓜類') {
    fetchVegeMelon(event)
  } else if (event.message.text === '豆類') {
    fetchVegeBean(event)
  } else if (event.message.text === '果類') {
    fetchVegeKuo(event)
  } else if (event.message.text === '根類') {
    fetchVegeRoot(event)
  } else if (event.message.text === '莖類') {
    fetchVegeGin(event)
  } else if (event.message.text === '菇類') {
    fetchVegeGoo(event)
  } else if (event.message.text === '葉菜類') {
    fetchVegeLeaf(event)
  } else if (event.message.text === '調味類') {
    fetchVegeTao(event)
  } else if (event.message.text === '醃漬類') {
    fetchVegeEan(event)
  } else if (event.message.text === '節氣口袋') {
    fetchCa(event)
  } else if (event.message.text === '搜尋') {
    const toSearch = (`
→歡迎使用蔬果查詢功能
   
------------------
◆ 請輸入:
查+(蔬果)
eg: 查空心菜
------------------
可查到蔬菜種類★
點擊以獲得近期漲跌趨勢圖↗`)
    event.reply(toSearch)
  } else if (event.message.text.startsWith('查')) {
    fetchSearch(event)
  } else if (event.message.text === '蔬菜') event.reply(quickVege)

  else if (event.message.text === '水果') event.reply(quickFruit)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

// const linebotParser = bot.parser()

// app.post('/', linebotParser)

// app.get('/', (req, res) => {
//   res.status(200).send('ok')
// })

// app.listen(process.env.PORT || 3000, () => {
//   console.log('機器人啟動')
// })
