import * as React from 'react'
import {Header} from './Header'
import {Footer} from './footer/Footer'
import Head from 'next/head'

export class Layout extends React.Component<{}, {}> {
  render() {
    const {children} = this.props
    return (
      <div id="layout">
          {/*language=PostCSS*/}
          <style jsx global>{`//global stylesheet
        #layout {
          direction: rtl;
          font-family: Arial;
        }
        .navbar {
           width: 100%;
        }

        .navbar-brand {
            margin-right: 0px !important;
            background-color: #333333;
        }
        `}
          </style>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                  crossOrigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossOrigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossOrigin="anonymous"></script>
        </Head>
        <main>
            <Header/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </main>
      </div>
    )
  }
}
