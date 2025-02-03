import Link from "next/link";
import React from "react";

const HeaderBanner = () => {
    return (
        <header id="header-main">
            <h1 id="header-title">
                <Link href="/">
                    <span id="top-line"> John Bissontz </span>
                    <span id="bottom-line"> Career Day </span>
                </Link>
            </h1>
        </header>
    )
}

export default HeaderBanner;