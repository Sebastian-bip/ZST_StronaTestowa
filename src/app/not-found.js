import Link from "next/link"

export const metadata = {
    title: "404"
}

export default function NotFound() {
    return(
        <div>
            404
            <Link href="/">/</Link>
        </div>
    )
}

