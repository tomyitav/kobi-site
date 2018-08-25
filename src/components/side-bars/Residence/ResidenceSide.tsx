import * as React from 'react'
import {ResidenceSideProps} from "./ResidenceSideProps";
import * as css from './ResidenceSide.css'
import * as classnames from "classnames";

export class ResidenceSide extends React.Component<ResidenceSideProps, {}> {
    render() {
      const {header, selected} = this.props;
          return (
          <div>
              {/*language=PostCSS*/}
              <style jsx>{`
                #SideMenu
                {
                    text-align: right;
                }
                ul {
                    margin-right: -1rem;
                }
                `}
              </style>
              <div id="SideMenu" className="col-sm-3">
                  <div className="jumbotron">
                  <h4>{header}</h4>
                  <ul>
                      <li>
                          <a href="residence.html" className="SelectedItem">חצרות הנביאים </a>
                      </li>
                      <li>
                          <a href="savioney.html">סביוני גן ארנונה </a>
                      </li>
                      <li>
                          <a href="arnona.html">סביוני ארנונה</a>
                      </li>
                      <li>
                          <a href="ramot.html">מצפה רמות</a>
                      </li>
                      <li>
                          <a href="rasco.html">רסקו</a>
                      </li>
                      <li>
                          <a href="ramathasharon.html">רמת השרון הירוקה</a>
                      </li>
                      <li>
                          <a href="ganhair.html">גן העיר</a>
                      </li>
                      <li>
                          <a href="maats.html">מתחם מע"צ – הנביאים</a>
                      </li>
                      <li>
                          <a href="green.html">רמות הירוקה</a>
                      </li>
                      <li>
                          <a href="parkarnona.html">פארק ארנונה</a>
                      </li>
                      <li>
                          <a href="mishtaken.html">מחיר למשתכן - קסטל</a>
                      </li>
                      <li>
                          <a href="butic.html">בוטיק הנביאים</a>
                      </li>
                      <li>
                          <a href="maromhadas.html">מרום הדס</a>
                      </li>
                      <li>
                          <a href="shamay.html">שמאי 10 - גולדן היל</a>
                      </li>
                      <li>
                          <a href="baitvagan.html">נופי בית וגן </a>
                      </li>
                  </ul>
                  </div>
              </div>
          </div>
          )

    }
}