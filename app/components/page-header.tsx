import Link from "next/link";
import LoginButton from "./login-button";

export default function PageHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">مهروان</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <LoginButton></LoginButton>
                </div>
            </nav>
        </header>
    )
}