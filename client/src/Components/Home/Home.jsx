import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Home = () =>{
    return(
        <>
        <main className="home-main">
        <div className="title">
        <h1 className="heading">Profile Manager</h1>
        </div>
        <div className="home-div">
        
            <a href="/login"><button >Login</button></a>
            <a href="/register"><button >Register</button></a>
            <a href="/user"><button >See All Users</button></a>
        </div>
        </main>
        </>
    )
}
export default Home