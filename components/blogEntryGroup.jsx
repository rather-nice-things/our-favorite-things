import BlogEntry from './blogEntry.jsx'

export default function BlogEntryGroup(props) {
  const blogEntryList = props.blogEntryList;
  console.log(blogEntryList);
  return (
    <div>
      {
        blogEntryList.map((entry, index) => {
          console.log("entry from BlogEntryGroup: ", entry);
          <BlogEntry entry={entry} />
        })
      }
    </div>
  )
}