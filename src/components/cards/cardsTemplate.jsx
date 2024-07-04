function Cards(props){//props = properties
    return(
      <li key={Math.random()}  >
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
  }
export default function UL({dataArr}){
  return(
    <ul id='ul' >
            {dataArr.map((el,i)=> 
              (<Cards key={i} {...el}/>)
            )}
    </ul>
  )
}