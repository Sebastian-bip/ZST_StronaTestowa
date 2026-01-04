import Link from "next/link"

export const metadata = {
    title: "404"
}

export default function NotFound() {
    return(
        <div>
            <h1>404</h1>
            <p>Page: <b></b> does not exists!!!</p>
            <Link href="/">/</Link>
        </div>
    )
}

