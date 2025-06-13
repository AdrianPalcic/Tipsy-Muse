import { useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollToTopButton = () => {


    useEffect(() => {
        const handleScroll = () => {
            if (!document.getElementById('scroll-to-top')) return;


            if (window.scrollY > 300) {
                document.getElementById('scroll-to-top').style.display = 'block';
            } else {

                document.getElementById('scroll-to-top').style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button className={`scroll-to-top none`} id='scroll-to-top' onClick={scrollToTop}><IoIosArrowUp /></button>
    )
}

export default ScrollToTopButton