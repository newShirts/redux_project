import Card from './Card.module.css'

const Card =()=>{

    return(
        <section className={`${classes.card} ${props.className? props.className: ''}`}>
            {props.children}



        </section>
    )

}

export default Card;