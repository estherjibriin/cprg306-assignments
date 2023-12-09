import React from 'react';
import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
  return (
    <main  className="bg-blue-100 p-4">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p>
        <Link href="/week2">
          Go to week 2
        </Link>
      </p>
      <p>
        <Link href="/week3">
          Go to week 3
        </Link>
      </p>
      <p>
        <Link href="/week4">
          Go to week 4
        </Link>
      </p>
      <p>
        <Link href="/week5">
          Go to week 5
        </Link>
      </p>
      <p>
        <Link href="/week6">
          Go to week 6
        </Link>
      </p>
      <p>
        <Link href="/week7">
          Go to week 7
        </Link>
      </p>
      <p>
        <Link href="/week8">
          Go to week 8
        </Link>
      </p>
      <p>
        <Link href="/week7">
          Go to week 9
        </Link>
      </p>
      <p>
        <Link href="/week7">
          Go to week 10
        </Link>
      </p>
    </main>
  );
}
