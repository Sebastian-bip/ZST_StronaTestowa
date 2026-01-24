'use client'
import Button from "@/_components/Buttons/Button";
import { useRouter } from "next/navigation";

export default function Testforpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${Math.random() * 1001}`); // Przykładowa nawigacja do nieistniejącej strony
    }

    return (
        <>
          <Button
            onClick={handleClick}
          >
            404
          </Button>
        </>
    )
}