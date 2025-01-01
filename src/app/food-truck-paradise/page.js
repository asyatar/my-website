export default function about() {
  return (
    <div className="body-container">
      <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 'calc(100%)',  // Matches the right column width of table-horizontal-only
   
  }}>
    <h1 className="name">food truck paradise<br />brand + booklet</h1>
    <span style={{ 
      fontSize: '32px',  // Same as .name class
      color: 'var(--mylightgrey)',
      fontWeight: 'normal',
      lineHeight: '.9',  // Same as .name class
      marginBottom: "5px"
    }}>2023</span>
  </div>
      
      <table className="table-horizontal-only">
        <tbody>
          <tr style={{ borderBottom: 'none' }}>
            <td style={{ padding: '0' }}></td>
            <td style={{ padding: '0' }}>
            <p className="mb-5" style={{marginTop:"25px", marginBottom: "40px"}}>
               Reimagining "Food Truck Paradise", a long string of food trucks that call Long Wharf, New Haven, home. 
              </p>
              <img src="foodtruckparadisepage1.png" style={{marginBottom:"30px"}}/>
              <img src="foodtruckparadisepage2.png" style={{marginBottom:"30px"}}/>
              <img src="foodtruckparadisepage3.png" style={{marginBottom:"30px"}}/>
              <img src="foodtruckparadisepage4.png"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}