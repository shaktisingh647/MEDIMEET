import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return <header>
    <nav>
        <Link href="/">
         <Image src="/logo.png" alt="MEDI-MEET" width={200} height={60} className={"h-10 w-auto object-contain"}/>
        </Link>
        <h1>MediMett</h1>
        <h1>Boxsam Medimeet</h1>
    </nav>
  </header>
}

export default Header
