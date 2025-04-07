import Link from "next/link";

export default function LoginButton() {
    return (
        <Link className="me-auto link-light" href="/account/sign-in">
            ورود
        </Link>
    )
}