export default function yale_ims() {
  return (
    <div className="body-container">
       <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 'calc(100%)',  // Matches the right column width of table-horizontal-only
   
  }}>
    <h1 className="name">yale intramural <br /> website design</h1>
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
        <img src="yaleimsoverview.png" style={{ marginTop: "30px", marginBottom: "20px" }}></img>
        <p style={{marginBottom:"30px"}}>Our team was tasked with designing a website to serve as a central hub for Yale Intramural participants, providing easy access to schedules, scores, and standings while reflecting the competitive nature of IMs.
        </p>
        <table className="four-cells" style={{ marginBottom: "25px", paddingBottom: "0px !important"}}>
          <tbody>
            <tr>
            <td><h2>SYSTEM:</h2><p style={{ fontStyle: "italic" }}>Figma</p></td>
              <td><h2>TEAM:</h2><p style={{ fontStyle: "italic" }}>Naomi Ling, Lily Lin</p></td>
              <td><h2>ROLE:</h2><p style={{ fontStyle: "italic" }}>Creative Director (UI/UX design)</p></td>
              <td><h2>TIMELINE:</h2><p style={{ fontStyle: "italic" }}>October - December 2024</p></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <h2>PROBLEM</h2>
      </td>
      <td>
      <h1 className="name" style={{ fontSize: "24px", lineHeight: "normal", marginBottom: "30px"}}>How can we make IMs information intuitive and accessible?</h1>
      <p style={{ marginBottom: "10px"}}> The existing IM information system relied solely on multiple spreadsheets that were <b>visually cluttered</b> and <b>hard to navigate</b>:
        </p>
        <ul style={{ marginLeft: "5%", fontStyle: "italic"}}>
          <li>Users had to manually search spreadsheets to find schedules or scores</li>
          <li>It was impossible to filter or view data by college, leading to confusion</li>
          <li>A preliminary website was created by the Yale Computer Society (YCS) but lacked insight into usability, organization and visual appeal</li>
        </ul>
        <img src="yaleimsmessages.png" style={{ marginTop: "30px", marginBottom: "10px" }}></img>
        <p style={{ fontSize: "14px", color: "var(--mylightgrey)", marginBottom: "20px" }}>Real messages from my college’s IMs groupchat</p>
        <p>The challenge was to design an <b>accessible</b> and <b>visually engaging</b> website.</p>
      </td>
    </tr>
    <tr>
      <td>
        <h2>RESEARCH</h2>
      </td>
      <td>
      <p style={{ marginBottom: "30px"}}> We conducted initial meetings with Yale Computer Society (YCS) and active IMS participants to understand pain points and requirements:
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "10px"}}> Key Insights:
      </p>
      <ul style={{ marginLeft: "5%"}}>
          <li>Users wanted the ability to filter schedules and scores by sport and college</li>
          <li>Navigation needed to be user-friendly, with key information available at a glance</li>
          <li>The design should be exciting and bright, embodying the intensity and competitive spirit of IMs</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
        <h2>IDEATION</h2>
      </td>
      <td>
      <img src="yaleimsuserflow.png" style={{ marginBottom: "10px" }}></img>
      <p style={{ fontSize: "14px", color: "var(--mylightgrey)", marginBottom: "20px" }}>Preliminary user flow chart with corresponding basic components for each page</p>
      <p style={{ marginBottom: "30px"}}> We began by identifying core pages and designing user flow, keeping in mind a <b>streamlined interface</b>.
      </p>
      <p style={{ marginBottom: "0px"}}> Upon visiting the website, the user must pass through a login page and API to sign into their Yale account in order to access the actual website. There, they start at the home/leaderboard page, which gives them access to all other pages through the upper navigation bar.
      </p>
      
      </td>
    </tr>
    <tr>
  <td>
    <h2>PROCESS</h2>
  </td>
  <td>
  <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Visual Direction:</p>
  <div className="split-container" style={{marginBottom: "30px"}}>
    <img src="yaleimscolors.png" className="image-left" alt="Yale IMS Colors" />
    <div className="text-right">
      <p>We chose a blue and white color scheme inspired by Yale’s identity, balancing boldness with clarity to reflect the competitive, sporty vibe of IMs. A grid system was used to create a clean, structured layout, subtly inspired by analog scoreboards for a nostalgic yet modern design.</p>
    </div>
  </div>
  <div className="split-container" style={{marginBottom: "30px"}}>
    <img src="yaleimsfont.png" style={{padding: "2%"}} className="image-left" alt="Yale IMS Font"/>
    <div className="text-right">
      <p style={{marginTop: "10px"}}>JetBrains Mono is a font designed for developers and coding environments and was used to contribute to the analog-scoreboard-videogame aesthetic. The font's clarity and modern design ensured readability while enforcing the competitive atmosphere of IMs.</p>
    </div>
  </div>
    <p style={{ fontWeight: "bold", marginBottom: "15px" }}>Wireframes:</p>
    <img src="yaleimswireframes.png" style={{ marginBottom: "10px" }}></img>
    <p style={{ fontSize: "14px", color: "var(--mylightgrey)", marginBottom: "20px" }}>Low-fidelity wireframes</p>
    <p style={{ marginBottom: "10px"}}> We created low-fidelity wireframes to refine layouts and functionality:
      </p>
      <ul style={{ marginLeft: "5%"}}>
          <li>We faced challenges with the scores and schedules pages, which function similarly, and ultimately combined list and calendar components to address this.</li>
          <li>The profile page lacked information at first, but we eventually determined how to present the most relevant details effectively.</li>
      </ul>
  </td>
