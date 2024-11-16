import AdminWallet from "./AdminWallet";
import BusinessAnalytics from "./BusinessAnalytics";
import EarningsChart from "./EarningsChart";
import MostPopularProducts from "./MostPopularProducts";
import MostPopularStores from "./MostPopularStores";
import OrderStatisticsChart from "./OrderStatisticsChart";
import TopCustomer from "./TopCustomer";
import TopDeliveryMan from "./TopDeliveryMan";
import TopSellingProducts from "./TopSellingProducts";
import UserOverview from "./UserOverview";
const Dashboard = () => {
  return (
    <>
      <div className="content container-fluid">
        <div className="page-header pb-0 mb-0 border-0">
          <div className="flex-between align-items-center">
            <div>
              <h1 className="page-header-title">Welcome Admin</h1>
              <p>Monitor your business analytics and statistics.</p>
            </div>
          </div>
        </div>
        <BusinessAnalytics />
        <AdminWallet />
        <div className="row g-1">
          <OrderStatisticsChart />
          <UserOverview />
          <div className="col-12" id="earn-statistics-div">
            <EarningsChart />
          </div>
          {/* 
          
        
          <div className="col-12" id="earn-statistics-div">
            <div className="card remove-card-shadow h-100">
              <div className="card-body p-3 p-sm-4">
                <div className="row g-2 align-items-center">
                  <div className="col-md-6">
                    <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
                        alt=""
                      />
                      Earning statistics
                    </h4>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center justify-content-md-end order-stat mb-3">
                    <ul className="option-select-btn earn-statistics-option">
                      <li>
                        <label className="basic-box-shadow">
                          <input
                            type="radio"
                            name="statistics"
                            hidden=""
                            defaultValue="yearEarn"
                            defaultChecked=""
                          />
                          <span
                            data-date-type="yearEarn"
                            className="earn-statistics"
                          >
                            This Year
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="basic-box-shadow">
                          <input
                            type="radio"
                            name="statistics"
                            defaultValue="MonthEarn"
                            hidden=""
                          />
                          <span
                            data-date-type="MonthEarn"
                            className="earn-statistics"
                          >
                            This Month
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="basic-box-shadow">
                          <input
                            type="radio"
                            name="statistics"
                            defaultValue="WeekEarn"
                            hidden=""
                          />
                          <span
                            data-date-type="WeekEarn"
                            className="earn-statistics"
                          >
                            This Week
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="earning-apex-line-chart" style={{ minHeight: 401 }}>
                  <div
                    id="apexchartsl9kc5h7s"
                    className="apexcharts-canvas apexchartsl9kc5h7s apexcharts-theme-light"
                    style={{ width: 1527, height: 386 }}
                  >
                    <svg
                      id="SvgjsSvg9757"
                      width={1527}
                      height={386}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg apexcharts-zoomable"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x={0} y={0} width={1527} height={386}>
                        <div
                          className="apexcharts-legend apexcharts-align-center apx-legend-position-top"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            right: 0,
                            position: "absolute",
                            left: 20,
                            top: "-10px",
                            maxHeight: 193,
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            rel={1}
                            seriesname="Inhouse"
                            data:collapsed="false"
                            style={{ margin: 10 }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={1}
                              data:collapsed="false"
                              style={{
                                background: "rgb(79, 167, 255) !important",
                                color: "rgb(79, 167, 255)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12,
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={1}
                              i={0}
                              data:default-text="Inhouse"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              Inhouse
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={2}
                            seriesname="Vendor"
                            data:collapsed="false"
                            style={{ margin: 10 }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={2}
                              data:collapsed="false"
                              style={{
                                background: "rgb(130, 198, 98) !important",
                                color: "rgb(130, 198, 98)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12,
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={2}
                              i={1}
                              data:default-text="Vendor"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              Vendor
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={3}
                            seriesname="Commission"
                            data:collapsed="false"
                            style={{ margin: 10 }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={3}
                              data:collapsed="false"
                              style={{
                                background: "rgb(193, 198, 98) !important",
                                color: "rgb(193, 198, 98)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12,
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={3}
                              i={2}
                              data:default-text="Commission"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              Commission
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }",
                          }}
                        />
                      </foreignObject>
                      <g
                        id="SvgjsG9759"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(57.59375, 64)"
                      >
                        <defs id="SvgjsDefs9758">
                          <clipPath id="gridRectMaskl9kc5h7s">
                            <rect
                              id="SvgjsRect9765"
                              width="1456.236328125"
                              height="289.348"
                              x="-4.5"
                              y="-2.5"
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskl9kc5h7s" />
                          <clipPath id="nonForecastMaskl9kc5h7s" />
                          <clipPath id="gridRectMarkerMaskl9kc5h7s">
                            <rect
                              id="SvgjsRect9766"
                              width="1483.236328125"
                              height="320.348"
                              x={-18}
                              y={-18}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <filter
                            id="SvgjsFilter9795"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood9796"
                              floodColor="#000000"
                              floodOpacity="0.2"
                              result="SvgjsFeFlood9796Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite9797"
                              in="SvgjsFeFlood9796Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite9797Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset9798"
                              dx={7}
                              dy={18}
                              result="SvgjsFeOffset9798Out"
                              in="SvgjsFeComposite9797Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur9799"
                              stdDeviation={10}
                              result="SvgjsFeGaussianBlur9799Out"
                              in="SvgjsFeOffset9798Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge9800"
                              result="SvgjsFeMerge9800Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode9801"
                                in="SvgjsFeGaussianBlur9799Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode9802"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend9803"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge9800Out"
                              mode="normal"
                              result="SvgjsFeBlend9803Out"
                            />
                          </filter>
                          <filter
                            id="SvgjsFilter9831"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood9832"
                              floodColor="#000000"
                              floodOpacity="0.2"
                              result="SvgjsFeFlood9832Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite9833"
                              in="SvgjsFeFlood9832Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite9833Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset9834"
                              dx={7}
                              dy={18}
                              result="SvgjsFeOffset9834Out"
                              in="SvgjsFeComposite9833Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur9835"
                              stdDeviation={10}
                              result="SvgjsFeGaussianBlur9835Out"
                              in="SvgjsFeOffset9834Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge9836"
                              result="SvgjsFeMerge9836Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode9837"
                                in="SvgjsFeGaussianBlur9835Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode9838"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend9839"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge9836Out"
                              mode="normal"
                              result="SvgjsFeBlend9839Out"
                            />
                          </filter>
                          <filter
                            id="SvgjsFilter9867"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood9868"
                              floodColor="#000000"
                              floodOpacity="0.2"
                              result="SvgjsFeFlood9868Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite9869"
                              in="SvgjsFeFlood9868Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite9869Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset9870"
                              dx={7}
                              dy={18}
                              result="SvgjsFeOffset9870Out"
                              in="SvgjsFeComposite9869Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur9871"
                              stdDeviation={10}
                              result="SvgjsFeGaussianBlur9871Out"
                              in="SvgjsFeOffset9870Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge9872"
                              result="SvgjsFeMerge9872Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode9873"
                                in="SvgjsFeGaussianBlur9871Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode9874"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend9875"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge9872Out"
                              mode="normal"
                              result="SvgjsFeBlend9875Out"
                            />
                          </filter>
                        </defs>
                        <line
                          id="SvgjsLine9764"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="284.348"
                          stroke="#b6b6b6"
                          strokeDasharray={3}
                          strokeLinecap="butt"
                          className="apexcharts-xcrosshairs"
                          x={0}
                          y={0}
                          width={1}
                          height="284.348"
                          fill="#b1b9c4"
                          filter="none"
                          fillOpacity="0.9"
                          strokeWidth={1}
                        />
                        <g
                          id="SvgjsG9876"
                          className="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG9877"
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText9879"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={0}
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9880">Jan</tspan>
                              <title>Jan</title>
                            </text>
                            <text
                              id="SvgjsText9882"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="131.56693892045456"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9883">Feb</tspan>
                              <title>Feb</title>
                            </text>
                            <text
                              id="SvgjsText9885"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="263.1338778409091"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9886">Mar</tspan>
                              <title>Mar</title>
                            </text>
                            <text
                              id="SvgjsText9888"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="394.7008167613636"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9889">Apr</tspan>
                              <title>Apr</title>
                            </text>
                            <text
                              id="SvgjsText9891"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="526.2677556818181"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9892">May</tspan>
                              <title>May</title>
                            </text>
                            <text
                              id="SvgjsText9894"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="657.8346946022726"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9895">Jun</tspan>
                              <title>Jun</title>
                            </text>
                            <text
                              id="SvgjsText9897"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="789.4016335227271"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9898">Jul</tspan>
                              <title>Jul</title>
                            </text>
                            <text
                              id="SvgjsText9900"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="920.9685724431816"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9901">Aug</tspan>
                              <title>Aug</title>
                            </text>
                            <text
                              id="SvgjsText9903"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="1052.5355113636363"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9904">Sep</tspan>
                              <title>Sep</title>
                            </text>
                            <text
                              id="SvgjsText9906"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="1184.1024502840908"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9907">Oct</tspan>
                              <title>Oct</title>
                            </text>
                            <text
                              id="SvgjsText9909"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="1315.6693892045453"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9910">Nov</tspan>
                              <title>Nov</title>
                            </text>
                            <text
                              id="SvgjsText9912"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="1447.2363281249998"
                              y="313.348"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan9913">Dec</tspan>
                              <title>Dec</title>
                            </text>
                          </g>
                          <line
                            id="SvgjsLine9914"
                            x1={0}
                            y1="285.348"
                            x2="1447.236328125"
                            y2="285.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g id="SvgjsG9932" className="apexcharts-grid">
                          <g
                            id="SvgjsG9933"
                            className="apexcharts-gridlines-horizontal"
                          >
                            <line
                              id="SvgjsLine9959"
                              x1={0}
                              y1={0}
                              x2="1447.236328125"
                              y2={0}
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9960"
                              x1={0}
                              y1="71.087"
                              x2="1447.236328125"
                              y2="71.087"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9961"
                              x1={0}
                              y1="142.174"
                              x2="1447.236328125"
                              y2="142.174"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9962"
                              x1={0}
                              y1="213.26100000000002"
                              x2="1447.236328125"
                              y2="213.26100000000002"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9963"
                              x1={0}
                              y1="284.348"
                              x2="1447.236328125"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            id="SvgjsG9934"
                            className="apexcharts-gridlines-vertical"
                          >
                            <line
                              id="SvgjsLine9935"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9937"
                              x1="131.56693892045453"
                              y1={0}
                              x2="131.56693892045453"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9939"
                              x1="263.13387784090907"
                              y1={0}
                              x2="263.13387784090907"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9941"
                              x1="394.7008167613636"
                              y1={0}
                              x2="394.7008167613636"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9943"
                              x1="526.2677556818181"
                              y1={0}
                              x2="526.2677556818181"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9945"
                              x1="657.8346946022726"
                              y1={0}
                              x2="657.8346946022726"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9947"
                              x1="789.4016335227271"
                              y1={0}
                              x2="789.4016335227271"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9949"
                              x1="920.9685724431816"
                              y1={0}
                              x2="920.9685724431816"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9951"
                              x1="1052.5355113636363"
                              y1={0}
                              x2="1052.5355113636363"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9953"
                              x1="1184.1024502840908"
                              y1={0}
                              x2="1184.1024502840908"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9955"
                              x1="1315.6693892045453"
                              y1={0}
                              x2="1315.6693892045453"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine9957"
                              x1="1447.2363281249998"
                              y1={0}
                              x2="1447.2363281249998"
                              y2="284.348"
                              stroke="#cad2ff"
                              strokeDasharray={5}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <line
                            id="SvgjsLine9936"
                            x1={0}
                            y1="285.348"
                            x2={0}
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9938"
                            x1="131.56693892045453"
                            y1="285.348"
                            x2="131.56693892045453"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9940"
                            x1="263.13387784090907"
                            y1="285.348"
                            x2="263.13387784090907"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9942"
                            x1="394.7008167613636"
                            y1="285.348"
                            x2="394.7008167613636"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9944"
                            x1="526.2677556818181"
                            y1="285.348"
                            x2="526.2677556818181"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9946"
                            x1="657.8346946022726"
                            y1="285.348"
                            x2="657.8346946022726"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9948"
                            x1="789.4016335227271"
                            y1="285.348"
                            x2="789.4016335227271"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9950"
                            x1="920.9685724431816"
                            y1="285.348"
                            x2="920.9685724431816"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9952"
                            x1="1052.5355113636363"
                            y1="285.348"
                            x2="1052.5355113636363"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9954"
                            x1="1184.1024502840908"
                            y1="285.348"
                            x2="1184.1024502840908"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9956"
                            x1="1315.6693892045453"
                            y1="285.348"
                            x2="1315.6693892045453"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9958"
                            x1="1447.2363281249998"
                            y1="285.348"
                            x2="1447.2363281249998"
                            y2="291.348"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine9965"
                            x1={0}
                            y1="284.348"
                            x2="1447.236328125"
                            y2="284.348"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            id="SvgjsLine9964"
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="284.348"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g
                          id="SvgjsG9767"
                          className="apexcharts-line-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG9768"
                            className="apexcharts-series"
                            seriesname="Inhouse"
                            data:longestseries="true"
                            rel={1}
                            data:realindex={0}
                          >
                            <path
                              id="SvgjsPath9794"
                              d="M 0 124.40225000000001C 46.048428622159086 124.40225000000001 85.51851029829544 284.348 131.56693892045453 284.348C 177.61536754261363 284.348 217.08544921874997 284.348 263.13387784090907 284.348C 309.18230646306813 284.348 348.6523881392045 284.348 394.7008167613636 284.348C 440.7492453835227 284.348 480.21932705965907 284.348 526.2677556818181 284.348C 572.3161843039773 284.348 611.7862659801136 284.348 657.8346946022727 284.348C 703.8831232244319 284.348 743.3532049005681 284.348 789.4016335227273 284.348C 835.4500621448864 284.348 874.9201438210226 284.348 920.9685724431818 284.348C 967.0170010653409 284.348 1006.4870827414771 284.348 1052.5355113636363 284.348C 1098.5839399857955 284.348 1138.0540216619318 284.348 1184.102450284091 284.348C 1230.15087890625 284.348 1269.6209605823865 284.348 1315.6693892045455 284.348C 1361.7178178267045 284.348 1401.187899502841 284.348 1447.236328125 284.348"
                              fill="none"
                              fillOpacity={1}
                              stroke="rgba(79,167,255,0.85)"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={5}
                              strokeDasharray={0}
                              className="apexcharts-line"
                              index={0}
                              clipPath="url(#gridRectMaskl9kc5h7s)"
                              filter="url(#SvgjsFilter9795)"
                              pathto="M 0 124.40225000000001C 46.048428622159086 124.40225000000001 85.51851029829544 284.348 131.56693892045453 284.348C 177.61536754261363 284.348 217.08544921874997 284.348 263.13387784090907 284.348C 309.18230646306813 284.348 348.6523881392045 284.348 394.7008167613636 284.348C 440.7492453835227 284.348 480.21932705965907 284.348 526.2677556818181 284.348C 572.3161843039773 284.348 611.7862659801136 284.348 657.8346946022727 284.348C 703.8831232244319 284.348 743.3532049005681 284.348 789.4016335227273 284.348C 835.4500621448864 284.348 874.9201438210226 284.348 920.9685724431818 284.348C 967.0170010653409 284.348 1006.4870827414771 284.348 1052.5355113636363 284.348C 1098.5839399857955 284.348 1138.0540216619318 284.348 1184.102450284091 284.348C 1230.15087890625 284.348 1269.6209605823865 284.348 1315.6693892045455 284.348C 1361.7178178267045 284.348 1401.187899502841 284.348 1447.236328125 284.348"
                              pathfrom="M -1 284.348L -1 284.348L 131.56693892045453 284.348L 263.13387784090907 284.348L 394.7008167613636 284.348L 526.2677556818181 284.348L 657.8346946022727 284.348L 789.4016335227273 284.348L 920.9685724431818 284.348L 1052.5355113636363 284.348L 1184.102450284091 284.348L 1315.6693892045455 284.348L 1447.236328125 284.348"
                            />
                            <g
                              id="SvgjsG9769"
                              className="apexcharts-series-markers-wrap"
                              data:realindex={0}
                            >
                              <g
                                id="SvgjsG9771"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9772"
                                  r={1}
                                  cx={0}
                                  cy="124.40225000000001"
                                  className="apexcharts-marker no-pointer-events wufkf2xk5"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={0}
                                  default-marker-size={1}
                                />
                                <circle
                                  id="SvgjsCircle9773"
                                  r={1}
                                  cx="131.56693892045453"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wzpet7uc2"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9774"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9775"
                                  r={1}
                                  cx="263.13387784090907"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wtjbv8b9t"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9776"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9777"
                                  r={1}
                                  cx="394.7008167613636"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wza972uzd"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9778"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9779"
                                  r={1}
                                  cx="526.2677556818181"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w0nvobq0p"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9780"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9781"
                                  r={1}
                                  cx="657.8346946022727"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w7zym9o3z"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9782"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9783"
                                  r={1}
                                  cx="789.4016335227273"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wjtoa1916"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9784"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9785"
                                  r={1}
                                  cx="920.9685724431818"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wb1vh4sv1i"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={7}
                                  j={7}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9786"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9787"
                                  r={1}
                                  cx="1052.5355113636363"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w7l97m8xa"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={8}
                                  j={8}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9788"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9789"
                                  r={1}
                                  cx="1184.102450284091"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wt0onsrgj"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={9}
                                  j={9}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9790"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9791"
                                  r={1}
                                  cx="1315.6693892045455"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wn3fh7nos"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={10}
                                  j={10}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9792"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9793"
                                  r={1}
                                  cx="1447.236328125"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w06zvxubf"
                                  stroke="#ffffff"
                                  fill="#4fa7ff"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={11}
                                  j={11}
                                  index={0}
                                  default-marker-size={1}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG9804"
                            className="apexcharts-series"
                            seriesname="Vendor"
                            data:longestseries="true"
                            rel={2}
                            data:realindex={1}
                          >
                            <path
                              id="SvgjsPath9830"
                              d="M 0 59.60609406500001C 46.048428622159086 59.60609406500001 85.51851029829544 284.348 131.56693892045453 284.348C 177.61536754261363 284.348 217.08544921874997 284.348 263.13387784090907 284.348C 309.18230646306813 284.348 348.6523881392045 284.348 394.7008167613636 284.348C 440.7492453835227 284.348 480.21932705965907 284.348 526.2677556818181 284.348C 572.3161843039773 284.348 611.7862659801136 284.348 657.8346946022727 284.348C 703.8831232244319 284.348 743.3532049005681 284.348 789.4016335227273 284.348C 835.4500621448864 284.348 874.9201438210226 284.348 920.9685724431818 284.348C 967.0170010653409 284.348 1006.4870827414771 284.348 1052.5355113636363 284.348C 1098.5839399857955 284.348 1138.0540216619318 284.348 1184.102450284091 284.348C 1230.15087890625 284.348 1269.6209605823865 284.348 1315.6693892045455 284.348C 1361.7178178267045 284.348 1401.187899502841 284.348 1447.236328125 284.348"
                              fill="none"
                              fillOpacity={1}
                              stroke="rgba(130,198,98,0.85)"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={5}
                              strokeDasharray={0}
                              className="apexcharts-line"
                              index={1}
                              clipPath="url(#gridRectMaskl9kc5h7s)"
                              filter="url(#SvgjsFilter9831)"
                              pathto="M 0 59.60609406500001C 46.048428622159086 59.60609406500001 85.51851029829544 284.348 131.56693892045453 284.348C 177.61536754261363 284.348 217.08544921874997 284.348 263.13387784090907 284.348C 309.18230646306813 284.348 348.6523881392045 284.348 394.7008167613636 284.348C 440.7492453835227 284.348 480.21932705965907 284.348 526.2677556818181 284.348C 572.3161843039773 284.348 611.7862659801136 284.348 657.8346946022727 284.348C 703.8831232244319 284.348 743.3532049005681 284.348 789.4016335227273 284.348C 835.4500621448864 284.348 874.9201438210226 284.348 920.9685724431818 284.348C 967.0170010653409 284.348 1006.4870827414771 284.348 1052.5355113636363 284.348C 1098.5839399857955 284.348 1138.0540216619318 284.348 1184.102450284091 284.348C 1230.15087890625 284.348 1269.6209605823865 284.348 1315.6693892045455 284.348C 1361.7178178267045 284.348 1401.187899502841 284.348 1447.236328125 284.348"
                              pathfrom="M -1 284.348L -1 284.348L 131.56693892045453 284.348L 263.13387784090907 284.348L 394.7008167613636 284.348L 526.2677556818181 284.348L 657.8346946022727 284.348L 789.4016335227273 284.348L 920.9685724431818 284.348L 1052.5355113636363 284.348L 1184.102450284091 284.348L 1315.6693892045455 284.348L 1447.236328125 284.348"
                            />
                            <g
                              id="SvgjsG9805"
                              className="apexcharts-series-markers-wrap"
                              data:realindex={1}
                            >
                              <g
                                id="SvgjsG9807"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9808"
                                  r={1}
                                  cx={0}
                                  cy="59.60609406500001"
                                  className="apexcharts-marker no-pointer-events wsqnrdgfj"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={1}
                                  default-marker-size={1}
                                />
                                <circle
                                  id="SvgjsCircle9809"
                                  r={1}
                                  cx="131.56693892045453"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wr3syime5"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9810"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9811"
                                  r={1}
                                  cx="263.13387784090907"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wd55huuns"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9812"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9813"
                                  r={1}
                                  cx="394.7008167613636"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w13v79864"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9814"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9815"
                                  r={1}
                                  cx="526.2677556818181"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wqnioyx37"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9816"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9817"
                                  r={1}
                                  cx="657.8346946022727"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wtv3pfer1"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9818"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9819"
                                  r={1}
                                  cx="789.4016335227273"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wwvzcxmlc"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9820"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9821"
                                  r={1}
                                  cx="920.9685724431818"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wu6dy8ujt"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={7}
                                  j={7}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9822"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9823"
                                  r={1}
                                  cx="1052.5355113636363"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wbduodnsw"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={8}
                                  j={8}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9824"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9825"
                                  r={1}
                                  cx="1184.102450284091"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w3nzt6isi"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={9}
                                  j={9}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9826"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9827"
                                  r={1}
                                  cx="1315.6693892045455"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wlxnefznk"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={10}
                                  j={10}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9828"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9829"
                                  r={1}
                                  cx="1447.236328125"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wpk7gaiui"
                                  stroke="#ffffff"
                                  fill="#82c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={11}
                                  j={11}
                                  index={1}
                                  default-marker-size={1}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG9840"
                            className="apexcharts-series"
                            seriesname="Commission"
                            data:longestseries="true"
                            rel={3}
                            data:realindex={2}
                          >
                            <path
                              id="SvgjsPath9866"
                              d="M 0 244.752541C 46.048428622159086 244.752541 85.51851029829544 284.348 131.56693892045453 284.348C 177.61536754261363 284.348 217.08544921874997 284.348 263.13387784090907 284.348C 309.18230646306813 284.348 348.6523881392045 284.348 394.7008167613636 284.348C 440.7492453835227 284.348 480.21932705965907 284.348 526.2677556818181 284.348C 572.3161843039773 284.348 611.7862659801136 284.348 657.8346946022727 284.348C 703.8831232244319 284.348 743.3532049005681 284.348 789.4016335227273 284.348C 835.4500621448864 284.348 874.9201438210226 284.348 920.9685724431818 284.348C 967.0170010653409 284.348 1006.4870827414771 284.348 1052.5355113636363 284.348C 1098.5839399857955 284.348 1138.0540216619318 284.348 1184.102450284091 284.348C 1230.15087890625 284.348 1269.6209605823865 284.348 1315.6693892045455 284.348C 1361.7178178267045 284.348 1401.187899502841 284.348 1447.236328125 284.348"
                              fill="none"
                              fillOpacity={1}
                              stroke="rgba(193,198,98,0.85)"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={5}
                              strokeDasharray={0}
                              className="apexcharts-line"
                              index={2}
                              clipPath="url(#gridRectMaskl9kc5h7s)"
                              filter="url(#SvgjsFilter9867)"
                              pathto="M 0 244.752541C 46.048428622159086 244.752541 85.51851029829544 284.348 131.56693892045453 284.348C 177.61536754261363 284.348 217.08544921874997 284.348 263.13387784090907 284.348C 309.18230646306813 284.348 348.6523881392045 284.348 394.7008167613636 284.348C 440.7492453835227 284.348 480.21932705965907 284.348 526.2677556818181 284.348C 572.3161843039773 284.348 611.7862659801136 284.348 657.8346946022727 284.348C 703.8831232244319 284.348 743.3532049005681 284.348 789.4016335227273 284.348C 835.4500621448864 284.348 874.9201438210226 284.348 920.9685724431818 284.348C 967.0170010653409 284.348 1006.4870827414771 284.348 1052.5355113636363 284.348C 1098.5839399857955 284.348 1138.0540216619318 284.348 1184.102450284091 284.348C 1230.15087890625 284.348 1269.6209605823865 284.348 1315.6693892045455 284.348C 1361.7178178267045 284.348 1401.187899502841 284.348 1447.236328125 284.348"
                              pathfrom="M -1 284.348L -1 284.348L 131.56693892045453 284.348L 263.13387784090907 284.348L 394.7008167613636 284.348L 526.2677556818181 284.348L 657.8346946022727 284.348L 789.4016335227273 284.348L 920.9685724431818 284.348L 1052.5355113636363 284.348L 1184.102450284091 284.348L 1315.6693892045455 284.348L 1447.236328125 284.348"
                            />
                            <g
                              id="SvgjsG9841"
                              className="apexcharts-series-markers-wrap"
                              data:realindex={2}
                            >
                              <g
                                id="SvgjsG9843"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9844"
                                  r={1}
                                  cx={0}
                                  cy="244.752541"
                                  className="apexcharts-marker no-pointer-events w3bjms4q0g"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={2}
                                  default-marker-size={1}
                                />
                                <circle
                                  id="SvgjsCircle9845"
                                  r={1}
                                  cx="131.56693892045453"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wea1xrlw2"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9846"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9847"
                                  r={1}
                                  cx="263.13387784090907"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w5rp1unbz"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9848"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9849"
                                  r={1}
                                  cx="394.7008167613636"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wnyzb1lee"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9850"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9851"
                                  r={1}
                                  cx="526.2677556818181"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events ww6bkgg3p"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9852"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9853"
                                  r={1}
                                  cx="657.8346946022727"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wbiu9bf38"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9854"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9855"
                                  r={1}
                                  cx="789.4016335227273"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wfg42940sf"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9856"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9857"
                                  r={1}
                                  cx="920.9685724431818"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wn2o750zc"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={7}
                                  j={7}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9858"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9859"
                                  r={1}
                                  cx="1052.5355113636363"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wf1q7c32z"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={8}
                                  j={8}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9860"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9861"
                                  r={1}
                                  cx="1184.102450284091"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w65wq7b3d"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={9}
                                  j={9}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9862"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9863"
                                  r={1}
                                  cx="1315.6693892045455"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events wfeftevzx"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={10}
                                  j={10}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                              <g
                                id="SvgjsG9864"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskl9kc5h7s)"
                              >
                                <circle
                                  id="SvgjsCircle9865"
                                  r={1}
                                  cx="1447.236328125"
                                  cy="284.348"
                                  className="apexcharts-marker no-pointer-events w2vf6lsyq"
                                  stroke="#ffffff"
                                  fill="#c1c662"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={11}
                                  j={11}
                                  index={2}
                                  default-marker-size={1}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG9770"
                            className="apexcharts-datalabels"
                            data:realindex={0}
                          />
                          <g
                            id="SvgjsG9806"
                            className="apexcharts-datalabels"
                            data:realindex={1}
                          />
                          <g
                            id="SvgjsG9842"
                            className="apexcharts-datalabels"
                            data:realindex={2}
                          />
                        </g>
                        <line
                          id="SvgjsLine9966"
                          x1={0}
                          y1={0}
                          x2="1447.236328125"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine9967"
                          x1={0}
                          y1={0}
                          x2="1447.236328125"
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g
                          id="SvgjsG9968"
                          className="apexcharts-yaxis-annotations"
                        />
                        <g
                          id="SvgjsG9969"
                          className="apexcharts-xaxis-annotations"
                        />
                        <g
                          id="SvgjsG9970"
                          className="apexcharts-point-annotations"
                        />
                        <rect
                          id="SvgjsRect9971"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-zoom-rect"
                        />
                        <rect
                          id="SvgjsRect9972"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-selection-rect"
                        />
                      </g>
                      <rect
                        id="SvgjsRect9763"
                        width={0}
                        height={0}
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fefefe"
                      />
                      <g
                        id="SvgjsG9915"
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(27.59375, 0)"
                      >
                        <g id="SvgjsG9916" className="apexcharts-yaxis-texts-g">
                          <text
                            id="SvgjsText9918"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="65.4"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                            }}
                          >
                            <tspan id="SvgjsTspan9919">$8000</tspan>
                            <title>$8000</title>
                          </text>
                          <text
                            id="SvgjsText9921"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="136.487"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                            }}
                          >
                            <tspan id="SvgjsTspan9922">$6000</tspan>
                            <title>$6000</title>
                          </text>
                          <text
                            id="SvgjsText9924"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="207.57399999999998"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                            }}
                          >
                            <tspan id="SvgjsTspan9925">$4000</tspan>
                            <title>$4000</title>
                          </text>
                          <text
                            id="SvgjsText9927"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="278.66099999999994"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                            }}
                          >
                            <tspan id="SvgjsTspan9928">$2000</tspan>
                            <title>$2000</title>
                          </text>
                          <text
                            id="SvgjsText9930"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="349.74799999999993"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                            }}
                          >
                            <tspan id="SvgjsTspan9931">$0</tspan>
                            <title>$0</title>
                          </text>
                        </g>
                      </g>
                      <g id="SvgjsG9760" className="apexcharts-annotations" />
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-light">
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12,
                        }}
                      />
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(79, 167, 255)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12,
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(130, 198, 98)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12,
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 3 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(193, 198, 98)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12,
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                      <div
                        className="apexcharts-xaxistooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12,
                        }}
                      />
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              id="earn-statistics"
              data-action="https://6valley.6amtech.com/admin/dashboard/earning-statistics"
            />
            <span
              id="earn-statistics-data"
              data-inhouse-text="Inhouse"
              data-vendor-text="Vendor"
              data-commission-text="Commission"
              data-inhouse-earn='{"1":4500,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}'
              data-vendor-earn='{"1":6323.01,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}'
              data-commission-earn='{"1":1114,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}'
              data-label='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]'
            />
            <input
              name="earn_statistics_label_count"
              defaultValue={12}
              hidden=""
            />
          </div> */}
          <TopCustomer />
          <MostPopularStores />
          <TopSellingProducts />
          <MostPopularProducts />
          <TopDeliveryMan />
          <TopDeliveryMan />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
