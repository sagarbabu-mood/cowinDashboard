import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderData} = props

  return (
    <>
      <div className="vaccination-by-gender-container">
        <h1 className="vaccination-by-gender-heading">Vaccination by Gender</h1>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="60%"
            data={genderData}
            startAngle={180}
            endAngle={0}
            innerRadius="30%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name={genderData[0].gender} fill="#f54394" />
            <Cell name={genderData[1].gender} fill="#5a8dee" />
            <Cell name={genderData[2].gender} fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </div>
    </>
  )
}

export default VaccinationByGender
