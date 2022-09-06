import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/projects/Card'
import { PageSEO } from '@/components/SEO'
import TechList from '@/components/Landing/TechList'

export default function projects({ projects }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="flex space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="page-title">Projects</h1>
        </div>
        <TechList />

        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects
              ?.filter((f) => f.topics.includes('portfolio'))
              .map((d) => (
                <Card
                  id={d.id}
                  key={d.id}
                  title={d.name}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.html_url}
                  stack={d.topics}
                  preview={d.homepage}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.github.com/users/ted2xmen/repos?per_page=100&page=1')
  const projects = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  }
}
