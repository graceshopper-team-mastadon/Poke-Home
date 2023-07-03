import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("/products", async () => {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
});

export const getProductCategory = createAsyncThunk(
  "/products/:category",
  async (gen) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/category/${gen}`
    );
    return data;
  }
);

export const deleteSingleProduct = createAsyncThunk(
  "deleteProduct",
  async (id) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/dashboard/products/${id}`,
      { id }
    );
    await axios.delete(`http://localhost:3000/api/dashboard/products/${id}`, {
      id,
    });
    return data;
  }
);
export const searchProduct = createAsyncThunk(
  "searchProduct",
  async (searchedTerm) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/search/${searchedTerm}`
    );
    return data;
  }
);
// Admin adds Product
export const addProduct = createAsyncThunk(
  "AdminAddPokemon",
  async (productInfo) => {
    const { data } = await axios.post(
      "http://localhost:3000/api/dashboard/products/add",
      productInfo
    );
    return data;
  }
);

// Admin edits product information
export const editProduct = createAsyncThunk(
  "AdminEditsProduct",
  async ({ id, name, description, category, inventory, imageUrl, price }) => {
    const { data } = await axios.put(
      `http://localhost:3000/api/dashboard/products/${id}`,
      {
        id: id,
        name: name,
        description: description,
        category: category,
        inventory: inventory,
        imageUrl: imageUrl,
        price: price,
      }
    );
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    Products: [],
    singleProduct: {},
    generationProducts: [],
    searched: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.Products = payload;
    });
    builder.addCase(searchProduct.fulfilled, (state, { payload }) => {
      state.searched = payload;
    });
    builder.addCase(getProductCategory.fulfilled, (state, { payload }) => {
      state.generationProducts = payload;
    });
    builder.addCase(deleteSingleProduct.fulfilled, (state, { payload }) => {
      state.Products = state.Products.filter(
        (product) => product.id !== payload.id
      );
    });
    builder.addCase(editProduct.fulfilled, (state, { payload }) => {
      state.singleProduct = payload;
    });
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.singleProduct = payload;
      state.Products.push(payload);
    });
  },
});

export const allProductsState = (state) => state.Products;

export default productsSlice.reducer;
