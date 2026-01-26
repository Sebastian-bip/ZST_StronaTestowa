'use client';
import { useMenu } from "@/_lib/Providers/MenuContext";
import NavBar from "./navbar/NavBar";


export default function Menu() {

    const { isOpen, toggleMenu, closeMenu } = useMenu()

    return (
        <>
        <NavBar></NavBar>
            
            
        </>
    )
};