import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { DivCard, DivInfo, ButtonFood, ButtonQuantity } from "./StyledFoodCard";
import ModalQuantity from "../modalQuantity/ModalQuantity";
import { CardText } from "../activeOrder/StyledActiveOrder";

const FoodCard = ({ product, restaurantId }) => {
  const { cart, setCart, clearCart, setCartInLocalStorage,
    productsCart, setProductsCart,
    restaurantCartId, setRestaurantCartId } = useContext(GlobalStateContext);
  const [open, setOpen] = useState(false);
  const [checkCart, setCheckCart] = useState(
    cart?.products?.find((item) => {
      if (item.id === product?.id) {
        return item.quantity
      }
    })
  )
  const [productQuantity, setProductQuantity] = useState(0)

  
  useEffect(() => {
    setCheckCart(checking())
    // console.log('FoodCArd >carrinho', cart)
  }, [cart])
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const checking = () => {
    const checkCart = cart?.products?.find((item) => {
      if (item.id === product?.id) {
        return true
      }
    })
    return checkCart
  }

  const addProduct = () => {
    if (cart?.products?.length === 0 ||
      (cart?.products?.length !== 0 && restaurantCartId === restaurantId)) {
      const newCart = { ...cart };
      const newProducts = {
        id: product?.id,
        quantity: productQuantity,
      };
      newCart.products.push(newProducts);
      setCart(newCart);
      handleClose();
      setRestaurantCartId(restaurantId)
      setCartInLocalStorage({cart: newCart, restaurantCartId: restaurantCartId})

      const newProductsCart = [ ...productsCart, product ];
      // newProductsCart.push(product);
      setProductsCart(newProductsCart)
      console.log('FoodCARD productsCart:', productsCart)
    }
    else {
      if (window.confirm("Carrinho já contem produto, deseja esvaziar e adicionar novo produto?") === true) {
        clearCart()
        alert("Carrinho vazio! Adicione novos produtos!")
        handleClose();
      } else {
        alert("Produtos mantidos no carrinho!")
        handleClose();
      }
    }
  };

  const removeProduct = () => {
    const checkProductInCart = cart?.products?.findIndex((item) => {
      if (item.id === product?.id) {
        return true
      }
    })
    const newCart = { ...cart };
    newCart.products.splice(checkProductInCart, 1)
    setCart(newCart)
    !cart.products.length && setRestaurantCartId(0)
    setCartInLocalStorage({cart: newCart, restaurantCartId: restaurantCartId})

    const checkProduct = productsCart?.findIndex((item) => {
      if (item.id === product?.id) {
        return true
      }
    })
    const newProductsCart = [ ...productsCart ];
    newProductsCart.splice(checkProduct, 1)
    setProductsCart(newProductsCart)

  }



  return (
    <DivCard>
      <img src={product?.photoUrl} alt={`Imagem de ${product?.name}`} />
      <DivInfo>
        <h2>{product?.name}</h2>
        <h4>{product?.description}</h4>
        <h1>R${product?.price},00</h1>
      </DivInfo>
      {open && (
        <ModalQuantity
          open={open}
          handleClose={handleClose}
          onClick={addProduct}
          id={product?.id}
          value={productQuantity}
          onChange={setProductQuantity}
        />
      )}
      {checkCart ? (
        <>
          <ButtonFood onClick={removeProduct} color="#e86e5a">
            Remover
          </ButtonFood>
          <ButtonQuantity color="#e86e5a">{checkCart.quantity}</ButtonQuantity>
        </>
      ) : (
        <ButtonFood onClick={handleOpen} color="black">
          Adicionar
        </ButtonFood>
      )}
    </DivCard>
  );
};

export default FoodCard;
