import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
 return (
  <>
   <Spinner animation="border" role="status">
    <span className="d-flex justify-content-center visually-hidden">Loading...</span>
   </Spinner>
  </>

 )
}

export default Loading