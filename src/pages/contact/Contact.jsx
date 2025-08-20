import contactBgImg from "../../assets/contact-background.jpg"
import Testimonials from '../home/Testimonials'
import Matarials from '../home/Matarials'

const Contact = () => {
    return (
        <section>
            {/* banner */}
            <div
                className="w-full h-[400px]  bg-no-repeat bg-cover bg-center   flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${contactBgImg})` }}
            >
                <div className=''>
                    <h1 className="text-5xl font-bold">Contact</h1>
                </div>
            </div>
            <Matarials></Matarials>
            <Testimonials />
        </section>
    )
}

export default Contact