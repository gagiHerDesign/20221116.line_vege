export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '1:1',
        gravity: 'center',
        action: {
          type: 'uri',
          label: 'action',
          uri: 'https://www.twfood.cc/vege/LF1/%E8%95%B9%E8%8F%9C-%E5%A4%A7%E8%91%89%28%E7%A9%BA%E5%BF%83%E8%8F%9C%29'
        }
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            text: 'More',
            align: 'center',
            gravity: 'center'
          }
        ],
        borderWidth: 'normal',
        offsetEnd: 'xl',
        action: {
          type: 'uri',
          label: '了解更多',
          uri: 'https://www.twfood.cc/vege/LF1/%E8%95%B9%E8%8F%9C-%E5%A4%A7%E8%91%89%28%E7%A9%BA%E5%BF%83%E8%8F%9C%29'
        },
        cornerRadius: 'xxl',
        position: 'absolute',
        spacing: 'none',
        offsetTop: 'md',
        paddingAll: 'none',
        backgroundColor: '#ffffff',
        background: {
          type: 'linearGradient',
          angle: '0deg',
          startColor: '#85FFBD',
          endColor: '#FFFB7D'
        },
        width: '70px',
        height: '30px'
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [],
        position: 'absolute',
        background: {
          type: 'linearGradient',
          angle: '0deg',
          endColor: '#00000000',
          startColor: '#00000099'
        },
        width: '100%',
        height: '40%',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px'
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'Brown Grand Hotel',
                    size: 'xl',
                    color: '#ffffff'
                  }
                ]
              }
            ],
            spacing: 'xs'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '20px'
      }
    ],
    paddingAll: '0px'
  }
}
