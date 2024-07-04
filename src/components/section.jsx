export default function Section({title,children,...props}){//proxy-properties(when we gather real properties and spread it)
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
//Каким стеком ты пользуешься: i study React and diffirent libraries like nodeJS,Typescript
//Какие паттерны ты знаешь: proxy-props...