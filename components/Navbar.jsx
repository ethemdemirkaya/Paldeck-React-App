import MainPage from "@/components/MainPage";

const navigation = [
    { name: 'Ana Sayfa', href: '/', current: true },
    { name: 'Elementler', href: '/elements', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute left-1/3 top-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div
                    className="absolute right-1/3 top-1/3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div
                    className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div
                    className="absolute left-1/4 top-1/4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div
                    className="absolute left-1/3 top-1/2 w-72 h-72 bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            {/* Ana içerik */}
            <main className="relative z-10">
                <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <MainPage/>
                </div>
            </main>
        </div>
    );
};

export default Navbar;