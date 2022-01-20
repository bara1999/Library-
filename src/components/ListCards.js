import React from 'react'
import Card from './Card'
const ListCards = (props)=> {
    const { items } = props;
    console.log(items);
    return (
        <div className="cards">
            {
                
                items?.map(item => <Card

                     key={item.isbn} image={item.image}
                     title={item.title}
                     author={item.author}
                     description={item.description}
                     
                        />)
            }
            {
                items?.length === 0 && <span>There is no items to show!</span>
            }
        </div>
    )
}
export default ListCards

