
import Ugly from './Ugly'


function UglyList(props) {
    const {data} = props
    console.log("Data in UglyList:" , data)
    
    const inputs = (data?.map((item, index) => {
      return <Ugly 
      item = {item} 
      key = {index}
      handleDelete={() => props.handleDelete(item.id)}
      />
    }))
  return (
    <div>
      {inputs}
    </div>
  )
}

export default UglyList
