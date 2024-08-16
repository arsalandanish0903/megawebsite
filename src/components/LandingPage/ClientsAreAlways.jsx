import React from 'react'
import ProvideCards from '../ProvideCard/ProvideCards'
import { FaStar } from "react-icons/fa";

function ClientsAreAlways() {
    // const starArray = Array(5).fill(<FaStar />)
    const img = '../../../public/user2.png'
    const userTwo = '../../../public/user1.png'
    const userThree = '../../../public/user3.png'
    const userFour = '../../../public/user4.png'
    return (
        <div className='relative w-full'>
            <div className='grid md:grid-cols-2 gap-6'>
                <ProvideCards
                    // icons={starArray.map((icons, index) => (
                    //     <span key={index} className='text-2xl'>{icons}</span>
                    // ))}
                    icons={<ul className='flex m-0 p-0 gap-2'>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                    </ul>}
                    title={'Super customer service!'}
                    text={'Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.'}
                    img={img}
                    strong={'Smith Align'}
                    span={'Milano Joe'}
                />
                <ProvideCards
                    icons={<ul className='flex m-0 p-0 gap-2'>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                    </ul>}
                    title={'Exceptional creativity and vision'}
                    text={'Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn"t be happier the results!'}
                    img={userTwo}
                    strong={'William Jack'}
                    span={'Businessman'}
                />
                <ProvideCards
                    icons={<ul className='flex m-0 p-0 gap-2'>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                    </ul>}
                    title={'Innovative and professional'}
                    text={"I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project."}
                    img={userThree}
                    strong={'Smith Align '}
                    span={'Businessman'}
                />
                <ProvideCards
                    icons={<ul className='flex m-0 p-0 gap-2'>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                        <li className='text-2xl'><FaStar /></li>
                    </ul>}
                    title={'Transformed our brand'}
                    text={"Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition."}
                    img={userFour}
                    strong={'Danial Mark'}
                    span={'Marketing Director'}
                />
            </div>
        </div>
    )
}

export default ClientsAreAlways