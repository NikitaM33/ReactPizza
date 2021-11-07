import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { setPizzaToCart } from '../../redux/actions/cart';


function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { categories, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(categories, sortBy));

    // fetch('http://localhost:3000/db.json')
    // .then((resp) => resp.json())
    // .then((json) => setPizzas(json.pizzas))
  }, [dispatch, categories, sortBy])

  const categoryName = [
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые'
  ];
  const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'asc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
  ];

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch]);

  const onClickSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch]);

  const handleAddPizzaToCart = (obj) => {
    dispatch(setPizzaToCart(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={categories}
          items={categoryName}
          onClickCategory={onSelectCategory}
        />

        <SortPopup
          items={sortItems}
          activeSortType={sortBy.type}
          onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map(obj => (
              <PizzaBlock
                key={obj.id}
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
            : Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>
  )
}

export default Home;
