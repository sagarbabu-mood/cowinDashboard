import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {ageData} = props
  console.log(ageData[0].age)
  return (
    <>
      <h1>Vaccination by gender</h1>
      <div className="recharts-pie">
        <PieChart width="100%" height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={ageData}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name={ageData[0].age} fill="#fecba6" />
            <Cell name={ageData[1].age} fill="#b3d23f" />
            <Cell name={ageData[2].age} fill="#a44c9e" />
          </Pie>
          <Legend
            className="recharts-legend-item-text"
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </div>
    </>
  )
}

export default VaccinationByAge
