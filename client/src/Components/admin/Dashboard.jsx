import React, { useEffect, useState } from "react";
import axios from "axios";
import eye from "../../Images/eye.png";
import meet from "../../Images/meet.webp";
import users from "../../Images/users.png";
import money from "../../Images/money.png";
import './dashboard.css'

import { PieChart, Pie, Tooltip } from "recharts";
import { Sector } from "recharts";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = () => {
    axios
      .get("https://meetup-server.vercel.app/countUsers")
      .then((response) => {
        setUserCount(response.data.count);
      })
      .catch((error) => {
        console.error("There was an error fetching the user count!", error);
      });
  };

  const [state, setState] = useState({ activeIndex: 0 });

  const onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };
  const Stats = [
    {
      title: "Total Users",
      logo: users,
      desc: userCount.toLocaleString(),
    },
    {
      title: "Total Views",
      logo: eye,
      desc: "7.52K",
    },
    {
      title: "Total Meetings",
      logo: meet,
      desc: "4.13K",
    },
    {
      title: "Profit",
      logo: money,
      desc: "2.22K",
    },
  ];

  const datap = [
    { name: "Education", value: 400 },
    { name: "Corporate ", value: 300 },
    { name: "Business ", value: 300 },
    { name: "Government", value: 200 },
  ];

  const datar = [
    { name: "Desktop", value: 400 },
    { name: "Mobile", value: 300 },
    { name: "Tablet", value: 300 },
    { name: "Unknown", value: 200 },
  ];

  const datab = [
    {
      name: "Mon",
      views: 400,
      newUsers: 240,
    },
    {
      name: "Tue",
      views: 300,
      newUsers: 139,
      // amt: 221,
    },
    {
      name: "Wed",
      views: 200,
      newUsers: 98,
      // amt: 229,
    },
    {
      name: "Thur",
      views: 278,
      newUsers: 39,
      // amt: 200,
    },
    {
      name: "Fri",
      views: 189,
      newUsers: 48,
      // amt: 2181,
    },
    {
      name: "Sat",
      views: 230,
      newUsers: 30,
      // amt: 2500,
    },
    {
      name: "Sun",
      views: 349,
      newUsers: 43,
      // amt: 2100,
    },
  ];
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className="p-6 mostly-customized-scrollbar w-[100vw] overflow-y-scroll overflow-x-scroll px-0 max-h-[100vh]  me-0">
      <div className="statCards w-[95%] flex flex-wrap justify-around">
        {Stats.map((stat) => (
          <div class="m-3 w-[220px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex  flex-col items-center justify-center pb-10">
              {/* <div className='w-24 h-24 mb-3 rounded-full shadow-lg object-cover'>{stat.logo}</div> */}
              <img
                class="w-1/3 h-1/3 mb-3 rounded-full mt-4 shadow-lg object-fill"
                src={stat.logo}
                alt=""
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {stat.desc}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-2 mx-2 my-3">
        <div className="upperhalf flex-wrap w-[95%] flex justify-around">
          <div className="pie1 flex justify-center flex-col  border-2  border-gray-200 ">
            <h1 className="text-xl text-center p-2 text-blue-600 font-semibold">
              User Domain
            </h1>
            <div className="w-[100%] flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={datap}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />

              <Tooltip />
            </PieChart>
            </div>
          </div>

          <div className="pie2  border-2 border-gray-200 ">
            <h1 className="text-xl text-center p-2 text-blue-600 font-semibold">
              Viewer Analytics
            </h1>
            <div className=" w-[100%] flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                style={{ justifyContent: "center" }}
                activeIndex={state.activeIndex}
                activeShape={renderActiveShape}
                data={datar}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>

            </div>
          </div>
        </div>
        <div className="lowerhalf w-[95%] flex justify-center">
          <div className="barc mt-10 overflow-x-scroll border-2 object-contain border-gray-200">
            <h1 className="text-xl text-center p-2 text-blue-600 font-semibold">
              Weekly Viewers
            </h1>
            <BarChart
              width={550}
              height={360}
              data={datab}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="views"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="newUsers"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
