export default function Footer(props) {

  const menuItems = props.menuItems;

  return (
    <div className="footer-container">
      <div className="footer-nav footer-group">
        {
          menuItems.map((item, index) => {
            return <div key={item.toLowerCase()} className={"footer-nav-item footer-nav-" + item.toLowerCase() + " cursor-pointer"}>{item}</div>
          })
        }
      </div>
      <div className="footer-body-types footer-group">
        <div className="cursor-pointer">Avocado</div>
        <div className="cursor-pointer">Pear</div>
        <div className="cursor-pointer">Apple</div>
      </div>
      <div className="footer-legal footer-group">
        <div className="cursor-pointer">Privacy Policy</div>
        <div className="cursor-pointer">Some kind of other legal requirement</div>
        <div className="cursor-pointer">Copyright Something</div>
        <div className="footer-social-media-icon-container">
          <div className="facebook-icon social-media-icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21,3H3v18h9.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105 v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7l-0.351,2.725h-2.365V21H21V3z"/></svg>
          </div>
          <div className="youtube-icon social-media-icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21,5c0,0-3-1-9-1S3,5,3,5s-1,3-1,7s1,7,1,7s3,1,9,1s9-1,9-1s1-3,1-7S21,5,21,5z M10,15.464V8.536L16,12L10,15.464z"/></svg>
          </div>
          <div className="insta-icon social-media-icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 3 3 L 3 21 L 21 21 L 21 3 L 3 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/></svg>
          </div>
          <div className="twitter-icon social-media-icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21,3H3v18h18V3z M17.05,9.514c0,0.086,0,0.171,0,0.343c0,3.257-2.486,7.029-7.029,7.029c-1.371,0-2.657-0.429-3.771-1.114 c0.171,0,0.429,0,0.6,0c1.114,0,2.229-0.429,3.086-1.029c-1.114,0-1.971-0.771-2.314-1.714c0.171,0,0.343,0.086,0.429,0.086 c0.257,0,0.429,0,0.686-0.086c-1.114-0.257-1.971-1.2-1.971-2.4c0.343,0.171,0.686,0.257,1.114,0.343 c-0.686-0.6-1.114-1.286-1.114-2.143c0-0.429,0.086-0.857,0.343-1.2c1.2,1.457,3,2.486,5.057,2.571c0-0.171-0.086-0.343-0.086-0.6 c0-1.371,1.114-2.486,2.486-2.486c0.686,0,1.371,0.257,1.8,0.771c0.6-0.086,1.114-0.343,1.543-0.6 c-0.171,0.6-0.6,1.029-1.114,1.371c0.514-0.086,0.943-0.171,1.457-0.429C17.907,8.743,17.479,9.171,17.05,9.514z"/></svg>
          </div>
          <div className="tiktok-icon social-media-icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 3 3 L 3 4 L 3 21 L 21 21 L 21 3 L 3 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"/></svg>
          </div>
        </div>
      </div>

    </div>
  )
}