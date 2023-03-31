import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {lastWeekData} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="coverage-heading">Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={300}
        data={lastWeekData}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          className="recharts-legend-item-text"
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#f54394" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#2d87bb" barSize="20%" />
      </BarChart>
    </>
  )
}

export default VaccinationCoverage
