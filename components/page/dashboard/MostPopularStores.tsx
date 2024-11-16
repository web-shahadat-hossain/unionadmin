const MostPopularStores = () => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 remove-card-shadow">
        <div className="card-header gap-10">
          <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/most-popular-store-icon.png"
              alt=""
            />
            Most Popular Stores
          </h4>
        </div>
        <div className="card-body">
          <div className="grid-item-wrap">
            <a
              href="https://6valley.6amtech.com/admin/vendors/view/1"
              className="grid-item basic-box-shadow"
            >
              <div className="d-flex align-items-center gap-10">
                <img
                  src="https://6valley.6amtech.com/storage/app/public/shop/2024-09-19-66ebf152921cf.webp"
                  className="avatar rounded-circle avatar-sm"
                  alt=""
                />
                <h5 className="shop-name">Bicycle Shop</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="shop-sell c2">66</h5>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/love.png"
                  alt=""
                />
              </div>
            </a>
            <a
              href="https://6valley.6amtech.com/admin/vendors/view/2"
              className="grid-item basic-box-shadow"
            >
              <div className="d-flex align-items-center gap-10">
                <img
                  src="https://6valley.6amtech.com/storage/app/public/shop/2024-09-19-66ebe16c61ecc.webp"
                  className="avatar rounded-circle avatar-sm"
                  alt=""
                />
                <h5 className="shop-name">Book Store</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="shop-sell c2">24</h5>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/love.png"
                  alt=""
                />
              </div>
            </a>
            <a
              href="https://6valley.6amtech.com/admin/vendors/view/3"
              className="grid-item basic-box-shadow"
            >
              <div className="d-flex align-items-center gap-10">
                <img
                  src="https://6valley.6amtech.com/storage/app/public/shop/2024-09-19-66ebf32360ccc.webp"
                  className="avatar rounded-circle avatar-sm"
                  alt=""
                />
                <h5 className="shop-name">Golden Jewellery</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="shop-sell c2">14</h5>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/love.png"
                  alt=""
                />
              </div>
            </a>
            <a
              href="https://6valley.6amtech.com/admin/vendors/view/10"
              className="grid-item basic-box-shadow"
            >
              <div className="d-flex align-items-center gap-10">
                <img
                  src="https://6valley.6amtech.com/storage/app/public/shop/2024-09-19-66ebf0adab9de.webp"
                  className="avatar rounded-circle avatar-sm"
                  alt=""
                />
                <h5 className="shop-name">Hanover Electronics</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="shop-sell c2">6</h5>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/love.png"
                  alt=""
                />
              </div>
            </a>
            <a
              href="https://6valley.6amtech.com/admin/vendors/view/6"
              className="grid-item basic-box-shadow"
            >
              <div className="d-flex align-items-center gap-10">
                <img
                  src="https://6valley.6amtech.com/storage/app/public/shop/2024-09-19-66ebf40c3d141.webp"
                  className="avatar rounded-circle avatar-sm"
                  alt=""
                />
                <h5 className="shop-name">liceria &amp; co.</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="shop-sell c2">1</h5>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/love.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularStores;
