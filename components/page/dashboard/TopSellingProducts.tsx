const TopSellingProducts = () => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 remove-card-shadow">
        <div className="card-header gap-10">
          <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
            <img
              width={20}
              src="https://6valley.6amtech.com/public/assets/back-end/img/top-selling-product-icon.png"
              alt=""
            />
            Top selling products
          </h4>
        </div>
        <div className="card-body">
          <div className="grid-item-wrap">
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/vendor/5"
            >
              <div className="grid-item bg-transparent basic-box-shadow">
                <div className="d-flex gap-10 align-items-center">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2024-09-22-66f0027e72108.webp"
                    className="avatar avatar-lg rounded avatar-bordered"
                    alt="iPhone 14 Pro Max_Image"
                  />
                  <div className="title-color line--limit-2">
                    iPhone 14 Pro Max{" "}
                  </div>
                </div>
                <div className="orders-count py-2 px-3 d-flex gap-1">
                  <div>Sold :</div>
                  <div className="sold-count">36</div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/in-house/1"
            >
              <div className="grid-item bg-transparent basic-box-shadow">
                <div className="d-flex gap-10 align-items-center">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2024-09-22-66f005be6f240.webp"
                    className="avatar avatar-lg rounded avatar-bordered"
                    alt="Straps Plaid Patchwork Dress_Image"
                  />
                  <div className="title-color line--limit-2">
                    Straps Plaid Patchwo ...
                  </div>
                </div>
                <div className="orders-count py-2 px-3 d-flex gap-1">
                  <div>Sold :</div>
                  <div className="sold-count">27</div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/in-house/17"
            >
              <div className="grid-item bg-transparent basic-box-shadow">
                <div className="d-flex gap-10 align-items-center">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2024-09-22-66f007047abd2.webp"
                    className="avatar avatar-lg rounded avatar-bordered"
                    alt="4 French Door Refrigerator_Image"
                  />
                  <div className="title-color line--limit-2">
                    4 French Door Refrig ...
                  </div>
                </div>
                <div className="orders-count py-2 px-3 d-flex gap-1">
                  <div>Sold :</div>
                  <div className="sold-count">13</div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/vendor/3"
            >
              <div className="grid-item bg-transparent basic-box-shadow">
                <div className="d-flex gap-10 align-items-center">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2024-09-22-66f009f710ea0.webp"
                    className="avatar avatar-lg rounded avatar-bordered"
                    alt="Copper Alloy Inlaid Zircon Round Ring Female_Image"
                  />
                  <div className="title-color line--limit-2">
                    Copper Alloy Inlaid ...
                  </div>
                </div>
                <div className="orders-count py-2 px-3 d-flex gap-1">
                  <div>Sold :</div>
                  <div className="sold-count">13</div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/vendor/8"
            >
              <div className="grid-item bg-transparent basic-box-shadow">
                <div className="d-flex gap-10 align-items-center">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2024-09-23-66f0f8ed0b4bb.webp"
                    className="avatar avatar-lg rounded avatar-bordered"
                    alt="Women Beautiful White Sneakers_Image"
                  />
                  <div className="title-color line--limit-2">
                    Women Beautiful Whit ...
                  </div>
                </div>
                <div className="orders-count py-2 px-3 d-flex gap-1">
                  <div>Sold :</div>
                  <div className="sold-count">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
