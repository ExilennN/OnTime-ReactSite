import React from 'react'
import Layout from "../component/layout/layout";
import style from "./pages-styles/deliveryPayment.module.css";

function DeliveryPayment() {
  return (
    <div>
      <Layout> 
        <div className={style.deliveyPaymentBlock}>
          <h1>Delivery And Payment</h1>
          <div className={style.deliveyPaymentBody}>
            <div className={style.item}>
              <h2>Shipping Worldwide</h2>
              <p>FREE standard shipping for all orders. All Free shipping orders are shipped via Basic Economy. Unfortunately, not all countries are available for free shipping and some countries cannot be shipped Basic Economy due to delivery issues in that country and free shipping may not be available to all destinations. These include: Russia, Italy, Taiwan, Philippines, Macao S.A.R., China, Lebanon, India, China, South Africa, Ukraine and Turkey. These countries ships via DHL Worldwide. This is detailed at checkout.</p>
              <p>Please note that shipments from the United States to other countries begins at $13.95 to $30.95 for DHL in certain countries. Basic Shipping can take up to 4 weeks and is not traceable once it leaves the U.S. Priority shipping is available.This method includes insurance and should arrive in a week or less, although it could be longer depending upon the country and clearances. However, this is an estimate based upon past shipments and not a guarantee. Please note that an order is not considered lost until 60 days.</p>
            </div>
            <div className={style.item}>
              <h2>How quickly will you ship my order?</h2>
              <p>We want you to have your order as quickly as possible, so our warehouse is fully stocked. Our goal is to send your order from our warehouse to your house the next business day after we receive your order. Depending on when we receive your order, we may even ship it the same day as you place your order!</p>
              <p>Ground Shipping - Orders are shipped the next business day after they are placed on our website. See our ground shipping map for estimated transit times. (Transit times not guaranteed by FedEx or UPS.)</p>
              <p>USPS Priority Express - Orders placed before 10:00 AM EST ship the same business day, and are delivered next business 1-2 day. Business days are only Monday thru Friday .</p>
            </div>
            <div className={style.item}>
              <h2>Payment</h2>
              <p>You can pay for your order by card - online or when you pick it up in our store. To pay by card in the store: when placing an order, select the payment method Payment upon receipt of the order. To pay for an order online: Add the product to the cart and proceed to checkout. Choose a payment method Pay now via RozetkaPay. Specify exactly how you want to pay: via Masterpass or online card. Complete the order. Next, you will go to the page of the secure payment system, where you can confirm the payment. For successful payment, the card must support the 3d secure service.</p>
            </div>
          </div>
        </div>  
      </Layout>  
    </div>
  );
}

export default DeliveryPayment;