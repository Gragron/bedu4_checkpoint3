import React, { Component } from 'react';
import { Row, Input, Button }  from 'react-materialize'; 

 
class Calendario extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
      }
    
    /* handleAddStartDate() {
        if (!this.state.startDate.length) return;
        this.setState({ // Se utiliza setState, porque no se puede mutar state directamente
            startDateList: this.state.startDateList.concat({ // Se usa una concatenación, para tener un nuevo arreglo (valores pasados + valor nuevo)
                alarmado: false 
            }),
            startDate: ""
        
        })

    } */
    handleClickAlarm() {
        alert('Has programado tu alarma');
        return false;
    }
    handleClickNoAlarm() {
        alert('Alarma cancelada');
        return false;
    }

    render () {
        const { startDate, onStartDateChange, ...rest} = this.props;
        return (
            <div>
                <Row>
                    <Input 
                        name='startDate' 
                        type='date' 
                        onClick={this.handleChange} 
                        onChange={onStartDateChange }
                        onSubmit={ this.handleSubmit }
                        label='Haz click para calendarizar'
                        startdate={startDate}
                    />
                    <p>{this.props.agendar}</p>
                    <div>
                        <Button {...rest}   
                            filterChange={()=>{this.props.filterChange("NoAlarmado")}}
                            onClick={()=>this.handleClickNoAlarm()}> 
                            No alarmar
                        </Button>
                        <Button {...rest}    
                            onClick={()=>this.handleClickAlarm()} 
                            filterChange={()=>{this.props.filterChange("Alarmado")}}>
                            Alarmar</Button>
                    </div>
                </Row>
               
            </div>
        )
    }
}

export default Calendario; 