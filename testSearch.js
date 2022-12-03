import axios from 'axios'
import * as cheerio from 'cheerio'
import tempSearch from './template/temp_search.js'

const searchNow = async () => {
  try {
    const { data } = await axios.get('https://www.twfood.cc/search?q=%E7%A9%BA%E5%BF%83%E8%8F%9C')
    const $ = cheerio.load(data)
    const search = []
    $('#vege .col-md-3').each(function () {
      search.push({
        title: $(this).find('.img-responsive').attr('alt'),
        link: 'https://www.twfood.cc' + $(this).find('.more-btn').attr('href'),
        pic: 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
      })
    })
    console.log(search)
  } catch (error) {
    console.log('error')
  } try {
    const { data } = await axios.get('https://www.twfood.cc/search?q=%E9%AB%98%E9%BA%97%E8%8F%9C')
    const $ = cheerio.load(data)
    const search = []
    $('#vege .col-md-3').each(function () {
      search.push({
        title123: $(this).find('.img-responsive').attr('alt'),
        link456: 'https://www.twfood.cc' + $(this).find('.more-btn').attr('href'),
        pic789: 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
      })
    })
    console.log(search)
  } catch (error) {
    console.log('error')
  }
}
export default async (event) => {
  try {
    // const { data } = await axios.get(`https://www.twfood.cc/search?q=${ event.message.text.substr(2) }`)
    const { data } = await axios.get('https://www.twfood.cc/search?q=%E7%A9%BA%E5%BF%83%E8%8F%9C')

    const $ = cheerio.load(data)
    const search = []
    $('#vege .col-md-3').each(function () {
      const bubble = JSON.parse(JSON.stringify(tempSearch))
      // title
      bubble.body.contents[3].contents[0].contents[0].contents[0].text = $(this).find('.img-responsive').attr('alt')
      // link
      bubble.body.contents[1].contents[0].contents[0].action.uri = 'https://www.twfood.cc' + $(this).find('.more-btn').attr('href')
      // pic
      bubble.body.contents[0].url = 'https://www.twfood.cc' + $(this).find('.img-responsive').attr('src')
      search.push(bubble)
      if (search.length >= 12) return false
    })
    // console.log(search[0].body.contents[1].contents[0].contents[0].action.uri)
    event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: search
      }
    })
  } catch (error) {
    console.log('error')
  }
}

searchNow()
