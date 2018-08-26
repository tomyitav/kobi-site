import * as React from 'react'
import {ResidenceSideProps} from "./ResidenceSideProps";

export class ResidenceSide extends React.Component<ResidenceSideProps, {}> {

    private isSelected = (id: number) => {
        return this.props.selected === id ? "SelectedItem" : "non-selected";
    }

    render() {
      const {header} = this.props;
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
                          <a href="residence.html" className={this.isSelected(1)}>חצרות הנביאים </a>
                      </li>
                      <li>
                          <a href="savioney.html" className={this.isSelected(2)}>סביוני גן ארנונה </a>
                      </li>
                      <li>
                          <a href="arnona.html" className={this.isSelected(3)}>סביוני ארנונה</a>
                      </li>
                      <li>
                          <a href="ramot.html" className={this.isSelected(4)}>מצפה רמות</a>
                      </li>
                      <li>
                          <a href="rasco.html" className={this.isSelected(5)}>רסקו</a>
                      </li>
                      <li>
                          <a href="ramathasharon.html" className={this.isSelected(6)}>רמת השרון הירוקה</a>
                      </li>
                      <li>
                          <a href="ganhair.html" className={this.isSelected(7)}>גן העיר</a>
                      </li>
                      <li>
                          <a href="maats.html" className={this.isSelected(8)}>מתחם מע"צ – הנביאים</a>
                      </li>
                      <li>
                          <a href="green.html" className={this.isSelected(9)}>רמות הירוקה</a>
                      </li>
                      <li>
                          <a href="parkarnona.html" className={this.isSelected(10)}>פארק ארנונה</a>
                      </li>
                      <li>
                          <a href="mishtaken.html" className={this.isSelected(11)}>מחיר למשתכן - קסטל</a>
                      </li>
                      <li>
                          <a href="butic.html" className={this.isSelected(12)}>בוטיק הנביאים</a>
                      </li>
                      <li>
                          <a href="maromhadas.html" className={this.isSelected(13)}>מרום הדס</a>
                      </li>
                      <li>
                          <a href="shamay.html" className={this.isSelected(14)}>שמאי 10 - גולדן היל</a>
                      </li>
                      <li>
                          <a href="baitvagan.html" className={this.isSelected(15)}>נופי בית וגן </a>
                      </li>
                  </ul>
                  </div>
              </div>
          </div>
          )

    }
}