import Image from "next/image";
import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mainBlock">
        Strona główna
          <Link href="/test">test</Link>
    </div>
  );
}
  
  
