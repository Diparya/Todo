import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';

const ToDo=()=>{
    const [List, setList] = useState('')
    const [Add, setAdd] = useState([])
    return(
        <>
        <h1>ToDo list</h1>
        <br/>
        <input type='text' placeholder='Add an item' value={List} onChange={(event)=>{setList(event.target.value)}}/>
        <Button onClick={()=>{setAdd((preVal)=>{return [...preVal,List]}); setList('')}}>
           <AddIcon/>
        </Button>
        <br/>
        <ol>
            {Add.map((val,index)=>{return <ListCom key={index} text={val}/>})}
        </ol>
        </>
    )
}
export default ToDo;