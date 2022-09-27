import React from 'react'
import { useDispatch } from 'react-redux';
import { bgDanger, bgDark, bgPrimary, bgSecondary, bgSuccess, bgWarning } from '../redux/color/action';

const Color = () => {


  const dispatch = useDispatch()


  return (
    <div className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <button onClick={ () => dispatch(bgPrimary()) } className='btn btn-primary'> primary </button>
                  <button onClick={ () => dispatch(bgSecondary()) } className='btn btn-secondary'> Secondary </button>
                  <button onClick={ () => dispatch(bgSuccess()) } className='btn btn-success'> Success </button>
                  <button onClick={ () => dispatch(bgDanger()) } className='btn btn-danger'> Danger </button>
                  <button onClick={ () => dispatch(bgWarning()) } className='btn btn-warning'> Warning </button>
                  <button onClick={ () => dispatch(bgDark()) } className='btn btn-dark'> Dark </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Color