import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="text-center " style={{height:"700px"}}>
                    <h1 className="align-items-center justify-content-center">
                        Home
                    </h1>
                   
                </div>
            </div>
            <Footer/>
        </>

    )

}

export default Home