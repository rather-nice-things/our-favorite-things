import BlogEntryGroup from '../components/blogEntryGroup.jsx'
import getAllBlogEntries from './api/allBlogEntries'

const blogEntryList = [
  {
    author: "Testy McTestface",
    title: "My Title",
    body: "Lorem whatever blah blah",
  },
  {
    author: "Testy McTestface II",
    title: "My Sequel",
    body: "Lorem whatever blah blah",
  }
]

export default function Blog(props) {
  console.log(props)
  return (
    <div>
      <BlogEntryGroup blogEntryList={blogEntryList} />
    </div>
  )
}

export async function getStaticProps(context) {

  console.log(getAllBlogEntries())

  return {
    props: {},
  }
}