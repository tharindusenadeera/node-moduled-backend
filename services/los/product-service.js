import {
  addScheme,
  deleteScheme,
  editScheme,
  getScheme,
  getSchemes,
  addSector,
  deleteSector,
  editSector,
  getSector,
  getSectors,
  addType,
  deleteType,
  editType,
  getType,
  getTypes,
  productSectorSchemeMapping,
  productTypeSectorMapping,
  editProductTypeSectorMapping,
  getProductMapping,
  getProductData,
  editProductSectorSchemeMapping,
  getChangedProductDataMappings,
  getProductTypeSectorMappings,
  getProductDataInt,
  getProductSchemeSectorMappings,
  saveChangedData,
  createCatalogKey,
  getOriginalProductDataMappings,
  getSchemesByProduct,
  assignApplicationProductDetails,
  updateProductDetailsFn,
  getApplicationProductCode,
  getApplicationProductCodeInfo
} from 'los-service';

//Scheme
export const getSchemeFnCall = async (req) => {
  return await getScheme(req);
};

export const getSchemesFnCall = async (req) => {
  return await getSchemes(req);
};

export const addSchemeFnCall = async (req) => {
  return await addScheme(req);
};

export const editSchemeFnCall = async (req) => {
  return await editScheme(req);
};

export const deleteSchemeFnCall = async (req) => {
  return await deleteScheme(req);
};

//Sector
export const getSectorFnCall = async (req) => {
  return await getSector(req);
};

export const getSectorsFnCall = async (req) => {
  return await getSectors(req);
};

export const addSectorFnCall = async (req) => {
  return await addSector(req);
};

export const editSectorFnCall = async (req) => {
  return await editSector(req);
};

export const deleteSectorFnCall = async (req) => {
  return await deleteSector(req);
};

//Type
export const getTypeFnCall = async (req) => {
  return await getType(req);
};

export const getTypesFnCall = async (req) => {
  return await getTypes(req);
};

export const addTypeFnCall = async (req) => {
  return await addType(req);
};

export const editTypeFnCall = async (req) => {
  return await editType(req);
};

export const deleteTypeFnCall = async (req) => {
  return await deleteType(req);
};

//Mappings
export const productSectorSchemeMappingFnCall = async (req) => {
  return await productSectorSchemeMapping(req);
};

export const editProductSectorSchemeMappingFnCall = async (req) => {
  return await editProductSectorSchemeMapping(req);
};

export const productTypeSectorMappingFnCall = async (req) => {
  return await productTypeSectorMapping(req);
};

export const editTypeSectorMappingFnCall = async (req) => {
  return await editProductTypeSectorMapping(req);
};

export const getProductmappingFnCall = async (req) => {
  return await getProductMapping(req);
};

export const getProductTypeSectorMappingsFnCall = async (req) => {
  return await getProductTypeSectorMappings(req);
};

export const getProductSchemeSectorMappingsFnCall = async (req) => {
  return await getProductSchemeSectorMappings(req);
};

//All product data
export const getProductDataFnCall = async (req) => {
  return await getProductData(req);
};

export const getChangedProductMappingsFnCall = async (req) => {
  return await getChangedProductDataMappings(req);
};

export const getOriginalProductMappingsFnCall = async (req) => {
  return await getOriginalProductDataMappings(req);
};

export const getProductDataIntFnCall = async (req) => {
  return await getProductDataInt(req);
};

export const saveChangedDataFnCall = async (req) => {
  return await saveChangedData(req);
};

export const createCatalogKeyFnCall = async (req) => {
  return await createCatalogKey(req);
};

export const getSchemesByProductFnCall = async (req) => {
  const { productCode } = req?.params;
  return await getSchemesByProduct(productCode);
};

export const changeApplicationProductDetails = async (req) => {
  return await assignApplicationProductDetails(req);
};

export const updateProductDetails = async (req) => {
  return await updateProductDetailsFn(req);
};

export const applicationProductCode = async (req) => {
  return await getApplicationProductCode(req);
};

export const applicationProductCodeInfo = async (req) => {
  return await getApplicationProductCodeInfo(req);
};
