export function DataBinding(){
    var uname="Bilwa"
    var bgstyle="bg-danger"
    return(
        <>
            <div className="container-fluid">
                <h2 className={`text-center text-warning p-3 ${bgstyle}`}>Data Binding</h2>
                <p>Hello ! {uname}</p>
                <input type="text" value={uname} />
            </div>
        </>
    )
}