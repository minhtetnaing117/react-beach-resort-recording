import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Service extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:'free cocktails',
                info:'Loren ipsum dolor sit amet conserctut adipisicing alit.Magnim corporis!'
                
            },
            {
                icon:<FaHiking />,
                title:'Endless Hikng',
                info:'Loren ipsum dolor sit amet conserctut adipisicing alit.Magnim corporis!'
                
            },
            {
                icon:<FaCocktail />,
                title:'Free shuttle',
                info:'Loren ipsum dolor sit amet conserctut adipisicing alit.Magnim corporis!'
                
            },
            {
                icon:<FaBeer />,
                title:'Strongest Beer',
                info:'Loren ipsum dolor sit amet conserctut adipisicing alit.Magnim corporis!'
                
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
