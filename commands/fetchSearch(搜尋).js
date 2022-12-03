import axios from 'axios'
import * as cheerio from 'cheerio'
import tempSearch from '../template/temp_search2.js'
import _ from 'lodash'

export default async (event) => {
  try {
    const { data } = await axios.get(`https://www.twfood.cc/search?q=${event.message.text.substr(1)}`)

    const $ = cheerio.load(data)
    const search = []

    $('#vege .col-md-3').each(function () {
      const bubble = JSON.parse(JSON.stringify(tempSearch))
      // title(沒問題)
      bubble.body.contents[3].contents[0].contents[0].contents[0].text = $(this).find('.img-responsive').attr('alt')
      // link(!!!!!!!!!)
      bubble.body.contents[0].action.uri = 'https://www.twfood.cc' + $(this).find('.more-btn').attr('href')
      bubble.body.contents[1].action.uri = 'https://www.twfood.cc' + $(this).find('.more-btn').attr('href')
      // pic(沒問題)
      bubble.body.contents[0].url = 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
      search.push(bubble)
      // if (search.length >= 11) return false
    })
    // event.reply({
    //   type: 'flex',
    //   altText: '查詢結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: search
    //   }
    // })
    const replies = _.chunk(search, 12).map(search2 => {
      return {
        type: 'flex',
        altText: '水果查詢結果',
        contents: {
          type: 'carousel',
          contents: search2
        }
      }
    })
    event.reply(replies)
  } catch (error) {
    event.reply('發生錯誤，請稍後')
    console.log('error')
  }
}
