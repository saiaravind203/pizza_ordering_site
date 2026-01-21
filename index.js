import {menuArray} from './data.js'

const menuitems = document.getElementById('items')
const paymentHtml = document.getElementById('payment')
const myOrder = document.getElementById('myorder')
const modalCloseBtn = document.getElementById('modal-close-btn')
const payBtn = document.getElementById('payment')


modalCloseBtn.addEventListener('click', function(){
    paymentHtml.style.display = 'none'
})
payBtn.addEventListener('submit', function(e){
    e.preventDefault()
    paymentHtml.style.display = 'none'
    myOrder.innerHTML = `<h2 class="order-way">Thanks, James! Your order is on its way!</h2>`
})
document.addEventListener('click',function(e){
    if(e.target.dataset.decrement){
        handleDecrement(e.target.dataset.decrement)
    }
    else if( e.target.dataset.increment){
        handleIncrement(e.target.dataset.increment)
    }
    else if( e.target.dataset.remove){
        handleRemoveElement(e.target.dataset.remove)
    }
    else if( e.target.dataset.btn){
        handleCompleteBtn()
    }
})
function handleRemoveElement(itemId){
    const filteredArray = menuArray.filter(item => item.id === Number(itemId))[0];
    if(filteredArray.quantity >0){
        filteredArray.quantity=0
    }
    render()
}
function handleCompleteBtn(){
    paymentHtml.style.display = 'block'
}
function handleDecrement(itemId){
    const filteredArray = menuArray.filter(item => item.id === Number(itemId))[0];
    if(filteredArray.quantity >0){
        filteredArray.quantity--
    }
    render()
}
function handleIncrement(itemId){
    const filteredArray = menuArray.filter(item => item.id === Number(itemId))[0];
    if(filteredArray.quantity >=0){
        filteredArray.quantity++
    }
    render()
}

function getMenuItemsHtml(){
    const htmlValue= menuArray.map((item)=>{
       const value = `<div class="innner-items">
                            <div class="emoji_container"><p class="emoji">${item.emoji}</p></div>
                            <div class ="info_container">
                                <div class="items_info">
                                    <h2 class="item_heading">${item.name}</h2>
                                    <p class="item_para">${item.ingredients}</p>
                                    <p class="item_price">$${item.price}</p>
                                </div>
                                <div class="quantity">
                                    <i class="fa-solid fa-minus" data-decrement="${item.id}"></i>
                                    <p class= "quantity_text">${item.quantity}</p>
                                    <i class="fa-solid fa-plus" data-increment="${item.id}" ></i>
                                </div>
                            </div>      
                      </div>`
        return value
    }).join('')
    return htmlValue
}
function getMyorderHtml(){
    const hasOrder = menuArray.some(item => item.quantity > 0)
    if (!hasOrder) {
        return ''
    }
    let total = 0
    const htmlValue = menuArray.map((item)=>{
        total+= item.price*item.quantity
        if(item.quantity>0){
            const value = `<div class="order_item">
                                <p class="order_item_text">${item.name} x ${item.quantity} <span class="remove" data-remove="${item.id}"> x remove</span></p>
                                <p class-"order_item_price">$ ${item.price*item.quantity}</p>
                           </div>`
            return value
        }
    }).join('')
    return `<h2 class="order_heading">Your Order</h2>
            ${htmlValue}
            <div class="total_section">
                <p class="total">
                    Total Price:
                </p>
                <p class="total_price">$ ${total}</p>
            </div>
            <button class="order-btn" data-btn="completebtn">complete order</button>
            `
}

function render(){
    menuitems.innerHTML = getMenuItemsHtml()
    myOrder.innerHTML = getMyorderHtml()
}
render()