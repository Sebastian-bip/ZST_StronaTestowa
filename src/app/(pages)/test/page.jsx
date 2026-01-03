import "./test.css"

export const metadata = {
    title: "CSS testing site"
}

export default function Test() {
    return(
        <>
            <div>
                <img hidden src="https://images.pexels.com/photos/33229939/pexels-photo-33229939.jpeg" alt=""/>
                <div className="test-container">
                    <div className="test-content">Test</div>
                </div>
            </div>
        </>
    )
}