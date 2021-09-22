import BlogEntryGroup from '../components/blogEntryGroup.jsx'
import { getBlogEntry } from '../database/database.js'

export default function Blog(props) {
  return (
    <div>
      <BlogEntryGroup blogEntryList={props.allBlogEntries} />
    </div>
  )
}

export async function getStaticProps(context) {

  const result = await getBlogEntry({})

  return {
    props: {
      allBlogEntries: JSON.parse(JSON.stringify(result))
    },
  }
}