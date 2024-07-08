import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { Calendar } from 'react-date-range';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE',  '#FFBB28', '#FF8042'];
// const colors = ['#0088FE', '#FF8042', '#FFBB28',  'red', 'pink'];


const Chart = ({info}) => {

   
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

      // const getPath = (x, y, width, height) => {
      //   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      //   ${x + width / 2}, ${y}
      //   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      //   Z`;
      // };
      
      // const TriangleBar = (props) => {
      //   const { fill, x, y, width, height } = props;
      
      //   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      // };

      const data = [
       
        { name: 'Total Enrolled', value: info?.totalEnrolled },
        { name: 'Total Assignment', value: info?.totalASsignments },
        { name: 'Per day AS', value: info?.perDaySubmit },
     
      ];

      // const barData = [
      //   {
      //     name: 'Total Enrolled',
      //     uv: info?.totalEnrolled,
      //     pv: 2400,
      //     amt: 2400,
      //   },
      //   {
      //     name: 'Total Assignment',
      //     uv: info?.totalASsignments,
      //     pv: 1398,
      //     amt: 2210,
      //   },
      //   {
      //     name: 'Per day AS',
      //     uv: info?.perDaySubmit,
      //     pv: 9800,
      //     amt: 2290,
      //   }
       
      // ];
      

 

    return (
      <div className='flex lg:flex-row  flex-col gap-10'>
         <div className='lg:w-1/2  flex items-center p-4 justify-center   lg:shadow-xl'>
            {/* <BarChart
          
                width={500}
                height={300}
                data={barData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                </BarChart> */}
                <Calendar
                className='bg-base-300 flex items-center justify-center w-full h-full'
              date={new Date()} />
         </div>
          <div className="lg:w-1/2 flex items-center justify-center pb-5 lg:shadow-xl ">
           <PieChart className='cursor-pointer' width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip/>
          <Legend/>
        </PieChart>
        </div>
      </div>
    );
};

export default Chart;