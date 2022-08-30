import React, { Component } from 'react';
export default class Card extends Component {
 
  render() {
    return (
        <>
        {
            this.props.Data.map((res)=>{
            return(   
              <div onClick={this.props.Click}
                id={res.id}
                key={res.id} 
                className="w-[200px] flex flex-col items-center my-3 rounded-b-xl shadow-xl" 
                data-aos="fade-up" 
                data-aos-duration="1500">
                    <img src={res.images} alt="SHOES" className='object-contain w-[150px] h-[200px] bg-white'/>
                    <div className='bg-gray-300 w-full h-full flex flex-col '>
                      <h3 className='font-semibold'>{res.title}</h3>
                      <span className='w-[60px] h-[30px] text-center border-2 border-gray-900 rounded-2xl'>
                        ${res.price}
                      </span>
                      <p className='p-2'>
                        {res.description}
                      </p>
                    </div>
              </div>
              )
            })
          }
     </>
    )
  }
}
