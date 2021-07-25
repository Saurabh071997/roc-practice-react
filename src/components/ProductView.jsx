import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useApp } from "../context/appProvider";

function getSortedProducts(productData, sortBy) {
  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return productData.sort((a, b) => b["productPrice"] - a["productPrice"]);
  }

  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return productData.sort((a, b) => a["productPrice"] - b["productPrice"]);
  }

  return productData;
}

function getFilteredData(
  productData,
  { selectedBrand, selectedSize, selectedGender }
) {
  // console.log(selectedSize);
  return productData
    .filter(({ productBrand }) =>
      selectedBrand?.length > 0 ? selectedBrand?.includes(productBrand) : true
    )
    .filter(({ sizelist }) =>
      selectedSize?.length > 0
        ? sizelist.filter((item) => selectedSize?.includes(item))?.length > 0
        : true
    )
    .filter(({ productIdeal }) =>
      selectedGender?.length > 0 ? selectedGender?.includes(productIdeal) : true
    );
}

export const ProductCard = ({ product }) => {
  return (
    <>
      <Grid item xs={12} style={{ margin: "0.35rem 0rem" }}>
        <Card style={{ width: "250px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="product"
              height="300"
              image={product?.productImg}
              title={product?.productName}
            />
            <CardContent style={{ minHeight: "140px" }}>
              <Typography variant="h6">{product?.productBrand}</Typography>
              <Typography variant="body2">{product?.productName}</Typography>
              <Typography variant="subtitle1">
                &#8377;{product?.productPrice}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export const ProductView = () => {
  const {
    state: { productlist, sortBy, selectedBrand, selectedSize, selectedGender },
  } = useApp();

  const sortedProducts = getSortedProducts(productlist, sortBy);
  const filteredProducts = getFilteredData(sortedProducts, {
    selectedBrand,
    selectedSize,
    selectedGender,
  });
  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          wrap="wrap"
          justifyContent="space-evenly"
        >
          {filteredProducts?.map((product) => {
            return (
              <div key={product?.productId}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
