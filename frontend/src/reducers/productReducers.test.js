import { italic } from "colors";
import { productListReducer } from "./productReducers";
import axios from 'axios';



describe("productList reducer", () => {
  it("default state", () => {
    const statebf = { products: [] };
    const stateaf = { products: [] };
    const action={}
    Object.freeze(statebf);
    expect(productListReducer(statebf, action)).toEqual(stateaf);
  });
  it("request product", () => {
    const statebf = { products: [] };
    const stateaf = { loading: true, products: [] };
    const action = { type: "PRODUCT_LIST_REQUEST" };
    Object.freeze(statebf);
    expect(productListReducer(statebf, action)).toEqual(stateaf);
  });
  it("response success", () => {
    const { data } = axios.get(`/products`)
    const statebf = { products: [] };
    const stateaf = { loading: false,products:data}
    const action = { type: "PRODUCT_LIST_SUCCESS", payload: data }
    Object.freeze(statebf);
    expect(productListReducer(statebf, action)).toEqual(stateaf);
  })
  it("response failure", () => {
    const statebf = { products: [] };
    const stateaf = {
      loading: false, products: Error.response && Error.response.data.message
        ? Error.response.data.message
        : Error.message
    };
    const action = {
      type: "PRODUCT_LIST_FAIL", payload: Error.response && Error.response.data.message
        ? Error.response.data.message
        : Error.message
    };
    Object.freeze(statebf);
    expect(productListReducer(statebf, action)).toEqual(stateaf);
  })

})