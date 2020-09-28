export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f71ea80f9a2310963cffc19',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hk6q7kcd',
                  apiId: '0b7b812f-96cd-4a30-a042-788a1ec5474c'
                },
                {
                  buildHookId: '5f71ea80a42cb5e4ccb35ad7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2pe6wr82',
                  apiId: '88ec9c71-eb8b-4b91-bac5-8b284a697dcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oddedodd/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2pe6wr82.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
