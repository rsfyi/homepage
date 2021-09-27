import React from "react";
import Link from "next/link";

{
  /**
  Types of styling we can do with React js
  1. module system of style
  2. inline style
  3. css-in-js
*/
}

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/care360'>
            <a>Care 360</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href='/signup'>
            <a>Sign up</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          background-color: lightGray;
          display: flex;
          justify-content: space-around;
          padding: 2rem;
        }

        li {
          list-style-type: none;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
