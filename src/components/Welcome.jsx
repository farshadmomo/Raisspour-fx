import Spline from '@splinetool/react-spline';

const Welcome = () => {
    return (
        <div className='w-full flex md:flex-row flex-col justify-center items-center p-4'>
            <p className='md:text-[21px] text-[15px] leading-[3rem] text-white md:flex-[0.7] flex-initial justify-center items-center animate-slide-out'>welcome to my site im amirmehdi raisspour and this is a site for my fellow trade lovers <br/>
            im happy to announce that im giving out my trade training courses out to the public<br/>
            and you can begin learning trade with my courses<br/>
            or if your more advanced you can be a better trader<br/>
            so... what are you waiting for start today never let it off till tommorow<br/>
                <span className='text-4xl'>start now</span></p>
            <div className='text-white flex list-none flex-row justify-between items-center flex-initial md:w-[40vw] w-[100vw] md:h-[88vh] h-[70vh]' >
                {/*<div className='w-36 h-20 bg-white absolute right-4 bottom-4'></div>*/}
                <Spline scene="https://prod.spline.design/o8ox9Hew7jasqpeK/scene.splinecode" />
            </div>

        </div>
    );
}

export default Welcome;
