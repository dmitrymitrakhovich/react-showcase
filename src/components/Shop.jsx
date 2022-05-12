import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(goods);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}
