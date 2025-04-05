import Listing from './Listing'
import PurchaseOffer from './PurchaseOffer'
import Invoice from './Invoice'
import BillOfSale from './BillOfSale'
import TitleTransferRequest from './TitleTransferRequest'
import Title from './Title'
import TitleHistory from './TitleHistory'
import FraudAlert from './FraudAlert'
import TaxInvoice from './TaxInvoice'

export default function TemplatesIndex() {
  return (
    <div className="space-y-6">
      <Listing />
      <PurchaseOffer />    
      <Invoice />           
      <BillOfSale />         
      <TitleTransferRequest />        
      <Title />          
      <TitleHistory />            
      <FraudAlert />            
      <TaxInvoice />       
    </div>
  )
}
