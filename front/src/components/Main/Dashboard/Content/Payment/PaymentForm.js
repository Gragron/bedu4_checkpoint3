import React, {Component} from 'react';
import axios from 'axios';
// components materialize
import {Button, Row, Col, Icon, ProgressBar, CardPanel} from 'react-materialize';



class PaymentForm extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            bShowProgressBar: false,
            bShowCard:false,
        };
    }
    

    ShowProgressBar = ()=>{
        return new Promise((resolve, reject) => {
               this.setState({bShowProgressBar: true})
                 resolve()
           })
    }
    HideProgressBar = ()=>{
        setInterval(() => {
            this.setState({bShowProgressBar: false})
            this.setState({bShowCard: true})
            }, 2000)
            
    }
     
    ShowProgressBar2 = ()=>{
        return new Promise((resolve, reject) => {
               this.setState({bShowProgressBar2: true})
                 resolve()
           })
    }
    HideProgressBar2 = ()=>{
        setInterval(() => {
            this.setState({bShowProgressBar2: false})
            }, 3000)
            
    }
    UpdateDB = ()=>{
        try{
            axios.get("http://localhost:3005/updateServicePrice/5c48ce9ae7179a5449420d71/660")
            .then(res => {
                console.log(res);
              })
        }
        catch(error){
            console.log(`Error  ${error}`);
        }
    }
     
    render(){
        return(
            <>
                <Row>
                    <Col m={6} className="right-align"/> 
                    <Col m={6} className="right-align"> 
                    <div className="input-field  col s9">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate"/>
                        <label htmlFor="icon_prefix">Número de Servicio</label>
                    </div>
                        
                        <br/>
                        <Button waves='light' onClick={()=>this.ShowProgressBar().then(()=>this.HideProgressBar())} >Buscar 
                        <Icon >search</Icon>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col m={12}>
                    {this.state.bShowProgressBar &&  <ProgressBar id="Progress1" />} 
                     </Col>
                </Row>
                {this.state.bShowCard && 
                <Row>
                    <CardPanel >
                        <Row >
                            <Col m={12}>
                                <Row>
                                    <Col  m={12} >
                                        <h4>Comisión Federal de Electricidad</h4>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col  m={12}>
                                        <h5>Saldo Vencido: $0.00 </h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  m={12}>
                                        <h5>Total a Pagar: $340.00</h5>
                                        trescientos cuarenta pesos 00/100 M.N.
                                    </Col>
                                </Row>
                                <Row>
                                    <Col m={12}>
                                        <h5>Fecha límite de pago es: 15-ENE </h5>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardPanel>
                </Row>
                }
                {this.state.bShowCard && 
                <Row>
                    <Col m={4}> 
                    </Col>
                    <Col m={4}> 
                    <Button waves='light' onClick={()=>this.ShowProgressBar2().then(()=>this.HideProgressBar2()).then(()=>this.UpdateDB())} >Pagar Ahora<Icon right></Icon></Button>
                    </Col>
                    <Col m={4}>
                    <Button waves='light' >Domiciliar Servicio<Icon right></Icon></Button>
                    </Col>
                </Row>
                }
                 <Row>
                    <Col m={12}>
                    {this.state.bShowProgressBar2 &&  <ProgressBar id="Progress2" />} 
                     </Col>
                </Row>
            </>
            )
        }
}

export default PaymentForm;