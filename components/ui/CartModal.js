import { useSelector, useDispatch } from "react-redux";
import classes from "./CartModal.module.css";
import { Fragment } from "react";
import { X } from "@phosphor-icons/react";
import { cartActions } from "../../store/cart-slice";

function CartModal({ cartModalChild }) {
  const cart = useSelector((state) => state.cart);
  const totalItemsInCart = cart.cartItems.length;

  const dispatch = useDispatch();
  const totalpricesincart = useSelector((state) => state.cart.totalCartPrice);

  const removeToCartHandler = (item) => {
    dispatch(cartActions.removeItemCart());
    dispatch(cartActions.deleteCartItem(item));
    dispatch(cartActions.calculateTotalPriceCart());
  };

  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes.modalContainer}>
          <div className={classes.closeButtonContainer}>
            <button className={classes.closeButton} onClick={cartModalChild}>
              <X size={40} color="#e7f5ff" weight="bold" />
            </button>
          </div>

          <div className={classes.itemsListContainer}>
            <div>
              {cart.cartItems.map((item) => (
                <div key={Math.random()}>
                  <div className={classes.itemLine}>
                    <div className={classes.centerName}>{item.name}</div>
                   
                    <div className={classes.centerButton}>
                      <button
                        className={classes.deleteButton}
                        onClick={() => removeToCartHandler(item)}
                      >
                        Delete item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className={classes.totalItems}>
                <div>Total items in cart: {totalItemsInCart}</div>
                <div>Total Order $ {totalpricesincart.toFixed(2)}</div>
              </div>

              {cart.cartItems.filter((item) => {
                item.id === "m1";
              })}
            </div>
          </div>
          <div className={classes.submitButtonContainer}>
            <button className={classes.orderButton}>Place Order</button>
          </div>
        </div>
      </div>
      <div onClick={cartModalChild} className={classes.backdrop}></div>
    </Fragment>
  );
}
export default CartModal;
