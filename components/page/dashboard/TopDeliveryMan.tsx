const TopDeliveryMan = () => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 remove-card-shadow">
        <div className="card-header">
          <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/top-customers.png"
              alt=""
            />
            Top Delivery Man
          </h4>
        </div>
        <div className="card-body">
          <div className="grid-card-wrap">
            <div className="cursor-pointer get-view-by-onclick">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg get-view-by-onclick"
                    alt=""
                    src="https://6valley.6amtech.com/storage/app/public/delivery-man/2022-10-12-634697b897451.png"
                  />
                </div>
                <h5 className="mb-0 get-view-by-onclick line--limit-1 text-center">
                  Demo Deliveryman
                </h5>
                <div className="orders-count d-flex gap-1">
                  <div>Order delivered :</div>
                  <div>1</div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/delivery-man/earning-statement-overview/10"
            >
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg get-view-by-onclick"
                    alt=""
                    src="https://6valley.6amtech.com/storage/app/public/delivery-man/2022-11-20-6379f432228b8.png"
                  />
                </div>
                <h5 className="mb-0 get-view-by-onclick line--limit-1 text-center">
                  Will Smith
                </h5>
                <div className="orders-count d-flex gap-1">
                  <div>Order delivered :</div>
                  <div>10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeliveryMan;
