const BusinessAnalytics = () => {
  return (
    <>
      <div className="card mb-2 remove-card-shadow">
        <div className="card-body">
          <div className="row flex-between align-items-center g-2 mb-3">
            <div className="col-sm-6">
              <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/business_analytics.png"
                  alt=""
                />
                Business analytics
              </h4>
            </div>
            <div className="col-sm-6 d-flex justify-content-sm-end">
              <select
                className="custom-select w-auto"
                name="statistics_type"
                id="statistics_type"
              >
                <option value="overall">Overall statistics</option>
                <option value="today">Todays Statistics</option>
                <option value="this_month">This Months Statistics</option>
              </select>
            </div>
          </div>
          <div className="row g-2" id="order_stats">
            <div className="col-sm-6 col-lg-3">
              <a
                className="business-analytics card"
                href="https://6valley.6amtech.com/admin/orders/list/all"
              >
                <h5 className="business-analytics__subtitle">Total order</h5>
                <h2 className="business-analytics__title">190</h2>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
                  width={30}
                  height={30}
                  className="business-analytics__img"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="business-analytics get-view-by-onclick card"
                href="https://6valley.6amtech.com/admin/vendors/list"
              >
                <h5 className="business-analytics__subtitle">Total Stores</h5>
                <h2 className="business-analytics__title">10</h2>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/total-stores.png"
                  className="business-analytics__img"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a className="business-analytics card">
                <h5 className="business-analytics__subtitle">Total Products</h5>
                <h2 className="business-analytics__title">402</h2>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/total-product.png"
                  className="business-analytics__img"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="business-analytics card"
                href="https://6valley.6amtech.com/admin/customer/list"
              >
                <h5 className="business-analytics__subtitle">
                  Total Customers
                </h5>
                <h2 className="business-analytics__title">8</h2>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/total-customer.png"
                  className="business-analytics__img"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="order-stats order-stats_pending"
                href="https://6valley.6amtech.com/admin/orders/list/pending"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/pending.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Pending</h6>
                </div>
                <span className="order-stats__title">58</span>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="order-stats order-stats_confirmed"
                href="https://6valley.6amtech.com/admin/orders/list/confirmed"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/confirmed.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Confirmed</h6>
                </div>
                <span className="order-stats__title">21</span>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="order-stats order-stats_packaging"
                href="https://6valley.6amtech.com/admin/orders/list/processing"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/packaging.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Packaging</h6>
                </div>
                <span className="order-stats__title">9</span>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="order-stats order-stats_out-for-delivery"
                href="https://6valley.6amtech.com/admin/orders/list/out_for_delivery"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/out-of-delivery.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Out for delivery</h6>
                </div>
                <span className="order-stats__title">8</span>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="order-stats order-stats_delivered cursor-pointer get-view-by-onclick"
                data-link="https://6valley.6amtech.com/admin/orders/list/delivered"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/delivered.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Delivered</h6>
                </div>
                <span className="order-stats__title">76</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="order-stats order-stats_canceled cursor-pointer get-view-by-onclick"
                data-link="https://6valley.6amtech.com/admin/orders/list/canceled"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/canceled.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Canceled</h6>
                </div>
                <span className="order-stats__title h3">9</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="order-stats order-stats_returned cursor-pointer get-view-by-onclick"
                data-link="https://6valley.6amtech.com/admin/orders/list/returned"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/returned.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Returned</h6>
                </div>
                <span className="order-stats__title h3">4</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="order-stats order-stats_failed cursor-pointer get-view-by-onclick"
                data-link="https://6valley.6amtech.com/admin/orders/list/failed"
              >
                <div className="order-stats__content">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/failed-to-deliver.png"
                    alt=""
                  />
                  <h6 className="order-stats__subtitle">Failed to delivery</h6>
                </div>
                <span className="order-stats__title h3">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAnalytics;
