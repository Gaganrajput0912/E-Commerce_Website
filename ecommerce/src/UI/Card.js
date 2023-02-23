const Card=(props)=>{
    return(
        <div className="Container">
             <h5 class="card-title">{props.title}</h5>
        <div class= "" style={{width: "18rem"}}>
        <img src={props.imageUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <p>{props.price}</p>
          <a href="#" class="card-link">{props.price}</a>
        </div>
      </div>

      </div>

    )
}
export default Card;