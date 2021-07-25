import { useApp } from "../context/appProvider";
const { brandlist } = require("../config/brands.json");
const { genderlist } = require("../config/genders.json");
const { sizelist } = require("../config/sizes.json");

export const ProductOperations = () => {
  const {
    state: { sortBy, selectedBrand, selectedSize, selectedGender },
    dispatch,
  } = useApp();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="section">
          <div className="section-head">Sort</div>
          <div style={{ display: "flex", flexDirection: " column" }}>
            <div className="div-sort">
              <input
                type="radio"
                name="sort"
                id="sort_high_to_low"
                className="btn-radio"
                onChange={() =>
                  dispatch({
                    type: "SORT",
                    payload: "PRICE_HIGH_TO_LOW",
                  })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              ></input>{" "}
              <span className="label-radio">Price (High To Low)</span>
            </div>

            <div className="div-sort">
              <input
                type="radio"
                name="sort"
                id="sort_low_to_high"
                className="btn-radio"
                onChange={() =>
                  dispatch({
                    type: "SORT",
                    payload: "PRICE_LOW_TO_HIGH",
                  })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              ></input>{" "}
              <span className="label-radio">Price (Low to High)</span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-head">Filter</div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="sub-section">
              <div className="sub-section-head">Brand</div>
              {brandlist?.map((brandItem) => {
                return (
                  <div className="div-filter" key={brandItem?.brandId}>
                    <input
                      type="checkbox"
                      id="show_discounted"
                      className="btn-checkbox"
                      checked={selectedBrand?.includes(brandItem?.brandName)}
                      onChange={() =>
                        dispatch({
                          type: "FILTER_BY_BRAND",
                          payload: brandItem?.brandName,
                        })
                      }
                    />
                    <span className="label-filter">{brandItem?.brandName}</span>
                  </div>
                );
              })}
            </div>

            <div className="sub-section">
              <div className="sub-section-head">Size</div>
              {sizelist?.map((sizeItem) => {
                return (
                  <div className="div-filter" key={sizeItem?.sizeId}>
                    <input
                      type="checkbox"
                      id="show_discounted"
                      className="btn-checkbox"
                      checked={selectedSize?.includes(sizeItem?.sizeName)}
                      onChange={() =>
                        dispatch({
                          type: "FILTER_BY_SIZE",
                          payload: sizeItem?.sizeName,
                        })
                      }
                    />
                    <span className="label-filter">{sizeItem?.sizeName}</span>
                  </div>
                );
              })}
            </div>

            <div className="sub-section">
              <div className="sub-section-head">Ideal For</div>
              {genderlist?.map((genderItem) => {
                return (
                  <div className="div-filter" key={genderItem?.genderId}>
                    <input
                      type="checkbox"
                      id="show_discounted"
                      className="btn-checkbox"
                      checked={selectedGender?.includes(genderItem?.genderName)}
                      onChange={() =>
                        dispatch({
                          type: "FILTER_BY_GENDER",
                          payload: genderItem?.genderName,
                        })
                      }
                    />
                    <span className="label-filter">
                      {genderItem?.genderName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ display: "inline-block", margin: "0rem auto" }}>
          <button
            onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
            className="btn-clear"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </>
  );
};
