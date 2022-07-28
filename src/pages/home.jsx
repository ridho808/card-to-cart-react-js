import React, { Component } from 'react';
import Data from '../datadummy.json'
import Navbar from '../component/Navbar';
import AOS from 'aos';
import Container from '../component/Container/Container';
import Card from '../component/card/Card';
import Cart from '../component/cart/Cart';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            Product : Data,
            Query: "",
            ViewCart : true,
            CartList: [],
            CartNotif: 0
        }
        this.SearchProduct= this.SearchProduct.bind(this);
        this.SearchBar= this.SearchBar.bind(this);
        this.ShowCart= this.ShowCart.bind(this);
        this.AddToCart=this.AddToCart.bind(this);
        this.RemoveCart= this.RemoveCart.bind(this);
    }
    SearchBar(event){
      return this.setState({Query : event.target.value})
    }
    SearchProduct(Data){
      return(Data.filter((items)=>items.title.toLowerCase().includes(this.state.Query)))
    }
    ShowCart(){
      this.setState({ViewCart : !this.state.ViewCart})
    }
    AddToCart(e){
      const product = Data.filter((items)=> items.id === Number(e.currentTarget.id))
      this.setState({CartList : this.state.CartList.concat(product)})
      this.setState({CartNotif: this.state.CartNotif + 1})
    }
    RemoveCart(){
      this.setState(this.state.CartList.pop())
      this.setState({CartNotif : this.state.CartNotif - 1})
      if(this.state.CartNotif === 0){
        return this.setState({CartNotif: 0})
      }
    }
    componentDidMount(){
      AOS.init();
      this.ShowCart();
    }
  render() {
    return (
      <>
        <Navbar Click={this.ShowCart} Search={this.SearchBar} Value={this.state.CartNotif}/>
        <main>
          <section id='card' className='max-w-full mx-auto sm:max-w-[760px]'>
              <Container>
                <Card Click={this.AddToCart} Data={this.SearchProduct(this.state.Product)}/>  
              </Container>
          </section>
          <section id='cart'>
              <Cart 
              ViewCart={this.state.ViewCart}
              Showcart={this.ShowCart}
              CartList={this.state.CartList}
              Delete={this.RemoveCart}
              />
          </section>
        </main>
      </>
    )
  }
}
