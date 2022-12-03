import tempChi from './template/temp_chi.js'

// const calendar = async () => {
//   // const { data } = await axios.get('https://ecal.click108.com.tw/solarterms.php')
//   // const $ = cheerio.load(data)
//   // const date = $('#Gday_top_info').find('.Solar_img_mobile').attr('alt')
//   let chichi = ''
//   let img = ''
//   let url = ''

//   const Today = new Date()
//   const month = Today.getMonth() + 1
//   const day = Today.getDate()

//   console.log('今天日期是 ' + Today.getFullYear() + ' 年 ' + month + ' 月 ' + day + ' 日')

//   if ((month === 1 && day >= 6) || (month === 1 && day <= 18)) {
//     chichi = '小寒'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w5.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E5%B0%8F%E5%AF%92'
//   } else if ((month === 1 && day >= 19) || (month === 2 && day <= 3)) {
//     chichi = '大寒'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w6.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E5%A4%A7%E5%AF%92'
//   } else if ((month === 2 && day >= 4) || (month === 2 && day <= 18)) {
//     chichi = '立春'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s1.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E7%AB%8B%E6%98%A5'
//   } else if ((month === 2 && day >= 19) || (month === 3 && day <= 5)) {
//     chichi = '雨水'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s2.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E9%9B%A8%E6%B0%B4'
//   } else if ((month === 3 && day >= 5) || (month === 3 && day <= 20)) {
//     chichi = '驚蟄'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s3.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E9%A9%9A%E8%9F%84'
//   } else if ((month === 3 && day >= 21) || (month === 4 && day <= 4)) {
//     chichi = '春分'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s4.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E6%98%A5%E5%88%86'
//   } else if ((month === 4 && day >= 5) || (month === 4 && day <= 19)) {
//     chichi = '清明'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s5.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E6%B8%85%E6%98%8E'
//   } else if ((month === 4 && day >= 20) || (month === 5 && day <= 5)) {
//     chichi = '穀雨'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s6.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E7%A9%80%E9%9B%A8'
//   } else if ((month === 5 && day >= 6) || (month === 5 && day <= 20)) {
//     chichi = '立夏'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su1.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E7%AB%8B%E5%A4%8F%E9%A4%8A%E5%BF%83%E6%B0%A3-%E7%BE%A9%E5%BC%8F%E7%84%97%E7%83%A4%E5%BD%A9%E6%A4%92%E6%9D%AF-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-010000668.html'
//   } else if ((month === 5 && day >= 21) || (month === 6 && day <= 5)) {
//     chichi = '小滿'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su2.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E5%B0%8F%E6%BB%BF%E6%B8%85%E7%86%B1%E5%8E%BB%E6%BF%95-%E9%BA%BB%E5%A9%86%E5%86%AC%E7%93%9C-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-173514863.html'
//   } else if ((month === 6 && day >= 6) || (month === 6 && day <= 20)) {
//     chichi = '芒種'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su3.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E8%8A%92%E7%A8%AE%E8%A3%9C%E6%B0%A3%E6%8F%90%E7%A5%9E-%E6%B5%B7%E9%AE%AE%E9%B3%B3%E6%A2%A8%E7%82%92%E9%A3%AF-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-100635085.html'
//   } else if ((month === 6 && day >= 21) || (month === 7 && day <= 6)) {
//     chichi = '夏至'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su4.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E5%A4%8F%E8%87%B3%E8%A2%AA%E6%9A%91%E7%9B%8A%E6%B0%A3-%E9%A6%99%E8%8F%87%E7%B4%85%E6%A3%97%E8%93%AE%E5%AD%90%E7%87%92%E9%9B%9E-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-130530442.html'
//   } else if ((month === 7 && day >= 7) || (month === 7 && day <= 22)) {
//     chichi = '小暑'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su5.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E5%B0%8F%E6%9A%91-%E5%9B%9B%E5%AD%A3%E8%B1%86%E8%92%BC%E8%A0%85%E9%A0%AD-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-023729367.html'
//   } else if ((month === 7 && day >= 23) || (month === 8 && day <= 7)) {
//     chichi = '大暑'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su6.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E5%A4%A7%E6%9A%91%E9%99%8D%E6%BA%AB%E6%AD%A2%E6%B8%B4-%E8%A5%BF%E7%93%9C%E8%98%8B%E6%9E%9C%E7%B3%96%E9%86%8B%E8%82%89-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-071927701.html'
//   } else if ((month === 8 && day >= 8) || (month === 8 && day <= 22)) {
//     chichi = '立秋'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f1.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E7%AB%8B%E7%A7%8B%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E5%8D%97%E7%93%9C%E6%B3%A5%E5%A4%A7%E9%98%AA%E7%87%92%E7%B7%A9%E8%A7%A3%E7%A7%8B%E7%87%A5%E6%BD%A4%E8%82%BA%E7%9B%8A%E6%B0%A3-yahoo-tv-%E7%AF%80%E6%B0%A3%E9%A4%90%E6%A1%8C-153531143.html'
//   } else if ((month === 8 && day >= 23) || (month === 9 && day <= 7)) {
//     chichi = '處暑'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f2.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E8%99%95%E6%9A%91%E5%81%A5%E8%84%BE%E9%A4%8A%E8%83%83-%E9%B1%B8%E9%AD%9A%E6%8E%92%E6%B5%B7%E9%AE%AE%E6%BA%AB%E6%B2%99%E6%8B%89-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-164329186.html'
//   } else if ((month === 9 && day >= 8) || (month === 9 && day <= 22)) {
//     chichi = '白露'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f3.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E7%99%BD%E9%9C%B2%E9%98%B2%E6%BA%AB%E5%B7%AE%E8%AE%8A%E5%8C%96-%E4%B8%AD%E7%A7%8B%E6%9F%9A%E5%AD%90%E8%AE%8A%E8%BA%AB%E8%90%AC%E7%94%A8%E6%9E%9C%E9%86%AC-%E9%99%B3%E5%BE%B7%E7%83%88%E5%82%B3%E6%8E%88%E8%B6%85%E5%AF%A6%E7%94%A8%E5%88%9D%E7%A7%8B%E5%BB%9A%E6%88%BF%E9%AD%94%E8%A1%93-yahoo-tv-064334222.html'
//   } else if ((month === 9 && day >= 23) || (month === 10 && day <= 7)) {
//     chichi = '秋分'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f4.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E7%A7%8B%E5%88%86%E6%BB%8B%E9%99%B0%E8%A3%9C%E9%99%BD-%E6%A4%92%E9%B9%BD%E8%8A%8B%E7%B5%B2%E5%8F%B0%E7%81%A3%E9%AF%9B-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-142009172.html'
//   } else if ((month === 10 && day >= 8) || (month === 10 && day <= 23)) {
//     chichi = '寒露'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f5.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E5%AF%92%E9%9C%B2%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E9%85%B8%E8%BE%A3%E8%92%B8%E9%AD%9A%E6%B8%85%E7%88%BD%E9%AE%AE%E9%A6%99-%E4%BD%8E%E8%84%82%E7%BE%8E%E8%82%8C%E7%84%A1%E8%B2%A0%E6%93%94-yahoo-tv-155927283.html'
//   } else if ((month === 10 && day >= 24) || (month === 11 && day <= 7)) {
//     chichi = '霜降'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f6.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E9%9C%9C%E9%99%8D%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E9%9D%92%E6%9C%A8%E7%93%9C%E5%90%88%E8%8F%9C%E6%88%B4%E5%B8%BD-%E5%8F%A3%E6%84%9F%E8%B1%90%E5%AF%8C%E7%87%9F%E9%A4%8A%E6%BB%BF%E5%88%86-yahoo-tv-194111280.html'
//   } else if ((month === 11 && day >= 8) || (month === 11 && day <= 21)) {
//     chichi = '立冬'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w1.jpg'
//     url = 'https://tw.tv.yahoo.com/solartermtable/%E7%AB%8B%E5%86%AC%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E9%A6%99%E7%85%8E%E9%87%91%E7%9B%AE%E9%B1%B8%E4%BD%90%E7%95%AA%E7%9F%B3%E6%A6%B4%E8%8E%8E%E8%8E%8E%E9%86%AC-%E8%8A%AD%E6%A8%82%E6%B8%85%E7%94%9C%E9%B1%B8%E9%AD%9A%E9%AE%AE%E7%BE%8E-yahoo-tv-101138242.html'
//   } else if ((month === 11 && day >= 22) || (month === 12 && day <= 6)) {
//     chichi = '小雪'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w2.jpg'
//     url = 'https://wisdom-life.in/calendar/lunar-term/%E5%B0%8F%E9%9B%AA'
//   } else if ((month === 12 && day >= 7) || (month === 12 && day <= 21)) {
//     chichi = '大雪'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w3.jpg'
//     url = 'https://www.tatlerasia.com/style/wellness/solar-term-heavy-snow-eat-healthy-diet-stay-warm'
//   } else if ((month === 12 && day >= 22) || (month === 1 && day <= 5)) {
//     chichi = '冬至'
//     img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w4.jpg'
//     url = 'https://icook.tw/search/%E5%86%AC%E8%87%B3%E6%B9%AF%E5%9C%93/'
//   }

