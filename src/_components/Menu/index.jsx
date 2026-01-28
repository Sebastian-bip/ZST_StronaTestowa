'use client';
import { useMenu } from "@/_lib/Providers/MenuContext";
import NavBar from "./navbar/NavBar";
import Menu from "./menu/Menu";


export default function Navigation() {

    const { isOpen, toggleMenu, closeMenu } = useMenu()

    

    return (
        <>
        <NavBar></NavBar>
        <Menu isOpen={isOpen}/>
        </>
    )
};