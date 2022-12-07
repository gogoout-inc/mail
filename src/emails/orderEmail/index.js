import { writeFile } from 'fs/promises'

import mjml2html from 'mjml'

import Color from '../../constant/theme/Color.js'
import Font from '../../constant/theme/Font.js'

const output = mjml2html({
  tagName: 'mjml',
  attributes: {},
  children: [{
    tagName: 'mj-body',
    attributes: {},
    children: [{
      tagName: 'mj-section',
      attributes: {},
      children: [
        {
          tagName: 'mj-text',
          attributes: {
            color: Color.primary,
            align: 'center',
            ...Font.title
          },
          content: '預約資訊'
        }, {
          tagName: 'mj-divider',
          attributes: {
            padding: '0px 25px',
            'border-color': Color.grey[5],
            'border-width': '2px'
          }
        }
      ]
    },
    {
      tagName: 'mj-section',
      attributes: {
        padding: 0
      },
      children: [
        {
          tagName: 'mj-column',
          attributes: {},
          children: [
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.secondary.DEFAULT,
                ...Font.subtitle
              },
              content: '取車地點'
            }, {
              tagName: 'mj-divider',
              attributes: {
                padding: '0px 25px',
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '店家名稱：高雄租車義達租車'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '店家地址：高雄市苓雅區凱旋三路579號'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '店家電話號碼：07-7221391'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '營業時間：'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '週一至週五 早上09:00到晚上21:00'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '週六至週日 早上09:00到晚上21:00'
            }
          ]
        },
        {
          tagName: 'mj-column',
          attributes: {},
          children: [
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.secondary.DEFAULT,
                ...Font.subtitle
              },
              content: '訂車單明細'
            }, {
              tagName: 'mj-divider',
              attributes: {
                padding: '0px 25px',
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '訂單編號：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '取車時間：YYYY-MM-DD HH:MM'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '還車時間：YYYY-MM-DD HH:MM'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '付款方式：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '發票方式：手機條碼：*****'
            }
          ]
        }
      ]
    },
    {
      tagName: 'mj-section',
      attributes: {
        padding: 0
      },
      children: [
        {
          tagName: 'mj-column',
          attributes: {},
          children: [
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.secondary.DEFAULT,
                ...Font.subtitle
              },
              content: '租車/取車人資料'
            }, {
              tagName: 'mj-divider',
              attributes: {
                padding: '0px 25px',
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '身分證字號：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '護照號碼：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '生日：YYYY-MM-DD'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '姓名：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '手機號碼：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: 'Email：*****'
            }
          ]
        },
        {
          tagName: 'mj-column',
          attributes: {},
          children: [
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.secondary.DEFAULT,
                ...Font.subtitle
              },
              content: '車輛資訊'
            }, {
              tagName: 'mj-divider',
              attributes: {
                padding: '0px 25px',
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '車輛：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '車輛細節：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '車輛配備：*****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '車輛保險：*****'
            }
          ]
        }
      ]
    }, {
      tagName: 'mj-section',
      attributes: {
        padding: 0
      },
      children: [
        {
          tagName: 'mj-column',
          attributes: {},
          children: [
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.secondary.DEFAULT,
                ...Font.subtitle
              },
              content: '店家政策'
            }, {
              tagName: 'mj-divider',
              attributes: {
                padding: '0px 25px',
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '1. *****'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '2. *****'
            }
          ]
        },
        {
          tagName: 'mj-column',
          attributes: {},
          children: [
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.secondary.DEFAULT,
                ...Font.subtitle
              },
              content: '訂車單明細'
            }, {
              tagName: 'mj-divider',
              attributes: {
                padding: '0px 25px',
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            },
            {
              tagName: 'mj-text',
              attributes: {
                color: Color.negative.default
              },
              content: '提醒您：取車時需攜帶身分證、駕照與本次交易的信用卡，如預訂付款的刷卡人非承租人，付款人應攜帶本次交易的信用卡與身分證一同到場取車。'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '超里程說明：超過400公里/日,每公里收取5元'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '燃油政策：同取車油量'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '訂單異動：訂單如需取消，請登入會員中心，即可進行處理或洽客服中心協助。'
            },
            {
              tagName: 'mj-text',
              attributes: {
              },
              content: '退訂政策：(一般)取車日6天前免費取消預約，3天前取消將退50%的租金，未符合條件不退款'
            }
          ]
        }
      ]
    }]
  }]
})

const content = output.html

writeFile('./orderEmail.html', content, err => {
  if (err) {
    console.error(err)
  }
})
