import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex gap-1 bg-slate-600 border p-3">
        <Link href="/en" className="font-xl border border-black p-2 bg-white">en</Link>
        <div>|</div>
        <Link href="/ar" className="font-xl border border-black p-2 bg-white">ar</Link>
    </div>
  )
}

export default NavBar