</tr>
<tr>
  <td>
    <h2>IMPLEMENTATION</h2>
  </td>
  <td>
  <p>After finalizing the prototypes, we collaborated with YCS to hand off designs for development. They hope to deploy the website by <b>January 2025</b>.</p>
  </td>
</tr>
<tr>
  <td>
    <h2>REFLECTION</h2>
  </td>
  <td>
  <p style={{ fontWeight: "bold", marginBottom: "10px"}}> Impact:
      </p>
      <ul style={{ marginLeft: "5%"}}>
          <li><u>Simplified Navigation and Centralization</u>: Reduced the time needed to find schedules and scores</li>
          <li><u>Enhanced Usability and Aesthetics</u>: Encouraged greater engagement with the IM system</li>
      </ul>
      <p style={{ fontWeight: "bold", marginBottom: "10px", marginTop: "30px" }}> Lessons Learned:
      </p>
      <p style={{ marginBottom: "30px"}}>Through this project, I developed further skills in <b>effective communication</b> and working jointly with a client. Additionally, the <b>iterative design process</b> taught me the value of ongoing improvements and adjustments based on user feedback. Working closely with a team reinforced the significance of <b>collaboration</b> and leveraging each member's interests/expertise to make the best product.</p>
      <p style={{ fontWeight: "bold", marginBottom: "10px"}}> Impact:
      </p>
      <ul style={{ marginLeft: "5%"}}>
          <li><p>Conducting more user testing could have provided additional insights to refine the design further before handoff. Requesting feedback from potential IMs users not just at the intial stages, but further along the design process would have proved helpful.</p></li>
      </ul>
  </td>
</tr>
<tr>
  <td>
    <h2 style={{marginTop:"20px"}}>PRODUCT</h2>
  </td>
  <td>
  <img src="yaleimshome.png" style={{ marginTop:"25px", marginBottom: "30px" }}></img>
<img src="yaleimsscores.png" style={{ marginBottom: "30px" }}></img>
<img src="yaleimsschedule.png" style={{ marginBottom: "30px" }}></img>
<img src="yaleimsprofile.png" style={{ marginBottom: "30px" }}></img>
  </td>
</tr>
  </tbody>
</table>



    </div>
  );
}
