import {useState} from "react";
export function Menu({Arr,handler}){
  const [activeBtn,setActiveBtn] = useState(0)
    function TabButton({children,number,...proxyProps}){
      return(
          <li>
              <button     className={activeBtn == number ? 'active' : null}    
                          {...proxyProps}
              >
                  {children}
              </button>
          </li>
      )
    }
    return(
        <menu>
              {Arr.map((item,i)=>{
                return (
                <TabButton number={i} key={i}
                           onClick={
                            ()=>{
                              setActiveBtn(i);
                              handler((item.title).toLowerCase());
                            }
                          }
                >{item.title}</TabButton>
                )
                })}
        </menu>
    )
}
export function Examples({obj,...proxProps}){
    return(
      <div {...proxProps}>
          <h2>{obj.title}</h2>
          <h3>Description:{obj.description}</h3>
                <br/>
          <pre>Example:
            <code>{obj.code}</code>
          </pre>
      </div>
    )
}