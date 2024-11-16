const TopCustomer = () => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 remove-card-shadow">
        {/* Header */}
        <div className="card-header">
          <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/top-customers.png"
              alt=""
            />
            Top customer
          </h4>
        </div>
        <div className="card-body">
          <div className="grid-card-wrap">
            <div className="cursor-pointer">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg"
                    src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">fatema</h5>
                <div className="orders-count d-flex gap-1">
                  <div>Orders : </div>
                  <div>137</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg"
                    src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Devid</h5>
                <div className="orders-count d-flex gap-1">
                  <div>Orders : </div>
                  <div>17</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg"
                    src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd46476b52a.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Md.Safayet</h5>
                <div className="orders-count d-flex gap-1">
                  <div>Orders : </div>
                  <div>5</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg"
                    src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd43e43e3d1.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Joy</h5>
                <div className="orders-count d-flex gap-1">
                  <div>Orders : </div>
                  <div>3</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg"
                    src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd4498b881c.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Demo</h5>
                <div className="orders-count d-flex gap-1">
                  <div>Orders : </div>
                  <div>3</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="grid-card basic-box-shadow">
                <div className="text-center">
                  <img
                    className="avatar rounded-circle avatar-lg"
                    src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd45662c830.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Jocky</h5>
                <div className="orders-count d-flex gap-1">
                  <div>Orders : </div>
                  <div>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCustomer;