//   console.log(chichi, img, url)
// }

export default async (event) => {
  try {
    const Today = new Date()
    const month = Today.getMonth() + 1
    const day = Today.getDate()

    console.log('今天日期是 ' + Today.getFullYear() + ' 年 ' + month + ' 月 ' + day + ' 日')

    const replyflex = JSON.parse(JSON.stringify(tempChi))
    let chichi = ''
    let img = ''
    let url = ''

    if ((month === 1 && day >= 6) || (month === 1 && day <= 18)) {
      chichi = '小寒'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w5.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E5%B0%8F%E5%AF%92'
    } else if ((month === 1 && day >= 19) || (month === 2 && day <= 3)) {
      chichi = '大寒'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w6.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E5%A4%A7%E5%AF%92'
    } else if ((month === 2 && day >= 4) || (month === 2 && day <= 18)) {
      chichi = '立春'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s1.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E7%AB%8B%E6%98%A5'
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 5)) {
      chichi = '雨水'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s2.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E9%9B%A8%E6%B0%B4'
    } else if ((month === 3 && day >= 5) || (month === 3 && day <= 20)) {
      chichi = '驚蟄'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s3.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E9%A9%9A%E8%9F%84'
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 4)) {
      chichi = '春分'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s4.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E6%98%A5%E5%88%86'
    } else if ((month === 4 && day >= 5) || (month === 4 && day <= 19)) {
      chichi = '清明'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s5.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E6%B8%85%E6%98%8E'
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 5)) {
      chichi = '穀雨'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-s6.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E7%A9%80%E9%9B%A8'
    } else if ((month === 5 && day >= 6) || (month === 5 && day <= 20)) {
      chichi = '立夏'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su1.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E7%AB%8B%E5%A4%8F%E9%A4%8A%E5%BF%83%E6%B0%A3-%E7%BE%A9%E5%BC%8F%E7%84%97%E7%83%A4%E5%BD%A9%E6%A4%92%E6%9D%AF-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-010000668.html'
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 5)) {
      chichi = '小滿'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su2.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E5%B0%8F%E6%BB%BF%E6%B8%85%E7%86%B1%E5%8E%BB%E6%BF%95-%E9%BA%BB%E5%A9%86%E5%86%AC%E7%93%9C-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-173514863.html'
    } else if ((month === 6 && day >= 6) || (month === 6 && day <= 20)) {
      chichi = '芒種'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su3.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E8%8A%92%E7%A8%AE%E8%A3%9C%E6%B0%A3%E6%8F%90%E7%A5%9E-%E6%B5%B7%E9%AE%AE%E9%B3%B3%E6%A2%A8%E7%82%92%E9%A3%AF-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-100635085.html'
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 6)) {
      chichi = '夏至'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su4.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E5%A4%8F%E8%87%B3%E8%A2%AA%E6%9A%91%E7%9B%8A%E6%B0%A3-%E9%A6%99%E8%8F%87%E7%B4%85%E6%A3%97%E8%93%AE%E5%AD%90%E7%87%92%E9%9B%9E-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-130530442.html'
    } else if ((month === 7 && day >= 7) || (month === 7 && day <= 22)) {
      chichi = '小暑'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su5.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E5%B0%8F%E6%9A%91-%E5%9B%9B%E5%AD%A3%E8%B1%86%E8%92%BC%E8%A0%85%E9%A0%AD-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-023729367.html'
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 7)) {
      chichi = '大暑'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-su6.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E5%A4%A7%E6%9A%91%E9%99%8D%E6%BA%AB%E6%AD%A2%E6%B8%B4-%E8%A5%BF%E7%93%9C%E8%98%8B%E6%9E%9C%E7%B3%96%E9%86%8B%E8%82%89-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-071927701.html'
    } else if ((month === 8 && day >= 8) || (month === 8 && day <= 22)) {
      chichi = '立秋'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f1.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E7%AB%8B%E7%A7%8B%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E5%8D%97%E7%93%9C%E6%B3%A5%E5%A4%A7%E9%98%AA%E7%87%92%E7%B7%A9%E8%A7%A3%E7%A7%8B%E7%87%A5%E6%BD%A4%E8%82%BA%E7%9B%8A%E6%B0%A3-yahoo-tv-%E7%AF%80%E6%B0%A3%E9%A4%90%E6%A1%8C-153531143.html'
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 7)) {
      chichi = '處暑'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f2.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E8%99%95%E6%9A%91%E5%81%A5%E8%84%BE%E9%A4%8A%E8%83%83-%E9%B1%B8%E9%AD%9A%E6%8E%92%E6%B5%B7%E9%AE%AE%E6%BA%AB%E6%B2%99%E6%8B%89-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-164329186.html'
    } else if ((month === 9 && day >= 8) || (month === 9 && day <= 22)) {
      chichi = '白露'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f3.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E7%99%BD%E9%9C%B2%E9%98%B2%E6%BA%AB%E5%B7%AE%E8%AE%8A%E5%8C%96-%E4%B8%AD%E7%A7%8B%E6%9F%9A%E5%AD%90%E8%AE%8A%E8%BA%AB%E8%90%AC%E7%94%A8%E6%9E%9C%E9%86%AC-%E9%99%B3%E5%BE%B7%E7%83%88%E5%82%B3%E6%8E%88%E8%B6%85%E5%AF%A6%E7%94%A8%E5%88%9D%E7%A7%8B%E5%BB%9A%E6%88%BF%E9%AD%94%E8%A1%93-yahoo-tv-064334222.html'
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 7)) {
      chichi = '秋分'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f4.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E7%A7%8B%E5%88%86%E6%BB%8B%E9%99%B0%E8%A3%9C%E9%99%BD-%E6%A4%92%E9%B9%BD%E8%8A%8B%E7%B5%B2%E5%8F%B0%E7%81%A3%E9%AF%9B-%E5%B8%A5%E5%93%A5%E4%B8%BB%E5%BB%9A%E9%99%B3%E5%BE%B7%E7%83%88-x-%E7%BE%8E%E5%A5%B3%E4%B8%AD%E9%86%AB%E5%BD%AD%E6%BA%AB%E9%9B%85-142009172.html'
    } else if ((month === 10 && day >= 8) || (month === 10 && day <= 23)) {
      chichi = '寒露'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f5.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E5%AF%92%E9%9C%B2%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E9%85%B8%E8%BE%A3%E8%92%B8%E9%AD%9A%E6%B8%85%E7%88%BD%E9%AE%AE%E9%A6%99-%E4%BD%8E%E8%84%82%E7%BE%8E%E8%82%8C%E7%84%A1%E8%B2%A0%E6%93%94-yahoo-tv-155927283.html'
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 7)) {
      chichi = '霜降'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-f6.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E9%9C%9C%E9%99%8D%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E9%9D%92%E6%9C%A8%E7%93%9C%E5%90%88%E8%8F%9C%E6%88%B4%E5%B8%BD-%E5%8F%A3%E6%84%9F%E8%B1%90%E5%AF%8C%E7%87%9F%E9%A4%8A%E6%BB%BF%E5%88%86-yahoo-tv-194111280.html'
    } else if ((month === 11 && day >= 8) || (month === 11 && day <= 21)) {
      chichi = '立冬'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w1.jpg'
      url = 'https://tw.tv.yahoo.com/solartermtable/%E7%AB%8B%E5%86%AC%E9%A4%8A%E7%94%9F%E9%A3%9F%E8%A3%9C%E9%80%99%E6%A8%A3%E5%90%83-%E9%A6%99%E7%85%8E%E9%87%91%E7%9B%AE%E9%B1%B8%E4%BD%90%E7%95%AA%E7%9F%B3%E6%A6%B4%E8%8E%8E%E8%8E%8E%E9%86%AC-%E8%8A%AD%E6%A8%82%E6%B8%85%E7%94%9C%E9%B1%B8%E9%AD%9A%E9%AE%AE%E7%BE%8E-yahoo-tv-101138242.html'
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 6)) {
      chichi = '小雪'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w2.jpg'
      url = 'https://wisdom-life.in/calendar/lunar-term/%E5%B0%8F%E9%9B%AA'
    } else if ((month === 12 && day >= 7) || (month === 12 && day <= 21)) {
      chichi = '大雪'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w3.jpg'
      url = 'https://www.tatlerasia.com/style/wellness/solar-term-heavy-snow-eat-healthy-diet-stay-warm'
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 5)) {
      chichi = '冬至'
      img = 'https://web.commonhealth.com.tw/24-solar-term/images/solar-card/front-w4.jpg'
      url = 'https://icook.tw/search/%E5%86%AC%E8%87%B3%E6%B9%AF%E5%9C%93/'
    }
    replyflex.body.contents[0].text = chichi
    replyflex.hero.url = img
    replyflex.footer.contents[0].action.uri = url
    console.log(chichi)
    // event.reply({
    //   type: 'flex',
    //   altText: '節氣結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: chi
    //   }
    // })
    event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: replyflex
    })
  } catch (error) {
    console.log('error')
    event.reply('發生錯誤')
  }
}

// calendar()
