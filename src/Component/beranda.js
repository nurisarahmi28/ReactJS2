import React from 'react';
import {Card,CardTitle,CardActions,Button,Icon} from 'react-mdl';
import '../App.css'
class Beranda extends React.Component{
    render(){
        return(
            <div>
               <Card className="beranda" alignItems="center">
                        <CardTitle expand style={{alignItems: 'flex-start', color: '#7625cc'}}>
                            <h4 style={{marginTop: '0'}}>
                                hai<br />
                                it's february<br />
                                please be happy !^^
                            </h4>
                        </CardTitle>
                <CardActions border style={{borderColor: 'rgba(215, 213, 227)', display: 'flex', boxSizing: 'unser', alignItems: 'center', color: '#7625cc'}}>
                    <Button colored style={{color: '#7625cc'}}>dont forget to smile :D</Button>
                    <div className="mdl-layout-spacer"></div>
                    <Icon name="event "/>
                </CardActions>
        </Card>
            </div>
        )
    }
}

export default Beranda;