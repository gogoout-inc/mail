import { writeFile } from 'fs/promises'

import mjml2html from 'mjml'

import footer from '../../component/the/TheFooter.js'
import header from '../../component/the/TheHeader.js'

const output = mjml2html({
  tagName: 'mjml',
  attributes: {},
  children: [
    // Header
    header,

    // Body
    {
      tagName: 'mj-body',
      attributes: {
        'vertical-align': 'center'
      },
      children: [
        {
          tagName: 'mj-hero',
          children: [
            {
              tagName: 'mj-image',
              attributes: {
                src: 'https://gogoout-tw.s3.ap-northeast-1.amazonaws.com/email/welcome/en_1.jpeg',
                'fluid-on-mobile': true,
                href: 'https://gogoout.com/?utm_source=edm&utm_medium=register_cn&utm_campaign=banner1&utm_content=&utm_term=',
                padding: 0
              }
            },
            {
              tagName: 'mj-image',
              attributes: {
                src: 'https://gogoout-tw.s3.ap-northeast-1.amazonaws.com/email/welcome/en_2.jpeg',
                'fluid-on-mobile': true,
                href: 'https://gogoout.com/blog/2023cny/?utm_source=edm&utm_medium=register_cn&utm_campaign=banner2&utm_content=&utm_term=',
                padding: 0
              }
            },
            {
              tagName: 'mj-hero',
              attributes: {
                'background-url': 'https://gogoout-tw.s3.ap-northeast-1.amazonaws.com/email/welcome/en_3.jpeg',
                height: '350px',
                mode: 'fixed-height'
              },
              children: [
                {
                  tagName: 'mj-group',
                  attributes: {
                    padding: '87.5px 0 0 0'
                  },
                  children: [
                    {
                      tagName: 'mj-column',
                      children: [
                        {
                          tagName: 'mj-image',
                          attributes: {
                            width: '90px',
                            height: '90px',
                            'border-radius': '999px',
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s',
                            // src: '$facebook',
                            padding: '0 0 0 47.5%'
                          }
                        }
                      ]
                    },
                    {
                      tagName: 'mj-column',
                      children: [
                        {
                          tagName: 'mj-image',
                          attributes: {
                            width: '90px',
                            height: '90px',
                            'border-radius': '999px',
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s',
                            // src: '$facebook',
                            padding: 0
                          }
                        }
                      ]
                    }, {
                      tagName: 'mj-column',
                      children: [
                        {
                          tagName: 'mj-image',
                          attributes: {
                            width: '90px',
                            height: '90px',
                            'border-radius': '999px',
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s',
                            // src: '$facebook',
                            padding: '0 47.5% 0 0'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              tagName: 'mj-image',
              attributes: {
                src: 'https://gogoout-tw.s3.ap-northeast-1.amazonaws.com/email/welcome/en_4.jpeg',
                'fluid-on-mobile': true,
                padding: 0,
                href: 'https://gogoout.com/?utm_source=edm&utm_medium=register_cn&utm_campaign=foot&utm_content=&utm_term='
              }
            }
          ]
        }
      ]
    },

    // Footer
    footer
  ]
})

const content = output.html

writeFile('./welcome.html', content, err => {
  if (err) {
    console.error(err)
  }
})
