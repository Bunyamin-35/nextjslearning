import Link from "next/link"

export default function Home() {
  return (
    <div style={{backgroundColor :"red",height:"80vh"}}>
      <div>This is Home Page</div>
      <Link href={"/blogs"}>To Blogs</Link>
      <Link href={"/blogs/1"}>To Blog-1</Link>
    </div>
  )
}
