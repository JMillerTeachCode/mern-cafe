import styles from './OrderList.module.css'
import OrderListItem from '../OrderListItem/OrderListItem'



export default function OrderList({ orders, activeOrder, handleSelectOrder }) {

  const orderItems = orders.map((o) => {
    return (
      <OrderListItem 
        key={o._id}
        isSelected={o === activeOrder}
        handleSelectOrder={handleSelectOrder}
        order={o}
      />
    )
  })

  return (
    <main className={styles.OrderList}>
      {
        orderItems.length ? (
          orderItems
        ) : (
          <span className={styles.noOrders}>No Previous Orders</span>
        )
      }
    </main>
  )
}
