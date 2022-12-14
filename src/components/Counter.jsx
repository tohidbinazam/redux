import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { minusCounter, plusCounter } from '../redux/counter/action';

const Counter = () => {


  const { counter, color } = useSelector(state => state)

  const dispatch = useDispatch()


  return (
    <div className='text-center my-5'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className={`bg-${color} card`}>
              <div className="card-body">
                <h1 className='counter' > { counter } </h1>
                <button onClick={ () => dispatch(plusCounter())} className='btn btn-success m-2'> ++ </button>
                <button onClick={ () => dispatch(minusCounter())} className='btn btn-danger m-2'> -- </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter