import Link from "next/link";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="site-header">
      <p>
        <Link href="/" className="brand">
          RS<span> / portfolio</span>
        </Link>
      </p>
      <NavMenu />
    </header>
  );
}
