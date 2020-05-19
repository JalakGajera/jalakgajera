import React,{Component} from 'react';

class CardSet extends Component{
    constructor(){
        super();
        this.state={
            chosenCards: []
        }
    }

    saveCourse=(index)=>{
        console.log(index)
        const copyOfCards=[...this.state.chosenCards];
        copyOfCards.push(this.props.Card[index])
        this.setState({
                chosenCards:copyOfCards
        })
    }

    render(){
        console.log(this.state.chosenCards)

        const savedCards=this.state.chosenCards.map((Card,i)=>{
        return <h3 key={i}>{Card.course}</h3>
           
        })

        const Cardlist = this.props.Card.map((Card,i)=>{
            return(
                <div className="col s2" key={i}>
                    <div className="card hoverable small">
                        <div className="card-image">
                            <img src={Card.image}/>
                        </div>
                        <div className="card-content">
                            <p>{Card.course}</p>
                            <p>{Card.instructor}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">$9.99</a>
                        </div>
                    </div>
                    <button onClick={()=>{this.saveCourse(i)}} className="btn waves-light waves-effect">Save</button>
                </div>
            )
        })

        return(
            <div>
                {Cardlist}
                {savedCards}
            </div>
        )
    }
} 

export default CardSet;