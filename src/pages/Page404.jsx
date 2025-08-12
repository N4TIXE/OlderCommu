import Navbar from '../components/Navbar'

const Page404 = () =>{
    
    return(
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-dvh w-auto flex-col' >
                <h1 className='text-[4rem]'>404 Not Found</h1>
                <p className='text-[2rem]'>โปรดกลับไปหน้าหลัก</p>
            </div>
        </div>
    );
}

export default Page404;