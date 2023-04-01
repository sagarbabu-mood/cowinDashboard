import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import VaccinationAge from '../VaccinationByAge'
import VaccinationGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

const apiStatusConstants = {
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {isLoading: apiStatusConstants.inProgress, vaccinationData: {}}

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    this.setState({isLoading: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)

    if (response.ok) {
      const data = await response.json()

      const last7DaysData = data.last_7_days_vaccination.map(dayData => ({
        dose1: dayData.dose_1,
        dose2: dayData.dose_2,
        vaccineDate: dayData.vaccine_date,
      }))
      const vaccinationByAge = data.vaccination_by_age.map(ageData => ({
        age: ageData.age,
        count: ageData.count,
      }))
      const vaccinationByGender = data.vaccination_by_gender.map(
        genderData => ({
          count: genderData.count,
          gender: genderData.gender,
        }),
      )
      const formattedData = {
        last7DaysData,
        vaccinationByAge,
        vaccinationByGender,
      }
      this.setState({
        vaccinationData: formattedData,
        isLoading: apiStatusConstants.success,
      })
    } else {
      this.setState({isLoading: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysData,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccinationData
    return (
      <>
        <VaccinationCoverage lastWeekData={last7DaysData} />
        <VaccinationGender genderData={vaccinationByGender} />
        <VaccinationAge ageData={vaccinationByAge} />
      </>
    )
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  renderView = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {vaccinationData} = this.state
    console.log(vaccinationData)
    return (
      <>
        <div className="bg-container">
          <div className="cowin-dashboard-container">
            <div className="logo-container">
              <p className="cowin">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
                  alt="website logo"
                />
                Co-WIN
              </p>
            </div>
            <h1 className="website-heading">CoWIN Vaccination in India</h1>
            {this.renderView()}
          </div>
        </div>
      </>
    )
  }
}

export default CowinDashboard
