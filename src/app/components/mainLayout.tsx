import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import styles from '@/styles/DataArea.module.css'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}