import Link from "next/link"
import ButtonTest from "./btntest"
import "./test.css"



export const metadata = {
    title: "CSS testing site"
}

export default function Test() {


    return(
        <>
            <div className="testing">
                <div>
                    <img src="https://images.pexels.com/photos/33229939/pexels-photo-33229939.jpeg" alt=""/>
                </div>
                <div className="test-container">
                        <div className="test-content">Warning</div>
                        <ButtonTest></ButtonTest>
                </div>
                <Link href="/"><div style={{"height": '600px'}}>home</div></Link>
            </div>

        </>
    )
}