export default {
  type: 'text',
  text: '選擇你想知道的水果類別吧 !',
  quickReply: {
    items: [
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5768/5768885.png',
        action: {
          type: 'message',
          label: '熱帶水果',
          text: '熱帶水果'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/4031/4031136.png',
        action: {
          type: 'message',
          label: '硬核類',
          text: '硬核類'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/4065/4065171.png',
        action: {
          type: 'message',
          label: '柑橘柚類',
          text: '柑橘柚類'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/740/740922.png',
        action: {
          type: 'message',
          label: '高山類',
          text: '高山類'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png',
        action: {
          type: 'message',
          label: '厚皮類',
          text: '厚皮類'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/590/590772.png',
        action: {
          type: 'message',
          label: '薄皮類',
          text: '薄皮類'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/713/713561.png',
        action: {
          type: 'message',
          label: '瓜類水果',
          text: '瓜類水果'
        }
      }
    ]
  }
}
