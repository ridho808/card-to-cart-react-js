import React, { Component } from 'react';
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
export default class Navbar extends Component {
  render() {
    return (
        <>
            <header className='max-w-full mx-auto my-3'>
                <h1 className='text-center text-3xl font-bold'>CARD2CART</h1>
                <nav className='flex flex-row justify-between sm:justify-around'>
                    <div className='flex'>
                        <input className='w-[200px] outline-none px-2 bg-white rounded-l-lg md:w-[400px]' 
                        type='text' 
                        placeholder='Search'
                        onChange={this.props.Search}/>
                        <button className='bg-gray-300 p-1 rounded-r-sm'>
                            <AiOutlineSearch size={30}/>
                        </button>
                    </div>
                    <div className='w-300px mx-3 flex'>
                        <button onClick={this.props.Click} className="transition ease-in-out delay-150 rounded-lg hover:-translate-y-1 hover:scale-110 duration-300 ">
                           <AiOutlineShoppingCart size={30} fill="black"/>
                        </button>
                        <span className={this.props.Value > 0 ? "font-bold text-red-600 absolute mx-8 " : "hidden" } data-aos="fade-up">{this.props.Value}</span>
                    </div>
                </nav>
            </header>
        </>
        )
    }
}