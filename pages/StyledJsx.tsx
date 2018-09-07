import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'

export default props =>
  <Layout>
    <div>
      {/*language=PostCSS*/}
      <style jsx> {`
        * {
          color: darkred;
        }
      `}
      </style>
      StyledJsx
    </div>
  </Layout>