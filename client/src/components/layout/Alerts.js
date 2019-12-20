import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = props => {

    const alerContext = useContext(AlertContext);


    return (
        alerContext.alerts.length > 0 && alerContext.alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'></i> {alert.msg}
            </div>
        ))
    )
}

Alerts.propTypes = {

}

export default Alerts
