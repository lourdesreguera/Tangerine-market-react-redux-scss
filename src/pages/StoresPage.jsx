import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getStores } from "../redux/stores/stores.actions";
import CategoryNav from "../components/CategoryNav";
import StoresCategories from "../components/StoresCategories";

const StoresPage = () => {
  const dispatch = useDispatch();
  const { stores, isLoading, error } = useSelector((state) => state.stores);
  const [category, setCategory] = useState(null);
  const filteredStores = stores.filter((store) => store.category === category);

  const handleCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    dispatch(getStores());
  }, []);

  return (
    <>
      <CategoryNav handleCategory={handleCategory} />
      {isLoading && <h2>Cargando...</h2>}
      {category === null && <StoresCategories stores={stores} />}
      {filteredStores && <StoresCategories stores={filteredStores} />}
      {error && <h2>{error}</h2>}
    </>
  );
};

export default StoresPage;
