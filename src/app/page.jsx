import Image from "next/image";
import "./page.css";
import DbTest from "./(pages)/test/DataBaseTest";

export default function Home() {
  return (
    <div className="mainBlock">
        Strona główna
        <DbTest/>
    </div>
  );
}
  
  
