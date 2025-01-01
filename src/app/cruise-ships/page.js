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
    <h1 className="name">cruise ships<br />chapbook</h1>
    <span style={{ 
      fontSize: '32px',  // Same as .name class
      color: 'var(--mylightgrey)',
      fontWeight: 'normal',
      lineHeight: '.9',  // Same as .name class
      marginBottom: "5px"
    }}>2024</span>
  </div>
      
      <table className="table-horizontal-only">
        <tbody>
          <tr style={{ borderBottom: 'none' }}>
            <td style={{ padding: '0' }}></td>
            <td style={{ padding: '0' }}>
            <p className="mb-5" style={{marginTop:"25px", marginBottom: "40px"}}>
            This chapbook features the beginning of David Foster Wallace's <u>"Shipping Out: On the (Nearly Lethal) Comforts of a Luxury Cruise."</u> 
              </p>
              <p className="mb-5" style={{marginTop:"25px", marginBottom: "40px"}}>
              The design integrates Foster's well-known use of footnotes and reflects his critique of the hyper-idealized, almost dystopian cruise ships. The booklet was printed and bound, but attached is a digital version.
              </p>
              <img src="cruiseshipscover.jpg" style={{marginBottom:"20px"}}/>
              <img src="cruiseships1.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships2.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships3.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships4.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships5.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships6.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships7.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships8.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships9.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
              <img src="cruiseships10.jpg" style={{marginBottom:"20px", border:"1px solid black"}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}