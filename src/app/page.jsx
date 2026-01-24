import Image from "next/image";
import "./page.css";
import Link from "next/link";
import Test from "./(pages)/test/page";
import Testforpage from "./Testforpage";


export default function Home() {



  return (
    <div className="mainBlock" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px'}}>
        Strona główna
          <Link href="/test">test</Link>
          <Link href="/contact">contact (bardzo legit i napewno dziala)</Link>
          <Testforpage/>
    </div>
  );
}
  
  
