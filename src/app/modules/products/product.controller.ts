import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";

// create product
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.CreateProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product successfully created ",
    data: result,
  });
});

// get all Products
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.GetAllProductFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product successfully find ",
    data: result,
  });
});
// get single Products
const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.GetSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Product successfully find ",
    data: result,
  });
});

// updated product
const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const body = req.body;
  const result = await ProductServices.UpdateProductIntoDB(productId, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product successfully updated ",
    data: result,
  });
});

// Deleted Products
const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.DeleteProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product successfully Deleted ",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
