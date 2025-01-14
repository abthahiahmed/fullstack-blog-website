import Footer from "./footer";
import Header from "./header";

function RootLayout({children}){
    return (
        <>
        <Header/>
        <main className="min-h-[90vh]">
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default RootLayout;