import axios from 'axios'
import * as cheerio from 'cheerio'
import tempFruits from '../template/temp_fruits.js'
import _ from 'lodash'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.twfood.cc/topic/vege/%E6%B0%B4%E7%94%9F%E9%A1%9E')
    const $ = cheerio.load(data)
    const fruits = []
    $('.container #vege_chart').each(function () {
      const bubble = JSON.parse(JSON.stringify(tempFruits))
      bubble.hero.url = 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
      bubble.body.contents[0].text = $(this).find('.img-responsive').attr('alt')
      bubble.body.contents[1].contents[0].contents[1].text = $(this).find('tr:nth-child(5)').text()
      fruits.push(bubble)
      // if (fruits.length >= 12) return false
    })
    console.log(fruits[0].body.contents[1].contents[0].contents)
    // event.reply({
    //   type: 'flex',
    //   altText: '水果查詢結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: fruits
    //   }
    // })
    const replies = _.chunk(fruits, 12).map(fruits2 => {
      return {
        type: 'flex',
        altText: '水果查詢結果',
        contents: {
          type: 'carousel',
          contents: fruits2
        }
      }
    })
    event.reply(replies)
  } catch (error) {
    console.error('error')
  }
}
