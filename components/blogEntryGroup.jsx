import BlogEntry from './blogEntry.jsx'

export default function BlogEntryGroup(props) {
  const blogEntryList = props.blogEntryList;
  return (
    <div>
      {
        blogEntryList.map((entry, index) => {
          return <BlogEntry entry={entry} key={entry.title}/>
        })
      }
    </div>
  )
}