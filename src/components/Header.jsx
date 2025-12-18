const Header=()=>{
    return(
        <header className="w-full bg-slate-800 text-white p-8">

            <nav className="flex gap-10 justify-center ml-120 items-center">
                <a href='/' >Home</a>
                <a href='/products' >Products</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/Cart">Cart</a>
                <a className="ml-175" href="/login">Login</a>
            </nav>
        </header>
    )
}

export default Header