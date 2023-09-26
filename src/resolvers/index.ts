import { CreateCategoryMutation } from "./category/Mutation/CreateCategoryMutation";
import { RemoveCategoryMutation } from "./category/Mutation/RemoveCategoryMutation";
import { UpdateCategoryMutation } from "./category/Mutation/UpdateCategoryMutation";
import { GetAllCategory } from "./category/Query/GetAllCategory";
import { GetCategoryById } from "./category/Query/GetCategoryById";
import { CreateEmployeeMutation } from "./employee/Mutation/CreateEmployeeMutation";
import { RemoveEmployeeMutation } from "./employee/Mutation/RemoveEmployeeMutataion";
import { UpdateEmployeeMutation } from "./employee/Mutation/UpdateEmployeeMutation";
import { GetAllEmployee } from "./employee/Query/GetAllEmployee";
import { GetEmployeeById } from "./employee/Query/GetEmployeeById";
import { CreateProductsMutaiton } from "./products/Mutation/CreateProductsMutation";
import { RemoveProductsMutation } from "./products/Mutation/RemoveProductsMutation";
import { UpdateProductsMutation } from "./products/Mutation/UpdateProductsMutation";
import { GetAllProducts } from "./products/Query/GetAllProducts";
import { GetProductByID } from "./products/Query/GetProductById";
import { CreateProvinceMutation } from "./province/Mutation/CreateProvinceMutation";
import { RemoveProvineMutation } from "./province/Mutation/RemoveProvinceMutation";
import { UpdateProvinceMutation } from "./province/Mutation/UpdateProvinceMutation";
import { GetAllProvince } from "./province/Query/GetAllProvince";
import { GetProvinceByID } from "./province/Query/GetProvinceById";
import { GetAllSlideBanner } from "./slidebanner/Query/GetAllBanner";
import { GetAllWomenProducts } from "./womenproduct/Query/GetAllWomenProduct";

export const Resolvers = {
  Query: {
    products: GetAllProducts,
    product: GetProductByID,
    category: GetAllCategory,
    categoryOne: GetCategoryById,
    provinces: GetAllProvince,
    province: GetProvinceByID,
    employees: GetAllEmployee,
    employee: GetEmployeeById,
    banners: GetAllSlideBanner,
    womenproduct: GetAllWomenProducts,
  },
  Mutation: {
    createProductsMutaiton: CreateProductsMutaiton,
    updateProductsMutation: UpdateProductsMutation,
    removeProductsMutation: RemoveProductsMutation,
    createCategoryMutation: CreateCategoryMutation,
    updateCategoryMutation: UpdateCategoryMutation,
    removeCategoryMutation: RemoveCategoryMutation,
    createProvinceMutation: CreateProvinceMutation,
    updateProvinceMutation: UpdateProvinceMutation,
    removeProvinceMutation: RemoveProvineMutation,
    createEmployeeMutation: CreateEmployeeMutation,
    updateEmployeeMutataion: UpdateEmployeeMutation,
    removeEmployeeMutation: RemoveEmployeeMutation,
  },
};
