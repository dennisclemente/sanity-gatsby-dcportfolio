export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e6c2268281eb094bea6d210',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-dcportfolio-studio',
                  apiId: 'c0063f36-18a3-4210-a6c4-0901a1446569'
                },
                {
                  buildHookId: '5e6c2268f8f3c8a6c3115ae0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-dcportfolio',
                  apiId: 'a378e624-77c2-4dfc-b5f7-e3766475200d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennisclemente/sanity-gatsby-dcportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-dcportfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
