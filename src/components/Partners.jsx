
import './Partners.css'
import partnerImg from '../../src/assets/bymind.jpg';
// eslint-disable-next-line no-unused-vars
export default function Partners() {


  return (
    <>
    
<div className="container col-xxl-8 px-4" id='Parcerias'>
  <div className="p-5 text-center">
    <div className="container">
      <h1 className="partnersTitle">Parceiros</h1>
      <div className='imgParceiros'>
      <img src={partnerImg} alt='by mind image logo'/>

      </div>
    </div>
  </div>
</div>
    </>
  )
}
