export default function Sidebar() {
    return(
        <div className=" fixed top-0 left-0 h-full mt-16 bg-gray-800 text-white flex flex-col p-4 transition-all duration-300 shadow-lg w-64">

        <nav className="flex flex-col gap-4">
            <a href="/" className="hover:bg-gray-700 p-3 rounded flex items-center gap-2" >
            <p>Home</p>
            </a>
            <a href="/create" className="hover:bg-gray-700 p-3 rounded flex items-center gap-2">
            <p>Create New Transaction</p>
            </a>
            <a href="/login" className="hover:bg-gray-700 p-3 rounded flex items-center gap-2">
            <p>Login&SignUp</p>
            </a>
        </nav>
        </div>
    );
}