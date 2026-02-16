import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ?
        <Link href={linkHref} className="text-blue-500 hover:underline">
          {linkTitle}
        </Link>
        : null
      }

    </div>
  )
}

export default Header;