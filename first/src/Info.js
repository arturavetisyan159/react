import './Info.css'

function Info(props){
    return(
            <div className="container">
                <div className="alb">
                    <h1>{props.album_name}</h1>
                    <h2>{props.group_name}</h2>
                    <h2>{props.year}</h2>
                    <img src={props.pict} alt="" />
                </div>
            </div>        
    )
}

export default Info;