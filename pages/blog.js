import BlogEntryGroup from '../components/blogEntryGroup.jsx'

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

export default function Blog() {
  return (
    <div>
      <BlogEntryGroup blogEntryList={blogEntryList} />
    </div>
  )
}