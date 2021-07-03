import React ,{useContext,useState} from 'react';
import { ListGroup, Badge ,Container,Row,Col,Pagination } from 'react-bootstrap';
import  {SettingsContext}  from './context/setting';
import  {LoginContext}  from './context/aurth';
import { PencilFill,TrashFill} from 'react-bootstrap-icons'
import { If, Else } from '../if/if.js';
import Auth from './auth';
function TodoList(props) {
  const [currPage, setCurrPage] = useState(1);

  const settingsContext = useContext(SettingsContext);
  const authContext = useContext(LoginContext);
  const deleteItem = (id) => {
    props.deleteHandle(id);
  };
  const showForm = (id) => {
    props.updateHandle(id);
  };
  const selectPage = pageNum =>{
  setCurrPage(pageNum +1);
    
  }
  return (
    <>
    <ListGroup>
      {(props.list
      .filter(val=> (settingsContext.showCompleted)?true:!(val.complete))
      .sort((a, b) =>(a[settingsContext.sort] - b[settingsContext.sort])))
      .slice((currPage - 1) * settingsContext.maxItems, currPage * settingsContext.maxItems)
      .map((item, idx) => (
        <ListGroup.Item  style={{MarginBottom :'20px'}}
          // className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Container  >
            <Row>
            <Col  onClick={() =>{if(authContext.user.capabilities.includes('update')) props.handleComplete(item._id)}}>
            <Else condition={item.complete}>
            <Badge bg="success">Pending</Badge>
          </Else>
          <If condition={item.complete}>
            <Badge bg="danger">Complete</Badge>
          </If>
            </Col>
            <Col>
             <strong>{item.assignee}</strong>
            </Col>

            <Col  >
            <Row>
            <Col  ><Auth capability='update'>
            <PencilFill    size={18} style={{cursor:'pointer',margin:'0 5px'}} onClick={() => {
              showForm(item._id);
            }}></PencilFill>
            </Auth></Col>
            <Col  ><Auth capability='delete'>
              
              <TrashFill  size={18} style={{cursor:'pointer'}}
                onClick={() => {
                  deleteItem(item._id);
                }}
                >
              </TrashFill>
                </Auth></Col>

            </Row>
            
            
            </Col>
            </Row>
              <Row style={{margin:'10px 0'}} onClick={() => {if(authContext.user.capabilities.includes('update')) props.handleComplete(item._id)}}>
              {item.text}

              </Row>
              <Row  onClick={() =>{if(authContext.user.capabilities.includes('update')) props.handleComplete(item._id)}}>
              <Col style={{'textAlign': 'end',color:'#8c8a8a','fontSize':'14px'}} >
               <div ><strong>Difficulty : </strong>{item.difficulty || 1}/5</div> 
              </Col>
              

              </Row>

          </Container>





            

        </ListGroup.Item>
      ))}
    </ListGroup>
    <Pagination  style={{margin:'15px auto','justifyContent':'center'}}>
    <Pagination.Prev onClick={()=>{
     if(currPage-1 > 0 ) setCurrPage(currPage-1)
    }}/>
    { 
      props.list.map((val,idx )=>{
      if( idx % settingsContext.maxItems === 0 || idx/idx % settingsContext.maxItems === 0){
      return <Pagination.Item key={idx} active={(currPage - 1 === idx/settingsContext.maxItems)?true:false}  onClick={()=>{selectPage(idx/settingsContext.maxItems)}}>{(idx/settingsContext.maxItems) + 1}</Pagination.Item>
      }else{return null;}
    
    })
    }
    
    
    <Pagination.Next onClick={()=>{
      if(currPage < (props.list.length/settingsContext.maxItems)) setCurrPage(currPage+1)
    }} />
</Pagination>
    </>
  );
}

export default TodoList;
