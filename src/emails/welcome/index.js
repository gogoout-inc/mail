
import { readFile, writeFile } from 'fs/promises'

import mjml2html from 'mjml'

import Color from '../../constant/theme/Color.js'
import Font from '../../constant/theme/Font.js'
const json = JSON.parse(
  await readFile(
    new URL('./index.json', import.meta.url)
  )
)

console.log('json', json)

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
            'font-family': 'Helvetica',
            ...Font.title
          },
          // todo: i18n
          content: '預約資訊'
        }, {
          tagName: 'mj-divider',
          attributes: {
            'border-color': Color.grey[5],
            'border-width': '2px'
          }
        }
      ]
    },
    {
      tagName: 'mj-section',
      attributes: {},
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
              // todo: i18n
              content: '取車地點'
            }, {
              tagName: 'mj-divider',
              attributes: {
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
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
              // todo: i18n
              content: '訂車單明細'
            }, {
              tagName: 'mj-divider',
              attributes: {
                'border-color': Color.grey[5],
                'border-width': '2px'
              }
            }
          ]
        }
      ]
    }]
  }]
})

const content = output.html

writeFile('./welcome.html', content, err => {
  if (err) {
    console.error(err)
  }
})
