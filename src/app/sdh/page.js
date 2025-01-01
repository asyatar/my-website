export default function sdh() {
  return (
    <div className="body-container">
       <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 'calc(100%)',  // Matches the right column width of table-horizontal-only
   
  }}>
    <h1 className="name">source development hub <br /> website redesign</h1>
    <span style={{ 
      fontSize: '32px',  // Same as .name class
      color: 'var(--mylightgrey)',
      fontWeight: 'normal',
      lineHeight: '.9',  // Same as .name class
      marginBottom: "5px"
    }}>2024</span>
  </div>
      <table className="table-horizontal-only">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td>
        <h2>OVERVIEW</h2>
      </td>
      <td>
      <p style={{ marginTop: "25px"}}>Source Development Hub, a social enterprise startup incubated at Yale and MIT, focuses on creating digital tools to improve the accessibility and effectiveness of affordable housing. I worked with Billy Huang, the CEO.
      </p>
        <img src="sdhoverview.png" style={{ marginTop: "30px", marginBottom: "20px" }}></img>
        <p style={{marginBottom:"30px"}}>I was tasked with designing and creating a new website for the group, creating a visual identity that aligns with their mission and most effectively communication their projects and impact.</p>
        <table className="four-cells" style={{ marginBottom: "25px", paddingBottom: "0px !important"}}>
          <tbody>
            <tr>
            <td><h2>SYSTEM:</h2><p style={{ fontStyle: "italic" }}>NextJS, HTML, Figma</p></td>
              <td><h2>TEAM:</h2><p style={{ fontStyle: "italic" }}>Tina Zeng & Coleman Grengs (written content)</p></td>
              <td><h2>ROLE:</h2><p style={{ fontStyle: "italic" }}>UI/UX Designer, NextJS Developer</p></td>
              <td><h2>TIMELINE:</h2><p style={{ fontStyle: "italic" }}>November - January 2024</p></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <h2 style={{marginTop:"20px"}}>UPDATE</h2>
      </td>
      <td>
        <p style={{marginTop:"20px"}}>This project is still ongoing, but a full case study and product is coming soon.</p>
      </td>
    </tr>   
  </tbody>
</table>
    </div>
  );
}
