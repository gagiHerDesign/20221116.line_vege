import axios from 'axios'
import * as cheerio from 'cheerio'
import tempFruits from '../template/temp_fruits.js'

// const fruit = async () => {
//   try {
//     const { data } = await axios.get('https://www.twfood.cc/topic/fruit/%E7%86%B1%E5%B8%B6%E6%B0%B4%E6%9E%9C')
//     const $ = cheerio.load(data)
//     const fruits = []
//     $('.container #vege_chart').each(function () {
//       fruits.push({
//         title: $(this).find('.img-responsive').attr('alt'),
//         price: $(this).find('tr:nth-child(5)').text(),
//         pic: 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
//       })
//     })
//     console.log(fruits)
//   } catch (error) {
//     console.log('error')
//   }
// }
const fruit = async () => {
  try {
    const { data } = await axios.get('https://www.twfood.cc/topic/fruit/%E7%86%B1%E5%B8%B6%E6%B0%B4%E6%9E%9C')
    const $ = cheerio.load(data)
    const fruits = []
    $('.container #vege_chart').each(function () {
      const bubble = JSON.parse(JSON.stringify(tempFruits))
      bubble.hero.url = 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
      bubble.body.contents[0].text = $(this).find('.img-responsive').attr('alt')
      bubble.body.contents[1].contents[0].contents[1].text = $(this).find('tr:nth-child(5)').text()
      fruits.push(bubble)
    })
    // event.reply({
    //   type: 'flex',
    //   altText: '水果查詢結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: fruits
    //   }
    // })
    // console.log(fruits)
  } catch (error) {
    console.error('error')
  }
}
fruit()
