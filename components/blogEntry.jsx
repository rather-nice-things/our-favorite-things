export default function BlogEntry(props) {
  console.log("Hello!");
  const entry = props.entry
  console.log("entry: ", entry)
  return (
    <div className="blog-entry">
      <Image src={entry.imageURL} alt="Randomly generated image." width={800} height={200} />
      <div>Title: {entry.title}</div>
      <div>Author: {entry.author}</div>
      <div>Date: {entry.date}</div>
      <div>{entry.body}</div>
    </div>
  )
}