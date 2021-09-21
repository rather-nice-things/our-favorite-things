import Image from 'next/image'

export default function BlogEntry(props) {
  const entry = props.entry
  return (
    <div className="blog-entry">
      {entry.imageURL && <Image src={entry.imageURL} alt="Randomly generated image." width={800} height={200} />}
      <div>Title: {entry.title}</div>
      <div>Author: {entry.author}</div>
      <div>Date: {entry.date}</div>
      <div>{entry.body}</div>
    </div>
  )
}