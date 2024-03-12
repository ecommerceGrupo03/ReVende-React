/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  async function AddToCart(produto: any) {
    const oldCart = localStorage.getItem("cart");

    const newCart = JSON.parse(oldCart);

    if (cart.length === 0 && newCart === null) {
      const item = {
        id: produto.id,
        nome: produto.nome,
        price: produto.preco,
        photo: produto.foto,
        vendedor: produto.usuario.nome,
        quantidade: 1,
      };
      setCart([...cart, item]);
      localStorage.setItem("cart", JSON.stringify([...cart, item]));
      return;
    }

    const search = newCart.find((item: any) => item.id === produto.id);

    if (search) {
      search.quantidade++;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return;
    } else {
      const item = {
        id: produto.id,
        nome: produto.nome,
        price: produto.preco,
        photo: produto.foto,
        vendedor: produto.usuario.nome,
        quantidade: 1,
      };
      setCart([...newCart, item]);
      localStorage.setItem("cart", JSON.stringify([...newCart, item]));
    }
  }

  async function RemoveToCart(id: number) {
    const oldCart = localStorage.getItem("cart");
    const cart = JSON.parse(oldCart);

    const search = cart.filter((item: any) => item.id !== id);

    setCart(search);
    localStorage.setItem("cart", JSON.stringify(search));
  }

  async function TotalCart() {
    const oldCart = localStorage.getItem("cart");
    const cart = JSON.parse(oldCart);
    const amount = cart.map((item: any) => item.price * item.quantidade);
    const total = amount.reduce((acumulador: any, item: any) => acumulador + item, 0);
    return total;
  }

  async function ClearCart() {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return {
    AddToCart,
    RemoveToCart,
    TotalCart,
    ClearCart,
  };
}
