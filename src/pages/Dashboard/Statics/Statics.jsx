import ReactApexChart from "react-apexcharts";
import { PiChalkboardTeacherFill, PiUsersFour } from "react-icons/pi";
import { FaBookReader, FaDollarSign } from "react-icons/fa";
import ProUsers from "../../../components/ProUsers";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import load from "../../../../public/loading.json"
import Lottie from "lottie-react";

const Statics = () => {
    const axiosPub = useAxiosPublic()
    const {data,isLoading} = useQuery({
      
        queryKey : ['enrolled'],
        queryFn : async()=>{
            const {data} = await axiosPub.get("/adminStatic")
            return data
        }
    })
 
   
    
    const pieChart = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };

    const chartOptions = {
        series: [
            {
                data: [21, 22, 10, 28, 16, 21, 13, 30],
            },
        ],
        chart: {
            height: 350,
            type: "bar",
            events: {
                click: function (chart, w, e) {
                    console.log(chart, w, e);
                },
            },
        },
        colors: ["#FF4560", "#775DD0", "#FEB019", "#00E396", "#0090FF"],
        plotOptions: {
            bar: {
                columnWidth: "45%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: [
                ["Jan"],
                ["Feb"],
                ["Mar"],
                "Apr",
                ["May"],
                ["Jun"],
                ["Jul"],
                ["Aug"],
            ],
            labels: {
                style: {
                    colors: ["#FF4560", "#775DD0", "#FEB019", "#00E396", "#0090FF"],
                    fontSize: "12px",
                },
            },
        },
    };

    // The options for the area chart
    const areaChartOptions = {
      series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
      chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    };

 
  if(isLoading){
     <div className="flex max-w-screen h-screen items-center text-center justify-center">
        <Lottie animationData={load}/>
        </div>
  }

    return (
        <div >
            <div className="grid lg:grid-cols-4 gap-8">
                {/* Stat cards */}
                <div className="flex gap-3 shadow-lg rounded-lg text-white items-center bg-pink-500 p-8">
                    <p className="bg-white rounded-full p-5"><FaDollarSign className="text-black text-xl" /></p>
                    <div>
                        <h4 className="text-xl font-medium uppercase">Total Earnings</h4>
                        <h4 className="text-xl font-semibold my-2">${data?.totalPrice}</h4>
                        <p>80% increase in 20 days</p>
                    </div>
                </div>
                {/* Stat cards */}
                <div className="flex gap-3 shadow-lg rounded-lg text-white items-center bg-blue-500 p-8">
                    <p className="bg-white rounded-full p-5"><PiChalkboardTeacherFill className="text-black text-xl" /></p>
                    <div>
                        <h4 className="text-xl font-medium uppercase">Total Teachers</h4>
                        <h4 className="text-xl font-semibold my-2">{data?.totalTeachers}</h4>
                        <p>80% increase in 20 days</p>
                    </div>
                </div>
                {/* Stat cards */}
                <div className="flex shadow-lg gap-3 rounded-lg text-white items-center bg-orange-400 p-8">
                    <p className="bg-white rounded-full p-5"><PiUsersFour className="text-black text-xl" /></p>
                    <div>
                        <h4 className="text-xl font-medium uppercase">Total Users</h4>
                        <h4 className="text-xl font-semibold my-2">{data?.totalStudents}</h4>
                        <p>80% increase in 20 days</p>
                    </div>
                </div>
                {/* Stat cards */}
                <div className="flex shadow-lg gap-3 rounded-lg text-white items-center bg-purple-500 p-8">
                    <p className="bg-white rounded-full p-5"><FaBookReader className="text-black text-xl" /></p>
                    <div>
                        <h4 className="text-xl font-medium uppercase">Total Course</h4>
                        <h4 className="text-xl font-semibold my-2">{data?.totalClasses}</h4>
                        <p>80% increase in 20 days</p>
                    </div>
                </div>
                
            </div>

            {/* charts */}
            <div className="grid my-12 lg:grid-cols-7 gap-10">
              {/* bar chart start */}
              <div className="bg-white shadow-lg col-span-3 rounded-lg p-8">
                <h3 className="text-xl font-semibold border-b pb-2 mb-2">Total profit</h3>
                    <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        type="bar"
                        height={350}
                    />
                </div>
                {/* bar chart end */}

                {/* pie chart start */}
                <div className="bg-white shadow-lg col-span-2 rounded-lg p-8">
                <h3 className="text-xl font-semibold border-b pb-2 mb-2">Total profit</h3>
                  <div className="flex h-full  justify-center items-center">
                  <ReactApexChart width={350} options={pieChart.options} series={pieChart.series} type="donut" />
                  </div>
               
                   
                </div>
                {/* pie chart end */}
                
                {/* area chart start */}
                <div className="bg-white shadow-lg col-span-2 rounded-lg p-8">
                <h3 className="text-xl font-semibold border-b pb-2 mb-2">Total profit</h3>
                    <ReactApexChart 
                        options={areaChartOptions} 
                        series={areaChartOptions.series} 
                        type="area" 
                        height={350} 
                    />
                </div>
                {/* area chart end */}
            </div>

            {/* Pro users */}
            <ProUsers/>
        </div>
    );
};

export default Statics;
