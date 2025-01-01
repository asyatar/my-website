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
    <h1 className="name">wired letterforms<br />+ posters</h1>
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
                I bent electrical wire by hand to create this font, then implemented it in a poster series.
              </p>
              <img src="wiredcarousel.png" className="mb-12" />
              <img src="wiredposters.png" className="mb-3" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}