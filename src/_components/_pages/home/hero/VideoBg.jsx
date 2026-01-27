'use client'

export default function VideoBg({...props}) {
    return (
        <>
            <video 
            {...props}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            >
                <source src="/_page/home/filmZST1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}