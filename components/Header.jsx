import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return <header>
    <nav>
        <Link href="/">
         <Image src="/logo.png" alt="MEDI-MEET" width={200} height={60} className={"h-10 w-auto object-contain"}/>
        </Link>
         <h1>Medimeet</h1>
         <p>Here is the new medimeet app which helps patients to book appointments with the doctors</p>
    </nav>
  </header>
}

export default Header
