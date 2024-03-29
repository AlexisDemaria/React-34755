import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CarroContext } from '../../context/CarroContext';
import { alert } from '../../utils/alert';
import '../../styles/App.css'

const Checkout = () => {
    const {clearCart} = useContext(CarroContext)
    return (
        <>
        <form className='checkout'>
            <div className='row mb-3'>
                <h2>Finalice su compra</h2>
            </div>
            <div className="row mb-3">
                <label htmlFor="i" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">Apellido</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" required/>
                </div>
            </div>
            <div className='buttonsCheckout'>
                <Link className="btn btn-primary" to={'/cart'}>Volver</Link>
                <Link type="submit" className="btn btn-success" to={'/'} onClick={() => clearCart() || alert()}>Finalizar compra</Link>
            </div>
        </form>
        </>
    );
}

export default Checkout;
