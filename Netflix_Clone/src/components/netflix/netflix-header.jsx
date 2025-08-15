import './netflix-header.css'
export function NetflixHeader(){
    return(
        <header className="d-flex justify-content-between p-4">
            <div >
                <img src="/Netflix_Logo_PMS.png" alt="NETFLIX" className="netflixlogo" />
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <div className="input-group">
                        <span className="bi bi-translate input-group-text"></span> 
                        <select className="form-select">
                            <option>Language</option>
                        </select>
                        </div>
                </div>
                <button className="btn btn-danger mx-4">Sign In</button>
        </div>
        </header>
    )
}