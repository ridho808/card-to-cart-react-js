import { AiOutlineCloseCircle} from 'react-icons/ai';
import React, { Component } from 'react'
export default class Cart extends Component {
  render() {
    return (
      <div className={this.props.ViewCart ? "hidden":'fixed right-0 top-[13%] w-[400px] h-[600px] bg-white'}>
                  <div className='w-full flex flex-row items-center justify-between border-b-2 border-black'>
                    <button onClick={this.props.Showcart} className="m-2">
                      <AiOutlineCloseCircle size={25} fill="black"/>
                    </button>
                    <h2 className='text-center w-full font-bold'>Cart</h2>
                  </div>
                    <ul className='h-[470px] overflow-auto overflow-hidden-x-none cart'>
                      {this.props.CartList.map((res)=>{
                        return(
                          <li key={res.id} data-aos="fade-up" className='border-b-2 border-gray-800 w-[90%] mx-auto'>
                            <div className='flex flex-row items-center'>
                              <img src={res.images} width={80} height={80} className='object-cover' alt='imagination'/>
                              <div className='w-[400px]'>
                              <h1 className='p-2'>{res.title}</h1>
                              <div className='w-[60px] h-[30px] text-center font-bold'>
                                ${res.price}
                              </div>
                              </div>
                              </div>
                          </li>
                        )
                      })
                      }
                    </ul>
                  <div>
                    <div className='w-full flex justify-center mt-5'>
                      <button className="transition ease-in-out delay-150 bg-gray-900 rounded-lg hover:bg-gray-600 hover:-translate-y-1 hover:scale-110 duration-300 text-white w-1/4" onClick={this.props.Delete}>Delete</button>
                    </div>
                  </div>
              </div>
    )
  }
}
