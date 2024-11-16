/* eslint-disable @typescript-eslint/no-explicit-any */
const AsideBar = ({ toggleSidebar }: any) => {
  return (
    <aside className="bg-white js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered text-start default navbar-vertical-aside-initialized">
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset pb-0">
          <div className="navbar-brand-wrapper justify-content-between side-logo">
            <a
              className="navbar-brand"
              href="https://6valley.6amtech.com/admin/dashboard"
              aria-label="Front"
            >
              <img
                className="navbar-brand-logo-mini for-web-logo max-h-30"
                src="https://6valley.6amtech.com/storage/app/public/company/2023-06-13-648845d83c293.png"
                alt="Logo"
              />
            </a>
            <button
              onClick={() => toggleSidebar(false)}
              type="button"
              className="d-none js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark"
            >
              <i
                className="fa-solid fa-angle-left"
                style={{ borderLeft: "1px solid yellow", paddingLeft: "5px" }}
              ></i>
            </button>
            <button
              type="button"
              className="js-navbar-vertical-aside-toggle-invoker close"
              style={{ display: "flex", alignItems: "center" }}
              onClick={toggleSidebar}
            >
              <span
                style={{
                  borderLeft: "2px solid #71869d",

                  height: "10px",
                  display: "block",
                }}
              ></span>
              <i
                className="fa-solid fa-angle-left"
                style={{ borderLeft: "1px solid yellow" }}
              ></i>
            </button>
          </div>
          <div className="navbar-vertical-content">
            <div className="sidebar--search-form pb-3 pt-4">
              <div className="search--form-group">
                <button type="button" className="btn">
                  <i className="tio-search" />
                </button>
                <input
                  type="text"
                  className="js-form-search form-control form--control"
                  id="search-bar-input"
                  placeholder="Search menu..."
                />
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-lg nav-tabs">
              <li className="navbar-vertical-aside-has-menu active">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  title="Dashboard"
                  href="https://6valley.6amtech.com/admin/dashboard"
                >
                  <i className="tio-home-vs-1-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  title="POS"
                  href="https://6valley.6amtech.com/admin/pos"
                >
                  <i className="tio-shopping nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    POS
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  Order management
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Orders"
                >
                  <i className="tio-shopping-cart-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Orders
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/orders/list/all"
                      title="All"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        All
                        <span className="badge badge-soft-info badge-pill ml-1">
                          190
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/pending"
                      title="Pending"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Pending
                        <span className="badge badge-soft-info badge-pill ml-1">
                          58
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/confirmed"
                      title="Confirmed"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Confirmed
                        <span className="badge badge-soft-success badge-pill ml-1">
                          21
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/processing"
                      title="Packaging"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Packaging
                        <span className="badge badge-soft-warning badge-pill ml-1">
                          9
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/out_for_delivery"
                      title="Out for delivery"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Out for delivery
                        <span className="badge badge-soft-warning badge-pill ml-1">
                          8
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/delivered"
                      title="Delivered"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Delivered
                        <span className="badge badge-soft-success badge-pill ml-1">
                          76
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/returned"
                      title="Returned"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Returned
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          4
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/failed"
                      title="Failed"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Failed to Deliver
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          5
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/orders/list/canceled"
                      title="Canceled"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Canceled
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          9
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Refund Requests"
                >
                  <i className="tio-receipt-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Refund Requests
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/refund-section/refund/list/pending"
                      title="Pending"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Pending
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          4
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/refund-section/refund/list/approved"
                      title="Approved"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Approved
                        <span className="badge badge-soft-info badge-pill ml-1">
                          2
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/refund-section/refund/list/refunded"
                      title="Refunded"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Refunded
                        <span className="badge badge-soft-success badge-pill ml-1">
                          3
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/refund-section/refund/list/rejected"
                      title="Rejected"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Rejected
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          3
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  Product management
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Category Setup"
                >
                  <i className="tio-filter-list nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Category Setup
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/category/view"
                      title="Categories"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Categories</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/sub-category/view"
                      title="Sub Categories"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Sub Categories</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/sub-sub-category/view"
                      title="Sub Sub Categories"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Sub Sub Categories</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Brands"
                >
                  <i className="tio-star nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Brands
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item " title="Add new">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/brand/add-new"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Add new</span>
                    </a>
                  </li>
                  <li className="nav-item " title="List">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/brand/list"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/attribute/view"
                  title="Product Attribute Setup"
                >
                  <i className="tio-category-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Product Attribute Setup
                  </span>
                </a>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="In-House Products"
                >
                  <i className="tio-shop nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    <span className="text-truncate">In-house Products</span>
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/products/list/in-house"
                      title="Product List"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Product List
                        <span className="badge badge-soft-success badge-pill ml-1">
                          194
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/products/add"
                      title="Add New Product"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Add New Product</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/products/bulk-import"
                      title="Bulk import"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Bulk import</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/products/request-restock-list"
                      title="Request Restock List"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Request Restock List
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Vendor Products"
                >
                  <i className="tio-airdrop nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Vendor Products
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="New Products Requests"
                      href="https://6valley.6amtech.com/admin/products/list/vendor?status=0"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        New Products Requests
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          36
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link text-capitalize"
                      title="Product update requests"
                      href="https://6valley.6amtech.com/admin/products/updated-product-list"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate text-capitalize">
                        Product update req...
                        <span className="badge badge-soft-info badge-pill ml-1">
                          0
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Approved Products"
                      href="https://6valley.6amtech.com/admin/products/list/vendor?status=1"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Approved Products
                        <span className="badge badge-soft-success badge-pill ml-1">
                          172
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Denied Products"
                      href="https://6valley.6amtech.com/admin/products/list/vendor?status=2"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">
                        Denied Products
                        <span className="badge badge-soft-danger badge-pill ml-1">
                          0
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/products/product-gallery"
                  title="Product gallery"
                >
                  <i className="tio-survey nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Product gallery
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  Promotion management
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/banner/list"
                  title="Banner Setup"
                >
                  <i className="tio-photo-square-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Banner Setup
                  </span>
                </a>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Offers & Deals"
                >
                  <i className="tio-users-switch nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Offers &amp; Deals
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/coupon/add"
                      title="Coupon"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Coupon
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/deal/flash"
                      title="Flash Deals"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Flash Deals
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/deal/day"
                      title="Deal of the day"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Deal of the day
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/deal/feature"
                      title="Featured Deal"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Featured Deal
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Notifications"
                >
                  <i className="tio-users-switch nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Notifications
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/notification/index"
                      title="Send notification"
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/icons/send-notification.svg"
                        alt="Send notification svg"
                        width={15}
                        className="mr-2"
                      />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate text-capitalize">
                        Send notification
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link text-capitalize"
                      href="https://6valley.6amtech.com/admin/push-notification/index"
                      title="Push notifications setup"
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/icons/push-notification.svg"
                        alt="Push notification svg"
                        width={15}
                        className="mr-2"
                      />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate text-capitalize">
                        Push notifications setup
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/business-settings/announcement"
                  title="Announcement"
                >
                  <i className="tio-mic-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Announcement
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  Help &amp; support
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="nav-link"
                  href="https://6valley.6amtech.com/admin/messages/index/customer"
                >
                  <i className="tio-chat nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Inbox
                  </span>
                </a>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/contact/list"
                  title="Messages"
                >
                  <i className="tio-messages nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    <span className="position-relative">Messages</span>
                  </span>
                </a>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/support-ticket/view"
                  title="Support Ticket"
                >
                  <i className="tio-support nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    <span className="position-relative">
                      Support Ticket
                      <span className="btn-status btn-xs-status btn-status-danger position-absolute top-0 menu-status" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  Reports &amp; Analysis
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Sales & Transaction Report"
                >
                  <i className="tio-chart-bar-4 nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Sales &amp; Transaction Report
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/report/admin-earning"
                      title="Earning Reports"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Earning Reports
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/report/inhouse-product-sale"
                      title="Inhouse Sales"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Inhouse Sales</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/report/vendor-report"
                      title="Vendor Sales"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate text-capitalize">
                        Vendor Sales
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/transaction/order-transaction-list"
                      title="Transaction Report"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Transaction Report
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/report/all-product"
                  title="Product Report"
                >
                  <i className="tio-chart-bar-4 nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    <span className="position-relative">Product Report</span>
                  </span>
                </a>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link"
                  href="https://6valley.6amtech.com/admin/report/order"
                  title="Order Report"
                >
                  <i className="tio-chart-bar-1 nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Order Report
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  User management
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Customers"
                >
                  <i className="tio-wallet nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Customers
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/customer/list"
                      title="Customer List"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Customer List </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/reviews/list"
                      title="Customer Reviews"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Customer Reviews
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Wallet"
                      href="https://6valley.6amtech.com/admin/customer/wallet/report"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Wallet</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Wallet Bonus Setup"
                      href="https://6valley.6amtech.com/admin/customer/wallet/bonus-setup"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Wallet Bonus Setup</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Loyalty Points"
                      href="https://6valley.6amtech.com/admin/customer/loyalty/report"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Loyalty Points</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Vendors"
                >
                  <i className="tio-users-switch nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Vendors
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Add New Vendor"
                      href="https://6valley.6amtech.com/admin/vendors/add"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Add New Vendor</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      title="Vendor List"
                      href="https://6valley.6amtech.com/admin/vendors/list"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Vendor List</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/vendors/withdraw-list"
                      title="Withdraws"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Withdraws</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/vendors/withdraw-method/list"
                      title="Withdrawal Methods"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Withdrawal Methods</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle text-capitalize"
                  href="javascript:"
                  title="Delivery men"
                >
                  <i className="tio-user nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate text-capitalize">
                    Delivery men
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/delivery-man/add"
                      title="Add new"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Add new</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/delivery-man/list"
                      title="List"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">List</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/delivery-man/withdraw-list"
                      title="Withdraws"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Withdraws</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://6valley.6amtech.com/admin/delivery-man/emergency-contact"
                      title="Emergency contact"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Emergency Contact</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Employees"
                >
                  <i className="tio-user nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Employees
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/custom-role/add"
                      title="Employee Role Setup"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Employee Role Setup
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/employee/list"
                      title="Employees"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Employees</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="nav-link "
                  href="https://6valley.6amtech.com/admin/customer/subscriber-list"
                  title="Subscribers"
                >
                  <span className="tio-user nav-icon" />
                  <span className="text-truncate">Subscribers </span>
                </a>
              </li>
              <li className="nav-item ">
                <small className="nav-subtitle" title="">
                  System Settings
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
              </li>
              <li className="navbar-vertical-aside-has-menu">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Business Setup"
                >
                  <i className="tio-pages-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Business Setup
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/web-config"
                      title="Business Settings"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Business Settings</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/product-settings/inhouse-shop"
                      title="In-house Shop"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">In-house Shop</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/seo-settings/web-master-tool"
                      title="SEO Settings"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">SEO Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="System Setup"
                >
                  <i className="tio-pages-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    System Setup
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/web-config/environment-setup"
                      title="System Settings"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">System Settings</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/system-setup/login-settings/customer-login-setup"
                      title="Login Settings"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Login Settings</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/web-config/theme/setup"
                      title="Themes & Addons"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Themes &amp; Addons</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/email-templates/admin/order-received"
                      title="In-house Shop"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate text-capitalize">
                        Email template
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="3rd Party"
                >
                  <span className="tio-key nav-icon" />
                  <span className="text-truncate">3rd Party</span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/payment-method"
                      title="Payment methods"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Payment methods</span>
                    </a>
                  </li>
                  <li
                    className="navbar-vertical-aside-has-menu
                                    
                                    "
                  >
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/social-media-chat/view"
                      title="Other Configurations"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Other Configurations
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navbar-vertical-aside-has-menu ">
                <a
                  className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                  href="javascript:"
                  title="Pages & Media"
                >
                  <i className="tio-pages-outlined nav-icon" />
                  <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                    Pages &amp; Media
                  </span>
                </a>
                <ul
                  className="js-navbar-vertical-aside-submenu nav nav-sub"
                  style={{ display: "none" }}
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/terms-condition"
                      title="Business Pages"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="text-truncate">Business Pages</span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/social-media"
                      title="Social Media Links"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Social Media Links
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/file-manager/index"
                      title="Gallery"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Gallery
                      </span>
                    </a>
                  </li>
                  <li className="navbar-vertical-aside-has-menu ">
                    <a
                      className="js-navbar-vertical-aside-menu-link nav-link"
                      href="https://6valley.6amtech.com/admin/business-settings/vendor-registration-settings/index"
                      title="Vendor Registration"
                    >
                      <span className="tio-circle nav-indicator-icon" />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        Vendor Registration
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item pt-5"></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
