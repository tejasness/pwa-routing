import Link from "next/link"

const TestRoute = () => {
  return (
    <div className="bg-slate-800">   
            <a href="https://courses.robovice.org"><div className="hover:underline max-w-fit cursor-pointer text-white my-4 py-16">Courses Webapp</div></a>
            <Link href="/"><div className="hover:underline max-w-fit cursor-pointer text-white my-4 pb-16">PWA Home</div></Link>
    </div>
  )
}

export default TestRoute