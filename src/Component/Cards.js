function Cards(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <div className='cards__main__div'>
        <div style={{display:"flex", alignItems:"center"}}>
          <div className='img__div'>
            <img src={props.pic}></img>
          </div>
          <div style={{ padding: "15px" }}>
            <h1>{props.name}</h1>
            <p>{props.msg}</p>
          </div>
        </div>
        <div style={{ padding: "15px" }}>
          <p>{props.time}</p>
          <div>⭐</div>
        </div>
      </div>
    </div>
  )
}

export default Cards