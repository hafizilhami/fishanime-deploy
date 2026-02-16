"use client";

import Link from 'next/link';
import { FileSearchIcon } from '@phosphor-icons/react';
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className='flex justify-center items-center gap-4 flex-col'>
        <FileSearchIcon size={30} color='White' />
        <h1 className="text-3xl font-bold text-blue-500">
          Halaman tidak ditemukan
        </h1>
        <Link href="/" className="text-white hover:text-blue-700 transition-all duration-300">
          KEMBALI
        </Link>
      </div>
    </div>
  )
}

export default Page;