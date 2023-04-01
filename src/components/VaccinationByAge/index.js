import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {ageData} = props
  console.log(ageData[0].age)
  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie cx="50%" cy="30%" outerRadius="60%" dataKey="count" data={ageData}>
          <Cell name={ageData[0].age} fill="#2d87bb" />
          <Cell name={ageData[1].age} fill="#a3df9f" />
          <Cell name={ageData[2].age} fill="#64C2A6" />
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
  )
}

export default VaccinationByAge
