import * as React from 'react'

export const ContactContent = () =>
    <div id="mapContainer">
        {/*language=PostCSS*/}
        <style jsx>{`
                    #mapContainer {
                        margin: 2%;
                    }
                    `}
        </style>
        <div className="embed-responsive embed-responsive-4by3">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6780.484448590917!2d35.11189700000005!3d31.818395999214427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ5JzA2LjIiTiAzNcKwMDYnNDIuOCJF!5e0!3m2!1sen!2sil!4v1413625994937"
                frameBorder="2"></iframe>
        </div>
        <br/>
    </div>