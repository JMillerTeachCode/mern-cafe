import styles from './OrderHistoryPage.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Logo from '../../components/Logo/Logo'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import * as ordersAPI from '../../utilities/orders-api'

function OrderHistoryPage({ user, setUser }) {

  const [orders, setOrders] = useState([])
  const [activeOrder, setActiveOrder] = useState(null)

  useEffect(() => {

    async function fetchOrderHistory() {
      try {
        const orders = await ordersAPI.getOrderHistory()
        setOrders(orders)
      } catch(err){
        console.log(err)
      }
    }
    fetchOrderHistory()

  }, [])

  // Event Handler
  function handleSelectOrder(order) {
    setActiveOrder(order)
  }


  return (
    <main className={styles.OrderHistoryPage}>
      <aside className={styles.aside}>
        <Logo />
        <Link to="/orders/new" className='button btn-sm'>
          NEW ORDER
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList 
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <OrderDetail order={activeOrder}/>
    </main>
  )
}

export default OrderHistoryPage