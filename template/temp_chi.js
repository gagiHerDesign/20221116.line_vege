export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
    size: 'full',
    aspectRatio: '15:19',
    aspectMode: 'cover'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'none',
    contents: [
      {
        type: 'text',
        text: "Brown's Burger",
        size: 'xl',
        weight: 'bold'
      },
      {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: []
      }
    ],
    margin: 'none'
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'button',
        style: 'primary',
        color: '#905c44',
        margin: 'xxl',
        action: {
          type: 'uri',
          label: '來煮飯吧 !',
          uri: 'https://tw.news.yahoo.com/%E4%BA%8C%E5%8D%81%E5%9B%9B%E7%AF%80%E6%B0%A3%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F%E6%98%AF%E9%99%BD%E6%9B%86%E9%82%84%E6%98%AF%E9%99%B0%E6%9B%86%EF%BC%9F%E9%81%A9%E5%90%88%E5%90%83%E4%BB%80%E9%BA%BC%E6%96%99%E7%90%86%EF%BC%9F-084715941.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMa5bKMBiNYDvB87pM-qHWFy_TLxTVZyGBG3jsO8twBxIzvCgFZpuoNbBbPuglXcr8kdMd5nYOItT9EFUuVrH5Nw9hi14S3zWjsjveTKZzmklkgGQl3v8F80gX5n45QSmmWdr1ELlf7RAbUskm3IhTVzpS4U4LS8Q1D2t0czV7cH'
        }
      }
    ]
  }
}
