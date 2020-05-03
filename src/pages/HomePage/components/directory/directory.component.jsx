import React from 'react';
import MenuItem from '../menu-items/menu-item.component'
import Cripto from '../../../../assets/images/lock3.png';
import Estegano from '../../../../assets/images/stenography.png';
import Sql from '../../../../assets/images/sql.png';
import Analisis from '../../../../assets/images/analisis_forense.png';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            menu_sections:[
                {
                    id:'1',
                    title:'Criptografia',
                    linkUrl:'/cripto',
                    imageUrl:Cripto
                },
                {
                    id:'2',
                    title:'Esteganografia',
                    linkUrl:'/esteganografia',
                    imageUrl:Estegano
                },
                {
                    id:'3',
                    title:'Trafico de Red',
                    linkUrl:'/analisisdetrafico',
                    imageUrl:Analisis
                },
                {
                    id:'4',
                    title:'SQL-Injection',
                    linkUrl:'/sqlInjection',
                    imageUrl:Sql
                }
            ]
        }
    }
    render(){
        return(
            <center>
                <div className="row m-0 justify-content-center aling-items-center">
                    {
                        this.state.menu_sections.map(({id,title,linkUrl, imageUrl})=>(
                            <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} />
                        ))
                    }
                </div>
            </center>
        );
    }
}
export default Directory;