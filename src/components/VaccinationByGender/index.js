import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {genderData} = props

  return (
    <>
      <h1>Vaccination by Age</h1>
      <div className="recharts-pie">
        <PieChart width="100%" height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={genderData}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name={genderData[0].gender} fill="#fecba6" />
            <Cell name={genderData[1].gender} fill="#b3d23f" />
            <Cell name={genderData[2].gender} fill="#a44c9e" />
          </Pie>
          <Legend
            className="recharts-legend-item-text"
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </div>
    </>
  )
}

export default VaccinationByGender
