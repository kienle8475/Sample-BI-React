
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  var token = "H4sIAAAAAAAEAB2Ttw6shgJE_-W2WIIlY8kFOedMR2bJOVnv39_K_ZnmzMy_f6z06ae0-PP3n_VVudZ7wSglNcKjMmgnPg2ub0a_NaWUbNWy4MHHT2YH1ryJ-AS7-fLweN_6S66BRrc6LylHJYLLpbaLgupYV-o0Jg1V28_WQ6WfLzYVdZittlOzWbdeyizhPYValCCClicaHemOsLWDFnCNOjA7vLLFhHwe9KC8d0uaCJwvl_54Nb8_WzDtIyTP4wQzIzE4qz-4b5NrfSCyzqOecsh8zmupYRldJAwEml3j4CMQ88d1kAVTeY0S13Tg93gn1kWrwQh0_cBSaDNALNOIHllLPIUxvqqqZ2BIi_lRdI_t9p1ZnzUcd9xi7crH8-ZAqLP8E5iptnuUTNp807jIfKFR_07OkvkK2GNzyDZurFdd0cYVnDBBfnACcbnNqncYeaZ82J1ccAIhu8zbZ8p2RTvy--kYcMdlCJ_a7oHsBLyjzDFSaZSHHoOTKQu7bRCNCYenWjTuryOyWqM9FHeaHHm218B5ji2Hh57r4I0u3g2aHu0RqCngeplRtlRwCx491NZV5lcfB-_MqRXBu061JJWb-Xvi-7xtEqqY0QaZzitcIRDUSVgIIn-EQN-gnsmVJJY_I8bqY9LTSQwPfVbgWJ6kVOIuGqKGfsKyMYsTn06FG-ItJBZT1j4Oc5rCKGvaWKvj6SKRzsoqGEQh3hkyNuQiDkndgaswb4HNsLjV3KB_-0mZL1JAdb6-GfnhtTbr64QOgsZx7he_g8GuamnyStMZbjtRTnDvQsmz0OVREo4lKye00_zhQPlB181KibViY4uvdbelcmF9AyCwTNHdufWwTR3ywNvHkXMmVcgW15zVDvE-ffmfP3_9Yddn3ie1fH7XCcRTGNoQL6OTNuOaSfb1BSCmjNruDaIeFPPME0ggg9R1LKhmRyW8rrQF4hNzfokYdv1qoltyLQixQc4CG2sWHTgorHQS-Na2ksrdJPYg5x6EuEnW7K0zNvlZbvB1v38RZbXkw5_65vWr7AT0rr31-iR4zmEfsD1k1Y52SNoocP1edMUCsGdp2MbOCvF4J1nPsiY-RIqGQjwm8KlA2SjkV1vL5rhBalj6yKYAWP_eRHS1pIeG5qEl9q1uAFfJVTmMFAD7mmWeONjyGqrC2h1ACxP5i24DM0dcCBgbBmT_2n7W6Z3gRL0SNZ5ibinOmTsaE_anfUa-nwhu65FV_NJFdrn-5z_Nz9yUqxz8LEd3W1RfbOdbcWBB35bEhRzs_yj3W4_pfqzlD6PxFQ8l4WOELZd-nuc7MhumfHTSYVx5MAEIqL-pbd_lqZdNirmjohmgw7Oc6VSPMNKZXV5VIJn8ewQ5fWVDKaPP2YzrqUMyYlM0BTIPwL6CRukYrEyopiAjGyIYxAbfBw2QFKF_wVuBgC1sjlT3seRc5TGxTDj2YRIQLxjCzPplpsoaimu9BqBgdNu9rfR7tc6Rf0prtokhBhT9mHo17DLrZQ1ab1xyngPu974kEYCcpT0Sm6DBQzWqumYDnmcpIHe3P52pRHF9Dp3fPm3NsArhUNp02dzi8lmvZOXNFJ_JxgsFZ7zP9FDGUqCvaAr3RAq15Mj8fZcvcJcuQ_qHLF7Z9dP8v_8Dk0GrTC4GAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19";
  return (
    <div className="App">
      <div className="header">
      <PowerBIEmbed
            embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual and qna
              id: '523b3f86-5986-4228-a93c-30ab1532df78',
              embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=523b3f86-5986-4228-a93c-30ab1532df78&groupId=f7bdc3b8-62ca-4c2b-9a8e-407b66999c3d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
              accessToken: token,
              tokenType: models.TokenType.Embed,
              pageName: "ReportSection",
              pageView:"fitToWidth",
              settings: {
                navContentPaneEnabled: false,
                panes: {  
                  panes:{
                    pageNavigation: {
                        visible: false
                    }
                  },
                  filters: {
                    expanded: false,
                    visible: false
                  }
                },
                background: models.BackgroundType.Transparent,
              }
            }}
            eventHandlers = { 
              new Map([
                ['loaded', function () {console.log('Report loaded');}],
                ['rendered', function () {console.log('Report rendered');}],
                ['error', function (event) {console.log(event.detail);}]
              ])
            }
              
            cssClassName = { "report-style-class" }

            getEmbeddedComponent = { (embeddedReport) => {
              window.report = embeddedReport;
            }}

          />
          <PowerBIEmbed
            embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual and qna
              id: '523b3f86-5986-4228-a93c-30ab1532df78',
              embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=523b3f86-5986-4228-a93c-30ab1532df78&groupId=f7bdc3b8-62ca-4c2b-9a8e-407b66999c3d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
              accessToken: token,
              tokenType: models.TokenType.Embed,
              pageName: "ReportSectionfb85457ac58b9f7bfd80",
              pageView:"fitToWidth",
              settings: {
                navContentPaneEnabled: false,
                panes: {  
                  panes:{
                    pageNavigation: {
                        visible: false
                    }
                  },
                  filters: {
                    expanded: false,
                    visible: false
                  }
                },
                background: models.BackgroundType.Transparent,
              }
            }}
            eventHandlers = { 
              new Map([
                ['loaded', function () {console.log('Report loaded');}],
                ['rendered', function () {console.log('Report rendered');}],
                ['error', function (event) {console.log(event.detail);}]
              ])
            }
              
            cssClassName = { "report-style-class" }

            getEmbeddedComponent = { (embeddedReport) => {
              window.report = embeddedReport;
            }}

          />
          <PowerBIEmbed
            embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual and qna
              id: '523b3f86-5986-4228-a93c-30ab1532df78',
              embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=523b3f86-5986-4228-a93c-30ab1532df78&groupId=f7bdc3b8-62ca-4c2b-9a8e-407b66999c3d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
              accessToken: token,
              tokenType: models.TokenType.Embed,
              pageName: "ReportSection65b1bb35e257e211d5ac",
              pageView:"fitToWidth",
              settings: {
                navContentPaneEnabled: false,
                panes: {  
                  panes:{
                    pageNavigation: {
                        visible: false
                    }
                  },
                  filters: {
                    expanded: false,
                    visible: false
                  }
                },
                background: models.BackgroundType.Transparent,
              }
            }}
            eventHandlers = { 
              new Map([
                ['loaded', function () {console.log('Report loaded');}],
                ['rendered', function () {console.log('Report rendered');}],
                ['error', function (event) {console.log(event.detail);}]
              ])
            }
              
            cssClassName = { "report-style-class" }

            getEmbeddedComponent = { (embeddedReport) => {
              window.report = embeddedReport;
            }}

          />
      </div>
    </div>
  );
}

export default App;
